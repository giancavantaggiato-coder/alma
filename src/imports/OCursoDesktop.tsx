import svgPaths from "./svg-twsaqub6hx";
import imgCompanyLogo from "figma:asset/91c6f4bb39b820ba4c5b66890346b0f48d74a13f.png";
import imgHeader50 from "figma:asset/5487d37ad4a1f2186978ad522716ef0171547124.png";
import imgPlaceholderImage from "figma:asset/e9d5969403252297c45b63e750f4ae9e837c2ba1.png";
import imgPlaceholderImage1 from "figma:asset/1d5120f45d9bf53d4967b6fbcfdd3d92918c3338.png";
import imgCard from "figma:asset/247364360f3ac00e7989b895236cbeca37be03fe.png";
import imgCard1 from "figma:asset/4ad9a21867fd212f303ba0916a8d0b88d5165132.png";
import imgPlaceholderImage2 from "figma:asset/ddbd048273a6fe1636a327fa372c3ec38a6d7955.png";
import imgPlaceholderImage3 from "figma:asset/240f8c0aed43a7ce9397450b774c2c1b856daa17.png";
import imgPlaceholderImage4 from "figma:asset/64f6a3499b56ed7f16b53a2263ba97dffe45b135.png";
import imgPlaceholderImage5 from "figma:asset/435abd5f6a9f461c531f46ca262810a2f08b4b2a.png";
import imgPlaceholderImage6 from "figma:asset/1de7f5b16c38dd3644b963b0bca1dbf2605e03aa.png";
import imgCompanyLogo1 from "figma:asset/64b1c89f3bd3a9933dc022439b9a52a682a06397.png";
import imgDesenhoClassico from "figma:asset/f0c567b84ec39fd72ebf0d1dfb7f42c0079ec7f4.png";
import { FundamentosInteractive } from '../components/FundamentosInteractive';
import { NewsletterForm } from '../components/NewsletterForm';
import { Toaster } from 'sonner@2.0.3';
import { LinguagensCarousel } from '../components/LinguagensCarousel';
import { studentsData } from '../data/students';
import Navbar from '../components/Navbar';

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
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer" 
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
    <div className="bg-black content-stretch flex items-center justify-center px-[20px] py-[8px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Quero começar
      </p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Actions">
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
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Navbar / 7 /">
      <Header />
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Quem somos
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-white w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.1] not-italic relative shrink-0 text-[84px] tracking-[0.84px] w-full">Nosso atelier</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Desenho, pintura, escultura e design como linguagens que se conversam e se fortalecem mutuamente
      </p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper />
      <Content1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-white border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Quero começar
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-white border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Perguntas Frequentes
      </p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Component">
      <SectionTitle />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component />
    </div>
  );
}

function Header2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header / 50 /">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeader50} />
        <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
      </div>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Investigação
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center text-white w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[60px] tracking-[0.6px] w-full">Prática, reflexão e estudo como um só caminho</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        No Alma, esses três elementos não se separam. A prática de atelier é acompanhada por aulas de história da arte, modelo vivo e momentos de diálogo que conectam a experiência direta com a reflexão crítica e o contexto histórico.
      </p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper1 />
      <Content2 />
    </div>
  );
}

function Button3() {
  return (
    <div 
      className="relative shrink-0 cursor-pointer" 
      data-name="Button"
      onClick={() => (window as any).navigateTo?.('joinin')}
    >
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
          Quero começar
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_right">
          <path d={svgPaths.p116eba00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        →
      </p>
      <ChevronRight />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <Button3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <SectionTitle1 />
      <Actions2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content3 />
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-[#000000] relative shrink-0 w-full" data-name="Layout / 134 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.1] not-italic relative shrink-0 text-[84px] tracking-[0.84px] w-full">Desenho, pintura, escultura e design</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Cada área é abordada a partir de seus fundamentos técnicos e perceptivos, permitindo que o aluno desenvolva repertório, domínio material e clareza formal sem hierarquias rígidas entre os meios.
      </p>
    </div>
  );
}

function Button5() {
  return (
    <div 
      className="bg-black content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="Button"
      onClick={() => (window as any).navigateTo?.('trabalhos')}
    >
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Explorar →
      </p>
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button5 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[560px] relative shrink-0 w-full" data-name="Content">
      <Content4 />
      <Actions3 />
    </div>
  );
}

function Column1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Column">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center pl-4 pr-4 sm:pl-8 sm:pr-12 md:pl-12 md:pr-16 lg:pl-[64px] lg:pr-[80px] py-0 relative size-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative w-full" data-name="Image">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Placeholder Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Desenho clássico" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgDesenhoClassico} />
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[768px] relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[26px] tracking-[0.26px] w-full">Desenho</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        A base de toda investigação visual e expressão
      </p>
    </div>
  );
}

