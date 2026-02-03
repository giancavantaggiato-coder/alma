import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface NewsletterFormProps {
  theme?: 'dark' | 'light';
  inputSize?: 'small' | 'large';
  origem?: string;
}

export function NewsletterForm({ theme = 'dark', inputSize = 'large', origem = 'site' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Por favor, digite seu email');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      toast.error('Por favor, digite um email válido');
      return;
    }

    setIsSubscribing(true);

    try {
      // Enviar dados para o servidor
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-625cbc27/newsletter`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            email,
            origem,
            dataInscricao: new Date().toISOString(),
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error('❌ Erro na resposta do servidor:', result);
        throw new Error(result.error || 'Erro ao inscrever na newsletter');
      }

      if (result.success) {
        console.log('✅ Inscrição na newsletter realizada com sucesso:', result);
        toast.success('Obrigado por se inscrever! Você receberá nossas novidades em breve.');
        setEmail('');
      } else {
        throw new Error(result.error || 'Erro desconhecido');
      }
    } catch (error) {
      console.error('❌ Erro ao inscrever na newsletter:', error);
      toast.error(`Erro ao inscrever: ${error.message}. Por favor, tente novamente.`);
    } finally {
      setIsSubscribing(false);
    }
  };

  const isDark = theme === 'dark';
  const textSize = inputSize === 'small' ? 'text-[14px]' : 'text-[18px]';
  const borderColor = isDark ? 'border-[rgba(255,255,255,0.2)]' : 'border-[rgba(0,0,0,0.15)]';
  const textColor = isDark ? 'text-white' : 'text-black';
  const placeholderColor = isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[rgba(0,0,0,0.6)]';

  return (
    <form onSubmit={handleSubmit} className="content-stretch flex gap-[16px] h-[48px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative">
        <div aria-hidden="true" className={`absolute border ${borderColor} border-solid inset-[-1px] pointer-events-none`} />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              disabled={isSubscribing}
              className={`css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px bg-transparent border-none outline-none ${textSize} ${textColor} placeholder:${placeholderColor}`}
              style={{ fontVariationSettings: "'opsz' 14" }}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubscribing}
        className={`content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer ${
          isSubscribing ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'
        } transition-opacity`}
      >
        <div aria-hidden="true" className={`absolute border ${borderColor} border-solid inset-[-1px] pointer-events-none`} />
        <p className={`css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 ${textSize} ${textColor}`} style={{ fontVariationSettings: "'opsz' 14" }}>
          {isSubscribing ? 'Inscrevendo...' : 'Inscrever'}
        </p>
      </button>
    </form>
  );
}