-- Tabela para armazenar os textos configuráveis do site
-- Execute este SQL no seu painel do Supabase para criar a tabela

-- Criar a tabela site_texts
CREATE TABLE IF NOT EXISTS site_texts (
  id INTEGER PRIMARY KEY DEFAULT 1,
  texts JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT single_row CHECK (id = 1)
);

-- Inserir os textos padrão
INSERT INTO site_texts (id, texts, updated_at)
VALUES (
  1,
  '{
    "navbar": {
      "logoText": "Escola de Design",
      "menuItems": {
        "inicio": "Início",
        "oCurso": "O Curso",
        "trabalhos": "Trabalhos",
        "blog": "Blog",
        "contato": "Contato",
        "faq": "FAQ",
        "areaDoAluno": "Área do Aluno"
      }
    },
    "hero": {
      "titulo": "Transforme suas ideias em designs incríveis",
      "subtitulo": "Aprenda design com os melhores profissionais do mercado",
      "textoBotaoPrincipal": "Começar Agora",
      "textoBotaoSecundario": "Saiba Mais"
    },
    "quemSomos": {
      "titulo": "Quem Somos",
      "descricao": "Somos uma escola dedicada a formar os melhores profissionais de design do mercado. Com uma metodologia única e professores experientes, transformamos iniciantes em designers completos."
    },
    "abordagem": {
      "titulo": "Nossa Abordagem",
      "descricao": "Metodologia prática e focada no mercado de trabalho",
      "items": [
        {
          "titulo": "Aprenda fazendo",
          "descricao": "Projetos reais desde o primeiro dia para desenvolver seu portfólio"
        },
        {
          "titulo": "Mentoria individual",
          "descricao": "Acompanhamento personalizado com profissionais experientes"
        },
        {
          "titulo": "Comunidade ativa",
          "descricao": "Rede de networking com alunos e ex-alunos atuando no mercado"
        }
      ]
    },
    "trabalhos": {
      "titulo": "Trabalhos dos Nossos Alunos",
      "subtitulo": "Veja o que nossos alunos estão criando",
      "textoBotao": "Ver Todos os Trabalhos"
    },
    "ctaAulaAberta": {
      "titulo": "Participe de uma Aula Aberta",
      "descricao": "Conheça nossa metodologia e tire suas dúvidas com nossos professores",
      "textoBotao": "Agendar Aula Grátis"
    },
    "newsletter": {
      "titulo": "Receba novidades e dicas de design",
      "placeholder": "Seu melhor e-mail",
      "textoBotao": "Inscrever"
    },
    "footer": {
      "descricao": "Formando os melhores designers do mercado desde 2020",
      "direitos": "© 2024 Escola de Design. Todos os direitos reservados.",
      "menuTitulo": "Menu",
      "contatoTitulo": "Contato",
      "email": "contato@escoladedesign.com",
      "telefone": "(11) 9999-9999",
      "endereco": "São Paulo, SP"
    },
    "facaParte": {
      "titulo": "Faça Parte",
      "subtitulo": "Inscreva-se para o próximo curso e comece sua jornada no design",
      "textoBotao": "Enviar Inscrição"
    },
    "contato": {
      "titulo": "Entre em Contato",
      "subtitulo": "Estamos aqui para tirar suas dúvidas",
      "textoBotao": "Enviar Mensagem"
    },
    "faq": {
      "titulo": "Perguntas Frequentes",
      "subtitulo": "Tire suas principais dúvidas sobre o curso"
    },
    "blog": {
      "titulo": "Blog",
      "subtitulo": "Artigos, tutoriais e novidades sobre design"
    }
  }'::jsonb,
  NOW()
)
ON CONFLICT (id) DO NOTHING;

-- Comentário: Esta tabela usa a constraint SINGLE_ROW para garantir que só existe uma linha
-- Sempre use id = 1 para atualizar ou buscar os textos

-- Exemplo de atualização:
-- UPDATE site_texts 
-- SET texts = '{"navbar": {...}, ...}'::jsonb, 
--     updated_at = NOW()
-- WHERE id = 1;

-- Exemplo de consulta:
-- SELECT texts FROM site_texts WHERE id = 1;
