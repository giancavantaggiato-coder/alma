import svgPaths from "./svg-vgi7vc1rv5";
import imgCompanyLogo from "figma:asset/91c6f4bb39b820ba4c5b66890346b0f48d74a13f.png";
import imgHeader113 from "figma:asset/b328b7c2b53aae480c3d4238574f893c519837b3.png";
import imgPlaceholderImage1 from "figma:asset/7a505096de25472069c0a892675e0a5f5b9e9284.png";
import imgPlaceholderImage2 from "figma:asset/65fc7df3d0daff139db8f7d80d8603e37447e2fc.png";
import imgPlaceholderImage3 from "figma:asset/e92de2fb857078d138d24cced07f43997b60e548.png";
import imgPlaceholderImage from "figma:asset/1de7f5b16c38dd3644b963b0bca1dbf2605e03aa.png";
import imgCompanyLogo1 from "figma:asset/64b1c89f3bd3a9933dc022439b9a52a682a06397.png";
import { WorkCarousel } from '../components/WorkCarousel';
import { ApproachAccordion } from '../components/ApproachAccordion';
import { ParallaxHeader } from '../components/ParallaxHeader';
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
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogo} />
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

function Close() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p837bc40} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon">
      <Close />
    </div>
  );
}

function Content1({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pl-[20px] pr-[12px] py-0 relative size-full">
          <Content onLogoClick={onLogoClick} />
          <Icon />
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

function Button() {
  return (
    <div 
      className="bg-black content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer" 
      data-name="Button"
      onClick={() => (window as any).navigateTo?.('ocurso')}
    >
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Saiba mais
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Button
      </p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button />
      <Button1 />
    </div>
  );
}

function ColumnOne() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative w-full" data-name="Column one">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.1] min-w-full not-italic relative shrink-0 text-[48px] text-white tracking-[0.48px] w-[min-content]">Medium length hero heading goes here</p>
      <Actions />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>
    </div>
  );
}

function ColumnTwo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative w-full" data-name="Column two">
      <Content2 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative w-full" data-name="Component">
      <ColumnOne />
      <ColumnTwo />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-end max-w-[1280px] min-h-px min-w-px relative" data-name="Container">
      <Component />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[812px] relative shrink-0 w-full" data-name="Header / 113 /">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeader113} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
      </div>
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[20px] py-[64px] relative size-full">
          <Container />
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

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Content">
      <TaglineWrapper />
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-full not-italic relative shrink-0 text-[20px] text-black text-center tracking-[0.2px] w-[min-content]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
          Button
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

function Button3() {
  return (
    <div 
      className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="Button"
      onClick={() => (window as any).navigateTo?.('trabalhos')}
    >
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Quero conhecer
      </p>
      <ChevronRight />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <Button3 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Component">
      <Content3 />
      <Actions1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component1 />
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-[#fef8e8] relative shrink-0 w-full" data-name="Layout / 140 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container1 />
        </div>
      </div>
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
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Component">
      <TaglineWrapper1 />
      <ApproachAccordion isMobile={true} />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component2 />
    </div>
  );
}

function Cta1() {
  return (
    <div className="bg-[#fef8e8] relative shrink-0 w-full" data-name="CTA / 38 /">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center px-[20px] py-[64px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[768px] relative shrink-0 text-black w-full" data-name="Section Title">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[44px] tracking-[0.44px] w-full">Trabalhos dos alunos</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Cada processo deixa sua marca no papel, na tela, no espaço.
      </p>
    </div>
  );
}

function Container3() {
  const works = [
    { id: 1, image: imgPlaceholderImage1, title: 'Trabalho 1' },
    { id: 2, image: imgPlaceholderImage2, title: 'Trabalho 2' },
    { id: 3, image: imgPlaceholderImage3, title: 'Trabalho 3' },
    { id: 4, image: imgPlaceholderImage1, title: 'Trabalho 4' },
    { id: 5, image: imgPlaceholderImage2, title: 'Trabalho 5' },
    { id: 6, image: imgPlaceholderImage3, title: 'Trabalho 6' },
    { id: 7, image: imgPlaceholderImage1, title: 'Trabalho 7' },
    { id: 8, image: imgPlaceholderImage2, title: 'Trabalho 8' },
    { id: 9, image: imgPlaceholderImage3, title: 'Trabalho 9' },
    { id: 10, image: imgPlaceholderImage1, title: 'Trabalho 10' },
  ];
  
  const handleWorkClick = (id: number) => {
    // Mapear para os IDs dos alunos reais (1, 2, 3)
    const studentId = ((id - 1) % 3) + 1;
    (window as any).navigateTo?.('trabalho', studentId);
  };
  
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <WorkCarousel works={works} isMobile={true} onWorkClick={handleWorkClick} />
    </div>
  );
}

function Gallery() {
  return (
    <div className="bg-[#fef8e8] relative shrink-0 w-full" data-name="Gallery / 20 /">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[64px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[44px] tracking-[0.44px] w-full">Participe de uma aula aberta</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tenha uma aula aberta e saiba mais
      </p>
    </div>
  );
}

function Button4() {
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
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscrever
      </p>
    </div>
  );
}

function Button5() {
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
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contato
      </p>
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Column">
      <Content8 />
      <Actions2 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Component">
      <Column />
      <div className="aspect-[335/218] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="Aula aberta no atelier" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src="https://images.unsplash.com/photo-1752649935124-f5a7ac531a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzaG9wJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzY5MzA4ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080" />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component3 />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#c8b372] relative shrink-0 w-full" data-name="CTA / 1 /">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[64px] relative w-full">
          <Container4 />
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

function Column1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Column">
      <Logo />
      <Links />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Column">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[14px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Mantenha-se atualizado
      </p>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
        <NewsletterForm theme="dark" inputSize="small" />
        <div className="content-stretch flex font-normal gap-[4px] h-[18px] items-start relative shrink-0 text-white w-full">
          <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[10px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Ao se inscrever você concorda com nossa Política de Privacidade
          </p>
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Content">
      <Column1 />
      <Column2 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 underline" data-name="Footer Links">
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
    <div className="content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal gap-[32px] items-start leading-[1.6] relative shrink-0 text-[12px] text-white w-full" data-name="Row">
      <FooterLinks />
      <p className="css-ew64yg relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        © 2024 Relume. All rights reserved.
      </p>
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Credits">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 1">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.2" x2="335" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Row />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content10 />
      <Credits />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#000000] relative shrink-0 w-full" data-name="Footer / 8 /">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[48px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

export default function InicioMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="content-stretch flex flex-col items-start relative size-full" data-name="Início • Mobile">
        <Navbar onLogoClick={() => setIsMenuOpen(true)} />
        <ParallaxHeader imageSrc={imgHeader113} isMobile={true} />
        <Layout />
        <Cta1 />
        <Gallery />
        <Cta />
        <Footer />
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </>
  );
}