function Row() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col items-start pb-[128px] pt-[32px] px-[32px] relative w-full">
        <Content6 />
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-[1_0_0] flex-col h-full items-center min-h-px min-w-px relative" data-name="Column">
      <Image />
      <Row />
    </div>
  );
}

function SliderDots() {
  return (
    <div className="h-[8px] relative shrink-0 w-[40px]" data-name="Slider Dots">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 8">
        <g id="Slider Dots">
          <circle cx="4" cy="4" fill="var(--fill-0, black)" id="Dot" r="4" />
          <circle cx="20" cy="4" fill="var(--fill-0, black)" id="Dot_2" opacity="0.2" r="4" />
          <circle cx="36" cy="4" fill="var(--fill-0, black)" id="Dot_3" opacity="0.2" r="4" />
        </g>
      </svg>
    </div>
  );
}

function ArrowBack() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_back">
          <path d={svgPaths.p9f02800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SliderArrow() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0" data-name="Slider Arrow">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <ArrowBack />
    </div>
  );
}

function ArrowForward() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward">
          <path d={svgPaths.p20b00000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SliderArrow1() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0" data-name="Slider Arrow">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <ArrowForward />
    </div>
  );
}

function SliderButtons() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Slider Buttons">
      <SliderArrow />
      <SliderArrow1 />
    </div>
  );
}

function Content7() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex items-center justify-between left-[4.44%] right-[4.44%]" data-name="Content">
      <SliderDots />
      <SliderButtons />
    </div>
  );
}

function Slider() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Slider">
      <Column2 />
      <Content7 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="Component">
      <Column1 />
      <LinguagensCarousel />
    </div>
  );
}

function Header3() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col h-[900px] items-center overflow-clip relative shrink-0 w-full" data-name="Header / 102 /">
      <Component1 />
    </div>
  );
}

function TaglineWrapper2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Fundamentos
      </p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[60px] tracking-[0.6px] w-full">Os princípios que guiam a investigação</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Cada aluno constrói as leis internas do próprio trabalho a partir de uma base comum.
      </p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper2 />
      <Content8 />
    </div>
  );
}

function FeatureTab() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-between overflow-clip px-[24px] py-[32px] relative shrink-0" data-name="Feature Tab">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-full not-italic relative shrink-0 text-[32px] text-black text-center tracking-[0.32px] w-[min-content]">01</p>
      <div className="flex h-[270px] items-center justify-center relative shrink-0 w-[38px]" style={{ "--transform-inner-width": "124.84375", "--transform-inner-height": "207.765625" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative text-[32px] text-black tracking-[0.32px]">Percepção Visual</p>
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-black" data-name="Header">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-full not-italic relative shrink-0 text-[48px] tracking-[0.48px] w-[min-content]">Percepção Visual</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-[544px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Como os elementos se relacionam no espaço, criando equilíbrio, tensão e significado visual.
      </p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-full items-start px-[48px] py-[64px] relative shrink-0 w-[640px]" data-name="Content">
      <Header1 />
      <div className="h-[400px] relative rounded-[16px] shrink-0 w-[544px]" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage1} />
      </div>
    </div>
  );
}

