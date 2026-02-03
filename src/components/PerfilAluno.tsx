import { useState, useRef, useEffect } from 'react';
import { Upload, Save, X, Plus, Trash2, Camera, Edit2, Image as ImageIcon, Eye, EyeOff, CreditCard, Copy, Check, QrCode, Home, ArrowLeft, FileText } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { toast } from 'sonner';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from './ui/dialog';
import QRCode from 'qrcode';
import { PagamentoMensalidade } from './PagamentoMensalidade';
import CriarPostBlog from './CriarPostBlog';

// Imagem de perfil genérica como fallback
const DEFAULT_AVATAR = 'https://images.unsplash.com/photo-1585972949678-b7eff107d061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwYXZhdGFyJTIwcGxhY2Vob2xkZXIlMjBzaWxob3VldHRlfGVufDF8fHx8MTc2OTI4NzQyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

interface PerfilAlunoProps {
  navigateTo: (page: string) => void;
}

interface UserProfile {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  bio: string;
  periodo: string;
  meios: string;
  portfolio: string;
  instagram: string;
  substack: string;
  fotoPerfil: string;
  tags: string[];
  galeria: string[];
  sobreTexto: string[];
  perfilVisivel: boolean;
}

export function PerfilAluno({ navigateTo }: PerfilAlunoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showPhotoDialog, setShowPhotoDialog] = useState(false);
  const [showCameraView, setShowCameraView] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isTogglingVisibility, setIsTogglingVisibility] = useState(false);
  const [showCriarPost, setShowCriarPost] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  
  const [profile, setProfile] = useState<UserProfile>({
    id: 'user_exemplo',
    nome: 'Seu Nome',
    email: 'seuemail@exemplo.com',
    telefone: '',
    bio: 'Conte um pouco sobre você e seu trabalho artístico...',
    periodo: 'Desde 2024',
    meios: 'Desenho, pintura',
    portfolio: '',
    instagram: '',
    substack: '',
    fotoPerfil: '',
    tags: ['Desenho', 'Composição'],
    galeria: [],
    sobreTexto: [
      'Escreva aqui sobre sua trajetória artística...',
      'Adicione mais parágrafos para descrever seu processo criativo...'
    ],
    perfilVisivel: true
  });

  const [editedProfile, setEditedProfile] = useState<UserProfile>(profile);
  const [newTag, setNewTag] = useState('');
  const [newParagrafo, setNewParagrafo] = useState('');

  // Carregar perfil do backend
  useEffect(() => {
    loadProfile();
  }, []);

  // Cleanup da câmera quando o componente desmonta ou o dialog fecha
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const loadProfile = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-625cbc27/perfil`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.perfil) {
          setProfile(data.perfil);
          setEditedProfile(data.perfil);
        }
      }
    } catch (error) {
      console.error('Erro ao carregar perfil:', error);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' }, // 'user' para câmera frontal
        audio: false 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (error) {
      console.error('Erro ao acessar câmera:', error);
      alert('Não foi possível acessar a câmera. Verifique as permissões do navegador.');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg', 0.9);
        setCapturedImage(imageData);
        stopCamera();
      }
    }
  };

  const retakePhoto = () => {
    setCapturedImage(null);
    setShowCameraView(true);
    setTimeout(() => startCamera(), 100);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadPhoto = async (imageData: string) => {
    setIsUploading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-625cbc27/upload-foto-perfil`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            imageData: imageData,
            userId: profile.id
          }),
        }
      );

      const data = await response.json();
      
      if (data.success) {
        // Atualizar a foto de perfil
        const updatedProfile = { ...editedProfile, fotoPerfil: data.url };
        setEditedProfile(updatedProfile);
        
        // Se não estiver em modo de edição, salvar imediatamente
        if (!isEditing) {
          await saveProfilePhoto(data.url);
        }
        
        toast.success('Foto enviada com sucesso!');
        closePhotoDialog();
      } else {
        toast.error('Erro ao enviar foto: ' + data.error);
      }
    } catch (error) {
      console.error('Erro ao enviar foto:', error);
      toast.error('Erro ao enviar foto');
    } finally {
      setIsUploading(false);
    }
  };

  const saveProfilePhoto = async (photoUrl: string) => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-625cbc27/perfil`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            ...profile,
            fotoPerfil: photoUrl
          }),
        }
      );

      const data = await response.json();
      
      if (data.success) {
        setProfile({ ...profile, fotoPerfil: photoUrl });
      }
    } catch (error) {
      console.error('Erro ao salvar foto no perfil:', error);
    }
  };

  const closePhotoDialog = () => {
    setShowPhotoDialog(false);
    setShowCameraView(false);
    setCapturedImage(null);
    stopCamera();
  };

  const openPhotoDialog = () => {
    setShowPhotoDialog(true);
  };

  const handleTakeSelfie = () => {
    setShowCameraView(true);
    setTimeout(() => startCamera(), 100);
  };

  const handleImportPhoto = () => {
    fileInputRef.current?.click();
  };

  const confirmPhoto = () => {
    if (capturedImage) {
      uploadPhoto(capturedImage);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-625cbc27/perfil`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(editedProfile),
        }
      );

      const data = await response.json();
      
      if (data.success) {
        setProfile(editedProfile);
        setIsEditing(false);
        toast.success('Perfil salvo com sucesso!');
      } else {
        toast.error('Erro ao salvar perfil: ' + data.error);
      }
    } catch (error) {
      console.error('Erro ao salvar perfil:', error);
      toast.error('Erro ao salvar perfil');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleAddTag = () => {
    if (newTag.trim() && editedProfile.tags.length < 10) {
      setEditedProfile({
        ...editedProfile,
        tags: [...editedProfile.tags, newTag.trim()]
      });
      setNewTag('');
    }
  };

  const handleRemoveTag = (index: number) => {
    setEditedProfile({
      ...editedProfile,
      tags: editedProfile.tags.filter((_, i) => i !== index)
    });
  };

  const handleAddParagrafo = () => {
    if (newParagrafo.trim()) {
      setEditedProfile({
        ...editedProfile,
        sobreTexto: [...editedProfile.sobreTexto, newParagrafo.trim()]
      });
      setNewParagrafo('');
    }
  };

  const handleRemoveParagrafo = (index: number) => {
    setEditedProfile({
      ...editedProfile,
      sobreTexto: editedProfile.sobreTexto.filter((_, i) => i !== index)
    });
  };

  const handleParagrafoChange = (index: number, value: string) => {
    const newSobreTexto = [...editedProfile.sobreTexto];
    newSobreTexto[index] = value;
    setEditedProfile({
      ...editedProfile,
      sobreTexto: newSobreTexto
    });
  };

  const toggleVisibility = async () => {
    setIsTogglingVisibility(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-625cbc27/perfil`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            ...profile,
            perfilVisivel: !profile.perfilVisivel
          }),
        }
      );

      const data = await response.json();
      
      if (data.success) {
        setProfile({ ...profile, perfilVisivel: !profile.perfilVisivel });
        if (!profile.perfilVisivel) {
          toast.success('Perfil agora está visível no site!');
        } else {
          toast.success('Perfil foi ocultado do site.');
        }
      } else {
        toast.error('Erro ao alterar visibilidade do perfil');
      }
    } catch (error) {
      console.error('Erro ao alterar visibilidade do perfil:', error);
      toast.error('Erro ao alterar visibilidade do perfil');
    } finally {
      setIsTogglingVisibility(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fefbf3]">
      {/* Se está criando post, mostrar componente de criar post */}
      {showCriarPost ? (
        <CriarPostBlog 
          onBack={() => setShowCriarPost(false)}
          authorId={profile.id}
          authorName={profile.nome}
        />
      ) : (
        <>
      {/* Header/Navbar */}
      <header className="bg-[#fefbf3] border-b border-[rgba(0,0,0,0.1)]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <h1 
              className="font-['Inter:Medium',sans-serif] text-xl md:text-2xl font-medium cursor-pointer hover:opacity-70 transition-opacity"
              onClick={() => navigateTo('inicio')}
            >
              Atelier
            </h1>
            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => navigateTo('trabalhos')}
                className="font-['DM_Sans:Regular',sans-serif] text-[16px] hover:opacity-70 transition-opacity"
              >
                Trabalhos
              </button>
              <button
                onClick={() => navigateTo('ocurso')}
                className="font-['DM_Sans:Regular',sans-serif] text-[16px] hover:opacity-70 transition-opacity"
              >
                Sobre
              </button>
            </nav>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            {/* Botão Criar Post */}
            <button
              onClick={() => setShowCriarPost(true)}
              className="flex items-center gap-2 px-3 md:px-4 py-2 bg-[#8B7355] text-white hover:bg-[#6B5844] transition-colors text-sm md:text-base rounded"
              title="Criar Post no Blog"
            >
              <FileText className="w-4 h-4" />
              <span className="font-['DM_Sans:Medium',sans-serif] hidden md:inline">Criar Post</span>
            </button>

            {/* Botões de Navegação */}
            <button
              onClick={() => navigateTo('inicio')}
              className="flex items-center gap-2 px-3 md:px-4 py-2 border border-[rgba(0,0,0,0.15)] hover:bg-[rgba(0,0,0,0.05)] transition-colors text-sm md:text-base"
              title="Voltar para a Home"
            >
              <Home className="w-4 h-4" />
              <span className="font-['DM_Sans:Medium',sans-serif] hidden sm:inline">Home</span>
            </button>
            
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-3 md:px-4 py-2 border border-[rgba(0,0,0,0.15)] hover:bg-[rgba(0,0,0,0.05)] transition-colors text-sm md:text-base"
              title="Voltar"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-['DM_Sans:Medium',sans-serif] hidden sm:inline">Voltar</span>
            </button>

            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 bg-black text-white px-4 md:px-6 py-2 hover:bg-[#333] transition-colors text-sm md:text-base"
              >
                <Edit2 className="w-4 h-4" />
                <span className="font-['DM_Sans:Medium',sans-serif] hidden sm:inline">Editar Perfil</span>
                <span className="font-['DM_Sans:Medium',sans-serif] sm:hidden">Editar</span>
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-2 px-3 md:px-6 py-2 border border-[rgba(0,0,0,0.15)] hover:bg-[rgba(0,0,0,0.05)] transition-colors text-sm md:text-base"
                >
                  <X className="w-4 h-4" />
                  <span className="font-['DM_Sans:Medium',sans-serif] hidden sm:inline">Cancelar</span>
                </button>
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex items-center gap-2 bg-[#fae08f] px-3 md:px-6 py-2 hover:bg-[#f5d67a] transition-colors disabled:opacity-50 text-sm md:text-base"
                >
                  <Save className="w-4 h-4" />
                  <span className="font-['DM_Sans:Medium',sans-serif]">
                    {isSaving ? 'Salvando...' : 'Salvar'}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#fefbf3] py-8 md:py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Foto de Perfil */}
            <div className="relative mx-auto md:mx-0">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-[rgba(0,0,0,0.05)] rounded-full overflow-hidden">
                {editedProfile.fotoPerfil ? (
                  <img 
                    src={editedProfile.fotoPerfil} 
                    alt={editedProfile.nome}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Camera className="w-12 h-12 md:w-16 md:h-16 text-[rgba(0,0,0,0.3)]" />
                  </div>
                )}
              </div>
              {isEditing && (
                <button 
                  onClick={openPhotoDialog}
                  className="absolute bottom-4 right-4 bg-[#fae08f] p-3 rounded-full hover:bg-[#f5d67a] transition-colors"
                >
                  <Upload className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Informações Principais */}
            <div className="flex-1 space-y-4 md:space-y-6 w-full">
              <div>
                <p className="font-['DM_Sans:SemiBold',sans-serif] text-[16px] text-black mb-2">
                  Meu Perfil
                </p>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.nome}
                    onChange={(e) => setEditedProfile({ ...editedProfile, nome: e.target.value })}
                    className="font-['Inter:Medium',sans-serif] text-4xl md:text-5xl lg:text-7xl font-medium w-full bg-transparent border-b-2 border-[rgba(0,0,0,0.2)] focus:border-black outline-none pb-2"
                  />
                ) : (
                  <h1 className="font-['Inter:Medium',sans-serif] text-4xl md:text-5xl lg:text-7xl font-medium break-words">
                    {profile.nome}
                  </h1>
                )}
              </div>

              {isEditing ? (
                <textarea
                  value={editedProfile.bio}
                  onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                  rows={3}
                  className="w-full font-['DM_Sans:Regular',sans-serif] text-[18px] md:text-[20px] leading-[1.6] bg-white border border-[rgba(0,0,0,0.15)] p-4 focus:border-black outline-none resize-none"
                />
              ) : (
                <p className="font-['DM_Sans:Regular',sans-serif] text-[18px] md:text-[20px] leading-[1.6] text-black">
                  {profile.bio}
                </p>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {editedProfile.tags.map((tag, index) => (
                  <div key={index} className="relative group">
                    <span className="inline-block bg-[#fae08f] px-3 md:px-4 py-1.5 md:py-2 font-['DM_Sans:Medium',sans-serif] text-[12px] md:text-[14px]">
                      {tag}
                    </span>
                    {isEditing && (
                      <button
                        onClick={() => handleRemoveTag(index)}
                        className="absolute -top-2 -right-2 bg-black text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <div className="flex gap-2 w-full md:w-auto">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                      placeholder="Nova tag..."
                      className="flex-1 md:flex-none bg-white border border-[rgba(0,0,0,0.15)] px-3 md:px-4 py-1.5 md:py-2 font-['DM_Sans:Regular',sans-serif] text-[12px] md:text-[14px] focus:border-black outline-none"
                    />
                    <button
                      onClick={handleAddTag}
                      className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 hover:bg-[#333] transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="bg-white py-8 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-['Inter:Medium',sans-serif] text-2xl md:text-3xl lg:text-4xl font-medium mb-6 md:mb-8">
            Informações de Contato
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="font-['DM_Sans:SemiBold',sans-serif] text-[16px] block mb-2">
                Email
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={editedProfile.email}
                  onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                  className="w-full bg-white border border-[rgba(0,0,0,0.15)] px-4 py-3 font-['DM_Sans:Regular',sans-serif] text-[18px] focus:border-black outline-none"
                />
              ) : (
                <p className="font-['DM_Sans:Regular',sans-serif] text-[18px] text-black">
                  {profile.email}
                </p>
              )}
            </div>

            <div>
              <label className="font-['DM_Sans:SemiBold',sans-serif] text-[16px] block mb-2">
                Telefone/WhatsApp
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editedProfile.telefone}
                  onChange={(e) => setEditedProfile({ ...editedProfile, telefone: e.target.value })}
                  className="w-full bg-white border border-[rgba(0,0,0,0.15)] px-4 py-3 font-['DM_Sans:Regular',sans-serif] text-[18px] focus:border-black outline-none"
                />
              ) : (
                <p className="font-['DM_Sans:Regular',sans-serif] text-[18px] text-black">
                  {profile.telefone || 'Não informado'}
                </p>
              )}
            </div>

            <div>
              <label className="font-['DM_Sans:SemiBold',sans-serif] text-[16px] block mb-2">
                Portfólio
              </label>
              {isEditing ? (
                <input
                  type="url"
                  value={editedProfile.portfolio}
                  onChange={(e) => setEditedProfile({ ...editedProfile, portfolio: e.target.value })}
                  placeholder="seusite.com"
                  className="w-full bg-white border border-[rgba(0,0,0,0.15)] px-4 py-3 font-['DM_Sans:Regular',sans-serif] text-[18px] focus:border-black outline-none"
                />
              ) : (
                <p className="font-['DM_Sans:Regular',sans-serif] text-[18px] text-black">
                  {profile.portfolio || 'Não informado'}
                </p>
              )}
            </div>

            <div>
              <label className="font-['DM_Sans:SemiBold',sans-serif] text-[16px] block mb-2">
                Instagram
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.instagram}
                  onChange={(e) => setEditedProfile({ ...editedProfile, instagram: e.target.value })}
                  placeholder="@seuusuario"
                  className="w-full bg-white border border-[rgba(0,0,0,0.15)] px-4 py-3 font-['DM_Sans:Regular',sans-serif] text-[18px] focus:border-black outline-none"
                />
              ) : (
                <p className="font-['DM_Sans:Regular',sans-serif] text-[18px] text-black">
                  {profile.instagram || 'Não informado'}
                </p>
              )}
            </div>

            <div>
              <label className="font-['DM_Sans:SemiBold',sans-serif] text-[16px] block mb-2">
                Substack
              </label>
              {isEditing ? (
                <input
                  type="url"
                  value={editedProfile.substack}
                  onChange={(e) => setEditedProfile({ ...editedProfile, substack: e.target.value })}
                  placeholder="substack.com/seuusuario"
                  className="w-full bg-white border border-[rgba(0,0,0,0.15)] px-4 py-3 font-['DM_Sans:Regular',sans-serif] text-[18px] focus:border-black outline-none"
                />
              ) : (
                <p className="font-['DM_Sans:Regular',sans-serif] text-[18px] text-black">
                  {profile.substack || 'Não informado'}
                </p>
              )}
            </div>

            <div>
              <label className="font-['DM_Sans:SemiBold',sans-serif] text-[16px] block mb-2">
                Período no Atelier
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.periodo}
                  onChange={(e) => setEditedProfile({ ...editedProfile, periodo: e.target.value })}
                  placeholder="Desde 2024"
                  className="w-full bg-white border border-[rgba(0,0,0,0.15)] px-4 py-3 font-['DM_Sans:Regular',sans-serif] text-[18px] focus:border-black outline-none"
                />
              ) : (
                <p className="font-['DM_Sans:Regular',sans-serif] text-[18px] text-black">
                  {profile.periodo}
                </p>
              )}
            </div>

            <div>
              <label className="font-['DM_Sans:SemiBold',sans-serif] text-[16px] block mb-2">
                Meios e Técnicas
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.meios}
                  onChange={(e) => setEditedProfile({ ...editedProfile, meios: e.target.value })}
                  placeholder="Desenho, pintura, colagem..."
                  className="w-full bg-white border border-[rgba(0,0,0,0.15)] px-4 py-3 font-['DM_Sans:Regular',sans-serif] text-[18px] focus:border-black outline-none"
                />
              ) : (
                <p className="font-['DM_Sans:Regular',sans-serif] text-[18px] text-black">
                  {profile.meios}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pagamento de Mensalidade */}
      <PagamentoMensalidade />

      {/* Visibilidade do Perfil */}
      <section className="bg-[#c8b372] py-8 md:py-12">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-['Inter:Medium',sans-serif] text-2xl md:text-3xl font-medium mb-2 text-black">
                Visibilidade do Perfil no Site
              </h3>
              <p className="font-['DM_Sans:Regular',sans-serif] text-[16px] md:text-[18px] text-black opacity-80">
                {profile.perfilVisivel 
                  ? 'Seu perfil está visível para todos na seção de trabalhos dos alunos.' 
                  : 'Seu perfil est oculto e não aparece na seção de trabalhos dos alunos.'}
              </p>
            </div>
            <button
              onClick={toggleVisibility}
              disabled={isTogglingVisibility}
              className={`flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 font-['DM_Sans:Medium',sans-serif] text-base md:text-lg transition-all disabled:opacity-50 ${
                profile.perfilVisivel 
                  ? 'bg-black text-white hover:bg-[#333]' 
                  : 'bg-white text-black border-2 border-black hover:bg-[rgba(0,0,0,0.05)]'
              }`}
            >
              {profile.perfilVisivel ? (
                <>
                  <Eye className="w-5 h-5" />
                  <span>{isTogglingVisibility ? 'Atualizando...' : 'Perfil Visível'}</span>
                </>
              ) : (
                <>
                  <EyeOff className="w-5 h-5" />
                  <span>{isTogglingVisibility ? 'Atualizando...' : 'Perfil Oculto'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Sobre o Trabalho */}
      <section className="bg-[#fefbf3] py-16">
        <div className="max-w-[1280px] mx-auto px-8 md:px-16">
          <h2 className="font-['Inter:Medium',sans-serif] text-3xl md:text-4xl font-medium mb-8">
            Sobre o Trabalho
          </h2>

          <div className="space-y-6">
            {editedProfile.sobreTexto.map((paragrafo, index) => (
              <div key={index} className="relative group">
                {isEditing ? (
                  <div className="relative">
                    <textarea
                      value={paragrafo}
                      onChange={(e) => handleParagrafoChange(index, e.target.value)}
                      rows={4}
                      className="w-full bg-white border border-[rgba(0,0,0,0.15)] p-4 font-['DM_Sans:Regular',sans-serif] text-[18px] leading-[1.6] focus:border-black outline-none resize-none"
                    />
                    <button
                      onClick={() => handleRemoveParagrafo(index)}
                      className="absolute -top-3 -right-3 bg-black text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <p className="font-['DM_Sans:Regular',sans-serif] text-[18px] leading-[1.6] text-black">
                    {paragrafo}
                  </p>
                )}
              </div>
            ))}

            {isEditing && (
              <div className="space-y-4 pt-4">
                <textarea
                  value={newParagrafo}
                  onChange={(e) => setNewParagrafo(e.target.value)}
                  placeholder="Adicione um novo parágrafo sobre seu trabalho..."
                  rows={4}
                  className="w-full bg-white border-2 border-dashed border-[rgba(0,0,0,0.2)] p-4 font-['DM_Sans:Regular',sans-serif] text-[18px] leading-[1.6] focus:border-black outline-none resize-none"
                />
                <button
                  onClick={handleAddParagrafo}
                  className="flex items-center gap-2 bg-black text-white px-6 py-3 hover:bg-[#333] transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  <span className="font-['DM_Sans:Medium',sans-serif]">Adicionar Parágrafo</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Galeria de Trabalhos */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-8 md:px-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-['Inter:Medium',sans-serif] text-3xl md:text-4xl font-medium">
              Galeria de Trabalhos
            </h2>
            {isEditing && (
              <button className="flex items-center gap-2 bg-[#fae08f] px-6 py-3 hover:bg-[#f5d67a] transition-colors">
                <Upload className="w-5 h-5" />
                <span className="font-['DM_Sans:Medium',sans-serif]">Upload Imagens</span>
              </button>
            )}
          </div>

          {editedProfile.galeria.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {editedProfile.galeria.map((imagem, index) => (
                <div key={index} className="relative group aspect-square bg-[rgba(0,0,0,0.05)] cursor-pointer rounded-lg overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-2">
                  <img 
                    src={imagem} 
                    alt={`Trabalho ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {isEditing && (
                    <button className="absolute top-2 right-2 bg-black text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[rgba(0,0,0,0.02)] border-2 border-dashed border-[rgba(0,0,0,0.1)]">
              <Camera className="w-16 h-16 mx-auto mb-4 text-[rgba(0,0,0,0.3)]" />
              <p className="font-['DM_Sans:Regular',sans-serif] text-[18px] text-[rgba(0,0,0,0.5)]">
                {isEditing ? 'Adicione imagens dos seus trabalhos' : 'Nenhuma imagem adicionada ainda'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fefbf3] border-t border-[rgba(0,0,0,0.1)] py-12">
        <div className="max-w-[1280px] mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-['DM_Sans:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)]">
              © 2024 Atelier. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => navigateTo('contato')}
                className="font-['DM_Sans:Regular',sans-serif] text-[16px] hover:opacity-70 transition-opacity underline"
              >
                Contato
              </button>
              <button
                onClick={() => navigateTo('faq')}
                className="font-['DM_Sans:Regular',sans-serif] text-[16px] hover:opacity-70 transition-opacity underline"
              >
                FAQ
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Dialog para Upload de Foto */}
      <Dialog open={showPhotoDialog} onOpenChange={closePhotoDialog}>
        <DialogContent className="max-w-[500px] mx-auto bg-white p-6">
          <DialogHeader>
            <DialogTitle className="font-['Inter:Medium',sans-serif] text-2xl font-medium mb-2">
              Upload de Foto de Perfil
            </DialogTitle>
            <DialogDescription className="font-['DM_Sans:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)]">
              Escolha uma foto para seu perfil ou tire uma selfie.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {/* Preview da imagem ou câmera */}
            {!capturedImage && !showCameraView ? (
              <div className="w-full h-[300px] bg-[rgba(0,0,0,0.05)] flex items-center justify-center rounded-lg">
                <Camera className="w-16 h-16 text-[rgba(0,0,0,0.3)]" />
              </div>
            ) : showCameraView && !capturedImage ? (
              <div className="relative rounded-lg overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-[300px] object-cover"
                  autoPlay
                  playsInline
                />
                <canvas
                  ref={canvasRef}
                  className="hidden"
                />
                <button
                  onClick={capturePhoto}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#fae08f] p-4 rounded-full hover:bg-[#f5d67a] transition-colors shadow-lg"
                >
                  <Camera className="w-6 h-6" />
                </button>
              </div>
            ) : capturedImage ? (
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={capturedImage}
                  alt="Preview"
                  className="w-full h-[300px] object-cover"
                />
                <button
                  onClick={retakePhoto}
                  className="absolute top-4 right-4 bg-black text-white rounded-full p-2 hover:bg-[#333] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : null}

            {/* Botões de ação */}
            {!showCameraView && !capturedImage && (
              <div className="grid grid-cols-1 gap-3">
                <button
                  onClick={handleTakeSelfie}
                  className="w-full flex items-center justify-center gap-2 bg-[#fae08f] px-6 py-3 hover:bg-[#f5d67a] transition-colors rounded"
                >
                  <Camera className="w-5 h-5" />
                  <span className="font-['DM_Sans:Medium',sans-serif]">Tirar Selfie</span>
                </button>
                <button
                  onClick={handleImportPhoto}
                  className="w-full flex items-center justify-center gap-2 bg-[#fae08f] px-6 py-3 hover:bg-[#f5d67a] transition-colors rounded"
                >
                  <ImageIcon className="w-5 h-5" />
                  <span className="font-['DM_Sans:Medium',sans-serif]\">Importar da Galeria</span>
                </button>
              </div>
            )}

            {/* Input file escondido */}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />

            {/* Botão para enviar foto */}
            {capturedImage && (
              <button
                onClick={confirmPhoto}
                disabled={isUploading}
                className="w-full flex items-center justify-center gap-2 bg-black text-white px-6 py-3 hover:bg-[#333] transition-colors disabled:opacity-50 rounded"
              >
                {isUploading ? (
                  <span className="font-['DM_Sans:Medium',sans-serif]">Enviando...</span>
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    <span className="font-['DM_Sans:Medium',sans-serif]">Confirmar e Enviar</span>
                  </>
                )}
              </button>
            )}
          </div>
        </DialogContent>
      </Dialog>
        </>
      )}
    </div>
  );
}