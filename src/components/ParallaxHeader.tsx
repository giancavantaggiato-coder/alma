import { useEffect, useState } from 'react';
import { Mail, MessageCircle, ChevronDown, Instagram } from 'lucide-react';

interface ParallaxHeaderProps {
  imageSrc: string;
  isMobile: boolean;
}

export function ParallaxHeader({ imageSrc, isMobile }: ParallaxHeaderProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcula o offset do parallax (move muito sutilmente - 5% da velocidade do scroll)
  const parallaxOffset = scrollY * 0.05;

  return (
    <div 
      className={`${isMobile ? 'h-[812px]' : 'h-[800px]'} relative shrink-0 w-full overflow-hidden`} 
      data-name="Header / 113 /"
    >
      {/* Imagem com parallax */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <img 
          alt="" 
          className="absolute max-w-none size-full"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
            width: '100%',
            height: '120%', // Altura extra para permitir o movimento do parallax
            top: '-10%', // Ajuste inicial para centralizar melhor
            filter: 'brightness(0.7)', // 30% mais escuro
          }}
          src={imageSrc} 
        />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
      </div>
      
      {/* Conteúdo */}
      <div className="relative flex flex-row justify-center size-full z-10">
        <div className={`content-stretch flex items-start justify-center ${isMobile ? 'px-[20px] py-[64px]' : 'px-[64px] py-[112px]'} relative size-full`}>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-end max-w-[1280px] min-h-px min-w-px relative">
            {isMobile ? <MobileContent /> : <DesktopContent />}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative w-full">
      {/* Column One */}
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative w-full">
        <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.1] min-w-full not-italic relative shrink-0 text-[48px] text-white tracking-[0.48px] w-[min-content]">
          Medium length hero heading goes here
        </p>
        {/* Actions */}
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
          <div 
            className="bg-black content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer"
            onClick={() => (window as any).navigateTo?.('ocurso')}
          >
            <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
            <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
              Saiba mais
            </p>
          </div>
        </div>
      </div>
      
      {/* Column Two */}
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative w-full">
        <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>
      </div>
    </div>
  );
}

function DesktopContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isContactOpen && !target.closest('.contact-dropdown')) {
        setIsContactOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isContactOpen]);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20atelier!', '_blank');
    setIsContactOpen(false);
  };

  const handleEmail = () => {
    window.location.href = 'mailto:contato@atelieralma.com.br?subject=Contato%20do%20Site&body=Olá,%20gostaria%20de%20saber%20mais%20informações.';
    setIsContactOpen(false);
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/alma.estudosvisuais', '_blank');
    setIsContactOpen(false);
  };

  return (
    <div className="content-stretch flex gap-[80px] items-end relative shrink-0 w-full">
      {/* Column One */}
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">
        <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.1] min-w-full not-italic relative shrink-0 text-[72px] text-white tracking-[0.72px] w-[min-content]">
          Medium length hero heading goes here
        </p>
        {/* Actions */}
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
          <div 
            className="bg-black content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-[#333] transition-colors"
            onClick={() => (window as any).navigateTo?.('ocurso')}
          >
            <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
            <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
              Saiba mais
            </p>
          </div>
          
          {/* Dropdown de Contato */}
          <div className="relative contact-dropdown">
            {/* removed existing code */}
            {isContactOpen && (
              <div className="absolute left-0 top-full mt-2 bg-black text-white py-3 px-4 rounded-lg shadow-xl z-10">
                <div className="flex flex-row gap-6 items-center">
                  <div 
                    className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle size={18} className="flex-shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <p className="text-xs font-medium whitespace-nowrap">WhatsApp</p>
                      <p className="text-[10px] text-gray-400 whitespace-nowrap">+55 (11) 98765-4321</p>
                    </div>
                  </div>
                  
                  <div className="h-6 w-px bg-gray-600"></div>
                  
                  <div 
                    className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
                    onClick={handleEmail}
                  >
                    <Mail size={18} className="flex-shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <p className="text-xs font-medium whitespace-nowrap">E-mail</p>
                      <p className="text-[10px] text-gray-400 whitespace-nowrap">contato@almavistual.com.br</p>
                    </div>
                  </div>
                  
                  <div className="h-6 w-px bg-gray-600"></div>
                  
                  <div 
                    className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
                    onClick={handleInstagram}
                  >
                    <Instagram size={18} className="flex-shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <p className="text-xs font-medium whitespace-nowrap">Instagram</p>
                      <p className="text-[10px] text-gray-400 whitespace-nowrap">@alma.estudosvisuais</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Column Two */}
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
        <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px relative text-[20px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>
      </div>
    </div>
  );
}