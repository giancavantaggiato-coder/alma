# Escola de Programação - Plataforma Web

Plataforma completa para escola de programação, desenvolvida com React, TypeScript e Supabase.

## 🚀 Funcionalidades

### Para Visitantes
- **Site Institucional Responsivo**: Design mobile e desktop com tons de bege (#FEFBF3)
- **Navegação Completa**: Navbar, Hero Header, Quem Somos, Abordagem, Galeria de Trabalhos, CTA, Footer
- **Componentes Interativos**: Carrossel de trabalhos, Accordion, Tabs clicáveis
- **Formulários**: Inscrição e Newsletter integrados com Supabase
- **Blog**: Sistema de posts com páginas individuais
- **FAQ e Contato**: Páginas completas

### Para Alunos
- **Área do Aluno** (4 abas):
  - **Geral**: Dashboard personalizado
  - **Meu Perfil**: Edição de dados, upload de foto, galeria de trabalhos
  - **Blog**: Criação e gerenciamento de posts
  - **Pagamento**: Visualização do status de mensalidades

### Para Administradores
- **Dashboard Administrativo** com:
  - Painel de inscrições
  - Painel financeiro
  - Controle de pagamentos
  - Editor centralizado de textos do site
  - Integração com Power BI

## 🛠️ Tecnologias

- **Frontend**: React, TypeScript, Tailwind CSS v4
- **Backend**: Supabase (PostgreSQL, Storage, Auth)
- **Bibliotecas**: 
  - lucide-react (ícones)
  - recharts (gráficos)
  - react-slick (carrosséis)
  - motion/react (animações)
  - sonner (notificações)

## 📂 Estrutura do Projeto

```
/
├── components/           # Componentes React
│   ├── ui/              # Componentes de UI reutilizáveis
│   ├── AdminDashboard.tsx
│   ├── AreaAluno.tsx
│   ├── PainelAdminPagamentos.tsx
│   ├── PainelAdminTextos.tsx
│   └── ...
├── config/              # Configurações
│   └── siteTexts.ts     # Textos editáveis do site
├── data/                # Dados estáticos
│   ├── blogPosts.ts
│   └── students.ts
├── imports/             # Componentes importados do Figma
├── styles/              # Estilos globais
├── supabase/            # Funções do Supabase
└── utils/               # Utilitários
```

## 🗄️ Banco de Dados Supabase

O projeto utiliza as seguintes tabelas:

- `inscricoes`: Dados de formulários de inscrição
- `newsletter`: Assinantes da newsletter
- `payment_status`: Status de pagamento dos alunos
- `payment_history`: Histórico de pagamentos
- `site_texts`: Textos editáveis do site

### Scripts SQL
- `/supabase-setup.sql`: Configuração inicial
- `/supabase-payment-control.sql`: Sistema de pagamentos
- `/supabase-site-texts.sql`: Editor de textos
- `/supabase-storage-policies.sql`: Políticas de storage

## 📖 Documentação

- `INSTRUCOES_BACKEND.md`: Configuração do Supabase
- `INSTRUCOES_PERFIL.md`: Sistema de perfil do aluno
- `INSTRUCOES_EDITOR_TEXTOS.md`: Editor centralizado de textos
- `GUIA-PAGAMENTOS.md`: Sistema de pagamentos
- `SUPABASE_STORAGE_CONFIG.md`: Configuração de storage

## 🚀 Como Rodar o Projeto

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd [NOME_DO_PROJETO]
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env.local` com:
```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima
```

4. Execute os scripts SQL no Supabase:
- `supabase-setup.sql`
- `supabase-payment-control.sql`
- `supabase-site-texts.sql`
- `supabase-storage-policies.sql`

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 📝 Licença

Este projeto é proprietário e confidencial.

## 👨‍💻 Autor

Desenvolvido com Figma Make
