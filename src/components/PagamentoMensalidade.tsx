import { useState, useEffect } from 'react';
import { CreditCard, Copy, Check, ArrowLeft, CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface PagamentoMensalidadeProps {
  valorMensalidade?: number;
  mesReferencia?: string;
  onVoltar?: () => void;
  studentId?: string;
}

interface PaymentStatus {
  status: 'em_dia' | 'atrasado' | 'cancelado';
  valor_mensalidade: number;
  dia_vencimento: number;
  ultimo_pagamento: string | null;
  proximo_vencimento: string | null;
  notas_admin: string;
}

export function PagamentoMensalidade({ 
  valorMensalidade = 350.00,
  mesReferencia = new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }),
  onVoltar,
  studentId = 'user_exemplo'
}: PagamentoMensalidadeProps) {
  const [metodoPagamento, setMetodoPagamento] = useState<'pix-copia-cola' | 'cartao'>('pix-copia-cola');
  const [pixCopiado, setPixCopiado] = useState(false);
  const [processandoPagamento, setProcessandoPagamento] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus | null>(null);
  const [isLoadingStatus, setIsLoadingStatus] = useState(true);

  // Gerar código PIX fictício (em produção, isso viria do backend)
  const pixCopiaECola = `00020126580014BR.GOV.BCB.PIX0136${Math.random().toString(36).substring(2, 38)}52040000530398654${valorMensalidade.toFixed(2)}5802BR5913ATELIER ALMA6009SAO PAULO62070503***6304${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

  // Dados do cartão
  const [dadosCartao, setDadosCartao] = useState({
    numero: '',
    nome: '',
    validade: '',
    cvv: ''
  });

  const copiarPix = () => {
    navigator.clipboard.writeText(pixCopiaECola);
    setPixCopiado(true);
    setTimeout(() => setPixCopiado(false), 3000);
  };

  const formatarNumeroCartao = (valor: string) => {
    const apenasNumeros = valor.replace(/\D/g, '');
    const limitado = apenasNumeros.substring(0, 16);
    const formatado = limitado.match(/.{1,4}/g)?.join(' ') || limitado;
    return formatado;
  };

  const formatarValidade = (valor: string) => {
    const apenasNumeros = valor.replace(/\D/g, '');
    const limitado = apenasNumeros.substring(0, 4);
    if (limitado.length >= 2) {
      return limitado.substring(0, 2) + '/' + limitado.substring(2);
    }
    return limitado;
  };

  const handleNumeroCartaoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatado = formatarNumeroCartao(e.target.value);
    setDadosCartao({ ...dadosCartao, numero: formatado });
  };

  const handleValidadeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatado = formatarValidade(e.target.value);
    setDadosCartao({ ...dadosCartao, validade: formatado });
  };

  const handlePagarCartao = async () => {
    // Validação básica
    if (!dadosCartao.numero || !dadosCartao.nome || !dadosCartao.validade || !dadosCartao.cvv) {
      alert('Por favor, preencha todos os campos do cartão');
      return;
    }

    setProcessandoPagamento(true);
    
    // Simular processamento de pagamento (em produção, chamar backend)
    setTimeout(() => {
      setProcessandoPagamento(false);
      alert('✅ Pagamento processado com sucesso!\n\nEm breve você receberá a confirmação por email.');
      setDadosCartao({ numero: '', nome: '', validade: '', cvv: '' });
    }, 2000);
  };

  // Carregar status de pagamento do aluno
  useEffect(() => {
    loadPaymentStatus();
  }, [studentId]);

  const loadPaymentStatus = async () => {
    setIsLoadingStatus(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/rest/v1/payment_status?student_id=eq.${studentId}&select=*`,
        {
          headers: {
            'apikey': publicAnonKey,
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data && data.length > 0) {
          setPaymentStatus(data[0]);
        }
      }
    } catch (error) {
      console.error('Erro ao carregar status de pagamento:', error);
    } finally {
      setIsLoadingStatus(false);
    }
  };

  const getStatusInfo = () => {
    if (!paymentStatus) return null;

    switch (paymentStatus.status) {
      case 'em_dia':
        return {
          icon: <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-500" />,
          text: 'Em Dia',
          bgColor: 'bg-green-50',
          textColor: 'text-green-700',
          borderColor: 'border-green-200'
        };
      case 'atrasado':
        return {
          icon: <Clock className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />,
          text: 'Pagamento Atrasado',
          bgColor: 'bg-orange-50',
          textColor: 'text-orange-700',
          borderColor: 'border-orange-200'
        };
      case 'cancelado':
        return {
          icon: <XCircle className="w-6 h-6 md:w-8 md:h-8 text-red-500" />,
          text: 'Mensalidade Cancelada',
          bgColor: 'bg-red-50',
          textColor: 'text-red-700',
          borderColor: 'border-red-200'
        };
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <section className="bg-[#fefbf3] py-8 md:py-12">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            {onVoltar && (
              <button
                onClick={onVoltar}
                className="p-2 hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-black" />
              </button>
            )}
            <h2 className="font-['Inter:Medium',sans-serif] text-2xl md:text-3xl lg:text-4xl font-medium text-black">
              Status de Pagamento
            </h2>
          </div>
          <p className="font-['DM_Sans:Regular',sans-serif] text-[16px] md:text-[18px] text-black opacity-80" style={{ marginLeft: onVoltar ? '56px' : '0' }}>
            Acompanhe sua situação financeira no ateliê
          </p>
        </div>

        {/* Loading */}
        {isLoadingStatus && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
              <span className="font-['DM_Sans:Regular',sans-serif] text-[16px]">
                Carregando informações...
              </span>
            </div>
          </div>
        )}

        {/* Card de Status de Pagamento */}
        {!isLoadingStatus && paymentStatus && statusInfo && (
          <div className="space-y-6">
            {/* Status Principal */}
            <div className={`rounded-lg border-2 ${statusInfo.borderColor} ${statusInfo.bgColor} p-8 shadow-lg`}>
              <div className="flex items-center gap-6">
                {statusInfo.icon}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className={`text-3xl md:text-4xl font-bold ${statusInfo.textColor} mb-2`}>
                      {statusInfo.text}
                    </h3>
                    <p className={`text-lg ${statusInfo.textColor} opacity-80`}>
                      Status atual da sua mensalidade
                    </p>
                  </div>
                  
                  {/* Informações Detalhadas */}
                  <div className={`space-y-2 ${statusInfo.textColor} opacity-90`}>
                    {paymentStatus.ultimo_pagamento && (
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        <p className="font-['DM_Sans:Medium',sans-serif] text-base">
                          Último pagamento: {new Date(paymentStatus.ultimo_pagamento).toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                    )}
                    
                    {paymentStatus.dia_vencimento && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        <p className="font-['DM_Sans:Medium',sans-serif] text-base">
                          Vencimento mensal: Todo dia {paymentStatus.dia_vencimento}
                        </p>
                      </div>
                    )}

                    {paymentStatus.valor_mensalidade && (
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5" />
                        <p className="font-['DM_Sans:Medium',sans-serif] text-base">
                          Valor da mensalidade: R$ {paymentStatus.valor_mensalidade.toFixed(2).replace('.', ',')}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Notas do Admin */}
                  {paymentStatus.notas_admin && (
                    <div className={`mt-6 pt-6 border-t ${statusInfo.textColor} border-opacity-30`}>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-['DM_Sans:SemiBold',sans-serif] text-base mb-1">
                            Observação da Secretaria:
                          </p>
                          <p className="font-['DM_Sans:Regular',sans-serif] text-base opacity-90">
                            {paymentStatus.notas_admin}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Informações Adicionais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-[#E8E1D5] rounded-lg p-6 shadow">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#fae08f] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💳</span>
                  </div>
                  <div>
                    <h4 className="font-['DM_Sans:SemiBold',sans-serif] text-lg mb-2 text-black">
                      Formas de Pagamento
                    </h4>
                    <p className="font-['DM_Sans:Regular',sans-serif] text-sm text-black opacity-80">
                      Entre em contato com a secretaria para informações sobre pagamento via PIX, transferência bancária ou cartão de crédito.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-[#E8E1D5] rounded-lg p-6 shadow">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#fae08f] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-['DM_Sans:SemiBold',sans-serif] text-lg mb-2 text-black">
                      Dúvidas sobre Pagamento?
                    </h4>
                    <p className="font-['DM_Sans:Regular',sans-serif] text-sm text-black opacity-80">
                      Nossa equipe está disponível para esclarecer qualquer dúvida sobre mensalidades e formas de pagamento.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aviso de Pagamento Atrasado */}
            {paymentStatus.status === 'atrasado' && (
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-['DM_Sans:Bold',sans-serif] text-lg text-red-900 mb-2">
                      Atenção: Pagamento em Atraso
                    </h4>
                    <p className="font-['DM_Sans:Regular',sans-serif] text-base text-red-800 mb-4">
                      Sua mensalidade está vencida. Entre em contato com a secretaria o quanto antes para regularizar sua situação e evitar a suspensão do acesso às aulas.
                    </p>
                    <button
                      onClick={() => window.location.href = '/contato'}
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-['DM_Sans:Medium',sans-serif] text-base transition-colors"
                    >
                      Entrar em Contato
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Informativo sobre Vencimento */}
            {paymentStatus.status === 'em_dia' && (
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-['DM_Sans:Bold',sans-serif] text-lg text-green-900 mb-2">
                      Parabéns! Sua mensalidade está em dia
                    </h4>
                    <p className="font-['DM_Sans:Regular',sans-serif] text-base text-green-800">
                      Continue aproveitando todas as aulas e benefícios do ateliê. Lembre-se: o próximo vencimento é dia {paymentStatus.dia_vencimento || '10'} do mês.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Caso não tenha dados */}
        {!isLoadingStatus && !paymentStatus && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="max-w-md mx-auto">
              <AlertTriangle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="font-['DM_Sans:SemiBold',sans-serif] text-xl text-black mb-2">
                Informações Não Disponíveis
              </h3>
              <p className="font-['DM_Sans:Regular',sans-serif] text-base text-black opacity-70 mb-6">
                Não foi possível carregar as informações de pagamento. Entre em contato com a secretaria.
              </p>
              <button
                onClick={() => window.location.href = '/contato'}
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-['DM_Sans:Medium',sans-serif] text-base transition-colors"
              >
                Falar com a Secretaria
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}