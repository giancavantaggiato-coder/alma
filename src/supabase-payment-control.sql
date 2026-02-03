-- ============================================
-- SISTEMA DE CONTROLE DE PAGAMENTOS
-- Gerenciamento de status de alunos
-- ============================================

-- 📊 TABELA: payment_status
-- Status de pagamento de cada aluno
-- ============================================
CREATE TABLE IF NOT EXISTS payment_status (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id TEXT NOT NULL UNIQUE,
  student_name TEXT NOT NULL,
  student_email TEXT NOT NULL,
  
  -- Status do pagamento
  status TEXT NOT NULL DEFAULT 'em_dia' CHECK (status IN ('em_dia', 'atrasado', 'cancelado')),
  
  -- Informações financeiras
  valor_mensalidade DECIMAL(10,2) DEFAULT 0,
  dia_vencimento INTEGER DEFAULT 10,
  ultimo_pagamento DATE,
  proximo_vencimento DATE,
  
  -- Observações administrativas
  notas_admin TEXT,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 📋 TABELA: payment_history
-- Histórico de todos os pagamentos
-- ============================================
CREATE TABLE IF NOT EXISTS payment_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id TEXT NOT NULL,
  student_name TEXT NOT NULL,
  
  -- Informações do pagamento
  valor DECIMAL(10,2) NOT NULL,
  data_pagamento DATE NOT NULL,
  mes_referencia TEXT NOT NULL, -- Ex: "Janeiro 2024"
  
  -- Método de pagamento
  metodo_pagamento TEXT, -- Ex: "PIX", "Cartão", "Boleto"
  
  -- Comprovante
  comprovante_url TEXT,
  
  -- Notas
  observacoes TEXT,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ÍNDICES PARA PERFORMANCE
-- ============================================
CREATE INDEX IF NOT EXISTS idx_payment_status_student_id ON payment_status(student_id);
CREATE INDEX IF NOT EXISTS idx_payment_status_status ON payment_status(status);
CREATE INDEX IF NOT EXISTS idx_payment_history_student_id ON payment_history(student_id);
CREATE INDEX IF NOT EXISTS idx_payment_history_data ON payment_history(data_pagamento);

-- ============================================
-- TRIGGERS PARA UPDATED_AT
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_payment_status_updated_at
    BEFORE UPDATE ON payment_status
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Habilitar RLS
ALTER TABLE payment_status ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_history ENABLE ROW LEVEL SECURITY;

-- Políticas: qualquer pessoa autenticada pode VER
CREATE POLICY "Usuários podem ver status de pagamento"
ON payment_status FOR SELECT
USING (auth.role() = 'authenticated' OR auth.role() = 'anon');

CREATE POLICY "Usuários podem ver histórico de pagamento"
ON payment_history FOR SELECT
USING (auth.role() = 'authenticated' OR auth.role() = 'anon');

-- Políticas: apenas autenticados podem INSERIR/ATUALIZAR
-- (isso seria para o admin, mas como não temos auth real, liberamos)
CREATE POLICY "Usuários podem inserir status"
ON payment_status FOR INSERT
WITH CHECK (auth.role() = 'authenticated' OR auth.role() = 'anon');

CREATE POLICY "Usuários podem atualizar status"
ON payment_status FOR UPDATE
USING (auth.role() = 'authenticated' OR auth.role() = 'anon');

CREATE POLICY "Usuários podem deletar status"
ON payment_status FOR DELETE
USING (auth.role() = 'authenticated' OR auth.role() = 'anon');

CREATE POLICY "Usuários podem inserir histórico"
ON payment_history FOR INSERT
WITH CHECK (auth.role() = 'authenticated' OR auth.role() = 'anon');

CREATE POLICY "Usuários podem atualizar histórico"
ON payment_history FOR UPDATE
USING (auth.role() = 'authenticated' OR auth.role() = 'anon');

CREATE POLICY "Usuários podem deletar histórico"
ON payment_history FOR DELETE
USING (auth.role() = 'authenticated' OR auth.role() = 'anon');

-- ============================================
-- DADOS DE EXEMPLO (OPCIONAL)
-- ============================================
-- Descomentar se quiser começar com dados de exemplo

-- INSERT INTO payment_status (student_id, student_name, student_email, status, valor_mensalidade, dia_vencimento, ultimo_pagamento, proximo_vencimento)
-- VALUES 
--   ('user_exemplo', 'João Silva', 'joao@exemplo.com', 'em_dia', 500.00, 10, '2024-01-10', '2024-02-10'),
--   ('user_2', 'Maria Santos', 'maria@exemplo.com', 'atrasado', 500.00, 10, '2023-12-10', '2024-01-10'),
--   ('user_3', 'Pedro Costa', 'pedro@exemplo.com', 'cancelado', 500.00, 10, '2023-11-10', '2023-12-10');

-- ============================================
-- ✅ CONCLUÍDO!
-- ============================================
-- Execute este SQL no Supabase para criar as tabelas
-- ============================================