function TabPane() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-[1_0_0] h-full items-start min-h-px min-w-px relative" data-name="Tab Pane 1">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.15)] border-r border-solid inset-0 pointer-events-none" />
      <FeatureTab />
      <Content9 />
    </div>
  );
}

function FeatureTab1() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-between overflow-clip px-[24px] py-[32px] relative shrink-0" data-name="Feature Tab">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-full not-italic relative shrink-0 text-[32px] text-black text-center tracking-[0.32px] w-[min-content]">02</p>
      <div className="flex h-[138px] items-center justify-center relative shrink-0 w-[38px]" style={{ "--transform-inner-width": "64.296875", "--transform-inner-height": "207.765625" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative text-[32px] text-black tracking-[0.32px]">Desenho</p>
        </div>
      </div>
    </div>
  );
}

function TabPane1() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex h-full items-start relative shrink-0" data-name="Tab Pane 2">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.15)] border-r border-solid inset-0 pointer-events-none" />
      <FeatureTab1 />
    </div>
  );
}

function FeatureTab2() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-between overflow-clip px-[24px] py-[32px] relative shrink-0" data-name="Feature Tab">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-full not-italic relative shrink-0 text-[32px] text-black text-center tracking-[0.32px] w-[min-content]">03</p>
      <div className="flex h-[123px] items-center justify-center relative shrink-0 w-[38px]" style={{ "--transform-inner-width": "56.375", "--transform-inner-height": "207.765625" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative text-[32px] text-black tracking-[0.32px]">Plástica</p>
        </div>
      </div>
    </div>
  );
}

function TabPane2() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex h-full items-start relative shrink-0" data-name="Tab Pane 3">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.15)] border-r border-solid inset-0 pointer-events-none" />
      <FeatureTab2 />
    </div>
  );
}

function FeatureTab3() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-between overflow-clip px-[24px] py-[32px] relative shrink-0" data-name="Feature Tab">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-full not-italic relative shrink-0 text-[32px] text-black text-center tracking-[0.32px] w-[min-content]">04</p>
      <div className="flex h-[194px] items-center justify-center relative shrink-0 w-[38px]" style={{ "--transform-inner-width": "90.484375", "--transform-inner-height": "207.765625" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative text-[32px] text-black tracking-[0.32px]">Composição</p>
        </div>
      </div>
    </div>
  );
}

function TabPane3() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex h-full items-start relative shrink-0" data-name="Tab Pane 4">
      <FeatureTab3 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="Row">
      <TabPane />
      <TabPane1 />
      <TabPane2 />
      <TabPane3 />
    </div>
  );
}

function Content10() {
  return (
    <div className="h-[720px] relative rounded-[16px] shrink-0 w-full" data-name="Content">
      <div className="flex items-start overflow-clip relative rounded-[inherit] size-full">
        <FundamentosInteractive />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle2 />
      <Content10 />
    </div>
  );
}

function Layout1() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center overflow-clip pb-[40px] pt-[36px] px-[64px] relative shrink-0 w-full" data-name="Layout / 351 /">
      <Container3 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[60px] tracking-[0.6px] w-full">Atividades Complementares</p>
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <Content11 />
    </div>
  );
}

function ContentTop() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-full not-italic relative shrink-0 text-[48px] text-white tracking-[0.48px] w-[min-content]">História da Arte</p>
    </div>
  );
}

function ContentBottom() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content Bottom">
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
    </div>
  );
}

function Card() {
  return (
    <div className="flex-[1_0_0] h-[630px] min-h-px min-w-px relative group cursor-pointer" data-name="Card">
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full transition-all duration-500 ease-out group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] group-hover:-translate-y-2">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-end p-[48px] relative size-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgCard} />
            <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 transition-colors duration-500 group-hover:bg-[rgba(0,0,0,0.3)]" />
          </div>
          <ContentTop />
          <ContentBottom />
        </div>
      </div>
    </div>
  );
}

function ContentTop1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-full not-italic relative shrink-0 text-[48px] text-white tracking-[0.48px] w-[min-content]">Modelo Vivo</p>
    </div>
  );
}

