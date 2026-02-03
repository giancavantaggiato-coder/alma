# 📝 Sistema de Perfil do Aluno

## Visão Geral

O sistema de perfil do aluno permite que cada estudante tenha sua própria página personalizada onde pode editar e gerenciar informações sobre seu trabalho artístico, experiência no atelier e galeria de imagens.

## 🎨 Design

O layout segue fielmente o design system do site:
- **Cores**: Tons de bege (#fefbf3) e amarelo (#fae08f)
- **Tipografia**: DM Sans e Inter (mesmas fontes do site)
- **Responsividade**: Totalmente adaptável para mobile e desktop
- **Interatividade**: Botões com hover effects e transições suaves

## 🚀 Como Acessar

### Para Alunos:
1. Clique no ícone de perfil (👤) no menu de navegação superior
2. Ou acesse diretamente via URL navegando para a página 'perfil'

### Através do código:
```javascript
navigateTo('perfil');
```

## ✏️ Funcionalidades

### Modo Visualização
- Visualizar todas as informações do perfil
- Ver foto de perfil, bio e tags
- Ver informações de contato
- Ler texto sobre o trabalho
- Ver galeria de trabalhos

### Modo Edição
Ativado ao clicar no botão **"Editar Perfil"**

#### Seção Hero:
- ✅ **Foto de Perfil**: Upload de imagem (botão com ícone de upload)
- ✅ **Nome**: Campo editável com tipografia grande
- ✅ **Bio**: Textarea para descrição pessoal
- ✅ **Tags**: Adicionar/remover tags (ex: "Desenho", "Pintura")
  - Limite de 10 tags
  - Pressione Enter ou clique no botão + para adicionar
  - Hover sobre tag + clique no X para remover

#### Informações de Contato:
- ✅ **Email**: Campo obrigatório
- ✅ **Telefone/WhatsApp**: Número de contato
- ✅ **Portfólio**: Link do site pessoal
- ✅ **Instagram**: Handle do Instagram
- ✅ **Substack**: Link do Substack
- ✅ **Período no Atelier**: Ex: "Desde 2024"
- ✅ **Meios e Técnicas**: Ex: "Desenho, pintura, colagem"

#### Sobre o Trabalho:
- ✅ **Parágrafos**: Múltiplos parágrafos editáveis
- ✅ **Adicionar**: Campo para novo parágrafo
- ✅ **Remover**: Botão de lixeira ao passar o mouse

#### Galeria de Trabalhos:
- ✅ **Upload**: Botão para adicionar imagens
- ✅ **Remover**: Botão de lixeira ao passar o mouse
- ✅ **Layout**: Grid responsivo (2 colunas mobile, 3 desktop)

## 💾 Salvamento de Dados

### Backend
Os dados são salvos no banco de dados Supabase através das rotas:

**GET** `/make-server-625cbc27/perfil`
- Carrega o perfil do aluno
- Retorna dados salvos ou null se não existir

**POST** `/make-server-625cbc27/perfil`
- Salva/atualiza o perfil do aluno
- Validação: nome e email são obrigatórios
- Retorna confirmação de sucesso

### Estrutura de Dados
```typescript
interface UserProfile {
  id: string;              // ID do usuário
  nome: string;            // Nome do aluno
  email: string;           // Email (obrigatório)
  telefone: string;        // Telefone/WhatsApp
  bio: string;            // Descrição breve
  periodo: string;        // Ex: "Desde 2024"
  meios: string;          // Técnicas utilizadas
  portfolio: string;      // URL do portfólio
  instagram: string;      // Handle do Instagram
  substack: string;       // URL do Substack
  fotoPerfil: string;     // URL da foto
  tags: string[];         // Array de tags
  galeria: string[];      // Array de URLs de imagens
  sobreTexto: string[];   // Array de parágrafos
}
```

## 🔐 Autenticação (Futura)

Atualmente o sistema usa um ID fixo (`user_exemplo`) para demonstração.

### Para implementar autenticação completa:
1. Adicionar sistema de login (já preparado no backend)
2. Vincular perfil ao usuário autenticado
3. Apenas o dono do perfil pode editar suas informações

## 📱 Responsividade

### Mobile (< 768px)
- Menu colapsado
- Foto de perfil centralizada (192x192px)
- Layout de uma coluna
- Texto "Editar" ao invés de "Editar Perfil"
- Grid de galeria: 2 colunas

### Desktop (≥ 768px)
- Menu completo visível
- Foto de perfil à esquerda (256x256px)
- Layout de duas colunas
- Texto completo dos botões
- Grid de galeria: 3 colunas

## 🎯 Próximos Passos Sugeridos

1. **Upload de Imagens**
   - Implementar upload real para Supabase Storage
   - Adicionar preview antes do upload
   - Limite de tamanho e formato

2. **Validação de Campos**
   - Validação de email
   - Validação de URLs
   - Limite de caracteres em campos de texto

3. **Autenticação**
   - Login/Logout de usuários
   - Proteção de rotas
   - Perfis públicos vs privados

4. **Melhorias UX**
   - Toast notifications ao invés de alerts
   - Loading states mais elaborados
   - Confirmação antes de remover itens

5. **Recursos Adicionais**
   - Galeria com zoom de imagens
   - Reordenação de imagens (drag & drop)
   - Filtros e categorização de trabalhos
   - Exportar perfil como PDF

## 🐛 Solução de Problemas

### Perfil não carrega
- Verifique se o backend está rodando
- Confirme as variáveis de ambiente do Supabase
- Veja o console do navegador para erros

### Erro ao salvar
- Confirme que nome e email estão preenchidos
- Verifique a conexão com o servidor
- Veja os logs do servidor para detalhes

### Imagens não aparecem
- URLs devem ser válidas e acessíveis
- Para upload real, implementar Supabase Storage
- Verificar permissões de acesso às imagens

## 📄 Arquivos Relacionados

- `/components/PerfilAluno.tsx` - Componente principal
- `/supabase/functions/server/index.tsx` - Rotas do backend
- `/components/Navbar.tsx` - Navegação com link para perfil
- `/App.tsx` - Roteamento da aplicação

## 💡 Dicas

- Use o modo de edição para fazer múltiplas alterações antes de salvar
- Tags ajudam a categorizar seu trabalho
- Escreva parágrafos detalhados sobre seu processo criativo
- Mantenha suas informações de contato atualizadas
