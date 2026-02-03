import { useState } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  motivacao: string;
  concordoTermos: boolean;
}

export function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    whatsapp: '',
    motivacao: '',
    concordoTermos: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.concordoTermos) {
      alert('Por favor, concorde com os termos para continuar.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Enviar dados para o servidor
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-625cbc27/inscricoes`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            ...formData,
            dataEnvio: new Date().toISOString(),
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error('❌ Erro na resposta do servidor:', result);
        throw new Error(result.error || 'Erro ao enviar formulário');
      }

      if (result.success) {
        console.log('✅ Inscrição enviada com sucesso:', result);
        setSubmitStatus('success');
        
        // Mostrar confirmação visual
        alert(`✅ Inscrição enviada com sucesso!\n\nSeu ID de inscrição: ${result.inscricaoId}\n\nEntraremos em contato em breve!`);
        
        // Limpar formulário
        setFormData({
          nome: '',
          email: '',
          whatsapp: '',
          motivacao: '',
          concordoTermos: false,
        });
      } else {
        throw new Error(result.error || 'Erro desconhecido');
      }
    } catch (error) {
      console.error('❌ Erro ao enviar formulário:', error);
      setSubmitStatus('error');
      alert(`❌ Erro ao enviar formulário: ${error.message}\n\nPor favor, tente novamente.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[24px] items-start max-w-[560px] relative shrink-0 w-full">
      {/* Nome */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <label 
          htmlFor="nome"
          className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black w-full" 
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          Nome
        </label>
        <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
          <input
            id="nome"
            type="text"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            required
            disabled={isSubmitting}
            className="w-full px-[12px] py-[8px] bg-transparent font-['DM_Sans:Regular',sans-serif] text-[18px] text-black outline-none disabled:opacity-50"
            style={{ fontVariationSettings: "'opsz' 14" }}
          />
        </div>
      </div>

      {/* E-mail */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <label 
          htmlFor="email"
          className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black w-full" 
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          E-mail
        </label>
        <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={isSubmitting}
            className="w-full px-[12px] py-[8px] bg-transparent font-['DM_Sans:Regular',sans-serif] text-[18px] text-black outline-none disabled:opacity-50"
            style={{ fontVariationSettings: "'opsz' 14" }}
          />
        </div>
      </div>

      {/* WhatsApp */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <label 
          htmlFor="whatsapp"
          className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black w-full" 
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          Whatsapp
        </label>
        <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
          <input
            id="whatsapp"
            type="tel"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            required
            disabled={isSubmitting}
            placeholder="(00) 00000-0000"
            className="w-full px-[12px] py-[8px] bg-transparent font-['DM_Sans:Regular',sans-serif] text-[18px] text-black outline-none placeholder:text-[rgba(0,0,0,0.4)] disabled:opacity-50"
            style={{ fontVariationSettings: "'opsz' 14" }}
          />
        </div>
      </div>

      {/* Carta de Motivação */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <label 
          htmlFor="motivacao"
          className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black w-full" 
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          Carta de Motivação
        </label>
        <div className="bg-[rgba(255,255,255,0)] h-[180px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
          <textarea
            id="motivacao"
            value={formData.motivacao}
            onChange={(e) => setFormData({ ...formData, motivacao: e.target.value })}
            required
            disabled={isSubmitting}
            placeholder="Conte sobre você"
            className="w-full h-full p-[12px] bg-transparent font-['DM_Sans:Regular',sans-serif] text-[18px] text-black outline-none resize-none placeholder:text-[rgba(0,0,0,0.6)] disabled:opacity-50"
            style={{ fontVariationSettings: "'opsz' 14" }}
          />
        </div>
      </div>

      {/* Checkbox Termos */}
      <div className="content-stretch flex gap-[8px] items-center pb-[16px] relative shrink-0">
        <div className="relative shrink-0 size-[18px]">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
          <input
            id="termos"
            type="checkbox"
            checked={formData.concordoTermos}
            onChange={(e) => setFormData({ ...formData, concordoTermos: e.target.checked })}
            disabled={isSubmitting}
            className="size-full cursor-pointer disabled:opacity-50"
          />
        </div>
        <label 
          htmlFor="termos"
          className="css-g0mm18 flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[1.6] relative shrink-0 text-[16px] text-black cursor-pointer" 
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          Concordo com os termos
        </label>
      </div>

      {/* Botão Enviar */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#fae08f] content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-[#f5d67a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <div aria-hidden="true" className="absolute border border-[#fae08f] border-solid inset-[-1px] pointer-events-none" />
        <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </p>
      </button>
      
      {/* Mensagem de status */}
      {submitStatus === 'success' && (
        <div className="w-full p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          ✅ Inscrição enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="w-full p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          ❌ Erro ao enviar inscrição. Por favor, tente novamente.
        </div>
      )}
    </form>
  );
}