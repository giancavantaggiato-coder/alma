# 📘 GUIA COMPLETO: Como Gerenciar Pagamentos dos Alunos

## 🎯 Sistema Criado

Você agora tem um sistema completo de controle de pagamentos com:
- ✅ Painel administrativo para gerenciar todos os alunos
- ✅ Status visível para cada aluno (Em Dia, Atrasado, Cancelado)
- ✅ Histórico completo de pagamentos
- ✅ Estatísticas financeiras em tempo real
- ✅ Visualização do status no perfil do aluno

---

## 📋 PASSO A PASSO COMPLETO

### **ETAPA 1: Criar as Tabelas no Supabase** ✏️

1. **Acesse seu projeto Supabase:**
   - Vá para: https://supabase.com/dashboard/project/usavqluyddzrdovtlzvo

2. **Abra o SQL Editor:**
   - No menu lateral esquerdo, clique em "SQL Editor"
   - Clique em "+ New query"

3. **Cole o SQL completo:**
   - Abra o arquivo `/supabase-payment-control.sql`
   - Copie TODO o conteúdo
   - Cole no editor do Supabase
   - Clique em "Run" (ou pressione Ctrl+Enter)

4. **Verifique se deu certo:**
   - No menu lateral, clique em "Table Editor"
   - Você deve ver 2 novas tabelas:
     - `payment_status`
     - `payment_history`

---

### **ETAPA 2: Acessar o Painel Administrativo** 🎛️

1. **Navegue até o painel:**
   - No seu site, adicione `/adminpagamentos` na URL
   - Exemplo: `https://seu-site.com/adminpagamentos`
   - OU navegue através do menu de admin se você já tiver

2. **O que você vai ver:**
   - 📊 Dashboard com estatísticas (total de alunos, em dia, atrasados, etc.)
   - 🔍 Barra de busca para encontrar alunos
   - 📋 Tabela com todos os alunos e seus status
   - ➕ Botão "Adicionar Aluno"

---

### **ETAPA 3: Adicionar um Novo Aluno** ➕

1. **Clique no botão "Adicionar Aluno"** (no topo da página)

2. **Preencha os campos:**
   ```
   ID do Aluno: user_joao (ou qualquer identificador único)
   Nome: João Silva
   Email: joao@exemplo.com
   Status: Em Dia (escolha no dropdown)
   Valor Mensalidade: 500.00
   Dia de Vencimento: 10
   Notas Administrativas: (opcional) Ex: "Aluno desde janeiro"
   ```

3. **Clique em "Adicionar Aluno"**

4. **Pronto!** O aluno aparecerá na lista

---

### **ETAPA 4: Alterar o Status de um Aluno** 🔄

#### **Método 1: Editando Diretamente**

1. Na tabela de alunos, clique no ícone de **lápis** (✏️) na linha do aluno

2. No popup que abrir, altere o campo "Status":
   - **Em Dia** ✅ (verde)
   - **Atrasado** ⏰ (laranja)
   - **Cancelado** ❌ (vermelho)

3. Clique em "Salvar"

4. **O status será atualizado imediatamente!**

#### **Método 2: Registrando um Pagamento**

1. Na tabela de alunos, clique no ícone **$ (verde)** na linha do aluno

2. Preencha os dados do pagamento:
   ```
   Valor: 500.00
   Data do Pagamento: 26/01/2024
   Mês de Referência: Janeiro 2024
   Método de Pagamento: PIX (escolha no dropdown)
   Observações: (opcional)
   ```

3. Clique em "Registrar Pagamento"

4. **O status será automaticamente alterado para "Em Dia"!**

---

### **ETAPA 5: Ver o Histórico de Pagamentos** 📄

1. Na tabela de alunos, clique no ícone de **documento** (📄) na linha do aluno

2. Você verá todos os pagamentos registrados:
   - Valor pago
   - Data do pagamento
   - Método utilizado
   - Observações

3. Cada pagamento fica salvo permanentemente!

---

### **ETAPA 6: Como o Aluno Vê o Status** 👤

Quando o aluno acessa seu perfil e vai na seção "Pagamento de Mensalidade", ele verá:

#### **Se estiver EM DIA:**
```
┌─────────────────────────────────────┐
│ ✅ Status: Em Dia                    │
│                                      │
│ Último pagamento: 26/01/2024         │
│ Vencimento: Todo dia 10 do mês       │
└──────────────────────────────────────┘
```
*Card verde*

#### **Se estiver ATRASADO:**
```
┌─────────────────────────────────────┐
│ ⏰ Status: Pagamento Atrasado        │
│                                      │
│ Último pagamento: 10/12/2023         │
│ Vencimento: Todo dia 10 do mês       │
└──────────────────────────────────────┘
```
*Card laranja*

#### **Se estiver CANCELADO:**
```
┌─────────────────────────────────────┐
│ ❌ Status: Mensalidade Cancelada     │
│                                      │
│ Último pagamento: 10/11/2023         │
│ Vencimento: Todo dia 10 do mês       │
│                                      │
│ 📝 Observação: Cancelado a pedido    │
└──────────────────────────────────────┘
```
*Card vermelho*

