import svgPaths from "./svg-1tmnttyxc9";
import imgCompanyLogo from "figma:asset/91c6f4bb39b820ba4c5b66890346b0f48d74a13f.png";
import imgHeader113 from "figma:asset/b328b7c2b53aae480c3d4238574f893c519837b3.png";
import imgPlaceholderImage1 from "figma:asset/5d13dd12eaadc280ba4fc445cab37fa50d111584.png";
import imgPlaceholderImage2 from "figma:asset/59cef3426618bdeadf0ab4bba25ef5858b25f963.png";
import imgPlaceholderImage3 from "figma:asset/e92de2fb857078d138d24cced07f43997b60e548.png";
import imgPlaceholderImage from "figma:asset/dc9aef2a0b2e0629a92a5bed959e6adbf65e0df5.png";
import imgCompanyLogo1 from "figma:asset/64b1c89f3bd3a9933dc022439b9a52a682a06397.png";
import { WorkCarousel } from '../components/WorkCarousel';
import { ApproachAccordion } from '../components/ApproachAccordion';
import { ParallaxHeader } from '../components/ParallaxHeader';
import { NewsletterForm } from '../components/NewsletterForm';
import { Toaster } from 'sonner@2.0.3';

function CompanyLogo() {
  return (
    <div 
      className="h-[44px] relative shrink-0 w-[84px] cursor-pointer" 
      data-name="Company Logo"
      onClick={() => (window as any).navigateTo?.('inicio')}
    >
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogo} />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron Down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron Down">
          <path clipRule="evenodd" d={svgPaths.pee47f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavLinkDropdown() {
  const handleClick = () => {
    const nav = (window as any).navigateTo;
    if (nav) nav('faq');
  };

  return (
    <div 
      className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="Nav Link Dropdown"
      onClick={handleClick}
    >
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        FAQ
      </p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex gap-[32px] items-center overflow-clip relative shrink-0" data-name="Column">
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => (window as any).navigateTo?.('ocurso')}
      >
        Quem somos
      </p>
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => (window as any).navigateTo?.('trabalhos')}
      >
        Trabalhos
      </p>
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => (window as any).navigateTo?.('contato')}
      >
        Contato
      </p>
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => (window as any).navigateTo?.('blog')}
      >
        Blog
      </p>
      <NavLinkDropdown />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Content">
      <CompanyLogo />
      <Column />
    </div>
  );
}

function Button() {
  return (
    <div 
      className="bg-black content-stretch flex items-center justify-center px-[20px] py-[8px] relative shrink-0 cursor-pointer hover:bg-gray-800 transition-colors" 
      data-name="Button"
      onClick={() => (window as any).navigateTo?.('joinin')}
    >
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Quero começar
      </p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-center relative shrink-0" data-name="Actions">
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Container">
      <Content />
      <Actions />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[64px] py-0 relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-[#fef8e8] content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Navbar / 7 /">
      <Header />
    </div>
  );
}

function Button1() {
  return (
    <div 
      className="bg-[#fefbf3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer" 
      data-name="Button"
      onClick={() => (window as any).navigateTo?.('ocurso')}
    >
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#191919] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Saiba mais
      </p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button1 />
    </div>
  );
}

function ColumnOne() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-full items-start justify-end min-h-px min-w-px relative" data-name="Column one">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.1] not-italic relative shrink-0 text-[#fef8e8] text-[84px] tracking-[0.84px] w-[777px]">Ensino que integra o clássico com o contemporâneo</p>
      <Actions1 />
    </div>
  );
}

function ColumnTwo() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Column two" />;
}

function Component() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[80px] items-start min-h-px min-w-px relative w-full" data-name="Component">
      <ColumnOne />
      <ColumnTwo />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-end max-w-[1280px] min-h-px min-w-px relative" data-name="Container">
      <Component />
    </div>
  );
}

