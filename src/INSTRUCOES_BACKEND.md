# 📋 Instruções de Backend - Sistema de Inscrições

## ✅ Implementação Concluída

O sistema de backend para gerenciar as inscrições dos alunos e newsletter foi implementado com sucesso usando o Supabase.

## 🎯 Funcionalidades Implementadas

### 1. Formulário de Inscrição de Alunos
- **Localização**: Página "Inscreva-se" (Faça Parte)
- **Campos do formulário**:
  - Nome completo
  - E-mail
  - WhatsApp
  - Carta de motivação
  - Concordância com termos

### 2. Formulário de Newsletter
- **Localização**: Footer e outras seções do site
- **Campos do formulário**:
  - E-mail
  - Origem da inscrição (automático)

### 3. Backend (Servidor Supabase)
- **Arquivo**: `/supabase/functions/server/index.tsx`
- **Rotas criadas**:
  
  **Inscrições de Alunos:**
  - `POST /make-server-625cbc27/inscricoes` - Receber novas inscrições
  - `GET /make-server-625cbc27/inscricoes` - Listar todas as inscrições
  - `GET /make-server-625cbc27/inscricoes/:id` - Buscar uma inscrição específica

  **Newsletter:**
  - `POST /make-server-625cbc27/newsletter` - Receber nova inscrição na newsletter
  - `GET /make-server-625cbc27/newsletter` - Listar todas as inscrições na newsletter

### 4. Banco de Dados
- **Tipo**: PostgreSQL (Supabase)
- **Tabela**: `kv_store_625cbc27` (key-value store)
- **Dados armazenados**:
  
  **Inscrições de Alunos:**
  ```json
  {
    "id": "inscricao_1234567890_abc123",
    "nome": "Nome do Aluno",
    "email": "email@exemplo.com",
    "whatsapp": "(11) 99999-9999",
    "motivacao": "Carta de motivação do aluno",
    "concordoTermos": true,
    "dataEnvio": "2024-01-24T10:30:00.000Z",
    "status": "nova"
  }
  ```

  **Newsletter:**
  ```json
  {
    "id": "newsletter_1234567890_abc123",
    "email": "email@exemplo.com",
    "dataInscricao": "2024-01-24T10:30:00.000Z",
    "status": "ativo",
    "origem": "site"
  }
  ```

### 5. Painel Administrativo
- **Componente**: `/components/AdminInscricoes.tsx`
- **Acesso**: Navegue para a página "admin" modificando a URL ou código
- **Recursos**:
  - Visualizar todas as inscrições de alunos
  - Ver detalhes completos de cada inscrição
  - Atualizar a lista em tempo real
  - Ver estatísticas (total de inscrições)

## 🚀 Como Usar

### Para Alunos (Frontend)
1. Acesse a página "Inscreva-se" (Faça Parte)
2. Preencha todos os campos do formulário
3. Marque a caixa "Concordo com os termos"
4. Clique em "Enviar"
5. Aguarde a confirmação com o ID da inscrição

### Para Administradores (Visualizar Inscrições)

#### Opção 1: Via Console do Navegador
```javascript
// Abra o console (F12) e execute:
window.navigateTo('admin');
```

#### Opção 2: Temporariamente modificar um botão
Edite temporariamente qualquer botão de navegação para chamar:
```javascript
onClick={() => navigateTo('admin')}
```

#### Opção 3: Via API (para integração externa)
```javascript
// Buscar todas as inscrições
fetch('https://[PROJECT_ID].supabase.co/functions/v1/make-server-625cbc27/inscricoes', {
  headers: {
    'Authorization': 'Bearer [ANON_KEY]'
  }
})
.then(res => res.json())
.then(data => console.log(data));
```

## 📊 Estrutura de Status

Cada inscrição tem um status que pode ser:
- `nova` - Recém-recebida (padrão)
- `em_analise` - Em processo de análise
- `aprovada` - Aluno aprovado
- `rejeitada` - Inscrição rejeitada

## 🔒 Segurança

- ✅ Validação de campos no frontend
- ✅ Validação de campos no backend
- ✅ CORS habilitado corretamente
- ✅ Autenticação via Supabase
- ✅ IDs únicos gerados automaticamente
- ⚠️ **Importante**: Este sistema é para prototipagem. Para produção, implemente:
  - Sistema de autenticação para o painel admin
  - Criptografia de dados sensíveis
  - Rate limiting
  - Conformidade com LGPD/GDPR

## 🛠️ Solução de Problemas

### Erro ao enviar formulário
1. Abra o console do navegador (F12)
2. Verifique mensagens de erro
3. Confirme que o Supabase está ativo
4. Verifique a conexão com a internet

### Inscrições não aparecem no painel
1. Clique em "Atualizar" no painel
2. Verifique o console para erros de API
3. Confirme que as inscrições foram enviadas com sucesso

## 📝 Logs e Monitoramento

Todos os eventos são registrados no console:
- ✅ Inscrição salva com sucesso
- ❌ Erros de validação
- 📧 Email do inscrito
- 📋 Total de inscrições retornadas

Para visualizar logs do servidor:
1. Acesse o dashboard do Supabase
2. Vá para "Edge Functions"
3. Selecione "make-server-625cbc27"
4. Visualize os logs em tempo real

## 🎨 Customização

### Adicionar mais campos ao formulário
1. Edite `/components/ApplicationForm.tsx`
2. Atualize a interface `FormData`
3. Adicione o campo no HTML
4. Os dados serão automaticamente salvos no backend

### Modificar status das inscrições
Por enquanto, os status são definidos como "nova" automaticamente. Para adicionar funcionalidade de mudança de status, você pode:
1. Adicionar uma rota PUT no servidor
2. Criar interface no painel admin para atualizar status
3. Usar `kv.set()` para atualizar os dados

## 📚 Próximos Passos Sugeridos

1. **Sistema de Autenticação Admin**
   - Implementar login para administradores
   - Proteger a rota `/admin`

2. **Notificações por Email**
   - Enviar confirmação por email ao aluno
   - Notificar administradores de novas inscrições

3. **Exportação de Dados**
   - Adicionar botão para exportar CSV/Excel
   - Gerar relatórios

4. **Filtros e Busca**
   - Filtrar por status
   - Buscar por nome/email
   - Ordenar por data

5. **Dashboard de Estatísticas**
   - Gráficos de inscrições por período
   - Taxa de aprovação
   - Métricas de engajamento

## 🆘 Suporte

Em caso de dúvidas ou problemas:
1. Verifique os logs no console do navegador
2. Consulte a documentação do Supabase
3. Revise este documento

---

**Data de Implementação**: 24/01/2026  
**Status**: ✅ Totalmente Funcional  
**Versão**: 1.0