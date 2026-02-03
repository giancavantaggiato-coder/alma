import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { DashboardAdmin } from './DashboardAdmin';
import Navbar from './Navbar';
import Footer from './Footer';

interface PaginaDashboardAdminProps {
  navigateTo: (page: string) => void;
}

export default function PaginaDashboardAdmin({ navigateTo }: PaginaDashboardAdminProps) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar se o usuário é admin
    const checkAdmin = () => {
      const userEmail = localStorage.getItem('userEmail');
      // Lista de emails de administradores (você pode adicionar mais)
      const adminEmails = [
        'admin@almatatelier.com',
        'contato@almatatelier.com',
        // Adicione outros emails de admin aqui
      ];
      
      const isUserAdmin = userEmail && adminEmails.includes(userEmail.toLowerCase());
      setIsAdmin(!!isUserAdmin);
      setLoading(false);
    };

    checkAdmin();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#fefbf3]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-lg">Verificando permissões...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#fefbf3] flex flex-col">
        <Navbar navigateTo={navigateTo} />
        
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-black mb-2">Acesso Restrito</h2>
            <p className="text-gray-600 mb-6">
              Você não tem permissão para acessar o Dashboard Administrativo. 
              Esta área é exclusiva para administradores do sistema.
            </p>
            
            <button
              onClick={() => navigateTo('inicio')}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar para Início
            </button>
          </div>
        </div>
        
        <Footer navigateTo={navigateTo} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fefbf3] flex flex-col">
      <Navbar navigateTo={navigateTo} />
      
      {/* Botão Voltar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <button
            onClick={() => navigateTo('areaaluno')}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para Área do Aluno
          </button>
        </div>
      </div>

      <DashboardAdmin />
      
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
