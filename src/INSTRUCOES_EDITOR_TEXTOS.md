# 📝 Editor de Textos do Site - Guia Completo

## O que é?

O Editor de Textos é uma ferramenta administrativa que permite editar todos os textos do site em um único lugar, sem precisar mexer no código. É ideal para atualizar conteúdos, corrigir informações ou adaptar mensagens conforme necessário.

## Como Acessar

1. Faça login no **Dashboard Administrativo** em `/admindashboard`
2. Clique no card **"Editor de Textos"** (ícone azul com documento)
3. Você será direcionado para o painel de edição

### Credenciais Padrão
- **Usuário:** admin@alma.com
- **Senha:** alma2024

## Funcionalidades

### ✨ Principais Recursos

- **Edição Centralizada:** Todos os textos do site em um só lugar
- **Organização por Abas:** Textos separados por seções (Navbar, Hero, Quem Somos, etc.)
- **Salvamento Automático Local:** As alterações são salvas no navegador automaticamente
- **Sincronização com Supabase:** Opcionalmente, salve os textos na nuvem
- **Restaurar Padrões:** Volte aos textos originais com um clique
- **Pré-visualização de Mudanças:** Veja quais textos foram alterados antes de salvar

## Seções Editáveis

### 1. **Navbar (Menu de Navegação)**
- Texto do logo
- Nomes dos itens do menu (Início, O Curso, Trabalhos, etc.)

### 2. **Hero (Cabeçalho Principal)**
- Título principal da página inicial
- Subtítulo/descrição
- Textos dos botões de ação

### 3. **Quem Somos**
- Título da seção
- Descrição sobre a escola

### 4. **Abordagem**
- Título e descrição da metodologia
- 3 cards com diferenciais (cada um com título e descrição)

### 5. **Trabalhos**
- Título da galeria
- Subtítulo
- Texto do botão "Ver Todos"

### 6. **CTA (Call to Action - Aula Aberta)**
- Título do convite
- Descrição
- Texto do botão

### 7. **Newsletter**
- Título do formulário
- Placeholder do campo de e-mail
- Texto do botão de inscrição

### 8. **Footer (Rodapé)**
- Descrição da escola
- Texto de direitos autorais
- Informações de contato (e-mail, telefone, endereço)
- Títulos das seções do footer

## Como Usar

### Editando Textos

1. **Selecione a Aba** correspondente à seção que deseja editar
2. **Modifique os campos** conforme necessário
3. As mudanças são automaticamente marcadas como "não salvas"
4. **Clique em "Salvar Alterações"** para aplicar os novos textos

### Restaurando Textos Padrão

Se quiser voltar aos textos originais:
1. Clique em **"Restaurar Padrões"**
2. Confirme a ação no alerta
3. Clique em **"Salvar Alterações"** para aplicar

### Salvamento

Os textos são salvos em dois lugares:

1. **LocalStorage (Navegador):**
   - Salvamento automático no seu navegador
   - Funciona mesmo sem configurar o Supabase
   - Persiste enquanto você não limpar os dados do navegador

2. **Supabase (Nuvem):**
   - Requer configuração do banco de dados
   - Permite acesso aos textos de qualquer dispositivo
   - Backup seguro na nuvem

## Configuração do Supabase (Opcional)

Para salvar os textos na nuvem e acessá-los de qualquer lugar:

### Passo 1: Criar a Tabela

1. Acesse seu projeto no [Supabase](https://supabase.com)
2. Vá em **SQL Editor**
3. Abra o arquivo `/supabase-site-texts.sql` do projeto
4. Copie e cole o conteúdo no editor SQL
5. Execute o script (botão "Run")

### Passo 2: Configurar Credenciais

1. Abra o arquivo `/components/PainelAdminTextos.tsx`
2. Localize as linhas:
   ```typescript
   const supabaseUrl = 'https://YOUR_SUPABASE_URL.supabase.co';
   const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
   ```
3. Substitua pelos dados do seu projeto:
   - **URL:** Encontre em Settings → API → Project URL
   - **Key:** Encontre em Settings → API → Project API keys (anon/public)

### Passo 3: Testar

1. Faça uma alteração em qualquer texto
2. Clique em "Salvar Alterações"
3. Se configurado corretamente, verá: "Textos salvos com sucesso!"
4. Se não configurado: "Textos salvos localmente. Configure o Supabase..."

## Estrutura dos Textos

Os textos são armazenados em formato JSON com a seguinte estrutura:

```typescript
{
  navbar: {
    logoText: string,
    menuItems: { ... }
  },
  hero: {
    titulo: string,
    subtitulo: string,
    textoBotaoPrincipal: string,
    textoBotaoSecundario: string
  },
  // ... demais seções
}
```

## Dicas e Boas Práticas

### ✅ Recomendações

- **Teste as mudanças:** Sempre visualize o site após editar para garantir que ficou bom
- **Faça backup:** Antes de grandes alterações, anote os textos originais
- **Seja consistente:** Mantenha um tom de voz uniforme em todo o site
- **SEO:** Use palavras-chave relevantes nos títulos e descrições
- **Clareza:** Prefira textos curtos e diretos ao ponto
- **Chamadas para ação:** Use verbos de ação nos botões (Ex: "Começar", "Descobrir", "Participar")

### ❌ Evite

- **Textos muito longos:** Podem quebrar o layout em dispositivos móveis
- **HTML no texto:** O sistema não interpreta tags HTML
- **Emojis excessivos:** Use com moderação
- **Informações sensíveis:** Não coloque dados confidenciais nos textos

## Solução de Problemas

### "Não consigo salvar as alterações"

**Causa:** Problema de conexão com Supabase ou configuração incorreta

**Solução:**
1. Verifique se as credenciais do Supabase estão corretas
2. Confirme que executou o script SQL de criação da tabela
3. Os textos ainda são salvos localmente mesmo sem Supabase

### "As alterações não aparecem no site"

**Causa:** Cache do navegador ou componentes não atualizados

**Solução:**
1. Recarregue a página com Ctrl+F5 (Windows) ou Cmd+Shift+R (Mac)
2. Limpe o cache do navegador
3. Verifique se salvou as alterações corretamente

### "Perdi minhas alterações"

**Causa:** Limpeza do cache do navegador sem backup no Supabase

**Solução:**
1. Configure o Supabase para evitar perda de dados futura
2. Mantenha um backup manual dos textos importantes
3. Use a função "Restaurar Padrões" se quiser recomeçar

## Acesso Rápido

- **Editor de Textos:** `/admintextos`
- **Dashboard Admin:** `/admindashboard`
- **Arquivo SQL:** `/supabase-site-texts.sql`
- **Configuração:** `/config/siteTexts.ts`
- **Componente do Editor:** `/components/PainelAdminTextos.tsx`

## Suporte

Se encontrar problemas ou tiver dúvidas:

1. Verifique este guia primeiro
2. Consulte a documentação do Supabase para questões de banco de dados
3. Revise os logs do navegador (F12 → Console) para erros
4. Entre em contato com o suporte técnico se necessário

---

**Última atualização:** Janeiro 2026  
**Versão:** 1.0.0
