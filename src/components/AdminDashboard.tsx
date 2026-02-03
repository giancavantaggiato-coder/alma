import { useState, useEffect } from 'react';
import { Users, UserPlus, TrendingUp, BarChart3, LogOut, Settings, Home, DollarSign, CreditCard, Wallet, ArrowUpCircle, ArrowDownCircle, Calendar, Download, Plus, Filter, FileText } from 'lucide-react';
import Navbar from './Navbar';

interface AdminDashboardProps {
  navigateTo: (page: string) => void;
}

interface StatsData {
  totalAlunos: number;
  novasInscricoes: number;
  crescimentoMensal: number;
  taxaAtivacao: number;
}

export default function AdminDashboard({ navigateTo }: AdminDashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [stats, setStats] = useState<StatsData>({
    totalAlunos: 0,
    novasInscricoes: 0,
    crescimentoMensal: 0,
    taxaAtivacao: 0
  });
  const [powerBiUrl, setPowerBiUrl] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  // Simular carregamento de estatísticas
  useEffect(() => {
    if (isAuthenticated) {
      // Aqui você conectaria ao backend para buscar dados reais
      setStats({
        totalAlunos: 247,
        novasInscricoes: 18,
        crescimentoMensal: 12.5,
        taxaAtivacao: 87.3
      });

      // Carregar URL do Power BI salva (localStorage)
      const savedUrl = localStorage.getItem('powerbi_embed_url');
      if (savedUrl) {
        setPowerBiUrl(savedUrl);
      }
    }
  }, [isAuthenticated]);

  // Verificar se já existe autenticação salva ao carregar o componente
  useEffect(() => {
    const savedAuth = localStorage.getItem('admin_auth');
    if (savedAuth) {
      const authData = JSON.parse(savedAuth);
      if (authData.username === 'admin@alma.com' && authData.password === 'alma2024') {
        setIsAuthenticated(true);
        setUsername(authData.username);
        setPassword(authData.password);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Autenticação simples (em produção, use backend seguro)
    if (username === 'admin@alma.com' && password === 'alma2024') {
      setIsAuthenticated(true);
      setError('');
      // Salvar autenticação no localStorage
      localStorage.setItem('admin_auth', JSON.stringify({ username, password }));
    } else {
      setError('Credenciais inválidas');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    // Remover autenticação do localStorage
    localStorage.removeItem('admin_auth');
    // Redirecionar para a página de acesso
    if (navigateTo) {
      navigateTo('acesso');
    }
  };

  const handleSavePowerBiUrl = () => {
    localStorage.setItem('powerbi_embed_url', powerBiUrl);
    setShowSettings(false);
    alert('URL do Power BI salva com sucesso!');
  };

  // Tela de Login
  if (!isAuthenticated) {
    return (
      <>
        <Navbar currentPage="admin" navigateTo={navigateTo} />
        <div className="min-h-screen bg-gradient-to-br from-[#fefbf3] to-[#f5e6d3] flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-black mb-2">Admin Dashboard</h1>
              <p className="text-gray-600">Acesse o painel administrativo</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Usuário
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="admin"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Entrar
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => navigateTo('inicio')}
                className="text-gray-600 hover:text-black transition-colors text-sm flex items-center justify-center gap-2 mx-auto"
              >
                <Home className="w-4 h-4" />
                Voltar para o site
              </button>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500 text-center">
                <strong>Credenciais padrão:</strong><br />
                Usuário: admin@alma.com | Senha: alma2024
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Modal de Configurações
  if (showSettings) {
    return (
      <>
        <Navbar currentPage="admin" navigateTo={navigateTo} />
        <div className="min-h-screen bg-[#fefbf3] py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Configurações do Power BI</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="powerbi-url" className="block text-sm font-medium text-gray-700 mb-2">
                    URL do Relatório Power BI
                  </label>
                  <input
                    id="powerbi-url"
                    type="text"
                    value={powerBiUrl}
                    onChange={(e) => setPowerBiUrl(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
                    placeholder="https://app.powerbi.com/view?r=..."
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Cole aqui a URL de embed do seu relatório Power BI. 
                    <a 
                      href="https://learn.microsoft.com/pt-br/power-bi/collaborate-share/service-embed-secure" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-black underline ml-1"
                    >
                      Saiba como obter →
                    </a>
                  </p>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">📊 Como configurar seu Power BI:</h3>
                  <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
                    <li>Acesse seu workspace no Power BI</li>
                    <li>Publique seu relatório de controle de alunos</li>
                    <li>Clique em "Arquivo" → "Inserir relatório" → "Site ou portal"</li>
                    <li>Copie a URL gerada e cole acima</li>
                    <li>Clique em "Salvar configurações"</li>
                  </ol>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleSavePowerBiUrl}
                    className="flex-1 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Salvar Configurações
                  </button>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="px-6 py-3 border-2 border-black rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Dashboard Principal
  return (
    <>
      <Navbar currentPage="admin" navigateTo={navigateTo} />
      <div className="min-h-screen bg-[#fefbf3]">
        {/* Header */}
        <div className="bg-white border-b-2 border-gray-200 px-8 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-black">Dashboard Administrativo</h1>
              <p className="text-gray-600 mt-1">Controle e análise de alunos inscritos</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center gap-2 px-4 py-2 border-2 border-black rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Settings className="w-5 h-5" />
                Configurar Power BI
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Sair
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Menu Principal - Ações Rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <button
              onClick={() => navigateTo('admin')}
              className="bg-white border-4 border-black rounded-xl p-8 hover:bg-black hover:text-white transition-all duration-300 text-left group shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              <Users className="w-12 h-12 mb-4 group-hover:text-white" />
              <h3 className="font-bold text-2xl mb-2">Inscrições Recebidas</h3>
              <p className="text-gray-600 group-hover:text-gray-200">
                Gerenciar lista completa de alunos inscritos e controlar vencimentos
              </p>
            </button>

            <button
              onClick={() => navigateTo('adminfinanceiro')}
              className="bg-white border-4 border-green-600 rounded-xl p-8 hover:bg-green-600 hover:text-white transition-all duration-300 text-left group shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              <DollarSign className="w-12 h-12 mb-4 text-green-600 group-hover:text-white" />
              <h3 className="font-bold text-2xl mb-2">Gestão Financeira</h3>
              <p className="text-gray-600 group-hover:text-gray-200">
                Controle completo de receitas, despesas e fluxo de caixa
              </p>
            </button>

            <button
              onClick={() => navigateTo('admintextos')}
              className="bg-white border-4 border-blue-600 rounded-xl p-8 hover:bg-blue-600 hover:text-white transition-all duration-300 text-left group shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              <FileText className="w-12 h-12 mb-4 text-blue-600 group-hover:text-white" />
              <h3 className="font-bold text-2xl mb-2">Editor de Textos</h3>
              <p className="text-gray-600 group-hover:text-gray-200">
                Edite todos os textos do site em um só lugar
              </p>
            </button>

            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="bg-white border-4 border-black rounded-xl p-8 hover:bg-black hover:text-white transition-all duration-300 text-left group shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              <BarChart3 className="w-12 h-12 mb-4 group-hover:text-white" />
              <h3 className="font-bold text-2xl mb-2">Dashboard Power BI</h3>
              <p className="text-gray-600 group-hover:text-gray-200">
                Visualizar relatórios e métricas detalhadas
              </p>
            </button>
          </div>

          {/* Power BI Embed */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-black">Relatório Power BI</h2>
              {!powerBiUrl && (
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Settings className="w-5 h-5" />
                  Configurar agora
                </button>
              )}
            </div>

            {powerBiUrl ? (
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  title="Relatório Power BI - Controle de Alunos"
                  src={powerBiUrl}
                  className="absolute inset-0 w-full h-full border-2 border-gray-200 rounded-lg"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Power BI não configurado
                </h3>
                <p className="text-gray-600 mb-6">
                  Configure a URL do seu relatório Power BI para visualizar os dados detalhados dos alunos
                </p>
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
                >
                  <Settings className="w-5 h-5" />
                  Configurar Power BI
                </button>

                <div className="mt-8 bg-white border-2 border-gray-200 rounded-lg p-6 text-left max-w-2xl mx-auto">
                  <h4 className="font-semibold text-gray-900 mb-3">💡 Sugestões de métricas para seu relatório:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Evolução de inscrições por mês/semana</li>
                    <li>• Distribuição geográfica dos alunos</li>
                    <li>• Análise de perfil demográfico</li>
                    <li>• Taxa de conversão do formulário</li>
                    <li>• Origem de tráfego dos alunos</li>
                    <li>• Trabalhos publicados por aluno</li>
                    <li>• Engajamento e atividade no site</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}