import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { BarChart3, Trash2, Search, Calendar, AlertCircle, CheckCircle, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';

interface Inscricao {
  id: string;
  nome: string;
  email: string;
  whatsapp: string;
  motivacao: string;
  concordoTermos: boolean;
  dataEnvio: string;
  status: 'nova' | 'em_analise' | 'aprovada' | 'rejeitada';
  dataVencimento?: string; // Data de vencimento da matrícula
}

interface AdminInscricoesProps {
  navigateTo?: (page: string) => void;
}

export function AdminInscricoes({ navigateTo }: AdminInscricoesProps) {
  const [inscricoes, setInscricoes] = useState<Inscricao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [mesAtual, setMesAtual] = useState(new Date());
  const [showCalendarioGeral, setShowCalendarioGeral] = useState(true);

  useEffect(() => {
    carregarInscricoes();
  }, []);

  const carregarInscricoes = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-625cbc27/inscricoes`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao carregar inscrições');
      }

      if (result.success) {
        setInscricoes(result.inscricoes);
      }
    } catch (err) {
      console.error('Erro ao carregar inscrições:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatarData = (dataISO: string) => {
    const data = new Date(dataISO);
    return data.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'nova':
        return 'bg-blue-100 text-blue-800';
      case 'em_analise':
        return 'bg-yellow-100 text-yellow-800';
      case 'aprovada':
        return 'bg-green-100 text-green-800';
      case 'rejeitada':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'nova':
        return 'Nova';
      case 'em_analise':
        return 'Em Análise';
      case 'aprovada':
        return 'Aprovada';
      case 'rejeitada':
        return 'Rejeitada';
      default:
        return status;
    }
  };

  const handleDeleteInscricao = async (id: string, nome: string) => {
    if (!window.confirm(`Tem certeza que deseja excluir a inscrição de "${nome}"? Esta ação não pode ser desfeita.`)) {
      return;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-625cbc27/inscricoes/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao excluir inscrição');
      }

      if (result.success) {
        alert('Inscrição excluída com sucesso!');
        // Atualizar a lista removendo a inscrição excluída
        setInscricoes(inscricoes.filter(i => i.id !== id));
      }
    } catch (err) {
      console.error('Erro ao excluir inscrição:', err);
      alert(`Erro ao excluir inscrição: ${err.message}`);
    }
  };

  const handleUpdateVencimento = async (id: string, dataVencimento: string) => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-625cbc27/inscricoes/${id}/vencimento`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ dataVencimento }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao atualizar vencimento');
      }

      if (result.success) {
        // Atualizar a lista local
        setInscricoes(inscricoes.map(i => 
          i.id === id ? { ...i, dataVencimento } : i
        ));
        alert('Data de vencimento atualizada com sucesso!');
      }
    } catch (err) {
      console.error('Erro ao atualizar vencimento:', err);
      alert(`Erro ao atualizar vencimento: ${err.message}`);
    }
  };

  const getVencimentoStatus = (dataVencimento?: string) => {
    if (!dataVencimento) {
      return { status: 'sem_data', label: 'Não definido', color: 'bg-gray-100 text-gray-800', icon: Calendar };
    }

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    
    const vencimento = new Date(dataVencimento);
    vencimento.setHours(0, 0, 0, 0);
    
    const diffTime = vencimento.getTime() - hoje.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return { 
        status: 'vencido', 
        label: `Vencido há ${Math.abs(diffDays)} dia(s)`, 
        color: 'bg-red-100 text-red-800 border-red-300', 
        icon: AlertCircle 
      };
    } else if (diffDays <= 7) {
      return { 
        status: 'proximo', 
        label: `Vence em ${diffDays} dia(s)`, 
        color: 'bg-yellow-100 text-yellow-800 border-yellow-300', 
        icon: Clock 
      };
    } else {
      return { 
        status: 'ativo', 
        label: `Vence em ${diffDays} dia(s)`, 
        color: 'bg-green-100 text-green-800 border-green-300', 
        icon: CheckCircle 
      };
    }
  };

  const formatarDataInput = (dataISO?: string) => {
    if (!dataISO) return '';
    const data = new Date(dataISO);
    return data.toISOString().split('T')[0];
  };

  const formatarDataExibicao = (dataISO?: string) => {
    if (!dataISO) return 'Não definido';
    const data = new Date(dataISO);
    return data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  // Componente de Calendário para visualização do vencimento
  const CalendarioVencimento = ({ dataVencimento, inscricaoId }: { dataVencimento?: string; inscricaoId: string }) => {
    const [mesExibido, setMesExibido] = useState(dataVencimento ? new Date(dataVencimento) : new Date());
    const [dataSelecionada, setDataSelecionada] = useState(dataVencimento || '');

    const hoje = new Date();
    const vencimento = dataVencimento ? new Date(dataVencimento) : null;
    
    // Obter primeiro e último dia do mês exibido
    const primeiroDia = new Date(mesExibido.getFullYear(), mesExibido.getMonth(), 1);
    const ultimoDia = new Date(mesExibido.getFullYear(), mesExibido.getMonth() + 1, 0);
    
    // Dia da semana do primeiro dia (0 = domingo, 1 = segunda, etc.)
    const primeiroDiaSemana = primeiroDia.getDay();
    
    // Número de dias no mês
    const diasNoMes = ultimoDia.getDate();
    
    // Array de dias da semana
    const diasSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    
    // Criar array de dias do mês
    const dias = [];
    
    // Adicionar espaços vazios antes do primeiro dia
    for (let i = 0; i < primeiroDiaSemana; i++) {
      dias.push(null);
    }
    
    // Adicionar todos os dias do mês
    for (let dia = 1; dia <= diasNoMes; dia++) {
      dias.push(dia);
    }
    
    const mesNome = mesExibido.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
    const diaVencimento = vencimento ? vencimento.getDate() : null;
    
    const handleClickDia = (dia: number) => {
      const novaData = new Date(mesExibido.getFullYear(), mesExibido.getMonth(), dia);
      const dataFormatada = novaData.toISOString().split('T')[0];
      setDataSelecionada(dataFormatada);
      handleUpdateVencimento(inscricaoId, dataFormatada);
    };

    const mudarMes = (direcao: number) => {
      setMesExibido(new Date(mesExibido.getFullYear(), mesExibido.getMonth() + direcao, 1));
    };

    const voltarParaHoje = () => {
      setMesExibido(new Date());
    };
    
    return (
      <div className="bg-white border-2 border-[#c8b372] rounded-lg p-4 shadow-md">
        {/* Header do calendário com navegação */}
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => mudarMes(-1)}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
            title="Mês anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="text-center flex-1">
            <p className="font-['DM_Sans:Bold',sans-serif] text-sm text-gray-800">
              {mesNome.charAt(0).toUpperCase() + mesNome.slice(1)}
            </p>
            <button
              onClick={voltarParaHoje}
              className="text-xs text-blue-600 hover:text-blue-800 transition-colors mt-0.5"
            >
              Hoje
            </button>
          </div>
          <button
            onClick={() => mudarMes(1)}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
            title="Próximo mês"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Grade de dias da semana */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {diasSemana.map((dia, index) => (
            <div 
              key={index} 
              className="text-center font-['DM_Sans:Bold',sans-serif] text-xs text-gray-500"
            >
              {dia}
            </div>
          ))}
        </div>
        
        {/* Grade de dias do mês */}
        <div className="grid grid-cols-7 gap-1">
          {dias.map((dia, index) => {
            if (dia === null) {
              return <div key={index} className="aspect-square" />;
            }
            
            const isDiaVencimento = vencimento && 
              dia === diaVencimento && 
              mesExibido.getMonth() === vencimento.getMonth() && 
              mesExibido.getFullYear() === vencimento.getFullYear();
            
            const dataAtual = new Date(mesExibido.getFullYear(), mesExibido.getMonth(), dia);
            const isHoje = 
              dataAtual.getDate() === hoje.getDate() && 
              dataAtual.getMonth() === hoje.getMonth() && 
              dataAtual.getFullYear() === hoje.getFullYear();
            const isPast = dataAtual < hoje && !isHoje;
            
            return (
              <div
                key={index}
                onClick={() => handleClickDia(dia)}
                className={`
                  aspect-square flex items-center justify-center rounded text-xs font-['DM_Sans:Medium',sans-serif]
                  transition-all duration-200 cursor-pointer relative
                  ${isDiaVencimento 
                    ? 'bg-red-500 text-white font-bold ring-2 ring-red-300 scale-110' 
                    : isHoje
                    ? 'bg-black text-white font-semibold ring-1 ring-black'
                    : isPast
                    ? 'text-gray-300 hover:bg-gray-50'
                    : 'text-gray-700 hover:bg-blue-100 hover:scale-105'
                  }
                `}
                title={`Clique para definir como ${dia}/${mesExibido.getMonth() + 1}/${mesExibido.getFullYear()}`}
              >
                {dia}
                {isDiaVencimento && (
                  <div className="absolute -top-0.5 -right-0.5">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Legenda mini */}
        <div className="mt-3 pt-3 border-t border-gray-200 space-y-1">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded bg-red-500" />
            <span className="font-['DM_Sans:Regular',sans-serif] text-gray-600">Vencimento</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded bg-black" />
            <span className="font-['DM_Sans:Regular',sans-serif] text-gray-600">Hoje</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded border border-gray-300" />
            <span className="font-['DM_Sans:Regular',sans-serif] text-gray-600">Clique para definir</span>
          </div>
        </div>
      </div>
    );
  };

  // Calendário Geral de Vencimentos
  const CalendarioGeralVencimentos = () => {
    const primeiroDia = new Date(mesAtual.getFullYear(), mesAtual.getMonth(), 1);
    const ultimoDia = new Date(mesAtual.getFullYear(), mesAtual.getMonth() + 1, 0);
    const primeiroDiaSemana = primeiroDia.getDay();
    const diasNoMes = ultimoDia.getDate();
    const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    // Criar array de dias do mês
    const dias = [];
    for (let i = 0; i < primeiroDiaSemana; i++) {
      dias.push(null);
    }
    for (let dia = 1; dia <= diasNoMes; dia++) {
      dias.push(dia);
    }

    // Agrupar vencimentos por dia
    const vencimentosPorDia: { [key: number]: Inscricao[] } = {};
    inscricoes.forEach(inscricao => {
      if (inscricao.dataVencimento) {
        const dataVenc = new Date(inscricao.dataVencimento);
        if (dataVenc.getMonth() === mesAtual.getMonth() && dataVenc.getFullYear() === mesAtual.getFullYear()) {
          const dia = dataVenc.getDate();
          if (!vencimentosPorDia[dia]) {
            vencimentosPorDia[dia] = [];
          }
          vencimentosPorDia[dia].push(inscricao);
        }
      }
    });

    const mesNome = mesAtual.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

    const mudarMes = (direcao: number) => {
      setMesAtual(new Date(mesAtual.getFullYear(), mesAtual.getMonth() + direcao, 1));
    };

    // Calcular estatísticas
    const totalVencimentos = Object.values(vencimentosPorDia).reduce((acc, arr) => acc + arr.length, 0);
    const vencimentosVencidos = Object.entries(vencimentosPorDia).reduce((acc, [dia, inscricoes]) => {
      const data = new Date(mesAtual.getFullYear(), mesAtual.getMonth(), parseInt(dia));
      data.setHours(0, 0, 0, 0);
      return acc + (data < hoje ? inscricoes.length : 0);
    }, 0);
    const vencimentosProximos = Object.entries(vencimentosPorDia).reduce((acc, [dia, inscricoes]) => {
      const data = new Date(mesAtual.getFullYear(), mesAtual.getMonth(), parseInt(dia));
      data.setHours(0, 0, 0, 0);
      const diffDays = Math.ceil((data.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));
      return acc + (diffDays >= 0 && diffDays <= 7 ? inscricoes.length : 0);
    }, 0);

    return (
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border-2 border-[#c8b372]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-black font-['DM_Sans:Bold',sans-serif] flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            Calendário de Vencimentos
          </h2>
          <button
            onClick={() => setShowCalendarioGeral(!showCalendarioGeral)}
            className="text-sm font-['DM_Sans:Medium',sans-serif] text-gray-600 hover:text-black transition-colors"
          >
            {showCalendarioGeral ? '▼ Ocultar' : '▶ Expandir'}
          </button>
        </div>

        {showCalendarioGeral && (
          <>
            {/* Estatísticas rápidas */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-900 font-['DM_Sans:Bold',sans-serif]">{totalVencimentos}</p>
                <p className="text-sm text-blue-700 font-['DM_Sans:Medium',sans-serif] mt-1">Vencimentos neste mês</p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-red-900 font-['DM_Sans:Bold',sans-serif]">{vencimentosVencidos}</p>
                <p className="text-sm text-red-700 font-['DM_Sans:Medium',sans-serif] mt-1">Vencidos</p>
              </div>
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-yellow-900 font-['DM_Sans:Bold',sans-serif]">{vencimentosProximos}</p>
                <p className="text-sm text-yellow-700 font-['DM_Sans:Medium',sans-serif] mt-1">Próximos 7 dias</p>
              </div>
            </div>

            {/* Navegação do mês */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => mudarMes(-1)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h3 className="text-xl font-bold font-['DM_Sans:Bold',sans-serif] text-center">
                {mesNome.charAt(0).toUpperCase() + mesNome.slice(1)}
              </h3>
              <button
                onClick={() => mudarMes(1)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Grade de dias da semana */}
            <div className="grid grid-cols-7 gap-2 mb-3">
              {diasSemana.map((dia, index) => (
                <div 
                  key={index} 
                  className="text-center font-['DM_Sans:Bold',sans-serif] text-sm text-gray-700 py-2"
                >
                  {dia}
                </div>
              ))}
            </div>

            {/* Grade de dias do mês */}
            <div className="grid grid-cols-7 gap-2">
              {dias.map((dia, index) => {
                if (dia === null) {
                  return <div key={index} className="aspect-square" />;
                }

                const dataAtual = new Date(mesAtual.getFullYear(), mesAtual.getMonth(), dia);
                dataAtual.setHours(0, 0, 0, 0);
                const isHoje = dataAtual.getTime() === hoje.getTime();
                const isPast = dataAtual < hoje;
                const vencimentosNoDia = vencimentosPorDia[dia] || [];
                const temVencimentos = vencimentosNoDia.length > 0;

                // Determinar cor baseado no status
                let corFundo = 'bg-white';
                let corTexto = 'text-gray-700';
                let corBorda = 'border-gray-200';

                if (temVencimentos) {
                  const todosVencidos = vencimentosNoDia.every(i => {
                    const vencStatus = getVencimentoStatus(i.dataVencimento);
                    return vencStatus.status === 'vencido';
                  });
                  const algunsProximos = vencimentosNoDia.some(i => {
                    const vencStatus = getVencimentoStatus(i.dataVencimento);
                    return vencStatus.status === 'proximo';
                  });

                  if (todosVencidos) {
                    corFundo = 'bg-red-100';
                    corTexto = 'text-red-900';
                    corBorda = 'border-red-300';
                  } else if (algunsProximos) {
                    corFundo = 'bg-yellow-100';
                    corTexto = 'text-yellow-900';
                    corBorda = 'border-yellow-300';
                  } else {
                    corFundo = 'bg-green-100';
                    corTexto = 'text-green-900';
                    corBorda = 'border-green-300';
                  }
                }

                if (isHoje) {
                  corBorda = 'border-black ring-2 ring-black';
                }

                return (
                  <div
                    key={index}
                    className={`
                      aspect-square border-2 rounded-lg p-2 transition-all duration-200
                      ${corFundo} ${corTexto} ${corBorda}
                      ${temVencimentos ? 'cursor-pointer hover:scale-105 hover:shadow-lg' : ''}
                      ${isPast && !temVencimentos ? 'opacity-40' : ''}
                      flex flex-col items-center justify-center relative
                    `}
                    title={temVencimentos ? `${vencimentosNoDia.length} vencimento(s)` : ''}
                  >
                    <span className="font-['DM_Sans:Bold',sans-serif] text-lg">
                      {dia}
                    </span>
                    {temVencimentos && (
                      <div className="mt-1">
                        <span className="text-xs font-['DM_Sans:Bold',sans-serif] bg-white px-2 py-0.5 rounded-full shadow-sm">
                          {vencimentosNoDia.length}
                        </span>
                      </div>
                    )}
                    {temVencimentos && (
                      <div className="absolute -top-1 -right-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Legenda */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-['DM_Sans:Bold',sans-serif] text-sm text-gray-700 mb-3">Legenda:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded border-2 border-black ring-2 ring-black" />
                  <span className="text-xs font-['DM_Sans:Regular',sans-serif]">Hoje</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-red-100 border-2 border-red-300" />
                  <span className="text-xs font-['DM_Sans:Regular',sans-serif]">Vencido</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-yellow-100 border-2 border-yellow-300" />
                  <span className="text-xs font-['DM_Sans:Regular',sans-serif]">Próximo (≤7 dias)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-green-100 border-2 border-green-300" />
                  <span className="text-xs font-['DM_Sans:Regular',sans-serif]">Ativo (&gt;7 dias)</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  // Filtrar inscrições pela busca
  const inscricoesFiltradas = inscricoes.filter(inscricao =>
    inscricao.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inscricao.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inscricao.whatsapp.includes(searchTerm)
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f1e8] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-xl text-black">Carregando inscrições...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#f5f1e8] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p className="font-bold">Erro ao carregar inscrições</p>
            <p>{error}</p>
            <button
              onClick={carregarInscricoes}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f1e8] py-12 px-4">
      <Navbar currentPage="admin" navigateTo={navigateTo || (() => {})} />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-black font-['DM_Sans:Bold',sans-serif]">
            Inscrições Recebidas
          </h1>
          <div className="flex gap-4">
            {navigateTo && (
              <button
                onClick={() => navigateTo('admindashboard')}
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors font-['DM_Sans:Medium',sans-serif] flex items-center gap-2"
              >
                <BarChart3 className="w-5 h-5" />
                Dashboard Power BI
              </button>
            )}
            <button
              onClick={carregarInscricoes}
              className="bg-[#fae08f] px-6 py-2 rounded hover:bg-[#f5d67a] transition-colors font-['DM_Sans:Medium',sans-serif]"
            >
              🔄 Atualizar
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <p className="text-lg text-black font-['DM_Sans:Medium',sans-serif]">
            Total de inscrições: <span className="font-bold">{inscricoes.length}</span>
          </p>
        </div>

        {/* Calendário Geral de Vencimentos */}
        <CalendarioGeralVencimentos />

        {/* Campo de Busca */}
        {inscricoes.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors font-['DM_Sans:Regular',sans-serif]"
                placeholder="Pesquisar por nome, email ou WhatsApp..."
              />
              <Search className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
            </div>
            {searchTerm && (
              <p className="mt-2 text-sm text-gray-600 font-['DM_Sans:Regular',sans-serif]">
                Exibindo {inscricoesFiltradas.length} de {inscricoes.length} inscrições
              </p>
            )}
          </div>
        )}

        {inscricoesFiltradas.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-xl text-gray-600">Nenhuma inscrição recebida ainda.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {inscricoesFiltradas.map((inscricao) => (
              <div
                key={inscricao.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-black font-['DM_Sans:Bold',sans-serif]">
                      {inscricao.nome}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      ID: {inscricao.id}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                      inscricao.status
                    )}`}
                  >
                    {getStatusLabel(inscricao.status)}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600 font-['DM_Sans:Medium',sans-serif]">
                      Email:
                    </p>
                    <p className="text-black font-['DM_Sans:Regular',sans-serif]">
                      {inscricao.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-['DM_Sans:Medium',sans-serif]">
                      WhatsApp:
                    </p>
                    <p className="text-black font-['DM_Sans:Regular',sans-serif]">
                      {inscricao.whatsapp}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 font-['DM_Sans:Medium',sans-serif] mb-2">
                    Carta de Motivação:
                  </p>
                  <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <p className="text-black font-['DM_Sans:Regular',sans-serif] whitespace-pre-wrap">
                      {inscricao.motivacao}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p className="font-['DM_Sans:Regular',sans-serif]">
                    Enviado em: {formatarData(inscricao.dataEnvio)}
                  </p>
                  <p className="font-['DM_Sans:Regular',sans-serif]">
                    {inscricao.concordoTermos ? '✅ Termos aceitos' : '❌ Termos não aceitos'}
                  </p>
                </div>

                {/* Controle de Vencimento da Matrícula */}
                <div className="mt-6 pt-4 border-t-2 border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-black font-['DM_Sans:Bold',sans-serif] flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Controle de Vencimento
                    </h4>
                    {(() => {
                      const vencimentoStatus = getVencimentoStatus(inscricao.dataVencimento);
                      const IconComponent = vencimentoStatus.icon;
                      return (
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold border-2 ${vencimentoStatus.color} flex items-center gap-2`}>
                          <IconComponent className="w-4 h-4" />
                          {vencimentoStatus.label}
                        </span>
                      );
                    })()}
                  </div>

                  <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm text-gray-600 font-['DM_Sans:Medium',sans-serif] mb-2">
                          Data de Vencimento da Matrícula:
                        </label>
                        <input
                          type="date"
                          defaultValue={formatarDataInput(inscricao.dataVencimento)}
                          onBlur={(e) => {
                            if (e.target.value && e.target.value !== formatarDataInput(inscricao.dataVencimento)) {
                              handleUpdateVencimento(inscricao.id, e.target.value);
                            }
                          }}
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors font-['DM_Sans:Regular',sans-serif]"
                        />
                      </div>
                      <div className="flex items-end">
                        <div className="w-full">
                          <p className="text-sm text-gray-600 font-['DM_Sans:Medium',sans-serif] mb-2">
                            Vencimento atual:
                          </p>
                          <p className="text-lg font-semibold text-black font-['DM_Sans:Bold',sans-serif]">
                            {formatarDataExibicao(inscricao.dataVencimento)}
                          </p>
                        </div>
                      </div>
                      
                      {/* Calendário visual */}
                      <div>
                        <CalendarioVencimento dataVencimento={inscricao.dataVencimento} inscricaoId={inscricao.id} />
                      </div>
                    </div>
                    
                    <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-xs text-blue-800 font-['DM_Sans:Regular',sans-serif]">
                        💡 <strong>Dica:</strong> Selecione uma data e clique fora do campo para salvar automaticamente. 
                        A matrícula será marcada como vencida após esta data.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => handleDeleteInscricao(inscricao.id, inscricao.nome)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors flex items-center gap-2 font-['DM_Sans:Medium',sans-serif]"
                  >
                    <Trash2 className="w-4 h-4" />
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}