# 📦 Configuração do Supabase Storage

## ❌ Erro Atual
```
Error: new row violates row-level security policy
```

Este erro ocorre porque o **Supabase Storage** precisa ter buckets criados e políticas RLS configuradas.

---

## ✅ Como Resolver

### **1. Criar os Buckets no Supabase**

Acesse o **Supabase Dashboard** → **Storage** → Clique em **"New bucket"**

Crie 2 buckets:
- Nome: `blog-images`
- Nome: `profile-images`

**Importante:** Marque ambos como **"Public bucket"** (bucket público)

---

### **2. Configurar Políticas RLS**

Para cada bucket criado, adicione as seguintes políticas:

#### **Política de INSERT (Upload)**
```sql
-- Permitir upload de imagens (INSERT)
CREATE POLICY "Permitir upload público"
ON storage.objects FOR INSERT
TO public
WITH CHECK (
  bucket_id = 'blog-images' 
  OR bucket_id = 'profile-images'
);
```

#### **Política de SELECT (Visualização)**
```sql
-- Permitir leitura pública (SELECT)
CREATE POLICY "Permitir leitura pública"
ON storage.objects FOR SELECT
TO public
USING (
  bucket_id = 'blog-images' 
  OR bucket_id = 'profile-images'
);
```

#### **Política de DELETE (Deletar)**
```sql
-- Permitir deletar imagens (DELETE)
CREATE POLICY "Permitir deletar"
ON storage.objects FOR DELETE
TO public
USING (
  bucket_id = 'blog-images' 
  OR bucket_id = 'profile-images'
);
```

---

### **3. Alternativa: Usar Edge Function**

Se as políticas RLS não funcionarem, o código já tem um **fallback automático** que tenta fazer upload através de uma **Edge Function**.

Para isso funcionar, você precisa ter a função `upload-image` configurada no Supabase Functions.

---

## 🎯 Resumo Rápido

1. **Crie os buckets**: `blog-images` e `profile-images` (públicos)
2. **Adicione as 3 políticas RLS** (INSERT, SELECT, DELETE)
3. **Teste o upload** - deve funcionar!

---

## 📞 Suporte

Se o erro persistir, verifique:
- ✅ Buckets estão marcados como **"Public"**
- ✅ Políticas RLS estão ativas
- ✅ `projectId` e `publicAnonKey` estão corretos no arquivo `/utils/supabase/info.ts`
