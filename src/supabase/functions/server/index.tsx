import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Criar bucket de fotos de perfil ao iniciar o servidor
const initStorage = async () => {
  try {
    const bucketName = 'make-625cbc27-profile-photos';
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some(bucket => bucket.name === bucketName);
    
    if (!bucketExists) {
      await supabase.storage.createBucket(bucketName, { public: false });
      console.log(`✅ Bucket ${bucketName} criado com sucesso`);
    } else {
      console.log(`📦 Bucket ${bucketName} já existe`);
    }
  } catch (error) {
    console.error('❌ Erro ao inicializar storage:', error);
  }
};

// Inicializar storage
initStorage();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-625cbc27/health", (c) => {
  return c.json({ status: "ok" });
});

// Rota para receber inscrições de alunos
app.post("/make-server-625cbc27/inscricoes", async (c) => {
  try {
    const body = await c.req.json();
    
    // Validação dos dados recebidos
    if (!body.nome || !body.email || !body.whatsapp || !body.motivacao) {
      console.log("Erro de validação: campos obrigatórios faltando");
      return c.json({ 
        success: false, 
        error: "Todos os campos são obrigatórios" 
      }, 400);
    }

    if (!body.concordoTermos) {
      console.log("Erro de validação: termos não aceitos");
      return c.json({ 
        success: false, 
        error: "É necessário concordar com os termos" 
      }, 400);
    }

    // Criar ID único para a inscrição
    const inscricaoId = `inscricao_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    
    // Preparar dados para salvar
    const inscricaoData = {
      id: inscricaoId,
      nome: body.nome,
      email: body.email,
      whatsapp: body.whatsapp,
      motivacao: body.motivacao,
      concordoTermos: body.concordoTermos,
      dataEnvio: new Date().toISOString(),
      status: "nova", // nova, em_analise, aprovada, rejeitada
    };

    // Salvar no banco de dados usando kv_store
    await kv.set(inscricaoId, inscricaoData);
    
    console.log(`✅ Inscrição salva com sucesso: ${inscricaoId}`);
    console.log(`📧 Email: ${body.email}`);
    
    return c.json({ 
      success: true, 
      message: "Inscrição recebida com sucesso!",
      inscricaoId: inscricaoId
    });
    
  } catch (error) {
    console.error("❌ Erro ao processar inscrição:", error);
    return c.json({ 
      success: false, 
      error: `Erro ao processar inscrição: ${error.message}` 
    }, 500);
  }
});

// Rota para listar todas as inscrições (útil para administração)
app.get("/make-server-625cbc27/inscricoes", async (c) => {
  try {
    // Buscar todas as inscrições usando o prefixo
    const inscricoes = await kv.getByPrefix("inscricao_");
    
    // Ordenar por data (mais recentes primeiro)
    inscricoes.sort((a, b) => {
      const dateA = new Date(a.dataEnvio).getTime();
      const dateB = new Date(b.dataEnvio).getTime();
      return dateB - dateA;
    });
    
    console.log(`📋 Retornando ${inscricoes.length} inscrições`);
    
    return c.json({ 
      success: true, 
      inscricoes: inscricoes,
      total: inscricoes.length
    });
    
  } catch (error) {
    console.error("❌ Erro ao buscar inscrições:", error);
    return c.json({ 
      success: false, 
      error: `Erro ao buscar inscrições: ${error.message}` 
    }, 500);
  }
});

// Rota para buscar uma inscrição específica
app.get("/make-server-625cbc27/inscricoes/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const inscricao = await kv.get(id);
    
    if (!inscricao) {
      return c.json({ 
        success: false, 
        error: "Inscrição não encontrada" 
      }, 404);
    }
    
    return c.json({ 
      success: true, 
      inscricao: inscricao
    });
    
  } catch (error) {
    console.error("❌ Erro ao buscar inscrição:", error);
    return c.json({ 
      success: false, 
      error: `Erro ao buscar inscrição: ${error.message}` 
    }, 500);
  }
});

// Rota para excluir uma inscrição específica
app.delete("/make-server-625cbc27/inscricoes/:id", async (c) => {
  try {
    const id = c.req.param("id");
    
    // Verificar se a inscrição existe
    const inscricao = await kv.get(id);
    if (!inscricao) {
      console.log(`⚠️ Tentativa de excluir inscrição inexistente: ${id}`);
      return c.json({ 
        success: false, 
        error: "Inscrição não encontrada" 
      }, 404);
    }
    
    // Excluir a inscrição
    await kv.del(id);
    
    console.log(`✅ Inscrição excluída com sucesso: ${id}`);
    console.log(`👤 Nome: ${inscricao.nome}`);
    
    return c.json({ 
      success: true, 
      message: "Inscrição excluída com sucesso!"
    });
    
  } catch (error) {
    console.error("❌ Erro ao excluir inscrição:", error);
    return c.json({ 
      success: false, 
      error: `Erro ao excluir inscrição: ${error.message}` 
    }, 500);
  }
});

// Rota para atualizar data de vencimento de uma inscrição
app.put("/make-server-625cbc27/inscricoes/:id/vencimento", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    
    // Verificar se a inscrição existe
    const inscricao = await kv.get(id);
    if (!inscricao) {
      console.log(`⚠️ Tentativa de atualizar vencimento de inscrição inexistente: ${id}`);
      return c.json({ 
        success: false, 
        error: "Inscrição não encontrada" 
      }, 404);
    }
    
    // Validar data de vencimento
    if (!body.dataVencimento) {
      return c.json({ 
        success: false, 
        error: "Data de vencimento é obrigatória" 
      }, 400);
    }
    
    // Atualizar a inscrição com a nova data de vencimento
    const inscricaoAtualizada = {
      ...inscricao,
      dataVencimento: body.dataVencimento,
      dataAtualizacaoVencimento: new Date().toISOString()
    };
    
    await kv.set(id, inscricaoAtualizada);
    
    console.log(`✅ Vencimento atualizado com sucesso: ${id}`);
    console.log(`👤 Nome: ${inscricao.nome}`);
    console.log(`📅 Nova data de vencimento: ${body.dataVencimento}`);
    
    return c.json({ 
      success: true, 
      message: "Data de vencimento atualizada com sucesso!",
      inscricao: inscricaoAtualizada
    });
    
  } catch (error) {
    console.error("❌ Erro ao atualizar vencimento:", error);
    return c.json({ 
      success: false, 
      error: `Erro ao atualizar vencimento: ${error.message}` 
    }, 500);
  }
});

// Rota para inscrições na newsletter
app.post("/make-server-625cbc27/newsletter", async (c) => {
  try {
    const body = await c.req.json();
    
    // Validação do email
    if (!body.email) {
      console.log("Erro de validação: email é obrigatório");
      return c.json({ 
        success: false, 
        error: "Email é obrigatório" 
      }, 400);
    }

    // Validação básica de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      console.log("Erro de validação: email inválido");
      return c.json({ 
        success: false, 
        error: "Email inválido" 
      }, 400);
    }

    // Criar ID único para a inscrição na newsletter
    const newsletterId = `newsletter_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    
    // Preparar dados para salvar
    const newsletterData = {
      id: newsletterId,
      email: body.email,
      dataInscricao: new Date().toISOString(),
      status: "ativo", // ativo, inativo
      origem: body.origem || "site", // site, blog, contato, etc
    };

    // Salvar no banco de dados usando kv_store
    await kv.set(newsletterId, newsletterData);
    
    console.log(`✅ Inscrição na newsletter salva com sucesso: ${newsletterId}`);
    console.log(`📧 Email: ${body.email}`);
    
    return c.json({ 
      success: true, 
      message: "Inscrição na newsletter realizada com sucesso!",
      newsletterId: newsletterId
    });
    
  } catch (error) {
    console.error("❌ Erro ao processar inscrição na newsletter:", error);
    return c.json({ 
      success: false, 
      error: `Erro ao processar inscrição na newsletter: ${error.message}` 
    }, 500);
  }
});