function ContentBottom1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content Bottom">
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
    </div>
  );
}

function Card1() {
  return (
    <div className="flex-[1_0_0] h-[630px] min-h-px min-w-px relative group cursor-pointer" data-name="Card">
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full transition-all duration-500 ease-out group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] group-hover:-translate-y-2">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-end p-[48px] relative size-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute h-[142%] left-[-4.21%] max-w-none top-[-21%] w-[108.42%]" src={imgCard1} />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 transition-colors duration-500 group-hover:bg-[rgba(0,0,0,0.3)]" />
          </div>
          <ContentTop1 />
          <ContentBottom1 />
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-name="Content">
      <Card />
      <Card1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle3 />
      <Content12 />
    </div>
  );
}

function Layout2() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center overflow-clip pb-[112px] pt-[4px] px-[64px] relative shrink-0 w-[1232px]" data-name="Layout / 422 /">
      <Container4 />
    </div>
  );
}

function TaglineWrapper6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tagline
      </p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[60px] tracking-[0.6px] w-full">Nossos alunos</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <TaglineWrapper6 />
      <Content13 />
    </div>
  );
}

function Button9() {
  return (
    <div 
      className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors" 
      data-name="Button"
      onClick={() => (window as any).navigateTo?.('trabalhos')}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ver todos
      </p>
    </div>
  );
}

function Actions6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[155px]" data-name="Actions">
      <Button9 />
    </div>
  );
}

function SectionTitle4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[356px]" data-name="Section Title">
      <Content14 />
      <Actions6 />
    </div>
  );
}

function Title() {
  const student = studentsData[0];
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[26px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {student.nome}
      </p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {student.meios}
      </p>
    </div>
  );
}

function Content15() {
  const student = studentsData[0];
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.6] relative shrink-0 text-black w-full" data-name="Content">
      <Title />
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {student.descricao}
      </p>
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="LinkedIn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="LinkedIn">
          <path clipRule="evenodd" d={svgPaths.p2b170900} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d={svgPaths.p214d7500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Dribble() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Dribble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Dribble">
          <path clipRule="evenodd" d={svgPaths.p32a55100} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0" data-name="Social Icons">
      <LinkedIn />
      <X />
      <Dribble />
    </div>
  );
}

function Card2() {
  const student = studentsData[0]; // Ana Strapazon
  return (
    <div 
      className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="Card"
      onClick={() => (window as any).navigateTo?.('trabalho', student.id)}
    >
      <div className="aspect-[390/390] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt={student.nome} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={student.imagemPrincipal} />
      </div>
      <Content15 />
      <SocialIcons />
    </div>
  );
}

function Title1() {
  const student = studentsData[1];
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[26px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {student.nome}
      </p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {student.meios}
      </p>
    </div>
  );
}

function Content16() {
  const student = studentsData[1];
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.6] relative shrink-0 text-black w-full" data-name="Content">
      <Title1 />
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {student.descricao}
      </p>
    </div>
  );
}

function LinkedIn1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="LinkedIn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="LinkedIn">
          <path clipRule="evenodd" d={svgPaths.p2b170900} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function X1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d={svgPaths.p214d7500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Dribble1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Dribble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Dribble">
          <path clipRule="evenodd" d={svgPaths.p32a55100} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcons1() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0" data-name="Social Icons">
      <LinkedIn1 />
      <X1 />
      <Dribble1 />
    </div>
  );
}

function Card3() {
  const student = studentsData[1]; // Carlos Mendes
  return (
    <div 
      className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="Card"
      onClick={() => (window as any).navigateTo?.('trabalho', student.id)}
    >
      <div className="aspect-[390/390] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt={student.nome} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={student.imagemPrincipal} />
      </div>
      <Content16 />
      <SocialIcons1 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <Card2 />
      <Card3 />
    </div>
  );
}

function Title2() {
  const student = studentsData[2];
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[26px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {student.nome}
      </p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {student.meios}
      </p>
    </div>
  );
}

