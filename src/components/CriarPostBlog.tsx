import React, { useState, useRef } from 'react';
import { 
  ArrowLeft,
  Plus, 
  Image as ImageIcon, 
  Type, 
  AlignLeft, 
  Trash2, 
  Eye, 
  Save,
  Upload,
  X,
  GripVertical,
  Heading2,
  Quote,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface ContentBlock {
  id: string;
  type: 'paragraph' | 'heading' | 'image' | 'quote';
  content: string;
  level?: number; // para headings (2 ou 3)
  author?: string; // para citações
}

interface PostData {
  title: string;
  coverImage: string;
  content: ContentBlock[];
  tags: string[];
  category: string;
  published: boolean;
}

interface CriarPostBlogProps {
  onBack: () => void;
  authorId: string;
  authorName: string;
}

export default function CriarPostBlog({ onBack, authorId, authorName }: CriarPostBlogProps) {
  const [postData, setPostData] = useState<PostData>({
    title: '',
    coverImage: '',
    content: [],
    tags: [],
    category: '',
    published: false
  });

  const [currentTag, setCurrentTag] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [draggedBlockId, setDraggedBlockId] = useState<string | null>(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [showCropModal, setShowCropModal] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  
  const coverImageInputRef = useRef<HTMLInputElement>(null);
  const blockImageInputRef = useRef<HTMLInputElement>(null);

  // Categorias disponíveis
  const categories = [
    'Design Gráfico',
    'Branding',
    'UI/UX',
    'Ilustração',
    'Tipografia',
    'Motion Design',
    'Fotografia',
    'Outros'
  ];

  // Upload de imagem para Supabase Storage
  const uploadImage = async (file: File, bucket: 'blog-images' | 'profile-images'): Promise<string> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `public/${fileName}`;

      // Criar um ArrayBuffer do arquivo
      const arrayBuffer = await file.arrayBuffer();

      // Tentar upload direto
      const uploadResponse = await fetch(
        `https://${projectId}.supabase.co/storage/v1/object/${bucket}/${filePath}`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': file.type,
            'x-upsert': 'true'
          },
          body: arrayBuffer
        }
      );

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        console.error('Erro no upload direto:', errorData);
        
        // Se falhar por RLS, tentar através da função edge
        return await uploadViaEdgeFunction(file, bucket);
      }

      const publicUrl = `https://${projectId}.supabase.co/storage/v1/object/public/${bucket}/${filePath}`;
      return publicUrl;
    } catch (error) {
      console.error('Erro no upload:', error);
      throw error;
    }
  };

  // Upload através da Edge Function (alternativa se RLS bloquear)
  const uploadViaEdgeFunction = async (file: File, bucket: string): Promise<string> => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('bucket', bucket);

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-625cbc27/upload-image`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: formData
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro no upload via edge function:', errorData);
        throw new Error('Erro ao fazer upload da imagem. Verifique as configurações do Storage no Supabase.');
      }

      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Erro no upload via edge function:', error);
      throw new Error('Erro ao fazer upload. Entre em contato com o administrador.');
    }
  };

  // Handler para upload da imagem de capa
  const handleCoverImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Por favor, selecione uma imagem válida');
      return;
    }

    // Abrir modal de crop
    const reader = new FileReader();
    reader.onload = () => {
      setImageToCrop(reader.result as string);
      setShowCropModal(true);
    };
    reader.readAsDataURL(file);
  };

  // Handler para drag & drop
  const handleCoverDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleCoverDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
  };

  const handleCoverDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Por favor, solte uma imagem válida');
      return;
    }

    // Abrir modal de crop
    const reader = new FileReader();
    reader.onload = () => {
      setImageToCrop(reader.result as string);
      setShowCropModal(true);
    };
    reader.readAsDataURL(file);
  };

  // Callback quando crop muda
  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  // Criar imagem croppada
  const createCroppedImage = async () => {
    if (!imageToCrop || !croppedAreaPixels) return;

    try {
      const image = new Image();
      image.src = imageToCrop;
      
      await new Promise((resolve) => {
        image.onload = resolve;
      });

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) return;

      // Definir tamanho do canvas (1200x630)
      canvas.width = 1200;
      canvas.height = 630;

      // Desenhar a imagem croppada
      ctx.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        1200,
        630
      );

      // Converter para blob
      return new Promise<Blob>((resolve) => {
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
        }, 'image/jpeg', 0.95);
      });
    } catch (error) {
      console.error('Erro ao criar crop:', error);
      throw error;
    }
  };

  // Salvar imagem croppada
  const handleSaveCroppedImage = async () => {
    setIsUploading(true);
    try {
      const croppedBlob = await createCroppedImage();
      if (!croppedBlob) {
        throw new Error('Erro ao processar imagem');
      }

      // Converter blob para file
      const file = new File([croppedBlob], 'cover-image.jpg', { type: 'image/jpeg' });
      
      // Upload
      const imageUrl = await uploadImage(file, 'blog-images');
      setPostData(prev => ({ ...prev, coverImage: imageUrl }));
      
      toast.success('Imagem de capa enviada!');
      setShowCropModal(false);
      setImageToCrop(null);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
    } catch (error) {
      toast.error('Erro ao fazer upload da imagem');
    } finally {
      setIsUploading(false);
    }
  };

  // Adicionar novo bloco de conteúdo
  const addBlock = (type: ContentBlock['type']) => {
    const newBlock: ContentBlock = {
      id: `block-${Date.now()}-${Math.random()}`,
      type,
      content: '',
      level: type === 'heading' ? 2 : undefined,
      author: type === 'quote' ? 'Autor da citação' : undefined
    };

    setPostData(prev => ({
      ...prev,
      content: [...prev.content, newBlock]
    }));
  };

  // Atualizar conteúdo de um bloco
  const updateBlock = (blockId: string, updates: Partial<ContentBlock>) => {
    setPostData(prev => ({
      ...prev,
      content: prev.content.map(block => 
        block.id === blockId ? { ...block, ...updates } : block
      )
    }));
  };

  // Remover bloco
  const removeBlock = (blockId: string) => {
    setPostData(prev => ({
      ...prev,
      content: prev.content.filter(block => block.id !== blockId)
    }));
  };

  // Upload de imagem para bloco
  const handleBlockImageUpload = async (blockId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Por favor, selecione uma imagem válida');
      return;
    }

    setIsUploading(true);
    try {
      const imageUrl = await uploadImage(file, 'blog-images');
      updateBlock(blockId, { content: imageUrl });
      toast.success('Imagem adicionada!');
    } catch (error) {
      toast.error('Erro ao fazer upload da imagem');
    } finally {
      setIsUploading(false);
    }
  };

  // Adicionar tag
  const addTag = () => {
    if (!currentTag.trim()) return;
    
    if (postData.tags.includes(currentTag.trim())) {
      toast.error('Tag já adicionada');
      return;
    }

    setPostData(prev => ({
      ...prev,
      tags: [...prev.tags, currentTag.trim()]
    }));
    setCurrentTag('');
  };

  // Remover tag
  const removeTag = (tagToRemove: string) => {
    setPostData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  // Adicionar item na lista
  const addListItem = (blockId: string) => {
    setPostData(prev => ({
      ...prev,
      content: prev.content.map(block => {
        if (block.id === blockId && block.type === 'list') {
          return {
            ...block,
            items: [...(block.items || []), '']
          };
        }
        return block;
      })
    }));
  };

  // Atualizar item da lista
  const updateListItem = (blockId: string, itemIndex: number, value: string) => {
    setPostData(prev => ({
      ...prev,
      content: prev.content.map(block => {
        if (block.id === blockId && block.type === 'list') {
          const newItems = [...(block.items || [])];
          newItems[itemIndex] = value;
          return { ...block, items: newItems };
        }
        return block;
      })
    }));
  };

  // Remover item da lista
  const removeListItem = (blockId: string, itemIndex: number) => {
    setPostData(prev => ({
      ...prev,
      content: prev.content.map(block => {
        if (block.id === blockId && block.type === 'list') {
          return {
            ...block,
            items: (block.items || []).filter((_, i) => i !== itemIndex)
          };
        }
        return block;
      })
    }));
  };

  // Drag and drop
  const handleDragStart = (blockId: string) => {
    setDraggedBlockId(blockId);
  };

  const handleDragOver = (e: React.DragEvent, targetBlockId: string) => {
    e.preventDefault();
    
    if (!draggedBlockId || draggedBlockId === targetBlockId) return;

    const draggedIndex = postData.content.findIndex(b => b.id === draggedBlockId);
    const targetIndex = postData.content.findIndex(b => b.id === targetBlockId);

    if (draggedIndex === -1 || targetIndex === -1) return;

    const newContent = [...postData.content];
    const [removed] = newContent.splice(draggedIndex, 1);
    newContent.splice(targetIndex, 0, removed);

    setPostData(prev => ({ ...prev, content: newContent }));
  };

  const handleDragEnd = () => {
    setDraggedBlockId(null);
  };

  // Calcular tempo de leitura
  const calculateReadTime = () => {
    const wordsPerMinute = 200;
    let totalWords = postData.title.split(' ').length;

    postData.content.forEach(block => {
      if (block.type === 'paragraph' || block.type === 'heading') {
        totalWords += block.content.split(' ').length;
      } else if (block.type === 'list' && block.items) {
        block.items.forEach(item => {
          totalWords += item.split(' ').length;
        });
      }
    });

    return Math.ceil(totalWords / wordsPerMinute);
  };

  // Validar post
  const validatePost = (): boolean => {
    if (!postData.title.trim()) {
      toast.error('Adicione um título ao post');
      return false;
    }

    if (!postData.coverImage) {
      toast.error('Adicione uma imagem de capa');
      return false;
    }

    if (postData.content.length === 0) {
      toast.error('Adicione algum conteúdo ao post');
      return false;
    }

    if (!postData.category) {
      toast.error('Selecione uma categoria');
      return false;
    }

    return true;
  };

  // Salvar post no Supabase
  const handleSavePost = async () => {
    if (!validatePost()) return;

    setIsSaving(true);
    try {
      const readTime = calculateReadTime();

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-625cbc27/blog-posts`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            author_id: authorId,
            title: postData.title,
            cover_image: postData.coverImage,
            content: postData.content,
            tags: postData.tags,
            category: postData.category,
            read_time: readTime,
            published: postData.published
          })
        }
      );

      if (!response.ok) {
        throw new Error('Erro ao salvar post');
      }

      toast.success('Post enviado para aprovação! 🎉');
      
      // Limpar formulário
      setPostData({
        title: '',
        coverImage: '',
        content: [],
        tags: [],
        category: '',
        published: false
      });

      // Voltar para o perfil após 2 segundos
      setTimeout(() => {
        onBack();
      }, 2000);

    } catch (error) {
      console.error('Erro ao salvar post:', error);
      toast.error('Erro ao publicar post. Tente novamente.');
    } finally {
      setIsSaving(false);
    }
  };

  // Renderizar bloco
  const renderBlock = (block: ContentBlock) => {
    return (
      <div
        key={block.id}
        draggable
        onDragStart={() => handleDragStart(block.id)}
        onDragOver={(e) => handleDragOver(e, block.id)}
        onDragEnd={handleDragEnd}
        className={`relative group border border-[#E8E1D5] rounded-lg p-4 mb-4 bg-white ${
          draggedBlockId === block.id ? 'opacity-50' : ''
        }`}
      >
        {/* Drag handle */}
        <div className="absolute left-2 top-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-move">
          <GripVertical className="w-4 h-4 text-[#8B7355]" />
        </div>

        {/* Remover bloco */}
        <button
          onClick={() => removeBlock(block.id)}
          className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-[#F5F0E8] rounded"
        >
          <Trash2 className="w-4 h-4 text-red-500" />
        </button>

        <div className="pl-6">
          {block.type === 'paragraph' && (
            <textarea
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
              onMouseDown={(e) => e.stopPropagation()}
              onDragStart={(e) => e.preventDefault()}
              placeholder="Escreva seu parágrafo aqui..."
              className="w-full min-h-[100px] p-3 border border-[#E8E1D5] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
            />
          )}

          {block.type === 'heading' && (
            <div>
              <select
                value={block.level}
                onChange={(e) => updateBlock(block.id, { level: Number(e.target.value) })}
                onMouseDown={(e) => e.stopPropagation()}
                onDragStart={(e) => e.preventDefault()}
                className="mb-2 px-3 py-1 border border-[#E8E1D5] rounded text-sm"
              >
                <option value={2}>Título H2</option>
                <option value={3}>Título H3</option>
              </select>
              <input
                type="text"
                value={block.content}
                onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                onMouseDown={(e) => e.stopPropagation()}
                onDragStart={(e) => e.preventDefault()}
                placeholder="Digite o título..."
                className={`w-full p-3 border border-[#E8E1D5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] ${
                  block.level === 2 ? 'text-2xl font-bold' : 'text-xl font-semibold'
                }`}
              />
            </div>
          )}

          {block.type === 'image' && (
            <div>
              {!block.content ? (
                <div>
                  <input
                    ref={blockImageInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleBlockImageUpload(block.id, e)}
                    className="hidden"
                  />
                  <button
                    onClick={() => blockImageInputRef.current?.click()}
                    disabled={isUploading}
                    className="w-full py-8 border-2 border-dashed border-[#E8E1D5] rounded-lg hover:border-[#8B7355] transition-colors flex flex-col items-center gap-2"
                  >
                    <Upload className="w-8 h-8 text-[#8B7355]" />
                    <span className="text-[#8B7355]">
                      {isUploading ? 'Enviando...' : 'Clique para fazer upload'}
                    </span>
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <img
                    src={block.content}
                    alt="Imagem do post"
                    className="w-full rounded-lg"
                  />
                  <button
                    onClick={() => updateBlock(block.id, { content: '' })}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-red-50"
                  >
                    <X className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              )}
            </div>
          )}

          {block.type === 'list' && (
            <div className="space-y-2">
              {(block.items || []).map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => updateListItem(block.id, index, e.target.value)}
                    placeholder="Item da lista..."
                    className="flex-1 p-2 border border-[#E8E1D5] rounded focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                  />
                  <button
                    onClick={() => removeListItem(block.id, index)}
                    className="p-2 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => addListItem(block.id)}
                className="text-sm text-[#8B7355] hover:underline"
              >
                + Adicionar item
              </button>
            </div>
          )}

          {block.type === 'quote' && (
            <div className="space-y-2">
              <textarea
                value={block.content}
                onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                onMouseDown={(e) => e.stopPropagation()}
                onDragStart={(e) => e.preventDefault()}
                placeholder="Digite a citação..."
                className="w-full p-2 border border-[#E8E1D5] rounded focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
              />
              <input
                type="text"
                value={block.author}
                onChange={(e) => updateBlock(block.id, { author: e.target.value })}
                onMouseDown={(e) => e.stopPropagation()}
                onDragStart={(e) => e.preventDefault()}
                placeholder="Autor da citação..."
                className="w-full p-2 border border-[#E8E1D5] rounded focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  if (showPreview) {
    return (
      <div className="min-h-screen bg-[#FEFBF3]">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={() => setShowPreview(false)}
            className="flex items-center gap-2 text-[#8B7355] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para edição
          </button>

          {/* Preview do post */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            {postData.coverImage && (
              <img
                src={postData.coverImage}
                alt={postData.title}
                className="w-full h-[400px] object-cover"
              />
            )}

            <div className="p-8">
              <div className="flex gap-2 mb-4">
                {postData.category && (
                  <span className="px-3 py-1 bg-[#F5F0E8] text-[#8B7355] rounded-full text-sm">
                    {postData.category}
                  </span>
                )}
                <span className="px-3 py-1 bg-[#F5F0E8] text-[#8B7355] rounded-full text-sm">
                  {calculateReadTime()} min de leitura
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>

              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-[#E8E1D5]">
                <div className="w-12 h-12 bg-[#8B7355] text-white rounded-full flex items-center justify-center font-bold">
                  {authorName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold">{authorName}</p>
                  <p className="text-sm text-gray-500">Hoje</p>
                </div>
              </div>

              <div className="prose max-w-none">
                {postData.content.map((block) => {
                  if (block.type === 'paragraph') {
                    return (
                      <p key={block.id} className="mb-4 leading-relaxed">
                        {block.content}
                      </p>
                    );
                  }
                  
                  if (block.type === 'heading') {
                    const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
                    return (
                      <Tag
                        key={block.id}
                        className={block.level === 2 ? 'text-2xl font-bold mb-4 mt-8' : 'text-xl font-semibold mb-3 mt-6'}
                      >
                        {block.content}
                      </Tag>
                    );
                  }
                  
                  if (block.type === 'image' && block.content) {
                    return (
                      <img
                        key={block.id}
                        src={block.content}
                        alt="Imagem do post"
                        className="w-full rounded-lg my-6"
                      />
                    );
                  }
                  
                  if (block.type === 'list' && block.items) {
                    return (
                      <ul key={block.id} className="list-disc pl-6 mb-4 space-y-2">
                        {block.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  
                  if (block.type === 'quote' && block.content) {
                    return (
                      <blockquote key={block.id} className="border-l-4 border-[#8B7355] pl-4 mb-4">
                        <p className="italic">{block.content}</p>
                        <cite className="block text-sm text-gray-500 mt-2">- {block.author}</cite>
                      </blockquote>
                    );
                  }
                  
                  return null;
                })}
              </div>

              {postData.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-[#E8E1D5]">
                  <div className="flex flex-wrap gap-2">
                    {postData.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#F5F0E8] text-[#8B7355] rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FEFBF3]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#8B7355] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>

          <div className="flex gap-3">
            <button
              onClick={() => setShowPreview(true)}
              className="flex items-center gap-2 px-4 py-2 border border-[#8B7355] text-[#8B7355] rounded-lg hover:bg-[#F5F0E8]"
            >
              <Eye className="w-4 h-4" />
              Prévia
            </button>
            <button
              onClick={handleSavePost}
              disabled={isSaving}
              className="flex items-center gap-2 px-6 py-2 bg-[#8B7355] text-white rounded-lg hover:bg-[#6B5844] disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {isSaving ? 'Enviando...' : 'Enviar para Aprovação'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Área principal de edição */}
          <div className="lg:col-span-2 space-y-6">
            {/* Título do post */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <label className="block text-sm font-semibold text-[#8B7355] mb-2">
                Título do Post *
              </label>
              <input
                type="text"
                value={postData.title}
                onChange={(e) => setPostData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Digite um título atrativo..."
                className="w-full p-4 border border-[#E8E1D5] rounded-lg text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
              />
            </div>

            {/* Imagem de capa */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <label className="block text-sm font-semibold text-[#8B7355] mb-2">
                Imagem de Capa *
              </label>
              
              {!postData.coverImage ? (
                <div>
                  <input
                    ref={coverImageInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleCoverImageUpload}
                    className="hidden"
                  />
                  <button
                    onClick={() => coverImageInputRef.current?.click()}
                    onDragOver={handleCoverDragOver}
                    onDragLeave={handleCoverDragLeave}
                    onDrop={handleCoverDrop}
                    disabled={isUploading}
                    className={`w-full py-12 border-2 border-dashed rounded-lg transition-all flex flex-col items-center gap-3 ${
                      isDraggingOver 
                        ? 'border-[#8B7355] bg-[#F5F0E8]' 
                        : 'border-[#E8E1D5] hover:border-[#8B7355]'
                    }`}
                  >
                    <Upload className="w-12 h-12 text-[#8B7355]" />
                    <span className="text-[#8B7355] font-semibold">
                      {isUploading ? 'Enviando...' : isDraggingOver ? 'Solte a imagem aqui' : 'Clique ou arraste uma imagem'}
                    </span>
                    <span className="text-sm text-gray-500">
                      Será ajustado para 1200x630px
                    </span>
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <img
                    key={postData.coverImage}
                    src={postData.coverImage}
                    alt="Capa do post"
                    className="w-full h-[300px] object-cover rounded-lg"
                    onError={(e) => {
                      console.error('Erro ao carregar imagem:', postData.coverImage);
                      e.currentTarget.src = 'https://via.placeholder.com/1200x630?text=Erro+ao+carregar+imagem';
                    }}
                  />
                  <button
                    onClick={() => setPostData(prev => ({ ...prev, coverImage: '' }))}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-red-50"
                  >
                    <X className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              )}
            </div>

            {/* Blocos de conteúdo */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <label className="block text-sm font-semibold text-[#8B7355] mb-4">
                Conteúdo do Post *
              </label>

              {postData.content.length === 0 ? (
                <p className="text-center text-gray-500 py-8">
                  Adicione blocos de conteúdo usando os botões abaixo
                </p>
              ) : (
                <div>
                  {postData.content.map(renderBlock)}
                </div>
              )}

              {/* Botões para adicionar blocos */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E8E1D5]">
                <button
                  onClick={() => addBlock('heading')}
                  className="flex items-center gap-2 px-4 py-2 border border-[#E8E1D5] rounded-lg hover:bg-[#F5F0E8]"
                >
                  <Heading2 className="w-4 h-4" />
                  Título
                </button>
                <button
                  onClick={() => addBlock('paragraph')}
                  className="flex items-center gap-2 px-4 py-2 border border-[#E8E1D5] rounded-lg hover:bg-[#F5F0E8]"
                >
                  <AlignLeft className="w-4 h-4" />
                  Parágrafo
                </button>
                <button
                  onClick={() => addBlock('image')}
                  className="flex items-center gap-2 px-4 py-2 border border-[#E8E1D5] rounded-lg hover:bg-[#F5F0E8]"
                >
                  <ImageIcon className="w-4 h-4" />
                  Imagem
                </button>
                <button
                  onClick={() => addBlock('quote')}
                  className="flex items-center gap-2 px-4 py-2 border border-[#E8E1D5] rounded-lg hover:bg-[#F5F0E8]"
                >
                  <Quote className="w-4 h-4" />
                  Citação
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar - Configurações */}
          <div className="space-y-6">
            {/* Categoria */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <label className="block text-sm font-semibold text-[#8B7355] mb-2">
                Categoria *
              </label>
              <select
                value={postData.category}
                onChange={(e) => setPostData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full p-3 border border-[#E8E1D5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
              >
                <option value="">Selecione uma categoria</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <label className="block text-sm font-semibold text-[#8B7355] mb-2">
                Tags
              </label>
              
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  placeholder="Digite uma tag..."
                  className="flex-1 p-2 border border-[#E8E1D5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                />
                <button
                  onClick={addTag}
                  className="px-4 py-2 bg-[#8B7355] text-white rounded-lg hover:bg-[#6B5844]"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {postData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {postData.tags.map(tag => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-3 py-1 bg-[#F5F0E8] text-[#8B7355] rounded-full text-sm"
                    >
                      #{tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-1 hover:text-red-500"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Status de publicação */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <label className="block text-sm font-semibold text-[#8B7355] mb-2">
                Processo de Publicação
              </label>
              <p className="text-sm text-gray-600 bg-[#F5F0E8] p-3 rounded-lg">
                ℹ️ Seu post será enviado para aprovação do administrador antes de ser publicado no blog.
              </p>
            </div>

            {/* Info */}
            <div className="bg-[#F5F0E8] rounded-lg p-6">
              <h3 className="font-semibold text-[#8B7355] mb-3">Informações</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📖 Tempo de leitura: ~{calculateReadTime()} min</p>
                <p>📝 Blocos: {postData.content.length}</p>
                <p>🏷️ Tags: {postData.tags.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal de Crop */}
        {showCropModal && imageToCrop && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-[#E8E1D5] flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#8B7355]">Ajustar Imagem de Capa</h3>
                <button
                  onClick={() => {
                    setShowCropModal(false);
                    setImageToCrop(null);
                    setCrop({ x: 0, y: 0 });
                    setZoom(1);
                  }}
                  className="p-2 hover:bg-[#F5F0E8] rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Área de Crop */}
              <div className="relative w-full h-[500px] bg-gray-900 flex items-center justify-center overflow-hidden">
                <img
                  src={imageToCrop}
                  alt="Pré-visualização"
                  className="max-w-full max-h-full object-contain"
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: 'center'
                  }}
                />
              </div>

              {/* Controles */}
              <div className="p-6 border-t border-[#E8E1D5] space-y-4">
                {/* Zoom */}
                <div>
                  <label className="block text-sm font-semibold text-[#8B7355] mb-2">
                    Zoom
                  </label>
                  <div className="flex items-center gap-3">
                    <ZoomOut className="w-5 h-5 text-[#8B7355]" />
                    <input
                      type="range"
                      min={1}
                      max={3}
                      step={0.1}
                      value={zoom}
                      onChange={(e) => setZoom(Number(e.target.value))}
                      className="flex-1"
                    />
                    <ZoomIn className="w-5 h-5 text-[#8B7355]" />
                  </div>
                </div>

                {/* Botões */}
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => {
                      setShowCropModal(false);
                      setImageToCrop(null);
                      setCrop({ x: 0, y: 0 });
                      setZoom(1);
                    }}
                    className="px-6 py-2 border border-[#E8E1D5] text-[#8B7355] rounded-lg hover:bg-[#F5F0E8]"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveCroppedImage}
                    disabled={isUploading}
                    className="px-6 py-2 bg-[#8B7355] text-white rounded-lg hover:bg-[#6B5844] disabled:opacity-50"
                  >
                    {isUploading ? 'Salvando...' : 'Salvar Imagem'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}