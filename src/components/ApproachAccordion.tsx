import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ApproachItem {
  number: string;
  title: string;
  description: string;
}

interface ApproachAccordionProps {
  isMobile?: boolean;
}

const approachData: ApproachItem[] = [
  {
    number: '1',
    title: 'Fundamentos',
    description: 'Explorar os princípios básicos da linguagem visual: forma, cor, textura e composição. Cada aluno desenvolve uma base sólida que orienta suas escolhas criativas ao longo do curso.'
  },
  {
    number: '2',
    title: 'Ideia',
    description: 'Desenvolver conceitos próprios a partir de referências, experimentações e reflexões. O processo criativo é estimulado por meio de exercícios que incentivam o pensamento autoral e a expressão individual.'
  },
  {
    number: '3',
    title: 'Forma',
    description: 'Traduzir ideias em soluções visuais concretas, explorando diferentes técnicas e materiais. A forma é resultado de um processo consciente de investigação plástica e formal.'
  },
  {
    number: '4',
    title: 'Resultado',
    description: 'Consolidar o aprendizado em trabalhos finais que refletem o percurso individual de cada aluno. Os projetos apresentam uma síntese pessoal dos estudos realizados ao longo do atelier.'
  }
];

export function ApproachAccordion({ isMobile = false }: ApproachAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      {approachData.map((item, index) => (
        <div 
          key={index} 
          className="w-full"
        >
          <div
            className={`content-stretch flex gap-[32px] items-center px-0 ${
              isMobile ? 'py-[20px]' : 'py-[24px]'
            } relative shrink-0 w-full cursor-pointer transition-all duration-150`}
            onClick={() => toggleItem(index)}
            data-name="Link Block"
          >
            <p
              className={`css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 ${
                isMobile ? 'text-[20px]' : 'text-[32px]'
              } ${openIndex === index ? 'text-black' : 'text-[#d8d8d8]'} tracking-[0.2px] transition-all duration-150`}
            >
              {item.number}
            </p>
            <p
              className={`${
                isMobile
                  ? "css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px not-italic relative text-[32px] tracking-[0.32px]"
                  : "css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.1] not-italic relative shrink-0 text-[84px] text-center tracking-[0.84px]"
              } ${openIndex === index ? 'text-black' : 'text-[#d8d8d8]'} transition-all duration-150`}
            >
              {item.title}
            </p>
            <ChevronDown
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-150 ${
                isMobile ? 'h-5 w-5' : 'h-6 w-6'
              } ${openIndex === index ? 'text-black rotate-180 opacity-100' : 'text-[#d8d8d8] rotate-0 opacity-50'}`}
            />
          </div>
          
          {/* Accordion Content - Appears only on Click */}
          <div
            className={`overflow-hidden transition-all duration-200 ease-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div
              className={`${
                isMobile ? 'px-[52px] pb-[20px] pt-[8px]' : 'px-[64px] pb-[24px] pt-[12px]'
              } transform transition-all duration-200 ${
                openIndex === index ? 'translate-y-0' : '-translate-y-4'
              }`}
            >
              <p
                className={`font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-black ${
                  isMobile ? 'text-[14px]' : 'text-[18px]'
                }`}
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                {item.description}
              </p>
            </div>
          </div>
          
          {/* Divider line */}
          <div className="relative w-full">
            <div 
              aria-hidden="true" 
              className={`border-b border-solid transition-all duration-150 ${
                openIndex === index ? 'border-black' : 'border-[#d8d8d8]'
              }`} 
            />
          </div>
        </div>
      ))}
    </div>
  );
}