function Content17() {
  const student = studentsData[2];
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.6] relative shrink-0 text-black w-full" data-name="Content">
      <Title2 />
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {student.descricao}
      </p>
    </div>
  );
}

function LinkedIn2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="LinkedIn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="LinkedIn">
          <path clipRule="evenodd" d={svgPaths.p2b170900} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function X2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d={svgPaths.p214d7500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Dribble2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Dribble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Dribble">
          <path clipRule="evenodd" d={svgPaths.p32a55100} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcons2() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0" data-name="Social Icons">
      <LinkedIn2 />
      <X2 />
      <Dribble2 />
    </div>
  );
}

function Card4() {
  const student = studentsData[2]; // Marina Silva
  return (
    <div 
      className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="Card"
      onClick={() => (window as any).navigateTo?.('trabalho', student.id)}
    >
      <div className="aspect-[390/390] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt={student.nome} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={student.imagemPrincipal} />
      </div>
      <Content17 />
      <SocialIcons2 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[26px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Full name
      </p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Job title
      </p>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.6] relative shrink-0 text-black w-full" data-name="Content">
      <Title3 />
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
    </div>
  );
}

function LinkedIn3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="LinkedIn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="LinkedIn">
          <path clipRule="evenodd" d={svgPaths.p2b170900} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function X3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d={svgPaths.p214d7500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Dribble3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Dribble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Dribble">
          <path clipRule="evenodd" d={svgPaths.p32a55100} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcons3() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0" data-name="Social Icons">
      <LinkedIn3 />
      <X3 />
      <Dribble3 />
    </div>
  );
}

function Card5() {
  const student = studentsData[0]; // Repetindo Ana Strapazon ou pode remover depois
  return (
    <div 
      className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="Card"
      onClick={() => (window as any).navigateTo?.('trabalho', student.id)}
    >
      <div className="aspect-[390/390] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt={student.nome} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage5} />
      </div>
      <Content18 />
      <SocialIcons3 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <Card4 />
      <Card5 />
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[64px] items-start min-h-px min-w-px relative" data-name="Content">
      <Row2 />
      <Row3 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="Component">
      <SectionTitle4 />
      <Content19 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component2 />
    </div>
  );
}

function Team() {
  return (
    <div className="bg-[#fefbf3] h-[2698px] relative shrink-0 w-full" data-name="Team / 20 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center pb-[112px] pt-[32px] px-[64px] relative size-full">
          <Layout2 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[60px] tracking-[0.6px] w-full">Saiba como participar</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscreva-se para conhecer o atelier e participar de uma aula experimental
      </p>
    </div>
  );
}

function Button10() {
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

function Button11() {
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

function Actions7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button10 />
      <Button11 />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <Content20 />
      <Actions7 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full" data-name="Component">
      <Column3 />
      <div className="aspect-[600/400] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Placeholder Image">
        <img alt="Aula experimental no atelier" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src="https://images.unsplash.com/photo-1644375391935-908706dfcae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdHVkaW8lMjBwYWludGluZyUyMGNsYXNzfGVufDF8fHx8MTc2OTMwODcwN3ww&ixlib=rb-4.1.0&q=80&w=1080" />
      </div>
    </div>
  );
}

function Container6() {
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
          <Container6 />
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

function Column4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <Logo />
      <Links />
    </div>
  );
}

function Column5() {
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

function Content22() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Content">
      <Column4 />
      <Column5 />
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

function Row4() {
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
      <Row4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content22 />
      <Credits />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#000000] relative shrink-0 w-full" data-name="Footer / 8 /">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[80px] relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

export default function OCursoDesktop() {
  const handleNavigate = (page: string) => {
    if (typeof window !== 'undefined' && (window as any).navigateTo) {
      (window as any).navigateTo(page);
    }
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="content-stretch flex flex-col items-start relative size-full" data-name="O Curso • Desktop">
        <Navbar currentPage="ocurso" navigateTo={handleNavigate} />
        <Header2 />
        <Layout />
        <Header3 />
        <Layout1 />
        <Team />
        <Cta />
        <Footer />
      </div>
    </>
  );
}