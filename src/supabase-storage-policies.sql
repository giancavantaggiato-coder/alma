-- ============================================
-- PERMISSÕES DOS BUCKETS DE STORAGE
-- Para upload de imagens do blog e perfis
-- ============================================

-- 🖼️ BUCKET: blog-images
-- ============================================

-- 1. Qualquer pessoa pode VER as imagens do blog
CREATE POLICY "Público pode ver imagens do blog"
ON storage.objects FOR SELECT
USING (bucket_id = 'blog-images');

-- 2. Usuários autenticados podem FAZER UPLOAD
CREATE POLICY "Usuários podem fazer upload de imagens do blog"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'blog-images' 
  AND auth.role() = 'authenticated'
);

-- 3. Usuários autenticados podem ATUALIZAR suas imagens
CREATE POLICY "Usuários podem atualizar imagens do blog"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'blog-images' 
  AND auth.role() = 'authenticated'
)
WITH CHECK (
  bucket_id = 'blog-images' 
  AND auth.role() = 'authenticated'
);

-- 4. Usuários autenticados podem DELETAR suas imagens
CREATE POLICY "Usuários podem deletar imagens do blog"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'blog-images' 
  AND auth.role() = 'authenticated'
);

-- 👤 BUCKET: profile-images
-- ============================================

-- 1. Qualquer pessoa pode VER fotos de perfil
CREATE POLICY "Público pode ver fotos de perfil"
ON storage.objects FOR SELECT
USING (bucket_id = 'profile-images');

-- 2. Usuários autenticados podem FAZER UPLOAD de fotos
CREATE POLICY "Usuários podem fazer upload de fotos de perfil"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'profile-images' 
  AND auth.role() = 'authenticated'
);

-- 3. Usuários autenticados podem ATUALIZAR suas fotos
CREATE POLICY "Usuários podem atualizar fotos de perfil"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'profile-images' 
  AND auth.role() = 'authenticated'
)
WITH CHECK (
  bucket_id = 'profile-images' 
  AND auth.role() = 'authenticated'
);

-- 4. Usuários autenticados podem DELETAR suas fotos
CREATE POLICY "Usuários podem deletar fotos de perfil"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'profile-images' 
  AND auth.role() = 'authenticated'
);

-- ============================================
-- ✅ CONCLUÍDO!
-- ============================================
-- Agora os buckets permitem:
-- ✅ Qualquer pessoa pode VER as imagens
-- ✅ Usuários logados podem FAZER UPLOAD
-- ✅ Usuários logados podem ATUALIZAR/DELETAR
-- ============================================