---

## 🎨 FUNCIONALIDADES DO PAINEL

### **Buscar Alunos** 🔍
- Digite o nome ou email na barra de busca
- A lista filtra automaticamente

### **Filtrar por Status** 🏷️
Use os botões coloridos para filtrar:
- **Todos** - Mostra todos os alunos
- **Em Dia** - Apenas alunos em dia (verde)
- **Atrasados** - Apenas alunos atrasados (laranja)
- **Cancelados** - Apenas alunos cancelados (vermelho)

### **Estatísticas em Tempo Real** 📊
No topo da página você vê:
- 👥 Total de Alunos
- ✅ Quantos estão em dia
- ⏰ Quantos estão atrasados
- ❌ Quantos estão cancelados
- 💰 Receita mensal total

### **Ações Disponíveis para Cada Aluno** ⚡
- **💰 (Verde)** - Registrar pagamento
- **📄 (Azul)** - Ver histórico de pagamentos
- **✏️ (Cinza)** - Editar informações
- **🗑️ (Vermelho)** - Remover do sistema

---

## 💡 DICAS IMPORTANTES

### **Para Marcar como "Em Dia":**
- Registre um pagamento OU
- Edite manualmente e escolha "Em Dia"

### **Para Marcar como "Atrasado":**
- Edite o aluno
- Altere o status para "Atrasado"
- Adicione uma observação se quiser

### **Para Marcar como "Cancelado":**
- Edite o aluno
- Altere o status para "Cancelado"
- Adicione o motivo nas "Notas Administrativas"

### **Notas Administrativas:**
- Essas observações SÓ VOCÊ VÊ
- O aluno também consegue ver na área de pagamento dele
- Use para deixar lembretes, acordos, etc.

---

## 🚀 EXEMPLOS DE USO

### **Exemplo 1: Novo aluno se inscreveu**
```
1. Clique em "Adicionar Aluno"
2. Preencha:
   - ID: user_maria
   - Nome: Maria Santos
   - Email: maria@email.com
   - Status: Em Dia
   - Valor: 500.00
   - Vencimento: 10
3. Salvar
```

### **Exemplo 2: Aluno pagou a mensalidade**
```
1. Encontre o aluno na lista
2. Clique no ícone $ (verde)
3. Preencha:
   - Valor: 500.00
   - Data: hoje
   - Mês: Janeiro 2024
   - Método: PIX
4. Registrar
✅ Status vira "Em Dia" automaticamente!
```

### **Exemplo 3: Aluno está atrasado**
```
1. Encontre o aluno na lista
2. Clique no ícone ✏️ (editar)
3. Altere Status para: Atrasado
4. Nas notas escreva: "Aguardando pagamento de janeiro"
5. Salvar
⏰ O aluno verá o card laranja!
```

### **Exemplo 4: Aluno cancelou**
```
1. Encontre o aluno na lista
2. Clique no ícone ✏️ (editar)
3. Altere Status para: Cancelado
4. Nas notas escreva: "Cancelado a pedido - 26/01/2024"
5. Salvar
❌ O aluno verá o card vermelho!
```

---

## ❓ PERGUNTAS FREQUENTES

### **P: Os alunos conseguem alterar o próprio status?**
R: NÃO! Apenas você (admin) consegue alterar no painel administrativo.

### **P: O histórico de pagamentos fica salvo para sempre?**
R: SIM! Todos os pagamentos registrados ficam salvos permanentemente.

### **P: Posso mudar o valor da mensalidade de um aluno específico?**
R: SIM! Edite o aluno e altere o campo "Valor Mensalidade".

### **P: O que acontece se eu remover um aluno?**
R: Ele some do sistema de pagamentos, mas os dados do perfil dele continuam.

### **P: Posso ter alunos com vencimentos diferentes?**
R: SIM! Cada aluno pode ter seu próprio dia de vencimento.

---

## 🎉 RESUMO RÁPIDO

1. **Execute o SQL no Supabase** → Cria as tabelas
2. **Acesse `/adminpagamentos`** → Abre o painel
3. **Adicione alunos** → Botão "Adicionar Aluno"
4. **Altere status** → Editar OU Registrar Pagamento
5. **Visualize** → O aluno vê o card colorido no perfil dele

**Pronto! Você tem controle total dos pagamentos! 🎊**

---

## 📞 SUPORTE

Se tiver qualquer dúvida, o sistema está totalmente funcional e pronto para uso!

Arquivos criados:
- `/supabase-payment-control.sql` - SQL para criar as tabelas
- `/components/PainelAdminPagamentos.tsx` - Painel administrativo
- `/components/PagamentoMensalidade.tsx` - Card de status para o aluno (atualizado)
- `/GUIA-PAGAMENTOS.md` - Este guia

**Bom uso! 🚀**