// Rota para listar todas as inscrições na newsletter
app.get("/make-server-625cbc27/newsletter", async (c) => {
  try {
    // Buscar todas as inscrições na newsletter usando o prefixo
    const newsletters = await kv.getByPrefix("newsletter_");
    
    // Ordenar por data (mais recentes primeiro)
    newsletters.sort((a, b) => {
      const dateA = new Date(a.dataInscricao).getTime();
      const dateB = new Date(b.dataInscricao).getTime();
      return dateB - dateA;
    });
    
    console.log(`📋 Retornando ${newsletters.length} inscrições na newsletter`);
    
    return c.json({ 
      success: true, 
      newsletters: newsletters,
      total: newsletters.length
    });
    
  } catch (error) {
    console.error("❌ Erro ao buscar inscrições na newsletter:", error);
    return c.json({ 
      success: false, 
      error: `Erro ao buscar inscrições na newsletter: ${error.message}` 
    }, 500);
  }
});

// Rota para obter perfil do aluno
app.get("/make-server-625cbc27/perfil", async (c) => {
  try {
    // Por enquanto, usamos um ID fixo para demonstração
    // Em produção, isso viria da autenticação do usuário
    const userId = "user_exemplo";
    const perfil = await kv.get(`perfil_${userId}`);
    
    if (!perfil) {
      console.log(`📋 Perfil não encontrado para ${userId}`);
      return c.json({ 
        success: true, 
        perfil: null 
      });
    }
    
    console.log(`📋 Retornando perfil de ${perfil.nome}`);
    
    return c.json({ 
      success: true, 
      perfil: perfil
    });
    
  } catch (error) {
    console.error("❌ Erro ao buscar perfil:", error);
    return c.json({ 
      success: false, 
      error: `Erro ao buscar perfil: ${error.message}` 
    }, 500);
  }
});

