import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-0w6zp2nrqs";

interface WorkItem {
  id: number;
  image: string;
  title?: string;
  author?: string;
  year?: string;
}

interface WorkCarouselProps {
  works: WorkItem[];
  isMobile?: boolean;
  onWorkClick?: (id: number) => void;
}

export function WorkCarousel({ works, isMobile = false, onWorkClick }: WorkCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Autoplay - avança automaticamente a cada 4 segundos
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === works.length - 1 ? 0 : prev + 1));
    }, 4000); // Troca a cada 4 segundos

    return () => clearInterval(interval);
  }, [works.length, isPaused]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? works.length - 1 : prev - 1));
    setIsPaused(true);
    // Retoma o autoplay após 8 segundos de inatividade
    setTimeout(() => setIsPaused(false), 8000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === works.length - 1 ? 0 : prev + 1));
    setIsPaused(true);
    // Retoma o autoplay após 8 segundos de inatividade
    setTimeout(() => setIsPaused(false), 8000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
    // Retoma o autoplay após 8 segundos de inatividade
    setTimeout(() => setIsPaused(false), 8000);
  };

  const handleWorkClick = (id: number) => {
    if (onWorkClick) {
      onWorkClick(id);
    }
  };

  // Mostra um pouco da próxima imagem
  const slideWidth = isMobile ? 85 : 90; // Porcentagem da largura

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      {/* Carousel Container */}
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex transition-all duration-1000 ease-in-out"
          style={{ 
            transform: `translateX(-${currentSlide * slideWidth}%)`,
            gap: isMobile ? '16px' : '24px'
          }}
        >
          {works.map((work, index) => (
            <div 
              key={work.id} 
              className="flex-shrink-0 transition-all duration-500"
              style={{ width: `${slideWidth}%` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`${
                  isMobile
                    ? 'h-[176px] w-full'
                    : 'h-[720px] w-full'
                } relative rounded-[16px] cursor-pointer overflow-hidden shadow-lg transition-all duration-300 group`}
                style={{
                  boxShadow: hoveredIndex === index 
                    ? '0 20px 40px -10px rgba(0, 0, 0, 0.3)' 
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
                onClick={() => handleWorkClick(work.id)}
              >
                {/* Imagem sem zoom */}
                <img
                  alt={work.title || `Trabalho ${index + 1}`}
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
                  src={work.image}
                />
                
                {/* Overlay com informações no hover */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none flex items-end p-8"
                >
                  <div className="text-white">
                    {work.title && (
                      <h3 className="text-2xl font-medium mb-2">{work.title}</h3>
                    )}
                    {(work.author || work.year) && (
                      <p className="text-base opacity-90">
                        {work.author}{work.author && work.year && ', '}{work.year}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Indicador de Pausa (opcional) */}
        {isPaused && (
          <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm z-30">
            Pausado
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        {/* Dots - 8px como no Figma */}
        <div className="flex items-center gap-[8px]">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="cursor-pointer transition-all duration-300 hover:opacity-60"
              onClick={() => goToSlide(index)}
            >
              {/* Dot - 8px de diâmetro */}
              <div
                className="w-[8px] h-[8px] rounded-full transition-all duration-300"
                style={{
                  backgroundColor: currentSlide === index ? 'black' : 'rgba(0, 0, 0, 0.2)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
          {/* Previous Button */}
          <div
            className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 cursor-pointer transition-all duration-200 hover:opacity-80 active:scale-95"
            onClick={goToPrev}
          >
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[50px]" />
            <div className="relative shrink-0 size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g>
                  <path d={svgPaths.p9f02800} fill="black" />
                </g>
              </svg>
            </div>
          </div>

          {/* Next Button */}
          <div
            className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 cursor-pointer transition-all duration-200 hover:opacity-80 active:scale-95"
            onClick={goToNext}
          >
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[50px]" />
            <div className="relative shrink-0 size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g>
                  <path d={svgPaths.p20b00000} fill="black" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes progress {
          from {
            stroke-dashoffset: 44;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}