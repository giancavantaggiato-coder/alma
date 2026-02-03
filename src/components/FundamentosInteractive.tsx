import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import imgPlaceholderImage1 from "figma:asset/1d5120f45d9bf53d4967b6fbcfdd3d92918c3338.png";
import imgCard from "figma:asset/247364360f3ac00e7989b895236cbeca37be03fe.png";
import imgCard1 from "figma:asset/4ad9a21867fd212f303ba0916a8d0b88d5165132.png";
import imgPlaceholderImage2 from "figma:asset/ddbd048273a6fe1636a327fa372c3ec38a6d7955.png";

interface Fundamento {
  id: number;
  numero: string;
  titulo: string;
  descricao: string;
  imagem: string;
}

const fundamentos: Fundamento[] = [
  {
    id: 1,
    numero: "01",
    titulo: "Percepção Visual",
    descricao: "Como os elementos se relacionam no espaço, criando equilíbrio, tensão e significado visual.",
    imagem: imgPlaceholderImage1
  },
  {
    id: 2,
    numero: "02",
    titulo: "Desenho",
    descricao: "A base de toda investigação visual e construção formal, desenvolvendo repertório técnico e expressivo.",
    imagem: imgCard
  },
  {
    id: 3,
    numero: "03",
    titulo: "Plástica",
    descricao: "Investigação tridimensional através da matéria, forma e volume no espaço.",
    imagem: imgCard1
  },
  {
    id: 4,
    numero: "04",
    titulo: "Composição",
    descricao: "Organização consciente dos elementos visuais para criar estrutura, ritmo e narrativa.",
    imagem: imgPlaceholderImage2
  }
];

export function FundamentosInteractive() {
  const [activeTab, setActiveTab] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const activeFundamento = fundamentos.find(f => f.id === activeTab) || fundamentos[0];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Layout Mobile
  if (isMobile) {
    return (
      <div className="bg-[#fefbf3] flex flex-col items-start w-full">
        {fundamentos.map((fundamento, index) => {
          const isActive = fundamento.id === activeTab;
          
          return (
            <div key={fundamento.id} className="w-full">
              {/* Tab Header */}
              <div 
                className="flex flex-row items-center justify-start px-[24px] py-[20px] cursor-pointer hover:bg-[#f8f5ed] transition-colors"
                onClick={() => setActiveTab(fundamento.id)}
              >
                <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic text-[20px] text-black tracking-[0.2px] mr-[48px]">
                  {fundamento.numero}
                </p>
                <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic text-[20px] text-black tracking-[0.2px]">
                  {fundamento.titulo}
                </p>
              </div>

              {/* Conteúdo expandido */}
              {isActive && (
                <div className="flex flex-col gap-[32px] px-[24px] pb-[32px] pt-[16px] animate-fadeIn">
                  <div className="flex flex-col gap-[20px] items-start text-black w-full">
                    <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic text-[32px] tracking-[0.32px] w-full">
                      {fundamento.titulo}
                    </p>
                    <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                      {fundamento.descricao}
                    </p>
                  </div>
                  <div className="aspect-[287/320] relative rounded-[16px] w-full">
                    <img 
                      alt={fundamento.titulo} 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" 
                      src={fundamento.imagem} 
                    />
                  </div>
                </div>
              )}

              {/* Divider */}
              {index < fundamentos.length - 1 && (
                <div className="h-0 relative w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 1">
                      <line stroke="rgba(0,0,0,1)" strokeOpacity="0.15" x2="100%" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // Layout Desktop (original)
  return (
    <div className="bg-[#fefbf3] flex items-start w-full h-full">
      {fundamentos.map((fundamento) => {
        const isActive = fundamento.id === activeTab;
        
        return (
          <div 
            key={fundamento.id}
            className={`bg-[#fefbf3] flex items-start relative transition-all duration-500 ease-out cursor-pointer hover:bg-[#f8f5ed] h-full ${
              isActive ? 'flex-1' : 'flex-none'
            }`}
            onMouseEnter={() => setActiveTab(fundamento.id)}
          >
            <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.15)] border-r border-solid inset-0 pointer-events-none" />
            
            {/* Tab Lateral */}
            <div className="flex flex-col h-full items-center justify-between px-[24px] py-[32px] shrink-0 w-[86px]">
              <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic shrink-0 text-[32px] text-black text-center tracking-[0.32px]">
                {fundamento.numero}
              </p>
              <div className="flex items-center justify-center flex-1 w-full min-h-0">
                <div className="flex-none rotate-[270deg] origin-center">
                  <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic text-[32px] text-black tracking-[0.32px] whitespace-nowrap">
                    {fundamento.titulo}
                  </p>
                </div>
              </div>
            </div>

            {/* Conteúdo expandido */}
            {isActive && (
              <motion.div 
                key={fundamento.id}
                className="flex flex-col gap-[48px] h-full items-start justify-center px-[48px] py-[64px] flex-1 bg-[#fefbf3]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <motion.div 
                  className="flex flex-col gap-[24px] items-start shrink-0 text-black w-full max-w-[640px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.1,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic shrink-0 text-[48px] tracking-[0.48px]">
                    {activeFundamento.titulo}
                  </p>
                  <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] shrink-0 text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    {activeFundamento.descricao}
                  </p>
                </motion.div>
                <motion.div 
                  className="h-[400px] relative rounded-[16px] shrink-0 w-full max-w-[640px] overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <img 
                    alt={activeFundamento.titulo} 
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" 
                    src={activeFundamento.imagem} 
                  />
                </motion.div>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}