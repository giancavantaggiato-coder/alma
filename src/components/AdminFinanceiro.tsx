import { useState, useEffect, useRef } from 'react';
import { DollarSign, TrendingUp, TrendingDown, Wallet, CreditCard, ArrowUpCircle, ArrowDownCircle, Calendar, Download, Plus, Filter, X, Edit2, Trash2, Save } from 'lucide-react';
import Navbar from './Navbar';

interface AdminFinanceiroProps {
  navigateTo: (page: string) => void;
}

interface Transaction {
  id: number;
  tipo: 'receita' | 'despesa';
  categoria: string;
  descricao: string;
  valor: number;
  data: string;
  status: 'pago' | 'pendente' | 'atrasado';
  formaPagamento?: string;
  observacoes?: string;
}

interface FinancialSummary {
  saldoTotal: number;
  receitasMes: number;
  despesasMes: number;
  saldoMes: number;
  receitasPendentes: number;
  despesasPendentes: number;
}

const categoriasReceita = ['Mensalidade', 'Matrícula', 'Material', 'Workshop', 'Aula Avulsa', 'Outro'];
const categoriasDespesa = ['Aluguel', 'Materiais', 'Salários', 'Marketing', 'Infraestrutura', 'Manutenção', 'Outro'];
const formasPagamento = ['Dinheiro', 'Pix', 'Cartão de Crédito', 'Cartão de Débito', 'Transferência', 'Boleto'];

