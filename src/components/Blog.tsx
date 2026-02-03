import svgPaths from "../imports/svg-11zozzcpiy";
import imgPlaceholderImage from "figma:asset/d47f9f5af24fd7129274afad903571dd3819a330.png";
import imgCta from "figma:asset/1de7f5b16c38dd3644b963b0bca1dbf2605e03aa.png";
import imgCompanyLogo from "figma:asset/64b1c89f3bd3a9933dc022439b9a52a682a06397.png";
import imgCompanyLogoNav from "figma:asset/91c6f4bb39b820ba4c5b66890346b0f48d74a13f.png";
import { blogPosts } from '../data/blogPosts';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import BlogMobile from './BlogMobile';

// ========== BLOG SECTION ==========
function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-black/40 text-center tracking-[2px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        Reflexões
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.1] not-italic relative shrink-0 text-[56px] tracking-[-0.5px] w-full">Pensamentos do atelier</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.7] relative shrink-0 text-[18px] text-black/60 max-w-[600px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Acompanhe as discussões, descobertas e momentos que marcam nosso trabalho visual
      </p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper />
      <Content />
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[13px] text-black/50 tracking-[0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text}
      </p>
    </div>
  );
}

function Info({ category, readTime }: { category: string; readTime: string }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Info">
      <Tag text={category} />
      <span className="text-black/30">·</span>
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[13px] text-black/50" style={{ fontVariationSettings: "'opsz' 14" }}>
        {readTime}
      </p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_right">
          <path d={svgPaths.p116eba00} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-start relative shrink-0 cursor-pointer group/btn transition-all" data-name="Button">
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[15px] text-black/70 group-hover/btn:text-black transition-colors" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ler artigo
      </p>
      <div className="relative shrink-0 size-[18px] opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="chevron_right">
            <path d={svgPaths.p116eba00} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Card({ post, onClick, isExpanded }: { post: typeof blogPosts[0]; onClick: () => void; isExpanded?: boolean }) {
  return (
    <div 
      className={`${isExpanded ? 'w-full' : 'flex-shrink-0 w-[400px]'} content-stretch flex flex-col gap-[24px] items-start min-h-px relative cursor-pointer group snap-start`}
      data-name="Card"
      onClick={onClick}
    >
      <div className="aspect-[405.3333435058594/270] relative rounded-[16px] shrink-0 w-full overflow-hidden" data-name="Placeholder Image">
        <img 
          alt={post.title} 
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" 
          src={post.image} 
        />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
        <Info category={post.category} readTime={post.readTime} />
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full">
          <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[32px] tracking-[0.32px] w-full group-hover:opacity-70 transition-opacity">
            {post.title}
          </p>
          <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            {post.excerpt}
          </p>
        </div>
      </div>
      <Button />
    </div>
  );
}

function Row({ navigateTo, postsToShow, isExpanded }: { navigateTo: (page: string, id?: number) => void; postsToShow: typeof blogPosts; isExpanded: boolean }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('blog-posts-scroll');
    if (container) {
      const scrollAmount = 450; // card width + gap
      const newPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = document.getElementById('blog-posts-scroll');
    if (container) {
      const handleScrollUpdate = () => {
        setScrollPosition(container.scrollLeft);
      };
      container.addEventListener('scroll', handleScrollUpdate);
      return () => container.removeEventListener('scroll', handleScrollUpdate);
    }
  }, []);

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = true;

  // Se expandido, mostra em grid
  if (isExpanded) {
    return (
      <div className="relative w-full" data-name="Row">
        <div className="grid grid-cols-3 gap-8 w-full">
          {postsToShow.map((post) => (
            <Card 
              key={post.id} 
              post={post} 
              onClick={() => navigateTo('blogpost', post.id)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Se não expandido, mostra em scroll horizontal
  return (
    <div className="relative w-full" data-name="Row">
      {/* Navigation Buttons */}
      <div className="flex justify-end gap-3 mb-6">
        <button
          onClick={() => handleScroll('left')}
          disabled={!canScrollLeft}
          className={`w-12 h-12 rounded-full border transition-all duration-300 flex items-center justify-center
            ${canScrollLeft 
              ? 'border-black/20 hover:border-black/40 hover:bg-black/5 cursor-pointer' 
              : 'border-black/10 opacity-40 cursor-not-allowed'}`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 15L7 10L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/70" />
          </svg>
        </button>
        <button
          onClick={() => handleScroll('right')}
          disabled={!canScrollRight}
          className={`w-12 h-12 rounded-full border transition-all duration-300 flex items-center justify-center
            ${canScrollRight 
              ? 'border-black/20 hover:border-black/40 hover:bg-black/5 cursor-pointer' 
              : 'border-black/10 opacity-40 cursor-not-allowed'}`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8 15L13 10L8 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/70" />
          </svg>
        </button>
      </div>

      {/* Scrollable Container */}
      <div 
        id="blog-posts-scroll"
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {postsToShow.map((post) => (
          <Card 
            key={post.id} 
            post={post} 
            onClick={() => navigateTo('blogpost', post.id)}
          />
        ))}
      </div>

      {/* Fade Overlay Right */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fefbf3] to-transparent pointer-events-none" />
      
      {/* Custom Scrollbar Hide CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

function Content7({ navigateTo, postsToShow, isExpanded }: { navigateTo: (page: string, id?: number) => void; postsToShow: typeof blogPosts; isExpanded: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row navigateTo={navigateTo} postsToShow={postsToShow} isExpanded={isExpanded} />
    </div>
  );
}

function Button3({ onClick, isExpanded }: { onClick: () => void; isExpanded: boolean }) {
  return (
    <div 
      onClick={onClick}
      className="group/expand content-stretch flex items-center justify-center px-[32px] py-[12px] relative shrink-0 cursor-pointer bg-black/5 hover:bg-black/10 rounded-full transition-all" 
      data-name="Button"
    >
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[15px] text-black/70 group-hover/expand:text-black transition-colors" style={{ fontVariationSettings: "'opsz' 14" }}>
        {isExpanded ? 'Ver menos' : 'Ver mais artigos'}
      </p>
    </div>
  );
}

function Actions({ onToggle, isExpanded }: { onToggle: () => void; isExpanded: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Actions">
      <Button3 onClick={onToggle} isExpanded={isExpanded} />
    </div>
  );
}

function Container({ navigateTo, postsToShow, onToggle, isExpanded }: { navigateTo: (page: string, id?: number) => void; postsToShow: typeof blogPosts; onToggle: () => void; isExpanded: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Content7 navigateTo={navigateTo} postsToShow={postsToShow} isExpanded={isExpanded} />
      <Actions onToggle={onToggle} isExpanded={isExpanded} />
    </div>
  );
}

function BlogSection({ navigateTo }: { navigateTo: (page: string, id?: number) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const postsToShow = isExpanded ? blogPosts : blogPosts.slice(0, 3);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    
    // Scroll suave para o topo da seção ao expandir
    if (!isExpanded) {
      setTimeout(() => {
        const container = document.getElementById('blog-posts-scroll');
        if (container) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center px-[64px] py-[112px] relative shrink-0 w-full" data-name="Blog">
      <Container 
        navigateTo={navigateTo} 
        postsToShow={postsToShow}
        onToggle={handleToggle}
        isExpanded={isExpanded}
      />
    </div>
  );
}

// ========== CTA SECTION ==========
function ContentCta() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[60px] tracking-[0.6px] w-full">Acompanhe as novidades do atelier</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Receba reflexões sobre prática visual, atualizações de cursos e convites para atividades do Alma
      </p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Text input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <input 
            type="email"
            placeholder="Seu email aqui"
            className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px bg-transparent border-none outline-none text-[18px] text-black placeholder:text-[rgba(0,0,0,0.6)]" 
            style={{ fontVariationSettings: "'opsz' 14" }}
          />
        </div>
      </div>
    </div>
  );
}

function ButtonCta() {
  return (
    <div className="bg-[#fae08f] content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-[#f5d67a] transition-colors" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#fae08f] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscrever
      </p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <TextInput />
      <ButtonCta />
    </div>
  );
}

function ActionsCta() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[513px]" data-name="Actions">
      <Form />
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[12px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ao se inscrever você concorda com nossos termos e condições.
      </p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <ContentCta />
      <ActionsCta />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full" data-name="Component">
      <Column />
      <div className="aspect-[600/400] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] group cursor-pointer" data-name="Placeholder Image">
        <div className="size-full overflow-hidden rounded-[16px] transition-all duration-500 ease-out group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] group-hover:-translate-y-2">
          <img 
            alt="Espaço de trabalho do atelier" 
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" 
            src="https://images.unsplash.com/photo-1761116182933-544a89286835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdHVkaW8lMjBwYWludGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjkzNjAyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080" 
          />
        </div>
      </div>
    </div>
  );
}

function ContainerCta() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#c8b372] content-stretch flex flex-col items-center px-[64px] py-[112px] relative shrink-0 w-full" data-name="CTA">
      <ContainerCta />
    </div>
  );
}

// ========== FOOTER ==========
function CompanyLogoFooter() {
  const handleClick = () => {
    const nav = (window as any).navigateTo;
    if (nav) nav('inicio');
  };

  return (
    <div 
      className="h-[44px] relative shrink-0 w-[84px] cursor-pointer" 
      data-name="Company Logo"
      onClick={handleClick}
    >
      <img alt="Alma Visual" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogo} />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Logo">
      <CompanyLogoFooter />
    </div>
  );
}

function Links() {
  const handleNavigate = (page: string) => {
    const nav = (window as any).navigateTo;
    if (nav) nav(page);
  };

  return (
    <div className="content-start flex flex-wrap font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[32px] items-start leading-[1.6] max-w-[480px] relative shrink-0 text-[16px] text-white w-full" data-name="Links">
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('inicio')}>
        Início
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('ocurso')}>
        O Curso
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('trabalhos')}>
        Trabalhos
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('contato')}>
        Contato
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('blog')}>
        Blog
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('joinin')}>
        Faça Parte
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('acesso')}>
        Acesso
      </p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <Logo />
      <Links />
    </div>
  );
}

function TextInputFooter() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Text input">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <input 
            type="email"
            placeholder="Digite seu email"
            className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px bg-transparent border-none outline-none text-[18px] text-white placeholder:text-[rgba(255,255,255,0.6)]" 
            style={{ fontVariationSettings: "'opsz' 14" }}
          />
        </div>
      </div>
    </div>
  );
}

function ButtonFooter() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-white/10 transition-colors" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscrever
      </p>
    </div>
  );
}

function FormFooter() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-start relative shrink-0 w-full" data-name="Form">
      <TextInputFooter />
      <ButtonFooter />
    </div>
  );
}

function ContentFooter() {
  return (
    <div className="content-stretch flex font-normal gap-[4px] h-[18px] items-start relative shrink-0 text-[12px] text-white w-full" data-name="Content">
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] leading-[1.6] relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ao se inscrever você concorda com nossa
      </p>
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid font-['DM_Sans:Regular',sans-serif] leading-[1.6] relative shrink-0 underline cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }}>
        Política de Privacidade
      </p>
    </div>
  );
}

function ActionsFooter() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <FormFooter />
      <ContentFooter />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[400px]" data-name="Column">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[18px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Newsletter
      </p>
      <ActionsFooter />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Content">
      <Column1 />
      <Column2 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 underline" data-name="Footer Links">
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }}>
        Política de Privacidade
      </p>
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }}>
        Termos de Serviço
      </p>
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }}>
        Configurações de Cookies
      </p>
    </div>
  );
}

function RowFooter() {
  return (
    <div className="content-stretch flex font-['DM_Sans:Regular',sans-serif] font-normal items-start justify-between leading-[1.6] relative shrink-0 text-[16px] text-white w-full" data-name="Row">
      <FooterLinks />
      <p className="css-ew64yg relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        © 2024 Alma Visual. Todos os direitos reservados.
      </p>
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Credits">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.2" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <RowFooter />
    </div>
  );
}

function ContainerFooter() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content8 />
      <Credits />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#000000] relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[80px] relative w-full">
          <ContainerFooter />
        </div>
      </div>
    </div>
  );
}

// ========== MAIN COMPONENT ==========
interface BlogProps {
  navigateTo: (page: string, id?: number) => void;
}

export default function Blog({ navigateTo }: BlogProps) {
  (window as any).navigateTo = navigateTo;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return <BlogMobile navigateTo={navigateTo} />;
  }

  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Blog • Desktop">
      <Navbar currentPage="blog" navigateTo={navigateTo} />
      <BlogSection navigateTo={navigateTo} />
      <Cta />
      <Footer />
    </div>
  );
}