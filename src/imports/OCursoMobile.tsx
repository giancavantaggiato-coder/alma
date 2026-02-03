import imgCompanyLogo from "figma:asset/91c6f4bb39b820ba4c5b66890346b0f48d74a13f.png";
import imgPlaceholderImage from "figma:asset/1de7f5b16c38dd3644b963b0bca1dbf2605e03aa.png";
import Layout134 from './Layout134';
import Header102 from './Header102-244-671';
import Layout351 from './Layout351-244-675';
import Cta1 from './Cta1-244-768';
import Team20 from './Team20-244-758';
import { NewsletterForm } from '../components/NewsletterForm';
import { Toaster } from 'sonner@2.0.3';
import { useState } from 'react';
import MobileMenu from '../components/MobileMenu';

function CompanyLogo({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="h-[44px] relative shrink-0 w-[84px] cursor-pointer" 
      data-name="Company Logo"
      onClick={onClick}
    >
      <img alt="Alma Ateliê" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogo} />
    </div>
  );
}

function Content({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <CompanyLogo onClick={onLogoClick} />
    </div>
  );
}

function Content1({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pl-[20px] pr-[12px] py-0 relative size-full">
          <Content onLogoClick={onLogoClick} />
        </div>
      </div>
    </div>
  );
}

function Navbar({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <div className="bg-[#fef8e8] content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Navbar / 7 /">
      <Content1 onLogoClick={onLogoClick} />
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tagline
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tagline
      </p>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[44px] tracking-[0.44px] w-full">O Curso</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Um espaço de prática, reflexão e desenvolvimento de repertório visual através do desenho, pintura, escultura e design.
      </p>
    </div>
  );
}

function Button() {
  return (
    <div 
      className="bg-black content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer" 
      data-name="Button"
      onClick={() => (window as any).navigateTo?.('facaparte')}
    >
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscrever-se
      </p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button />
    </div>
  );
}

function IntroSection() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-start px-[20px] py-[64px] relative w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[1280px] relative shrink-0 w-full">
        <Content2 />
        <Actions />
      </div>
    </div>
  );
}

function FooterContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[32px] tracking-[0.32px] w-full">Inscreva-se na newsletter</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Receba atualizações sobre o curso, aulas abertas e conteúdos exclusivos
      </p>
    </div>
  );
}

function NewsletterSection() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-start px-[20px] py-[64px] relative w-full">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1280px] relative shrink-0 w-full">
        <FooterContent />
        <NewsletterForm />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center px-[20px] py-[64px] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
          <img alt="Alma Ateliê" className="h-[44px] w-[84px] object-contain" src={imgCompanyLogo} />
          <div className="flex flex-col gap-[16px] w-full">
            <button 
              onClick={() => (window as any).navigateTo?.('inicio')}
              className="text-white text-left text-[14px] font-['DM_Sans:Regular',sans-serif] hover:text-[#FEFBF3] transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => (window as any).navigateTo?.('ocurso')}
              className="text-white text-left text-[14px] font-['DM_Sans:Regular',sans-serif] hover:text-[#FEFBF3] transition-colors"
            >
              O Curso
            </button>
            <button 
              onClick={() => (window as any).navigateTo?.('trabalhos')}
              className="text-white text-left text-[14px] font-['DM_Sans:Regular',sans-serif] hover:text-[#FEFBF3] transition-colors"
            >
              Trabalhos
            </button>
            <button 
              onClick={() => (window as any).navigateTo?.('contato')}
              className="text-white text-left text-[14px] font-['DM_Sans:Regular',sans-serif] hover:text-[#FEFBF3] transition-colors"
            >
              Contato
            </button>
            <button 
              onClick={() => (window as any).navigateTo?.('blog')}
              className="text-white text-left text-[14px] font-['DM_Sans:Regular',sans-serif] hover:text-[#FEFBF3] transition-colors"
            >
              Blog
            </button>
          </div>
        </div>
        <div className="h-px w-full bg-white/20" />
        <div className="flex flex-col gap-[16px] w-full">
          <p className="text-white text-[14px] font-['DM_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'opsz' 14" }}>
            © 2024 Alma Ateliê. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OCursoMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="content-stretch flex flex-col items-start relative size-full bg-[#fefbf3]" data-name="O Curso • Mobile">
        <Navbar onLogoClick={() => setIsMenuOpen(true)} />
        <IntroSection />
        <Layout134 />
        <Header102 />
        <Layout351 />
        <Team20 />
        <Cta1 />
        <NewsletterSection />
        <Footer />
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </>
  );
}