// Rota para salvar/atualizar perfil do aluno
app.post("/make-server-625cbc27/perfil", async (c) => {
  try {
    const body = await c.req.json();
    
    // Validação dos dados recebidos
    if (!body.nome || !body.email) {
      console.log("Erro de validação: nome e email são obrigatórios");
      return c.json({ 
        success: false, 
        error: "Nome e email são obrigatórios" 
      }, 400);
    }

    // Por enquanto, usamos um ID fixo para demonstração
    // Em produção, isso viria da autenticação do usuário
    const userId = body.id || "user_exemplo";
    
    // Preparar dados para salvar
    const perfilData = {
      id: userId,
      nome: body.nome,
      email: body.email,
      telefone: body.telefone || "",
      bio: body.bio || "",
      periodo: body.periodo || "",
      meios: body.meios || "",
      portfolio: body.portfolio || "",
      instagram: body.instagram || "",
      substack: body.substack || "",
      fotoPerfil: body.fotoPerfil || "",
      tags: body.tags || [],
      galeria: body.galeria || [],
      sobreTexto: body.sobreTexto || [],
      dataAtualizacao: new Date().toISOString(),
    };

    // Salvar no banco de dados usando kv_store
    await kv.set(`perfil_${userId}`, perfilData);
    
    console.log(`✅ Perfil salvo com sucesso: ${userId}`);
    console.log(`👤 Nome: ${body.nome}`);
    
    return c.json({ 
      success: true, 
      message: "Perfil salvo com sucesso!",
      perfil: perfilData
    });
    
  } catch (error) {
    console.error("❌ Erro ao salvar perfil:", error);
    return c.json({ 
      success: false, 
      error: `Erro ao salvar perfil: ${error.message}` 
    }, 500);
  }
});

// Rota para upload de foto de perfil
app.post("/make-server-625cbc27/upload-foto-perfil", async (c) => {
  try {
    const body = await c.req.json();
    
    // Validação dos dados recebidos
    if (!body.imageData) {
      console.log("Erro de validação: dados da imagem são obrigatórios");
      return c.json({ 
        success: false, 
        error: "Dados da imagem são obrigatórios" 
      }, 400);
    }

    // Por enquanto, usamos um ID fixo para demonstração
    const userId = body.userId || "user_exemplo";
    
    // Converter base64 para Uint8Array
    const base64Data = body.imageData.split(',')[1] || body.imageData;
    const binaryString = atob(base64Data);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    
    // Nome do arquivo com timestamp para garantir unicidade
    const fileName = `${userId}_${Date.now()}.jpg`;
    const bucketName = 'make-625cbc27-profile-photos';
    
    // Upload para Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(fileName, bytes, {
        contentType: 'image/jpeg',
        upsert: true
      });
    
    if (uploadError) {
      console.error("❌ Erro ao fazer upload:", uploadError);
      return c.json({ 
        success: false, 
        error: `Erro ao fazer upload: ${uploadError.message}` 
      }, 500);
    }
    
    // Gerar URL assinada (válida por 1 ano)
    const { data: signedUrlData, error: signedUrlError } = await supabase.storage
      .from(bucketName)
      .createSignedUrl(fileName, 31536000); // 1 ano em segundos
    
    if (signedUrlError) {
      console.error("❌ Erro ao gerar URL assinada:", signedUrlError);
      return c.json({ 
        success: false, 
        error: `Erro ao gerar URL: ${signedUrlError.message}` 
      }, 500);
    }
    
    console.log(`✅ Foto de perfil enviada com sucesso: ${fileName}`);
    
    return c.json({ 
      success: true, 
      message: "Foto enviada com sucesso!",
      url: signedUrlData.signedUrl
    });
    
  } catch (error) {
    console.error("❌ Erro ao processar upload:", error);
    return c.json({ 
      success: false, 
      error: `Erro ao processar upload: ${error.message}` 
    }, 500);
  }
});

// Rota para salvar dados de login do aluno
app.post("/make-server-625cbc27/save-login", async (c) => {
  try {
    const body = await c.req.json();
    
    // Validação dos dados recebidos
    if (!body.email || !body.password) {
      console.log("Erro de validação: email e senha são obrigatórios");
      return c.json({ 
        success: false, 
        error: "Email e senha são obrigatórios" 
      }, 400);
    }

    // Criar ID único para o registro de login
    const loginId = `login_${body.email.replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}`;
    
    // Preparar dados para salvar
    const loginData = {
      id: loginId,
      email: body.email,
      password: body.password, // Em produção, a senha deveria ser hasheada
      loginDate: body.loginDate || new Date().toISOString(),
      status: "ativo"
    };

    // Salvar no banco de dados usando kv_store
    await kv.set(loginId, loginData);
    
    console.log(`✅ Login salvo com sucesso: ${loginId}`);
    console.log(`📧 Email: ${body.email}`);
    
    return c.json({ 
      success: true, 
      message: "Login registrado com sucesso!",
      loginId: loginId
    });
    
  } catch (error) {
    console.error("❌ Erro ao salvar login:", error);
    return c.json({ 
      success: false, 
      error: `Erro ao salvar login: ${error.message}` 
    }, 500);
  }
});

Deno.serve(app.fetch);