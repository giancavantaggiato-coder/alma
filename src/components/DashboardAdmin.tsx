import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Download, Search, Filter, Users, DollarSign, AlertCircle, TrendingUp, FileText } from 'lucide-react';

const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

interface Student {
  id: number;
  email: string;
  name: string;
  created_at: string;
  photo_url?: string;
  bio?: string;
}

interface PaymentStatus {
  student_id: number;
  status: 'em_dia' | 'atrasado' | 'pendente';
  last_payment_date: string;
  next_due_date: string;
  monthly_fee: number;
}

interface BlogPost {
  id: number;
  student_id: number;
  title: string;
  created_at: string;
  published: boolean;
}

interface PaymentHistory {
  id: number;
  student_id: number;
  amount: number;
  payment_date: string;
  payment_method: string;
  status: string;
}

export function DashboardAdmin() {
  const [students, setStudents] = useState<Student[]>([]);
  const [paymentStatuses, setPaymentStatuses] = useState<PaymentStatus[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [paymentHistory, setPaymentHistory] = useState<PaymentHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'em_dia' | 'atrasado' | 'pendente'>('all');
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      // Buscar alunos
      const { data: studentsData, error: studentsError } = await supabase
        .from('students')
        .select('*')
        .order('created_at', { ascending: false });

      if (studentsError) throw studentsError;
      setStudents(studentsData || []);

      // Buscar status de pagamento
      const { data: paymentData, error: paymentError } = await supabase
        .from('payment_status')
        .select('*');

      if (paymentError) throw paymentError;
      setPaymentStatuses(paymentData || []);

      // Buscar posts do blog
      const { data: postsData, error: postsError } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (postsError) throw postsError;
      setBlogPosts(postsData || []);

      // Buscar histórico de pagamentos
      const { data: historyData, error: historyError } = await supabase
        .from('payment_history')
        .select('*')
        .order('payment_date', { ascending: false });

      if (historyError) throw historyError;
      setPaymentHistory(historyData || []);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  // Estatísticas
  const stats = {
    totalStudents: students.length,
    emDia: paymentStatuses.filter(p => p.status === 'em_dia').length,
    atrasados: paymentStatuses.filter(p => p.status === 'atrasado').length,
    totalPosts: blogPosts.length,
    totalRevenue: paymentHistory.reduce((sum, p) => sum + p.amount, 0),
  };

  // Filtrar alunos
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email?.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === 'all') return matchesSearch;
    
    const studentPayment = paymentStatuses.find(p => p.student_id === student.id);
    return matchesSearch && studentPayment?.status === filterStatus;
  });

  // Exportar para CSV
  const exportToCSV = () => {
    const headers = ['ID', 'Nome', 'Email', 'Data de Cadastro', 'Status Pagamento', 'Próximo Vencimento', 'Posts Publicados'];
    const rows = filteredStudents.map(student => {
      const payment = paymentStatuses.find(p => p.student_id === student.id);
      const postsCount = blogPosts.filter(p => p.student_id === student.id && p.published).length;
      
      return [
        student.id,
        student.name || 'N/A',
        student.email,
        new Date(student.created_at).toLocaleDateString('pt-BR'),
        payment?.status || 'N/A',
        payment?.next_due_date ? new Date(payment.next_due_date).toLocaleDateString('pt-BR') : 'N/A',
        postsCount,
      ];
    });

    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `alunos_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'em_dia': return 'text-green-600 bg-green-100';
      case 'atrasado': return 'text-red-600 bg-red-100';
      case 'pendente': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status?: string) => {
    switch (status) {
      case 'em_dia': return 'Em dia';
      case 'atrasado': return 'Atrasado';
      case 'pendente': return 'Pendente';
      default: return 'Não definido';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#fefbf3]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-lg">Carregando dados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fefbf3] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">Dashboard Administrativo</h1>
          <p className="text-gray-600">Visão geral de todos os alunos e pagamentos</p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total de Alunos</p>
                <p className="text-3xl font-bold text-black">{stats.totalStudents}</p>
              </div>
              <Users className="w-10 h-10 text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pagamentos em Dia</p>
                <p className="text-3xl font-bold text-green-600">{stats.emDia}</p>
              </div>
              <TrendingUp className="w-10 h-10 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Atrasados</p>
                <p className="text-3xl font-bold text-red-600">{stats.atrasados}</p>
              </div>
              <AlertCircle className="w-10 h-10 text-red-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Posts Publicados</p>
                <p className="text-3xl font-bold text-purple-600">{stats.totalPosts}</p>
              </div>
              <FileText className="w-10 h-10 text-purple-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Receita Total</p>
                <p className="text-2xl font-bold text-black">R$ {stats.totalRevenue.toLocaleString('pt-BR')}</p>
              </div>
              <DollarSign className="w-10 h-10 text-green-500" />
            </div>
          </div>
        </div>

        {/* Filtros e Busca */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Busca */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nome ou email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Filtro de Status */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black appearance-none bg-white cursor-pointer"
              >
                <option value="all">Todos os Status</option>
                <option value="em_dia">Em Dia</option>
                <option value="atrasado">Atrasado</option>
                <option value="pendente">Pendente</option>
              </select>
            </div>

            {/* Botão Exportar */}
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Download className="w-5 h-5" />
              Exportar CSV
            </button>
          </div>
        </div>

        {/* Tabela de Alunos */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Aluno</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Cadastro</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status Pgto</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Próx. Vencimento</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Posts</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStudents.map((student) => {
                  const payment = paymentStatuses.find(p => p.student_id === student.id);
                  const postsCount = blogPosts.filter(p => p.student_id === student.id).length;
                  const publishedPosts = blogPosts.filter(p => p.student_id === student.id && p.published).length;

                  return (
                    <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{student.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {student.photo_url ? (
                            <img
                              src={student.photo_url}
                              alt={student.name}
                              className="w-10 h-10 rounded-full object-cover mr-3"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                              <Users className="w-6 h-6 text-gray-600" />
                            </div>
                          )}
                          <div>
                            <p className="text-sm font-medium text-gray-900">{student.name || 'Não informado'}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {student.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {new Date(student.created_at).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(payment?.status)}`}>
                          {getStatusText(payment?.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {payment?.next_due_date ? new Date(payment.next_due_date).toLocaleDateString('pt-BR') : 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <span className="font-semibold">{publishedPosts}</span> / {postsCount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => setSelectedStudent(selectedStudent === student.id ? null : student.id)}
                          className="text-black hover:text-gray-700 font-medium"
                        >
                          {selectedStudent === student.id ? 'Fechar' : 'Detalhes'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Nenhum aluno encontrado</p>
            </div>
          )}
        </div>

        {/* Detalhes do Aluno Selecionado */}
        {selectedStudent && (
          <div className="mt-6 bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-4">Detalhes do Aluno #{selectedStudent}</h3>
            
            {/* Histórico de Pagamentos */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Histórico de Pagamentos</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">Data</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">Valor</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">Método</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {paymentHistory
                      .filter(p => p.student_id === selectedStudent)
                      .map((payment) => (
                        <tr key={payment.id}>
                          <td className="px-4 py-2 text-sm">{new Date(payment.payment_date).toLocaleDateString('pt-BR')}</td>
                          <td className="px-4 py-2 text-sm">R$ {payment.amount.toLocaleString('pt-BR')}</td>
                          <td className="px-4 py-2 text-sm">{payment.payment_method}</td>
                          <td className="px-4 py-2 text-sm">
                            <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(payment.status)}`}>
                              {getStatusText(payment.status)}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {paymentHistory.filter(p => p.student_id === selectedStudent).length === 0 && (
                  <p className="text-gray-500 text-center py-4">Nenhum pagamento registrado</p>
                )}
              </div>
            </div>

            {/* Posts do Blog */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Posts do Blog</h4>
              <div className="space-y-2">
                {blogPosts
                  .filter(p => p.student_id === selectedStudent)
                  .map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{post.title}</p>
                        <p className="text-sm text-gray-600">
                          {new Date(post.created_at).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${post.published ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                        {post.published ? 'Publicado' : 'Rascunho'}
                      </span>
                    </div>
                  ))}
                {blogPosts.filter(p => p.student_id === selectedStudent).length === 0 && (
                  <p className="text-gray-500 text-center py-4">Nenhum post criado</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
