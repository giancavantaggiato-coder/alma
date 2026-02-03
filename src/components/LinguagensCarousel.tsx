import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import imgDesenhoClassico from "figma:asset/f0c567b84ec39fd72ebf0d1dfb7f42c0079ec7f4.png";

interface Linguagem {
  id: number;
  titulo: string;
  subtitulo: string;
  imagem: string;
}

const linguagens: Linguagem[] = [
  {
    id: 1,
    titulo: "Desenho",
    subtitulo: "A base de toda investigação visual e expressão",
    imagem: imgDesenhoClassico
  },
  {
    id: 2,
    titulo: "Pintura",
    subtitulo: "Exploração da cor, matéria e gesto pictórico",
    imagem: "https://images.unsplash.com/photo-1613746203812-717e6e5db3da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGluZyUyMGF0ZWxpZXIlMjBzdHVkaW98ZW58MXx8fHwxNzY5MTEwOTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    titulo: "Escultura",
    subtitulo: "Investigação tridimensional através da forma e volume",
    imagem: "https://images.unsplash.com/photo-1758522276989-a9a97ebf68c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3VscHR1cmUlMjBjbGF5JTIwc3R1ZGlvfGVufDF8fHx8MTc2OTExMDk2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    titulo: "Design",
    subtitulo: "Processo e construção formal aplicados à função",
    imagem: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBncmFwaGljJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2OTExMDk2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function LinguagensCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const currentLinguagem = linguagens[currentIndex];

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? linguagens.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === linguagens.length - 1 ? 0 : prev + 1));
  };

  // Variantes de animação para a imagem
  const imageVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      scale: 1.1,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: 0.95,
      x: direction > 0 ? -100 : 100,
    }),
  };

  // Variantes de animação para os textos
  const textVariants = {
    enter: {
      opacity: 0,
      y: 20,
    },
    center: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Slider">
      <div className="bg-[#fefbf3] content-stretch flex flex-[1_0_0] flex-col h-full items-center min-h-px min-w-px relative" data-name="Column">
        {/* Imagem */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative w-full" data-name="Image">
          <div className="flex-[1_0_0] min-h-px min-w-px relative w-full overflow-hidden" data-name="Placeholder Image">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentLinguagem.id}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  opacity: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                  scale: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
                  x: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                }}
                className="absolute inset-0"
              >
                <img 
                  alt={currentLinguagem.titulo} 
                  className="absolute h-full left-0 max-w-none top-0 w-full object-cover" 
                  src={currentLinguagem.imagem} 
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Título e Subtítulo */}
        <div className="relative shrink-0 w-full" data-name="Row">
          <div className="content-stretch flex flex-col items-start pb-[128px] pt-[32px] px-[32px] relative w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[768px] relative shrink-0 text-black w-full overflow-hidden" data-name="Content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${currentLinguagem.id}`}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.15,
                  }}
                >
                  <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[26px] tracking-[0.26px] w-full">
                    {currentLinguagem.titulo}
                  </p>
                </motion.div>
              </AnimatePresence>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={`subtitle-${currentLinguagem.id}`}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.25,
                  }}
                >
                  <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                    {currentLinguagem.subtitulo}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Controles do Carrossel */}
      <div className="absolute bottom-[32px] content-stretch flex items-center justify-between left-[4.44%] right-[4.44%]" data-name="Content">
        {/* Dots */}
        <div className="h-[8px] relative shrink-0 flex gap-[12px] items-center" data-name="Slider Dots">
          {linguagens.map((_, index) => (
            <motion.div
              key={index}
              className={`h-[8px] w-[8px] rounded-full cursor-pointer ${ 
                index === currentIndex ? 'bg-black' : 'bg-black'
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              animate={{
                opacity: index === currentIndex ? 1 : 0.2,
                scale: index === currentIndex ? 1.2 : 1,
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.3, opacity: 0.8 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Botões de Navegação */}
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Slider Buttons">
          {/* Botão Anterior */}
          <motion.button
            onClick={handlePrevious}
            className="bg-[#fefbf3] content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 cursor-pointer"
            data-name="Slider Arrow"
            whileHover={{ 
              backgroundColor: '#f8f5ed',
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[50px]" />
            <ChevronLeft className="w-[24px] h-[24px]" />
          </motion.button>

          {/* Botão Próximo */}
          <motion.button
            onClick={handleNext}
            className="bg-[#fefbf3] content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 cursor-pointer"
            data-name="Slider Arrow"
            whileHover={{ 
              backgroundColor: '#f8f5ed',
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[50px]" />
            <ChevronRight className="w-[24px] h-[24px]" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}