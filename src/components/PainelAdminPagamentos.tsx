import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Plus, 
  Edit2, 
  Trash2, 
  CheckCircle, 
  XCircle, 
  Clock,
  DollarSign,
  Calendar,
  FileText,
  X,
  Save,
  AlertCircle,
  TrendingUp,
  Users
} from 'lucide-react';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from './ui/dialog';

interface PaymentStatus {
  id: string;
  student_id: string;
  student_name: string;
  student_email: string;
  status: 'em_dia' | 'atrasado' | 'cancelado';
  valor_mensalidade: number;
  dia_vencimento: number;
  ultimo_pagamento: string | null;
  proximo_vencimento: string | null;
  notas_admin: string;
  created_at: string;
  updated_at: string;
}

interface PaymentHistory {
  id: string;
  student_id: string;
  student_name: string;
  valor: number;
  data_pagamento: string;
  mes_referencia: string;
  metodo_pagamento: string;
  comprovante_url: string;
  observacoes: string;
  created_at: string;
}

interface PainelAdminPagamentosProps {
  navigateTo: (page: string) => void;
}

export function PainelAdminPagamentos({ navigateTo }: PainelAdminPagamentosProps) {
  const [alunos, setAlunos] = useState<PaymentStatus[]>([]);
  const [filteredAlunos, setFilteredAlunos] = useState<PaymentStatus[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('todos');
  const [isLoading, setIsLoading] = useState(true);
  
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showHistoryDialog, setShowHistoryDialog] = useState(false);
  const [showAddPaymentDialog, setShowAddPaymentDialog] = useState(false);
  const [showAddAlunoDialog, setShowAddAlunoDialog] = useState(false);
  
  const [selectedAluno, setSelectedAluno] = useState<PaymentStatus | null>(null);
  const [editedAluno, setEditedAluno] = useState<PaymentStatus | null>(null);
  const [paymentHistory, setPaymentHistory] = useState<PaymentHistory[]>([]);
  
  const [newAluno, setNewAluno] = useState({
    student_id: '',
    student_name: '',
    student_email: '',
    status: 'em_dia' as 'em_dia' | 'atrasado' | 'cancelado',
    valor_mensalidade: 500,
    dia_vencimento: 10,
    notas_admin: ''
  });
  
  const [newPayment, setNewPayment] = useState({
    valor: 0,
    data_pagamento: new Date().toISOString().split('T')[0],
    mes_referencia: '',
    metodo_pagamento: 'PIX',
    observacoes: ''
  });

  useEffect(() => {
    loadAlunos();
  }, []);

  useEffect(() => {
    filterAlunos();
  }, [searchTerm, statusFilter, alunos]);

  const loadAlunos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/rest/v1/payment_status?select=*&order=student_name.asc`,
        {
          headers: {
            'apikey': publicAnonKey,
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setAlunos(data);
      }
    } catch (error) {
      console.error('Erro ao carregar alunos:', error);
      toast.error('Erro ao carregar dados dos alunos');
    } finally {
      setIsLoading(false);
    }
  };

  const filterAlunos = () => {
    let filtered = [...alunos];

    // Filtro por busca
    if (searchTerm) {
      filtered = filtered.filter(aluno => 
        aluno.student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        aluno.student_email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por status
    if (statusFilter !== 'todos') {
      filtered = filtered.filter(aluno => aluno.status === statusFilter);
    }

    setFilteredAlunos(filtered);
  };

  const handleEditAluno = (aluno: PaymentStatus) => {
    setSelectedAluno(aluno);
    setEditedAluno({ ...aluno });
    setShowEditDialog(true);
  };

  const handleSaveEdit = async () => {
    if (!editedAluno) return;

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/rest/v1/payment_status?id=eq.${editedAluno.id}`,
        {
          method: 'PATCH',
          headers: {
            'apikey': publicAnonKey,
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({
            student_name: editedAluno.student_name,
            student_email: editedAluno.student_email,
            status: editedAluno.status,
            valor_mensalidade: editedAluno.valor_mensalidade,
            dia_vencimento: editedAluno.dia_vencimento,
            ultimo_pagamento: editedAluno.ultimo_pagamento,
            proximo_vencimento: editedAluno.proximo_vencimento,
            notas_admin: editedAluno.notas_admin
          })
        }
      );

      if (response.ok) {
        toast.success('Aluno atualizado com sucesso!');
        setShowEditDialog(false);
        loadAlunos();
      } else {
        toast.error('Erro ao atualizar aluno');
      }
    } catch (error) {
      console.error('Erro ao salvar:', error);
      toast.error('Erro ao salvar alterações');
    }
  };

  const handleDeleteAluno = async (id: string, nome: string) => {
    if (!confirm(`Tem certeza que deseja remover ${nome} do sistema de pagamentos?`)) {
      return;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/rest/v1/payment_status?id=eq.${id}`,
        {
          method: 'DELETE',
          headers: {
            'apikey': publicAnonKey,
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        toast.success('Aluno removido com sucesso!');
        loadAlunos();
      } else {
        toast.error('Erro ao remover aluno');
      }
    } catch (error) {
      console.error('Erro ao deletar:', error);
      toast.error('Erro ao remover aluno');
    }
  };

  const loadPaymentHistory = async (studentId: string) => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/rest/v1/payment_history?student_id=eq.${studentId}&order=data_pagamento.desc`,
        {
          headers: {
            'apikey': publicAnonKey,
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setPaymentHistory(data);
      }
    } catch (error) {
      console.error('Erro ao carregar histórico:', error);
      toast.error('Erro ao carregar histórico de pagamentos');
    }
  };

  const handleShowHistory = (aluno: PaymentStatus) => {
    setSelectedAluno(aluno);
    loadPaymentHistory(aluno.student_id);
    setShowHistoryDialog(true);
  };

  const handleAddPayment = (aluno: PaymentStatus) => {
    setSelectedAluno(aluno);
    setNewPayment({
      valor: aluno.valor_mensalidade,
      data_pagamento: new Date().toISOString().split('T')[0],
      mes_referencia: '',
      metodo_pagamento: 'PIX',
      observacoes: ''
    });
    setShowAddPaymentDialog(true);
  };

  const handleSavePayment = async () => {
    if (!selectedAluno) return;

    try {
      // Adicionar no histórico
      const response = await fetch(
        `https://${projectId}.supabase.co/rest/v1/payment_history`,
        {
          method: 'POST',
          headers: {
            'apikey': publicAnonKey,
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({
            student_id: selectedAluno.student_id,
            student_name: selectedAluno.student_name,
            valor: newPayment.valor,
            data_pagamento: newPayment.data_pagamento,
            mes_referencia: newPayment.mes_referencia,
            metodo_pagamento: newPayment.metodo_pagamento,
            observacoes: newPayment.observacoes
          })
        }
      );

      if (response.ok) {
        // Atualizar status do aluno para "em_dia"
        await fetch(
          `https://${projectId}.supabase.co/rest/v1/payment_status?id=eq.${selectedAluno.id}`,
          {
            method: 'PATCH',
            headers: {
              'apikey': publicAnonKey,
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json',
              'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
              status: 'em_dia',
              ultimo_pagamento: newPayment.data_pagamento
            })
          }
        );

        toast.success('Pagamento registrado com sucesso!');
        setShowAddPaymentDialog(false);
        loadAlunos();
      } else {
        toast.error('Erro ao registrar pagamento');
      }
    } catch (error) {
      console.error('Erro ao salvar pagamento:', error);
      toast.error('Erro ao registrar pagamento');
    }
  };

  const handleSaveNewAluno = async () => {
    // Validação
    if (!newAluno.student_id || !newAluno.student_name || !newAluno.student_email) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/rest/v1/payment_status`,
        {
          method: 'POST',
          headers: {
            'apikey': publicAnonKey,
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({
            student_id: newAluno.student_id,
            student_name: newAluno.student_name,
            student_email: newAluno.student_email,
            status: newAluno.status,
            valor_mensalidade: newAluno.valor_mensalidade,
            dia_vencimento: newAluno.dia_vencimento,
            notas_admin: newAluno.notas_admin
          })
        }
      );

      if (response.ok) {
        toast.success('Aluno adicionado com sucesso!');
        setShowAddAlunoDialog(false);
        setNewAluno({
          student_id: '',
          student_name: '',
          student_email: '',
          status: 'em_dia',
          valor_mensalidade: 500,
          dia_vencimento: 10,
          notas_admin: ''
        });
        loadAlunos();
      } else {
        const errorData = await response.json();
        toast.error('Erro ao adicionar aluno: ' + (errorData.message || 'Erro desconhecido'));
      }
    } catch (error) {
      console.error('Erro ao adicionar aluno:', error);
      toast.error('Erro ao adicionar aluno');
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'em_dia':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'atrasado':
        return <Clock className="w-5 h-5 text-orange-500" />;
      case 'cancelado':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      em_dia: 'bg-green-100 text-green-800',
      atrasado: 'bg-orange-100 text-orange-800',
      cancelado: 'bg-red-100 text-red-800'
    };

    const labels = {
      em_dia: 'Em Dia',
      atrasado: 'Atrasado',
      cancelado: 'Cancelado'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  const stats = {
    total: alunos.length,
    em_dia: alunos.filter(a => a.status === 'em_dia').length,
    atrasado: alunos.filter(a => a.status === 'atrasado').length,
    cancelado: alunos.filter(a => a.status === 'cancelado').length,
    receita_mensal: alunos.filter(a => a.status === 'em_dia').reduce((sum, a) => sum + Number(a.valor_mensalidade), 0)
  };

  return (
    <div className="min-h-screen bg-[#FEFBF3]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Painel de Pagamentos</h1>
              <p className="text-sm text-gray-500 mt-1">Gerencie os pagamentos dos alunos</p>
            </div>
            <button
              onClick={() => navigateTo('dashboard')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total de Alunos</p>
                <p className="text-2xl font-bold mt-1">{stats.total}</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Em Dia</p>
                <p className="text-2xl font-bold text-green-600 mt-1">{stats.em_dia}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Atrasados</p>
                <p className="text-2xl font-bold text-orange-600 mt-1">{stats.atrasado}</p>
              </div>
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Cancelados</p>
                <p className="text-2xl font-bold text-red-600 mt-1">{stats.cancelado}</p>
              </div>
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Receita Mensal</p>
                <p className="text-2xl font-bold text-green-600 mt-1">
                  R$ {stats.receita_mensal.toFixed(2)}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por nome ou email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                />
              </div>
            </div>

            <button
              onClick={() => setShowAddAlunoDialog(true)}
              className="flex items-center gap-2 px-6 py-2 bg-[#8B7355] text-white rounded-lg hover:bg-[#6B5844] font-semibold whitespace-nowrap"
            >
              <Plus className="w-5 h-5" />
              Adicionar Aluno
            </button>

            <div className="flex gap-2">
              <button
                onClick={() => setStatusFilter('todos')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  statusFilter === 'todos' 
                    ? 'bg-[#8B7355] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setStatusFilter('em_dia')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  statusFilter === 'em_dia' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Em Dia
              </button>
              <button
                onClick={() => setStatusFilter('atrasado')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  statusFilter === 'atrasado' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Atrasados
              </button>
              <button
                onClick={() => setStatusFilter('cancelado')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  statusFilter === 'cancelado' 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Cancelados
              </button>
            </div>
          </div>
        </div>

        {/* Tabela de Alunos */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {isLoading ? (
            <div className="p-12 text-center text-gray-500">
              Carregando...
            </div>
          ) : filteredAlunos.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <AlertCircle className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p>Nenhum aluno encontrado</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Aluno</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Mensalidade</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Vencimento</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Último Pagamento</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredAlunos.map((aluno) => (
                    <tr key={aluno.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-gray-900">{aluno.student_name}</p>
                          <p className="text-sm text-gray-500">{aluno.student_email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(aluno.status)}
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-gray-900">
                          R$ {Number(aluno.valor_mensalidade).toFixed(2)}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-gray-700">Dia {aluno.dia_vencimento}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-gray-700">
                          {aluno.ultimo_pagamento 
                            ? new Date(aluno.ultimo_pagamento).toLocaleDateString('pt-BR')
                            : 'Nenhum'}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleAddPayment(aluno)}
                            className="p-2 hover:bg-green-50 rounded-lg transition-colors"
                            title="Registrar Pagamento"
                          >
                            <DollarSign className="w-5 h-5 text-green-600" />
                          </button>
                          <button
                            onClick={() => handleShowHistory(aluno)}
                            className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Ver Histórico"
                          >
                            <FileText className="w-5 h-5 text-blue-600" />
                          </button>
                          <button
                            onClick={() => handleEditAluno(aluno)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Editar"
                          >
                            <Edit2 className="w-5 h-5 text-gray-600" />
                          </button>
                          <button
                            onClick={() => handleDeleteAluno(aluno.id, aluno.student_name)}
                            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                            title="Remover"
                          >
                            <Trash2 className="w-5 h-5 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Dialog de Edição */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="max-w-2xl bg-white">
          <DialogHeader>
            <DialogTitle>Editar Informações do Aluno</DialogTitle>
            <DialogDescription>
              Atualize as informações de pagamento do aluno
            </DialogDescription>
          </DialogHeader>

          {editedAluno && (
            <div className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nome</label>
                  <input
                    type="text"
                    value={editedAluno.student_name}
                    onChange={(e) => setEditedAluno({ ...editedAluno, student_name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    value={editedAluno.student_email}
                    onChange={(e) => setEditedAluno({ ...editedAluno, student_email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Status</label>
                  <select
                    value={editedAluno.status}
                    onChange={(e) => setEditedAluno({ ...editedAluno, status: e.target.value as any })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                  >
                    <option value="em_dia">Em Dia</option>
                    <option value="atrasado">Atrasado</option>
                    <option value="cancelado">Cancelado</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Valor Mensalidade</label>
                  <input
                    type="number"
                    step="0.01"
                    value={editedAluno.valor_mensalidade}
                    onChange={(e) => setEditedAluno({ ...editedAluno, valor_mensalidade: Number(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Dia de Vencimento</label>
                  <input
                    type="number"
                    min="1"
                    max="31"
                    value={editedAluno.dia_vencimento}
                    onChange={(e) => setEditedAluno({ ...editedAluno, dia_vencimento: Number(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Último Pagamento</label>
                  <input
                    type="date"
                    value={editedAluno.ultimo_pagamento || ''}
                    onChange={(e) => setEditedAluno({ ...editedAluno, ultimo_pagamento: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Notas Administrativas</label>
                <textarea
                  value={editedAluno.notas_admin || ''}
                  onChange={(e) => setEditedAluno({ ...editedAluno, notas_admin: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                  placeholder="Observações internas..."
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setShowEditDialog(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="px-6 py-2 bg-[#8B7355] text-white rounded-lg hover:bg-[#6B5844] flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Salvar
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Dialog de Histórico */}
      <Dialog open={showHistoryDialog} onOpenChange={setShowHistoryDialog}>
        <DialogContent className="max-w-3xl bg-white">
          <DialogHeader>
            <DialogTitle>Histórico de Pagamentos</DialogTitle>
            <DialogDescription>
              {selectedAluno?.student_name}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            {paymentHistory.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p>Nenhum pagamento registrado</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {paymentHistory.map((payment) => (
                  <div key={payment.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-lg">R$ {Number(payment.valor).toFixed(2)}</p>
                        <p className="text-sm text-gray-600">{payment.mes_referencia}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(payment.data_pagamento).toLocaleDateString('pt-BR')} • {payment.metodo_pagamento}
                        </p>
                        {payment.observacoes && (
                          <p className="text-sm text-gray-600 mt-2 italic">{payment.observacoes}</p>
                        )}
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog de Adicionar Pagamento */}
      <Dialog open={showAddPaymentDialog} onOpenChange={setShowAddPaymentDialog}>
        <DialogContent className="max-w-lg bg-white">
          <DialogHeader>
            <DialogTitle>Registrar Pagamento</DialogTitle>
            <DialogDescription>
              {selectedAluno?.student_name}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Valor</label>
                <input
                  type="number"
                  step="0.01"
                  value={newPayment.valor}
                  onChange={(e) => setNewPayment({ ...newPayment, valor: Number(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Data do Pagamento</label>
                <input
                  type="date"
                  value={newPayment.data_pagamento}
                  onChange={(e) => setNewPayment({ ...newPayment, data_pagamento: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Mês de Referência</label>
                <input
                  type="text"
                  placeholder="Ex: Janeiro 2024"
                  value={newPayment.mes_referencia}
                  onChange={(e) => setNewPayment({ ...newPayment, mes_referencia: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Método de Pagamento</label>
                <select
                  value={newPayment.metodo_pagamento}
                  onChange={(e) => setNewPayment({ ...newPayment, metodo_pagamento: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                >
                  <option value="PIX">PIX</option>
                  <option value="Cartão de Crédito">Cartão de Crédito</option>
                  <option value="Cartão de Débito">Cartão de Débito</option>
                  <option value="Boleto">Boleto</option>
                  <option value="Transferência">Transferência</option>
                  <option value="Dinheiro">Dinheiro</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Observações</label>
              <textarea
                value={newPayment.observacoes}
                onChange={(e) => setNewPayment({ ...newPayment, observacoes: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                placeholder="Observações adicionais..."
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={() => setShowAddPaymentDialog(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={handleSavePayment}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
              >
                <DollarSign className="w-4 h-4" />
                Registrar Pagamento
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog de Adicionar Aluno */}
      <Dialog open={showAddAlunoDialog} onOpenChange={setShowAddAlunoDialog}>
        <DialogContent className="max-w-2xl bg-white">
          <DialogHeader>
            <DialogTitle>Adicionar Aluno</DialogTitle>
            <DialogDescription>
              Adicione um novo aluno ao sistema de pagamentos
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">ID do Aluno</label>
                <input
                  type="text"
                  value={newAluno.student_id}
                  onChange={(e) => setNewAluno({ ...newAluno, student_id: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Nome</label>
                <input
                  type="text"
                  value={newAluno.student_name}
                  onChange={(e) => setNewAluno({ ...newAluno, student_name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={newAluno.student_email}
                  onChange={(e) => setNewAluno({ ...newAluno, student_email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Status</label>
                <select
                  value={newAluno.status}
                  onChange={(e) => setNewAluno({ ...newAluno, status: e.target.value as any })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                >
                  <option value="em_dia">Em Dia</option>
                  <option value="atrasado">Atrasado</option>
                  <option value="cancelado">Cancelado</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Valor Mensalidade</label>
                <input
                  type="number"
                  step="0.01"
                  value={newAluno.valor_mensalidade}
                  onChange={(e) => setNewAluno({ ...newAluno, valor_mensalidade: Number(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Dia de Vencimento</label>
                <input
                  type="number"
                  min="1"
                  max="31"
                  value={newAluno.dia_vencimento}
                  onChange={(e) => setNewAluno({ ...newAluno, dia_vencimento: Number(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Notas Administrativas</label>
              <textarea
                value={newAluno.notas_admin || ''}
                onChange={(e) => setNewAluno({ ...newAluno, notas_admin: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                placeholder="Observações internas..."
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={() => setShowAddAlunoDialog(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveNewAluno}
                className="px-6 py-2 bg-[#8B7355] text-white rounded-lg hover:bg-[#6B5844] flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Adicionar Aluno
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}