export default function AdminFinanceiro({ navigateTo }: AdminFinanceiroProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [summary, setSummary] = useState<FinancialSummary>({
    saldoTotal: 0,
    receitasMes: 0,
    despesasMes: 0,
    saldoMes: 0,
    receitasPendentes: 0,
    despesasPendentes: 0
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'receita' | 'despesa'>('all');
  const [filterMonth, setFilterMonth] = useState<string>('2026-01');
  
  // Ref para o input de data
  const dateInputRef = useRef<HTMLInputElement>(null);

  // Novo registro
  const [newTransaction, setNewTransaction] = useState({
    tipo: 'receita' as 'receita' | 'despesa',
    categoria: '',
    descricao: '',
    valor: '',
    data: new Date().toISOString().slice(0, 10),
    status: 'pago' as 'pago' | 'pendente' | 'atrasado',
    formaPagamento: 'Pix',
    observacoes: ''
  });

  // Verificar autenticação
  useEffect(() => {
    const savedAuth = localStorage.getItem('admin_auth');
    if (savedAuth) {
      const authData = JSON.parse(savedAuth);
      if (authData.username === 'admin@alma.com' && authData.password === 'alma2024') {
        setIsAuthenticated(true);
        loadTransactions();
      } else {
        navigateTo('admindashboard');
      }
    } else {
      navigateTo('admindashboard');
    }
  }, [navigateTo]);

  // Carregar transações do localStorage
  const loadTransactions = () => {
    const saved = localStorage.getItem('financial_transactions');
    if (saved) {
      const data = JSON.parse(saved);
      setTransactions(data);
      calculateSummary(data);
    } else {
      // Dados de exemplo
      const exampleData: Transaction[] = [
        { id: 1, tipo: 'receita', categoria: 'Mensalidade', descricao: 'Mensalidade Ana Strapazon', valor: 850, data: '2025-01-15', status: 'pago', formaPagamento: 'Pix' },
        { id: 2, tipo: 'receita', categoria: 'Matrícula', descricao: 'Matrícula Carlos Mendes', valor: 500, data: '2025-01-10', status: 'pago', formaPagamento: 'Cartão de Crédito' },
        { id: 3, tipo: 'despesa', categoria: 'Aluguel', descricao: 'Aluguel atelier janeiro', valor: 3500, data: '2025-01-05', status: 'pago', formaPagamento: 'Transferência' },
        { id: 4, tipo: 'despesa', categoria: 'Materiais', descricao: 'Tintas e pincéis', valor: 890, data: '2025-01-12', status: 'pago', formaPagamento: 'Cartão de Crédito' },
        { id: 5, tipo: 'receita', categoria: 'Mensalidade', descricao: 'Mensalidade Marina Silva', valor: 850, data: '2025-01-20', status: 'pendente', formaPagamento: 'Boleto' },
        { id: 6, tipo: 'despesa', categoria: 'Marketing', descricao: 'Anúncios Instagram', valor: 450, data: '2025-01-08', status: 'pago', formaPagamento: 'Cartão de Crédito' },
        { id: 7, tipo: 'receita', categoria: 'Workshop', descricao: 'Workshop de aquarela', valor: 1200, data: '2025-01-18', status: 'pago', formaPagamento: 'Pix' },
        { id: 8, tipo: 'despesa', categoria: 'Salários', descricao: 'Professora modelo vivo', valor: 1500, data: '2025-01-25', status: 'pendente', formaPagamento: 'Transferência' },
      ];
      setTransactions(exampleData);
      calculateSummary(exampleData);
      localStorage.setItem('financial_transactions', JSON.stringify(exampleData));
    }
  };

  // Calcular resumo financeiro
  const calculateSummary = (data: Transaction[]) => {
    const currentMonth = new Date().toISOString().slice(0, 7);
    
    const receitasTotal = data.filter(t => t.tipo === 'receita' && t.status === 'pago').reduce((sum, t) => sum + t.valor, 0);
    const despesasTotal = data.filter(t => t.tipo === 'despesa' && t.status === 'pago').reduce((sum, t) => sum + t.valor, 0);
    
    const receitasMes = data.filter(t => t.tipo === 'receita' && t.status === 'pago' && t.data.startsWith(currentMonth)).reduce((sum, t) => sum + t.valor, 0);
    const despesasMes = data.filter(t => t.tipo === 'despesa' && t.status === 'pago' && t.data.startsWith(currentMonth)).reduce((sum, t) => sum + t.valor, 0);
    
    const receitasPendentes = data.filter(t => t.tipo === 'receita' && t.status !== 'pago').reduce((sum, t) => sum + t.valor, 0);
    const despesasPendentes = data.filter(t => t.tipo === 'despesa' && t.status !== 'pago').reduce((sum, t) => sum + t.valor, 0);

    setSummary({
      saldoTotal: receitasTotal - despesasTotal,
      receitasMes,
      despesasMes,
      saldoMes: receitasMes - despesasMes,
      receitasPendentes,
      despesasPendentes
    });
  };

  // Adicionar/Editar transação
  const handleSaveTransaction = () => {
    if (!newTransaction.categoria || !newTransaction.descricao || !newTransaction.valor) {
      alert('Preencha todos os campos obrigatórios');
      return;
    }

    if (editingTransaction) {
      // Editar
      const updated = transactions.map(t => 
        t.id === editingTransaction.id 
          ? { ...editingTransaction, ...newTransaction, valor: parseFloat(newTransaction.valor) }
          : t
      );
      setTransactions(updated);
      localStorage.setItem('financial_transactions', JSON.stringify(updated));
      calculateSummary(updated);
      setEditingTransaction(null);
    } else {
      // Adicionar
      const newT: Transaction = {
        id: Date.now(),
        tipo: newTransaction.tipo,
        categoria: newTransaction.categoria,
        descricao: newTransaction.descricao,
        valor: parseFloat(newTransaction.valor),
        data: newTransaction.data,
        status: newTransaction.status,
        formaPagamento: newTransaction.formaPagamento,
        observacoes: newTransaction.observacoes
      };
      const updated = [...transactions, newT];
      setTransactions(updated);
      localStorage.setItem('financial_transactions', JSON.stringify(updated));
      calculateSummary(updated);
    }

    setShowAddModal(false);
    resetForm();
  };

  // Deletar transação
  const handleDeleteTransaction = (id: number) => {
    if (confirm('Tem certeza que deseja excluir esta transação?')) {
      const updated = transactions.filter(t => t.id !== id);
      setTransactions(updated);
      localStorage.setItem('financial_transactions', JSON.stringify(updated));
      calculateSummary(updated);
    }
  };

  // Editar transação
  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setNewTransaction({
      tipo: transaction.tipo,
      categoria: transaction.categoria,
      descricao: transaction.descricao,
      valor: transaction.valor.toString(),
      data: transaction.data,
      status: transaction.status,
      formaPagamento: transaction.formaPagamento || 'Pix',
      observacoes: transaction.observacoes || ''
    });
    setShowAddModal(true);
  };

  const resetForm = () => {
    setNewTransaction({
      tipo: 'receita',
      categoria: '',
      descricao: '',
      valor: '',
      data: new Date().toISOString().slice(0, 10),
      status: 'pago',
      formaPagamento: 'Pix',
      observacoes: ''
    });
  };

  // Filtrar transações
  const filteredTransactions = transactions.filter(t => {
    const matchType = filterType === 'all' || t.tipo === filterType;
    const matchMonth = t.data.startsWith(filterMonth);
    return matchType && matchMonth;
  });

  // Exportar para CSV
  const handleExportCSV = () => {
    const headers = ['Data', 'Tipo', 'Categoria', 'Descrição', 'Valor', 'Status', 'Forma Pagamento'];
    const rows = filteredTransactions.map(t => [
      t.data,
      t.tipo,
      t.categoria,
      t.descricao,
      t.valor.toFixed(2),
      t.status,
      t.formaPagamento || ''
    ]);

    const csv = [
      headers.join(','),
      ...rows.map(r => r.join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `financeiro_${filterMonth}.csv`;
    a.click();
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <Navbar currentPage="admin" navigateTo={navigateTo} />
      <div className="min-h-screen bg-[#fefbf3]">
        {/* Header */}
        <div className="bg-white border-b-2 border-gray-200 px-8 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-black flex items-center gap-3">
                <DollarSign className="w-8 h-8" />
                Gestão Financeira
              </h1>
              <p className="text-gray-600 mt-1">Controle completo de receitas e despesas</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).goBack) {
                    (window as any).goBack();
                  } else {
                    navigateTo('admindashboard');
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 border-2 border-black rounded-lg hover:bg-gray-100 transition-colors"
              >
                Voltar ao Dashboard
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Cards de Resumo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Saldo Total */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Wallet className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-500">SALDO TOTAL</span>
              </div>
              <h3 className={`text-3xl font-bold ${summary.saldoTotal >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                R$ {summary.saldoTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </h3>
              <p className="text-sm text-gray-500 mt-2">Acumulado</p>
            </div>

            {/* Receitas do Mês */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <ArrowUpCircle className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-500">RECEITAS MÊS</span>
              </div>
              <h3 className="text-3xl font-bold text-green-600">
                R$ {summary.receitasMes.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                + R$ {summary.receitasPendentes.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} pendentes
              </p>
            </div>

            {/* Despesas do Mês */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-red-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <ArrowDownCircle className="w-6 h-6 text-red-600" />
                </div>
                <span className="text-sm font-medium text-gray-500">DESPESAS MÊS</span>
              </div>
              <h3 className="text-3xl font-bold text-red-600">
                R$ {summary.despesasMes.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                + R$ {summary.despesasPendentes.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} pendentes
              </p>
            </div>

            {/* Saldo do Mês */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-500">SALDO MÊS</span>
              </div>
              <h3 className={`text-3xl font-bold ${summary.saldoMes >= 0 ? 'text-purple-600' : 'text-red-600'}`}>
                R$ {summary.saldoMes.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {summary.saldoMes >= 0 ? 'Superávit' : 'Déficit'}
              </p>
            </div>
          </div>

          {/* Ações e Filtros */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setEditingTransaction(null);
                    resetForm();
                    setShowAddModal(true);
                  }}
                  className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Nova Transação
                </button>
                <button
                  onClick={handleExportCSV}
                  className="border-2 border-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Exportar CSV
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-500" />
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value as any)}
                    className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  >
                    <option value="all">Todos</option>
                    <option value="receita">Receitas</option>
                    <option value="despesa">Despesas</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar 
                    className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors" 
                    onClick={() => dateInputRef.current?.click()}
                  />
                  <input
                    type="month"
                    value={filterMonth}
                    onChange={(e) => setFilterMonth(e.target.value)}
                    min="2026-01"
                    max="2050-12"
                    className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black cursor-pointer"
                    ref={dateInputRef}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tabela de Transações */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Data</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tipo</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Categoria</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Descrição</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Valor</th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredTransactions.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                        Nenhuma transação encontrada para este período
                      </td>
                    </tr>
                  ) : (
                    filteredTransactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(transaction.data + 'T00:00:00').toLocaleDateString('pt-BR')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                            transaction.tipo === 'receita' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {transaction.tipo === 'receita' ? (
                              <ArrowUpCircle className="w-3 h-3" />
                            ) : (
                              <ArrowDownCircle className="w-3 h-3" />
                            )}
                            {transaction.tipo === 'receita' ? 'Receita' : 'Despesa'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{transaction.categoria}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{transaction.descricao}</td>
                        <td className={`px-6 py-4 text-right text-sm font-semibold ${
                          transaction.tipo === 'receita' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.tipo === 'receita' ? '+' : '-'} R$ {transaction.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            transaction.status === 'pago' 
                              ? 'bg-blue-100 text-blue-800' 
                              : transaction.status === 'pendente'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handleEditTransaction(transaction)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Editar"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteTransaction(transaction.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Excluir"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Adicionar/Editar */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b-2 border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                {editingTransaction ? 'Editar Transação' : 'Nova Transação'}
              </h3>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingTransaction(null);
                  resetForm();
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Tipo */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo *
                </label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setNewTransaction({ ...newTransaction, tipo: 'receita', categoria: '' })}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-semibold transition-colors ${
                      newTransaction.tipo === 'receita'
                        ? 'bg-green-50 border-green-500 text-green-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <ArrowUpCircle className="w-5 h-5 inline mr-2" />
                    Receita
                  </button>
                  <button
                    onClick={() => setNewTransaction({ ...newTransaction, tipo: 'despesa', categoria: '' })}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-semibold transition-colors ${
                      newTransaction.tipo === 'despesa'
                        ? 'bg-red-50 border-red-500 text-red-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <ArrowDownCircle className="w-5 h-5 inline mr-2" />
                    Despesa
                  </button>
                </div>
              </div>

              {/* Categoria */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Categoria *
                </label>
                <select
                  value={newTransaction.categoria}
                  onChange={(e) => setNewTransaction({ ...newTransaction, categoria: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  required
                >
                  <option value="">Selecione uma categoria</option>
                  {(newTransaction.tipo === 'receita' ? categoriasReceita : categoriasDespesa).map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Descrição */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Descrição *
                </label>
                <input
                  type="text"
                  value={newTransaction.descricao}
                  onChange={(e) => setNewTransaction({ ...newTransaction, descricao: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  placeholder="Ex: Mensalidade Janeiro - João Silva"
                  required
                />
              </div>

              {/* Valor e Data */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Valor (R$) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={newTransaction.valor}
                    onChange={(e) => setNewTransaction({ ...newTransaction, valor: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
                    placeholder="0,00"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Data *
                  </label>
                  <input
                    type="date"
                    value={newTransaction.data}
                    onChange={(e) => setNewTransaction({ ...newTransaction, data: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
                    required
                  />
                </div>
              </div>

              {/* Status e Forma de Pagamento */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Status *
                  </label>
                  <select
                    value={newTransaction.status}
                    onChange={(e) => setNewTransaction({ ...newTransaction, status: e.target.value as any })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  >
                    <option value="pago">Pago</option>
                    <option value="pendente">Pendente</option>
                    <option value="atrasado">Atrasado</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Forma de Pagamento
                  </label>
                  <select
                    value={newTransaction.formaPagamento}
                    onChange={(e) => setNewTransaction({ ...newTransaction, formaPagamento: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  >
                    {formasPagamento.map(forma => (
                      <option key={forma} value={forma}>{forma}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Observações */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Observações
                </label>
                <textarea
                  value={newTransaction.observacoes}
                  onChange={(e) => setNewTransaction({ ...newTransaction, observacoes: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  rows={3}
                  placeholder="Informações adicionais..."
                />
              </div>

              {/* Botões */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSaveTransaction}
                  className="flex-1 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  {editingTransaction ? 'Salvar Alterações' : 'Adicionar Transação'}
                </button>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingTransaction(null);
                    resetForm();
                  }}
                  className="px-6 py-3 border-2 border-black rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}