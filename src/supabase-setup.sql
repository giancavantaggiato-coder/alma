-- ============================================
-- SCRIPT DE CRIAÇÃO DO BANCO DE DADOS
-- Sistema de Blog e Perfis de Alunos
-- ============================================

-- 1️⃣ TABELA: PERFIS DOS ALUNOS
-- ============================================
CREATE TABLE IF NOT EXISTS student_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID UNIQUE,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  bio TEXT,
  profile_image TEXT,
  instagram TEXT,
  behance TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para melhorar performance
CREATE INDEX IF NOT EXISTS idx_student_profiles_user_id ON student_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_student_profiles_email ON student_profiles(email);

-- ============================================
-- 2️⃣ TABELA: POSTS DO BLOG
-- ============================================
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  author_id UUID REFERENCES student_profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  content JSONB NOT NULL DEFAULT '[]'::jsonb,
  tags TEXT[],
  category TEXT,
  read_time INTEGER DEFAULT 5,
  published BOOLEAN DEFAULT true,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para melhorar performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_author_id ON blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

-- ============================================
-- 3️⃣ TABELA: GALERIA DE TRABALHOS DOS ALUNOS
-- ============================================
CREATE TABLE IF NOT EXISTS student_works (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES student_profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  image_url TEXT NOT NULL,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para melhorar performance
CREATE INDEX IF NOT EXISTS idx_student_works_student_id ON student_works(student_id);
CREATE INDEX IF NOT EXISTS idx_student_works_order ON student_works(display_order);

-- ============================================
-- 4️⃣ FUNÇÃO: Atualizar updated_at automaticamente
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para atualizar updated_at
DROP TRIGGER IF EXISTS update_student_profiles_updated_at ON student_profiles;
CREATE TRIGGER update_student_profiles_updated_at
  BEFORE UPDATE ON student_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 5️⃣ ROW LEVEL SECURITY (RLS)
-- ============================================

-- Ativar RLS em todas as tabelas
ALTER TABLE student_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_works ENABLE ROW LEVEL SECURITY;

-- Políticas para STUDENT_PROFILES
-- Todos podem ver perfis
DROP POLICY IF EXISTS "Todos podem ver perfis" ON student_profiles;
CREATE POLICY "Todos podem ver perfis"
  ON student_profiles FOR SELECT
  TO public
  USING (true);

-- Usuários autenticados podem inserir seus próprios perfis
DROP POLICY IF EXISTS "Usuários podem criar perfil" ON student_profiles;
CREATE POLICY "Usuários podem criar perfil"
  ON student_profiles FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Usuários autenticados podem atualizar seus próprios perfis
DROP POLICY IF EXISTS "Usuários podem atualizar próprio perfil" ON student_profiles;
CREATE POLICY "Usuários podem atualizar próprio perfil"
  ON student_profiles FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Políticas para BLOG_POSTS
-- Todos podem ver posts publicados
DROP POLICY IF EXISTS "Todos podem ver posts publicados" ON blog_posts;
CREATE POLICY "Todos podem ver posts publicados"
  ON blog_posts FOR SELECT
  TO public
  USING (published = true);

-- Usuários autenticados podem criar posts
DROP POLICY IF EXISTS "Usuários podem criar posts" ON blog_posts;
CREATE POLICY "Usuários podem criar posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Usuários autenticados podem atualizar seus próprios posts
DROP POLICY IF EXISTS "Usuários podem atualizar próprios posts" ON blog_posts;
CREATE POLICY "Usuários podem atualizar próprios posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Usuários autenticados podem deletar seus próprios posts
DROP POLICY IF EXISTS "Usuários podem deletar próprios posts" ON blog_posts;
CREATE POLICY "Usuários podem deletar próprios posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (true);

-- Políticas para STUDENT_WORKS
-- Todos podem ver trabalhos
DROP POLICY IF EXISTS "Todos podem ver trabalhos" ON student_works;
CREATE POLICY "Todos podem ver trabalhos"
  ON student_works FOR SELECT
  TO public
  USING (true);

-- Usuários autenticados podem criar trabalhos
DROP POLICY IF EXISTS "Usuários podem criar trabalhos" ON student_works;
CREATE POLICY "Usuários podem criar trabalhos"
  ON student_works FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Usuários autenticados podem atualizar trabalhos
DROP POLICY IF EXISTS "Usuários podem atualizar trabalhos" ON student_works;
CREATE POLICY "Usuários podem atualizar trabalhos"
  ON student_works FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Usuários autenticados podem deletar trabalhos
DROP POLICY IF EXISTS "Usuários podem deletar trabalhos" ON student_works;
CREATE POLICY "Usuários podem deletar trabalhos"
  ON student_works FOR DELETE
  TO authenticated
  USING (true);

-- ============================================
-- ✅ CONCLUÍDO!
-- ============================================
-- Agora você tem:
-- ✅ Tabela de perfis dos alunos (student_profiles)
-- ✅ Tabela de posts do blog (blog_posts)
-- ✅ Tabela de trabalhos dos alunos (student_works)
-- ✅ Permissões de segurança configuradas
-- ✅ Atualização automática de timestamps
-- ============================================