function Header1() {
  return (
    <div className="h-[900px] relative shrink-0 w-full" data-name="Header / 113 /">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[160%] left-0 max-w-none top-[-15.11%] w-full" src={imgHeader113} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
      </div>
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[64px] py-[112px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
        Quem somos
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Content">
      <TaglineWrapper />
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[32px] text-black text-center tracking-[0.32px] w-[768px]">Somos um atelier de artes visuais voltado ao desenvolvimento e aprofundamento da prática artística. Oferecemos um ambiente de estudo, produção e troca, voltado a quem busca uma formação com seriedade e clareza de percurso.</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
          Saiba mais
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
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

function Button4() {
  return (
    <div 
      className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer border border-black" 
      data-name="Button"
      onClick={() => (window as any).navigateTo?.('trabalhos')}
    >
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Saiba mais
      </p>
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <Button4 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[235px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Component">
      <Content1 />
      <Actions2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component1 />
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-[#fef8e8] content-stretch flex flex-col items-center overflow-clip px-[64px] py-[112px] relative shrink-0 w-full" data-name="Layout / 140 /">
      <Container2 />
    </div>
  );
}

function TaglineWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Abordagem
      </p>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Component">
      <TaglineWrapper1 />
      <ApproachAccordion isMobile={false} />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component2 />
    </div>
  );
}

function Cta1() {
  return (
    <div className="bg-[#fef8e8] relative shrink-0 w-full" data-name="CTA / 38 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center px-[64px] py-[112px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[768px] relative shrink-0 text-black w-full" data-name="Section Title">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[60px] tracking-[0.6px] w-full">Trabalhos dos alunos</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`Os trabalhos refletem processos individuais de cada aluno. Cada obra apresenta escolhas, experimentações e soluções formais desenvolvidas ao longo do estudo no atelier. `}</p>
    </div>
  );
}

function Container4() {
  const works = [
    { id: 1, image: imgPlaceholderImage1, title: 'Paisagem Urbana', author: 'Ana Silva', year: '2024' },
    { id: 2, image: imgPlaceholderImage2, title: 'Estudo de Luz', author: 'Carlos Mendes', year: '2024' },
    { id: 3, image: imgPlaceholderImage3, title: 'Natureza Morta', author: 'Maria Santos', year: '2023' },
    { id: 4, image: imgPlaceholderImage1, title: 'Retrato', author: 'João Costa', year: '2024' },
    { id: 5, image: imgPlaceholderImage2, title: 'Composição', author: 'Laura Oliveira', year: '2023' },
    { id: 6, image: imgPlaceholderImage3, title: 'Abstração', author: 'Pedro Alves', year: '2024' },
    { id: 7, image: imgPlaceholderImage1, title: 'Figura Humana', author: 'Beatriz Rodrigues', year: '2024' },
    { id: 8, image: imgPlaceholderImage2, title: 'Paisagem Rural', author: 'Ricardo Fernandes', year: '2023' },
    { id: 9, image: imgPlaceholderImage3, title: 'Estudo Cromático', author: 'Sofia Martins', year: '2024' },
    { id: 10, image: imgPlaceholderImage1, title: 'Perspectiva', author: 'Miguel Sousa', year: '2023' },
    { id: 11, image: imgPlaceholderImage2, title: 'Textura e Forma', author: 'Carolina Lopes', year: '2024' },
    { id: 12, image: imgPlaceholderImage3, title: 'Composição Geométrica', author: 'Daniel Pereira', year: '2024' },
  ];
  
  const handleWorkClick = (id: number) => {
    // Mapear para os IDs dos alunos reais (1, 2, 3)
    const studentId = ((id - 1) % 3) + 1;
    (window as any).navigateTo?.('trabalho', studentId);
  };
  
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <WorkCarousel works={works} isMobile={false} onWorkClick={handleWorkClick} />
    </div>
  );
}

function Gallery() {
  return (
    <div className="bg-[#fef8e8] relative shrink-0 w-full" data-name="Gallery / 20 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[60px] tracking-[0.6px] w-full">Saiba como participar</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tenha uma aula aberta e saiba mais
      </p>
    </div>
  );
}

function Button5() {
  return (
    <div 
      className="bg-[#fae08f] content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="Button"
      onClick={() => {
        if ((window as any).navigateTo) {
          (window as any).navigateTo('joinin');
        }
      }}
    >
      <div aria-hidden="true" className="absolute border border-[#fae08f] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscrever
      </p>
    </div>
  );
}

function Button6() {
  return (
    <div 
      className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-[rgba(0,0,0,0.05)] transition-colors" 
      data-name="Button"
      onClick={() => {
        if ((window as any).navigateTo) {
          (window as any).navigateTo('contato');
        }
      }}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contato
      </p>
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button6 />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <Content6 />
      <Actions3 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full" data-name="Component">
      <Column1 />
      <div className="aspect-[600/400] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] overflow-hidden shadow-xl" data-name="Placeholder Image">
        <img 
          alt="Atelier de artes visuais - aula experimental" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1758522274945-7f000385a3dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdHVkZW50JTIwcGFpbnRpbmclMjBjcmVhdGl2ZSUyMHdvcmtzaG9wfGVufDF8fHx8MTc2OTMwNjM1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
        />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component3 />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#c8b372] relative shrink-0 w-full" data-name="CTA / 1 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function CompanyLogo1() {
  return (
    <div className="h-[44px] relative shrink-0 w-[84px]" data-name="Company Logo">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogo1} />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Logo">
      <CompanyLogo1 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-start flex flex-wrap font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[32px] items-start leading-[1.6] max-w-[480px] relative shrink-0 text-[16px] text-white w-full" data-name="Links">
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => (window as any).navigateTo?.('inicio')}>
        Início
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => (window as any).navigateTo?.('ocurso')}>
        O curso
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => (window as any).navigateTo?.('trabalhos')}>
        Trabalhos
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => (window as any).navigateTo?.('contato')}>
        Contato
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => (window as any).navigateTo?.('blog')}>
        Blog
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => (window as any).navigateTo?.('acesso')}>
        Acesso
      </p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <Logo />
      <Links />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[400px]" data-name="Column">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[18px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Mantenha-se atualizado
      </p>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
        <NewsletterForm theme="dark" inputSize="large" />
        <div className="content-stretch flex font-normal gap-[4px] h-[18px] items-start relative shrink-0 text-[12px] text-white w-full">
          <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] leading-[1.6] relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
            Ao se inscrever você concorda com nossa Política de Privacidade
          </p>
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Content">
      <Column2 />
      <Column3 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 underline" data-name="Footer Links">
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Privacy Policy
      </p>
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Terms of Service
      </p>
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Cookies Settings
      </p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex font-['DM_Sans:Regular',sans-serif] font-normal items-start justify-between leading-[1.6] relative shrink-0 text-[16px] text-white w-full" data-name="Row">
      <FooterLinks />
      <p className="css-ew64yg relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        © 2024 Relume. All rights reserved.
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
      <Row />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content8 />
      <Credits />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#000000] relative shrink-0 w-full" data-name="Footer / 8 /">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[80px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

export default function InicioDesktop() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="content-stretch flex flex-col items-start relative size-full" data-name="Início • Desktop">
        <Navbar />
        <ParallaxHeader imageSrc={imgHeader113} isMobile={false} />
        <Layout />
        <Cta1 />
        <Gallery />
        <Cta />
        <Footer />
      </div>
    </>
  );
}