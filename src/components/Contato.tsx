import { useState, useEffect } from 'react';
import ContatoFuncional from './ContatoFuncional';
import ContatoMobile from './ContatoMobile';

interface ContatoProps {
  navigateTo: (page: string) => void;
}

export default function Contato({ navigateTo }: ContatoProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Expor função de navegação globalmente
  useEffect(() => {
    (window as any).navigateTo = navigateTo;

    return () => {
      delete (window as any).navigateTo;
    };
  }, [navigateTo]);

  return isMobile ? <ContatoMobile /> : <ContatoFuncional />;
}