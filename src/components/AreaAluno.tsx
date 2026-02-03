import { useState, useEffect } from 'react';
import { 
  User, 
  BookOpen, 
  Target, 
  Award, 
  Calendar, 
  Image as ImageIcon,
  LogOut,
  Home,
  FileText,
  Edit2,
  Save,
  X,
  Camera,
  Mail,
  Phone,
  Instagram,
  Globe,
  Link as LinkIcon,
  Eye,
  EyeOff,
  CheckCircle2,
  Clock,
  Star,
  ArrowLeft,
  AlertCircle,
  AlertTriangle,
  CreditCard,
  BarChart3
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { PagamentoMensalidade } from './PagamentoMensalidade';
import { ReagendarAula } from './ReagendarAula';
import CriarPostBlog from './CriarPostBlog';

interface AreaAlunoProps {
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
  dataVencimento?: string;
}

interface Atividade {
  id: string;
  tipo: 'aula' | 'entrega' | 'feedback' | 'conquista';
  titulo: string;
  descricao: string;
  data: string;
  status: 'concluido' | 'pendente' | 'em_progresso';
}

interface Progresso {
  modulosCompletos: number;
  modulosTotal: number;
  aulasAssistidas: number;
  aulasTotal: number;
  trabalhosEntregues: number;
  trabalhosTotal: number;
  percentualGeral: number;
}

export default function AreaAluno({ navigateTo }: AreaAlunoProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isTogglingVisibility, setIsTogglingVisibility] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const [profile, setProfile] = useState<UserProfile>({
    id: 'user_exemplo',
    nome: '',
    email: '',
    telefone: '',
    bio: '',
    periodo: 'Desde 2024',
    meios: '',
    portfolio: '',
    instagram: '',
    substack: '',
    fotoPerfil: '',
    tags: [],
    galeria: [],
    sobreTexto: [],
    perfilVisivel: true
  });

  const [editedProfile, setEditedProfile] = useState<UserProfile>(profile);

  const [progresso, setProgresso] = useState<Progresso>({
    modulosCompletos: 2,
    modulosTotal: 6,
    aulasAssistidas: 15,
    aulasTotal: 36,
    trabalhosEntregues: 8,
    trabalhosTotal: 12,
    percentualGeral: 42
  });

  const [atividades, setAtividades] = useState<Atividade[]>([
    {
      id: '1',
      tipo: 'aula',
      titulo: 'Fundamentos da Composição',
      descricao: 'Aula sobre regra dos terços e pontos focais',
      data: '2024-01-20',
      status: 'concluido'
    },
    {
      id: '2',
      tipo: 'entrega',
      titulo: 'Exercício de Luz e Sombra',
      descricao: 'Entrega do trabalho prático',
      data: '2024-01-18',
      status: 'concluido'
    },
    {
      id: '3',
      tipo: 'feedback',
      titulo: 'Avaliação do Portfólio',
      descricao: 'Feedback recebido sobre seus trabalhos',
      data: '2024-01-15',
      status: 'concluido'
    },
    {
      id: '4',
      tipo: 'entrega',
      titulo: 'Projeto Final - Módulo 2',
      descricao: 'Criar composição completa aplicando técnicas',
      data: '2024-01-25',
      status: 'pendente'
    }
  ]);

  useEffect(() => {
    loadUserData();
    
    // Verificar se é administrador
    const userEmail = localStorage.getItem('userEmail');
    const adminEmails = [
      'admin@almatatelier.com',
      'contato@almatatelier.com',
      // Adicione outros emails de admin aqui
    ];
    setIsAdmin(userEmail ? adminEmails.includes(userEmail.toLowerCase()) : false);
  }, []);

  const loadUserData = async () => {
    try {
      const userName = localStorage.getItem('userName');
      const userEmail = localStorage.getItem('userEmail');
      
      if (userName || userEmail) {
        setProfile(prev => ({
          ...prev,
          nome: userName || 'Aluno',
          email: userEmail || ''
        }));
        setEditedProfile(prev => ({
          ...prev,
          nome: userName || 'Aluno',
          email: userEmail || ''
        }));
      }

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
        if (data.perfil) {
          setProfile(data.perfil);
          setEditedProfile(data.perfil);
        }
      }
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
    }
  };

  const handleSaveProfile = async () => {
    setIsSaving(true);
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-625cbc27/perfil`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ perfil: editedProfile }),
        }
      );

      if (response.ok) {
        setProfile(editedProfile);
        setIsEditing(false);
        toast.success('Perfil atualizado com sucesso!');
        
        localStorage.setItem('userName', editedProfile.nome);
        localStorage.setItem('userEmail', editedProfile.email);
      } else {
        toast.error('Erro ao salvar perfil');
      }
    } catch (error) {
      console.error('Erro ao salvar perfil:', error);
      toast.error('Erro ao salvar perfil');
    } finally {
      setIsSaving(false);
    }
  };

  const handleToggleVisibility = async () => {
    setIsTogglingVisibility(true);
    
    try {
      const newVisibility = !profile.perfilVisivel;
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-625cbc27/perfil`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            perfil: { ...profile, perfilVisivel: newVisibility } 
          }),
        }
      );

      if (response.ok) {
        setProfile(prev => ({ ...prev, perfilVisivel: newVisibility }));
        setEditedProfile(prev => ({ ...prev, perfilVisivel: newVisibility }));
        toast.success(
          newVisibility 
            ? 'Seu perfil agora está visível no site!' 
            : 'Seu perfil foi ocultado do site'
        );
      } else {
        toast.error('Erro ao alterar visibilidade');
      }
    } catch (error) {
      console.error('Erro ao alterar visibilidade:', error);
      toast.error('Erro ao alterar visibilidade');
    } finally {
      setIsTogglingVisibility(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    toast.success('Logout realizado com sucesso!');
    setTimeout(() => {
      navigateTo('acesso');
    }, 1000);
  };

  const getIconForAtividade = (tipo: Atividade['tipo']) => {
    switch (tipo) {
      case 'aula':
        return <BookOpen className="w-5 h-5" />;
      case 'entrega':
        return <FileText className="w-5 h-5" />;
      case 'feedback':
        return <Star className="w-5 h-5" />;
      case 'conquista':
        return <Award className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  const getStatusBadge = (status: Atividade['status']) => {
    switch (status) {
      case 'concluido':
        return <Badge className="bg-green-500">Concluído</Badge>;
      case 'pendente':
        return <Badge className="bg-yellow-500">Pendente</Badge>;
      case 'em_progresso':
        return <Badge className="bg-blue-500">Em Progresso</Badge>;
      default:
        return null;
    }
  };

  const getVencimentoStatus = () => {
    if (!profile.dataVencimento) {
      return null;
    }

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    
    const vencimento = new Date(profile.dataVencimento);
    vencimento.setHours(0, 0, 0, 0);
    
    const diffTime = vencimento.getTime() - hoje.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return {
        tipo: 'vencido',
        dias: Math.abs(diffDays),
        titulo: '⚠️ Mensalidade Vencida',
        mensagem: `Sua mensalidade venceu há ${Math.abs(diffDays)} dia(s). Entre em contato com a secretaria para regularizar sua situação.`,
        cor: 'bg-red-50 border-red-300',
        textoCor: 'text-red-900',
        icon: AlertCircle
      };
    } else if (diffDays === 0) {
      return {
        tipo: 'hoje',
        dias: 0,
        titulo: '📅 Mensalidade Vence Hoje',
        mensagem: 'Sua mensalidade vence hoje! Não se esqueça de realizar o pagamento para manter seu acesso às aulas.',
        cor: 'bg-orange-50 border-orange-300',
        textoCor: 'text-orange-900',
        icon: Calendar
      };
    } else if (diffDays <= 7) {
      return {
        tipo: 'proximo',
        dias: diffDays,
        titulo: '⏰ Mensalidade Próxima do Vencimento',
        mensagem: `Sua mensalidade vence em ${diffDays} dia(s). Lembre-se de realizar o pagamento em breve!`,
        cor: 'bg-yellow-50 border-yellow-300',
        textoCor: 'text-yellow-900',
        icon: AlertTriangle
      };
    }

    return null;
  };

  const formatarDataVencimento = (dataISO: string) => {
    const data = new Date(dataISO);
    return data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const CalendarioVencimento = () => {
    if (!profile.dataVencimento) return null;

    const hoje = new Date();
    const vencimento = new Date(profile.dataVencimento);
    
    const primeiroDia = new Date(vencimento.getFullYear(), vencimento.getMonth(), 1);
    const ultimoDia = new Date(vencimento.getFullYear(), vencimento.getMonth() + 1, 0);
    const primeiroDiaSemana = primeiroDia.getDay();
    const diasNoMes = ultimoDia.getDate();
    const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    
    const dias = [];
    for (let i = 0; i < primeiroDiaSemana; i++) {
      dias.push(null);
    }
    for (let dia = 1; dia <= diasNoMes; dia++) {
      dias.push(dia);
    }
    
    const mesNome = vencimento.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
    const diaVencimento = vencimento.getDate();
    
    return (
      <Card className="border-2 border-[#c8b372] shadow-lg">
        <CardHeader className="pb-4 bg-gradient-to-br from-[#c8b372] to-[#a8935f]">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="font-['DM_Sans:Bold',sans-serif] text-white text-xl">
                📅 Calendário de Vencimento
              </CardTitle>
              <CardDescription className="font-['DM_Sans:Regular',sans-serif] text-white/90 text-sm mt-1">
                {mesNome.charAt(0).toUpperCase() + mesNome.slice(1)}
              </CardDescription>
            </div>
            <Calendar className="w-8 h-8 text-white" />
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-7 gap-2 mb-3">
            {diasSemana.map((dia, index) => (
              <div 
                key={index} 
                className="text-center font-['DM_Sans:Bold',sans-serif] text-xs text-gray-600 pb-2"
              >
                {dia}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {dias.map((dia, index) => {
              if (dia === null) {
                return <div key={index} className="aspect-square" />;
              }
              
              const isDiaVencimento = dia === diaVencimento;
              const dataAtual = new Date(vencimento.getFullYear(), vencimento.getMonth(), dia);
              const isHoje = 
                dataAtual.getDate() === hoje.getDate() && 
                dataAtual.getMonth() === hoje.getMonth() && 
                dataAtual.getFullYear() === hoje.getFullYear();
              const isPast = dataAtual < hoje && !isHoje;
              
              return (
                <div
                  key={index}
                  className={`
                    aspect-square flex items-center justify-center rounded-lg font-['DM_Sans:Medium',sans-serif] text-sm
                    transition-all duration-300 cursor-default
                    ${isDiaVencimento 
                      ? 'bg-gradient-to-br from-red-500 to-red-600 text-white font-bold shadow-lg scale-110 ring-4 ring-red-200 animate-pulse' 
                      : isHoje
                      ? 'bg-black text-white font-bold ring-2 ring-black'
                      : isPast
                      ? 'text-gray-300'
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                  title={isDiaVencimento ? `Vencimento: ${formatarDataVencimento(profile.dataVencimento!)}` : ''}
                >
                  {dia}
                  {isDiaVencimento && (
                    <div className="absolute -top-1 -right-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-red-500 to-red-600" />
              <span className="font-['DM_Sans:Regular',sans-serif] text-gray-700">
                Data de Vencimento da Mensalidade
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-black" />
              <span className="font-['DM_Sans:Regular',sans-serif] text-gray-700">
                Hoje
              </span>
            </div>
          </div>
          
          <div className="mt-4 p-4 rounded-lg bg-[#fef8e8] border border-[#c8b372]">
            <p className="font-['DM_Sans:Medium',sans-serif] text-sm text-gray-800">
              💰 Vencimento: <strong>{formatarDataVencimento(profile.dataVencimento)}</strong>
            </p>
            <p className="font-['DM_Sans:Regular',sans-serif] text-xs text-gray-600 mt-2">
              Mantenha sua mensalidade em dia para continuar aproveitando todas as aulas e benefícios do atelier.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-[#fefbf3] flex flex-col">
      <Navbar currentPage="area-aluno" navigateTo={navigateTo} />
      
      <div className="flex-1 px-4 py-8 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-col gap-4">
              <div className="mb-2 flex flex-col sm:flex-row gap-2">
                <Button 
                  onClick={() => navigateTo('inicio')}
                  variant="outline"
                  className="font-['DM_Sans:Medium',sans-serif] border-2 border-gray-300 hover:border-black hover:bg-gray-50"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Voltar ao site
                </Button>
                {isAdmin && (
                  <Button
                    onClick={() => navigateTo('dashboardadmin')}
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-['DM_Sans:Medium',sans-serif] border-0 shadow-lg"
                  >
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Dashboard Administrativo
                  </Button>
                )}
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="font-['DM_Sans:Bold',sans-serif] text-4xl mb-2 text-black">
                    Área do Aluno
                  </h1>
                  <p className="font-['DM_Sans:Regular',sans-serif] text-lg text-gray-600">
                    Bem-vindo, {profile.nome || 'Aluno'}!
                  </p>
                </div>
                <Button 
                  onClick={handleLogout}
                  variant="outline"
                  className="border-2 border-black hover:bg-black hover:text-white font-['DM_Sans:Medium',sans-serif]"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sair
                </Button>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Geral</span>
              </TabsTrigger>
              <TabsTrigger value="perfil" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Meu Perfil</span>
              </TabsTrigger>
              <TabsTrigger value="blog" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Blog</span>
              </TabsTrigger>
              <TabsTrigger value="pagamento" className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                <span className="hidden sm:inline">Pagamento</span>
              </TabsTrigger>
            </TabsList>

            {/* Aba Geral */}
            <TabsContent value="dashboard" className="space-y-6">
              {(() => {
                const vencimentoStatus = getVencimentoStatus();
                if (!vencimentoStatus) return null;
                
                const IconComponent = vencimentoStatus.icon;
                
                return (
                  <Card className={`border-2 ${vencimentoStatus.cor}`}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full bg-white border-2 ${vencimentoStatus.cor}`}>
                          <IconComponent className={`w-6 h-6 ${vencimentoStatus.textoCor}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-['DM_Sans:Bold',sans-serif] text-lg mb-2 ${vencimentoStatus.textoCor}`}>
                            {vencimentoStatus.titulo}
                          </h3>
                          <p className={`font-['DM_Sans:Regular',sans-serif] text-sm ${vencimentoStatus.textoCor} mb-3`}>
                            {vencimentoStatus.mensagem}
                          </p>
                          {profile.dataVencimento && (
                            <div className={`flex items-center gap-2 text-sm font-['DM_Sans:Medium',sans-serif] ${vencimentoStatus.textoCor}`}>
                              <Calendar className="w-4 h-4" />
                              <span>
                                Data de Vencimento: {formatarDataVencimento(profile.dataVencimento)}
                              </span>
                            </div>
                          )}
                          {vencimentoStatus.tipo === 'vencido' && (
                            <div className="mt-4">
                              <Button
                                onClick={() => navigateTo('contato')}
                                className="bg-red-600 hover:bg-red-700 text-white font-['DM_Sans:Medium',sans-serif]"
                              >
                                Entrar em Contato
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })()}

              <CalendarioVencimento />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-['DM_Sans:Medium',sans-serif] text-gray-600">
                      Módulos Completos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-3xl font-['DM_Sans:Bold',sans-serif]">
                          {progresso.modulosCompletos}/{progresso.modulosTotal}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {Math.round((progresso.modulosCompletos / progresso.modulosTotal) * 100)}% concluído
                        </p>
                      </div>
                      <BookOpen className="w-12 h-12 text-gray-300" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-['DM_Sans:Medium',sans-serif] text-gray-600">
                      Aulas Assistidas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-3xl font-['DM_Sans:Bold',sans-serif]">
                          {progresso.aulasAssistidas}/{progresso.aulasTotal}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {Math.round((progresso.aulasAssistidas / progresso.aulasTotal) * 100)}% concluído
                        </p>
                      </div>
                      <Target className="w-12 h-12 text-gray-300" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-['DM_Sans:Medium',sans-serif] text-gray-600">
                      Trabalhos Entregues
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-3xl font-['DM_Sans:Bold',sans-serif]">
                          {progresso.trabalhosEntregues}/{progresso.trabalhosTotal}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {Math.round((progresso.trabalhosEntregues / progresso.trabalhosTotal) * 100)}% concluído
                        </p>
                      </div>
                      <Award className="w-12 h-12 text-gray-300" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="font-['DM_Sans:SemiBold',sans-serif]">
                    Progresso Geral
                  </CardTitle>
                  <CardDescription className="font-['DM_Sans:Regular',sans-serif]">
                    Seu desempenho no curso
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-['DM_Sans:Medium',sans-serif]">
                          Progresso Total
                        </span>
                        <span className="text-sm font-['DM_Sans:Bold',sans-serif]">
                          {progresso.percentualGeral}%
                        </span>
                      </div>
                      <Progress value={progresso.percentualGeral} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-['DM_Sans:SemiBold',sans-serif]">
                    Atividades Recentes
                  </CardTitle>
                  <CardDescription className="font-['DM_Sans:Regular',sans-serif]">
                    Últimas atualizações do seu curso
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {atividades.map((atividade) => (
                      <div 
                        key={atividade.id}
                        className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                      >
                        <div className="mt-1">
                          {getIconForAtividade(atividade.tipo)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="font-['DM_Sans:Medium',sans-serif] text-base">
                                {atividade.titulo}
                              </h4>
                              <p className="text-sm text-gray-600 font-['DM_Sans:Regular',sans-serif] mt-1">
                                {atividade.descricao}
                              </p>
                              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(atividade.data).toLocaleDateString('pt-BR')}
                              </p>
                            </div>
                            {getStatusBadge(atividade.status)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-['DM_Sans:SemiBold',sans-serif]">
                    Próximas Aulas
                  </CardTitle>
                  <CardDescription className="font-['DM_Sans:Regular',sans-serif]">
                    Continue seu aprendizado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left h-auto p-4"
                    >
                      <div className="flex-1">
                        <p className="font-['DM_Sans:Medium',sans-serif]">Módulo 3: Cores e Teoria</p>
                        <p className="text-sm text-gray-600 font-['DM_Sans:Regular',sans-serif] mt-1">
                          Próxima aula disponível
                        </p>
                      </div>
                      <Clock className="w-5 h-5 text-gray-400" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-['DM_Sans:SemiBold',sans-serif]">
                    Horários das Aulas
                  </CardTitle>
                  <CardDescription className="font-['DM_Sans:Regular',sans-serif]">
                    Cronograma semanal de aulas presenciais
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { dia: 'Segunda-feira', horario: '14:00 - 17:00', tipo: 'Fundamentos e Desenho' },
                      { dia: 'Terça-feira', horario: '14:00 - 17:00', tipo: 'Composição e Perspectiva' },
                      { dia: 'Quarta-feira', horario: '14:00 - 17:00', tipo: 'Cores e Teoria' },
                      { dia: 'Quinta-feira', horario: '14:00 - 17:00', tipo: 'Prática Livre e Orientação' },
                      { dia: 'Sexta-feira', horario: '14:00 - 17:00', tipo: 'Luz, Sombra e Técnicas' },
                    ].map((aula, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg border-2 border-gray-200 hover:border-black transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-['DM_Sans:Bold',sans-serif] text-sm">
                            {aula.dia.substring(0, 3).toUpperCase()}
                          </div>
                          <div>
                            <h4 className="font-['DM_Sans:Medium',sans-serif] text-base">
                              {aula.dia}
                            </h4>
                            <p className="text-sm text-gray-600 font-['DM_Sans:Regular',sans-serif] mt-1">
                              {aula.tipo}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-right">
                          <Clock className="w-5 h-5 text-gray-400" />
                          <span className="font-['DM_Sans:Medium',sans-serif] text-base">
                            {aula.horario}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 rounded-lg bg-yellow-50 border-2 border-yellow-200">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h5 className="font-['DM_Sans:Medium',sans-serif] text-sm text-yellow-900">
                          Informações Importantes
                        </h5>
                        <ul className="text-sm text-yellow-800 font-['DM_Sans:Regular',sans-serif] mt-2 space-y-1 list-disc list-inside">
                          <li>Chegue com 10 minutos de antecedência</li>
                          <li>Traga seus materiais de desenho</li>
                          <li>As aulas online estão disponíveis 24/7 na plataforma</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <ReagendarAula />
            </TabsContent>

            {/* Aba Meu Perfil */}
            <TabsContent value="perfil" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {isEditing && (
                        <Button
                          onClick={() => {
                            setIsEditing(false);
                            setEditedProfile(profile);
                          }}
                          variant="ghost"
                          size="sm"
                          className="hover:bg-gray-100"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </Button>
                      )}
                      <div>
                        <CardTitle className="font-['DM_Sans:SemiBold',sans-serif]">
                          Informações do Perfil
                        </CardTitle>
                        <CardDescription className="font-['DM_Sans:Regular',sans-serif]">
                          Gerencie suas informações pessoais
                        </CardDescription>
                      </div>
                    </div>
                    {!isEditing ? (
                      <Button 
                        onClick={() => setIsEditing(true)}
                        variant="outline"
                        className="border-2 border-black hover:bg-black hover:text-white"
                      >
                        <Edit2 className="w-4 h-4 mr-2" />
                        Editar
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button 
                          onClick={handleSaveProfile}
                          disabled={isSaving}
                          className="bg-black hover:bg-gray-800"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          {isSaving ? 'Salvando...' : 'Salvar'}
                        </Button>
                        <Button 
                          onClick={() => {
                            setIsEditing(false);
                            setEditedProfile(profile);
                          }}
                          variant="outline"
                        >
                          <X className="w-4 h-4 mr-2" />
                          Cancelar
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="font-['DM_Sans:Medium',sans-serif] mb-3 block">
                      Foto de Perfil
                    </Label>
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                        {profile.fotoPerfil ? (
                          <img 
                            src={profile.fotoPerfil} 
                            alt="Foto de perfil" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-12 h-12 text-gray-400" />
                        )}
                      </div>
                      {isEditing && (
                        <Button 
                          variant="outline"
                          onClick={() => navigateTo('perfil')}
                        >
                          <Camera className="w-4 h-4 mr-2" />
                          Alterar Foto
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="font-['DM_Sans:Medium',sans-serif]">
                        Nome Completo
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="nome"
                          value={isEditing ? editedProfile.nome : profile.nome}
                          onChange={(e) => setEditedProfile({ ...editedProfile, nome: e.target.value })}
                          disabled={!isEditing}
                          className="pl-10 font-['DM_Sans:Regular',sans-serif]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-['DM_Sans:Medium',sans-serif]">
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          value={isEditing ? editedProfile.email : profile.email}
                          onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                          disabled={!isEditing}
                          className="pl-10 font-['DM_Sans:Regular',sans-serif]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefone" className="font-['DM_Sans:Medium',sans-serif]">
                        Telefone
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="telefone"
                          value={isEditing ? editedProfile.telefone : profile.telefone}
                          onChange={(e) => setEditedProfile({ ...editedProfile, telefone: e.target.value })}
                          disabled={!isEditing}
                          placeholder="(00) 00000-0000"
                          className="pl-10 font-['DM_Sans:Regular',sans-serif]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="periodo" className="font-['DM_Sans:Medium',sans-serif]">
                        Período no Ateliê
                      </Label>
                      <Input
                        id="periodo"
                        value={isEditing ? editedProfile.periodo : profile.periodo}
                        onChange={(e) => setEditedProfile({ ...editedProfile, periodo: e.target.value })}
                        disabled={!isEditing}
                        placeholder="Ex: Desde 2024"
                        className="font-['DM_Sans:Regular',sans-serif]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio" className="font-['DM_Sans:Medium',sans-serif]">
                      Sobre Você
                    </Label>
                    <Textarea
                      id="bio"
                      value={isEditing ? editedProfile.bio : profile.bio}
                      onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                      disabled={!isEditing}
                      placeholder="Conte um pouco sobre você e seu trabalho artístico..."
                      rows={4}
                      className="font-['DM_Sans:Regular',sans-serif] resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="meios" className="font-['DM_Sans:Medium',sans-serif]">
                      Meios Artísticos
                    </Label>
                    <Input
                      id="meios"
                      value={isEditing ? editedProfile.meios : profile.meios}
                      onChange={(e) => setEditedProfile({ ...editedProfile, meios: e.target.value })}
                      disabled={!isEditing}
                      placeholder="Ex: Desenho, pintura, aquarela"
                      className="font-['DM_Sans:Regular',sans-serif]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="instagram" className="font-['DM_Sans:Medium',sans-serif]">
                        Instagram
                      </Label>
                      <div className="relative">
                        <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="instagram"
                          value={isEditing ? editedProfile.instagram : profile.instagram}
                          onChange={(e) => setEditedProfile({ ...editedProfile, instagram: e.target.value })}
                          disabled={!isEditing}
                          placeholder="@seuusuario"
                          className="pl-10 font-['DM_Sans:Regular',sans-serif]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="portfolio" className="font-['DM_Sans:Medium',sans-serif]">
                        Portfólio
                      </Label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="portfolio"
                          value={isEditing ? editedProfile.portfolio : profile.portfolio}
                          onChange={(e) => setEditedProfile({ ...editedProfile, portfolio: e.target.value })}
                          disabled={!isEditing}
                          placeholder="www.seusite.com"
                          className="pl-10 font-['DM_Sans:Regular',sans-serif]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="substack" className="font-['DM_Sans:Medium',sans-serif]">
                        Substack
                      </Label>
                      <div className="relative">
                        <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="substack"
                          value={isEditing ? editedProfile.substack : profile.substack}
                          onChange={(e) => setEditedProfile({ ...editedProfile, substack: e.target.value })}
                          disabled={!isEditing}
                          placeholder="seusubstack.substack.com"
                          className="pl-10 font-['DM_Sans:Regular',sans-serif]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="font-['DM_Sans:Medium',sans-serif] text-base">
                          Visibilidade do Perfil
                        </Label>
                        <p className="text-sm text-gray-600 font-['DM_Sans:Regular',sans-serif] mt-1">
                          {profile.perfilVisivel 
                            ? 'Seu perfil está visível na página de Trabalhos dos Alunos' 
                            : 'Seu perfil está oculto do site'}
                        </p>
                      </div>
                      <Button
                        onClick={handleToggleVisibility}
                        disabled={isTogglingVisibility}
                        variant={profile.perfilVisivel ? "default" : "outline"}
                        className={profile.perfilVisivel 
                          ? "bg-green-600 hover:bg-green-700" 
                          : "border-2 border-gray-300"}
                      >
                        {profile.perfilVisivel ? (
                          <>
                            <Eye className="w-4 h-4 mr-2" />
                            Visível
                          </>
                        ) : (
                          <>
                            <EyeOff className="w-4 h-4 mr-2" />
                            Oculto
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <Button
                      onClick={() => navigateTo('perfil')}
                      variant="outline"
                      className="w-full border-2 border-black hover:bg-black hover:text-white font-['DM_Sans:Medium',sans-serif]"
                    >
                      <ImageIcon className="w-4 h-4 mr-2" />
                      Gerenciar Galeria de Trabalhos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Aba Blog */}
            <TabsContent value="blog" className="space-y-6">
              <CriarPostBlog 
                onBack={() => setActiveTab('dashboard')}
                authorId={profile.id}
                authorName={profile.nome || 'Aluno'}
              />
            </TabsContent>

            {/* Aba Pagamento */}
            <TabsContent value="pagamento" className="space-y-6">
              <PagamentoMensalidade 
                onVoltar={() => setActiveTab('dashboard')}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer navigateTo={navigateTo} />
    </div>
  );
}