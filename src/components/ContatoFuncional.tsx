import svgPaths from "../imports/svg-lh8d88iabz";
import imgCompanyLogo from "figma:asset/91c6f4bb39b820ba4c5b66890346b0f48d74a13f.png";
import imgPlaceholderImage from "figma:asset/a8da982a261cd1ae48b4850ac660f53a0446cb32.png";
import imgPlaceholderImage1 from "figma:asset/1de7f5b16c38dd3644b963b0bca1dbf2605e03aa.png";
import imgCompanyLogo1 from "figma:asset/64b1c89f3bd3a9933dc022439b9a52a682a06397.png";
import Navbar from './Navbar';

function CompanyLogo() {
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
  const handleNavigate = (page: string) => {
    const nav = (window as any).navigateTo;
    if (nav) nav(page);
  };

  return (
    <div className="content-stretch flex gap-[32px] items-center overflow-clip relative shrink-0" data-name="Column">
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => handleNavigate('ocurso')}
      >
        Sobre nós
      </p>
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => handleNavigate('trabalhos')}
      >
        Trabalhos
      </p>
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => handleNavigate('blog')}
      >
        Blog
      </p>
      <p 
        className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => handleNavigate('contato')}
      >
        Contato
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
  const handleClick = () => {
    const nav = (window as any).navigateTo;
    if (nav) nav('joinin');
  };

  return (
    <div 
      className="bg-black content-stretch flex items-center justify-center px-[20px] py-[8px] relative shrink-0 cursor-pointer hover:bg-gray-800 transition-colors" 
      data-name="Button"
      onClick={handleClick}
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
        <div className="content-stretch flex items-center justify-between px-[64px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contato
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[60px] tracking-[0.6px] w-full">Entre em contato</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tire suas dúvidas sobre o programa
      </p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper />
      <Content1 />
    </div>
  );
}

function LocationOn() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="location_on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="location_on">
          <path d={svgPaths.p18c7e900} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[26px] tracking-[0.26px] w-full">Endereço</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Rua São Paulo, 864 - São Caetano do Sul
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

function Button1() {
  const handleClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Rua+São+Paulo+864+São+Caetano+do+Sul', '_blank');
  };

  return (
    <div 
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="Button"
      onClick={handleClick}
    >
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ver localização
      </p>
      <ChevronRight />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Actions">
      <Button1 />
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Contact Info">
      <Content2 />
      <Actions1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <LocationOn />
      <ContactInfo />
    </div>
  );
}

function Call() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="call">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="call">
          <path d={svgPaths.p14d14680} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function ContactInfo1() {
  const handleWhatsappClick = () => {
    window.open('https://wa.me/5511987654321', '_blank');
  };

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Contact Info">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[26px] tracking-[0.26px] w-full">Whatsapp</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ligue para conversar conosco
      </p>
      <p 
        className="[text-decoration-skip-ink:none] css-4hzbpn decoration-solid font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] underline w-full cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={handleWhatsappClick}
      >
        +55 (11) 98765-4321
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Call />
      <ContactInfo1 />
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="mail">
          <path d={svgPaths.p3bc8bc00} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function ContactInfo2() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:contato@almavistual.com.br';
  };

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Contact Info">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[26px] tracking-[0.26px] w-full">Email</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Envie sua mensagem diretamente
      </p>
      <p 
        className="[text-decoration-skip-ink:none] css-4hzbpn decoration-solid font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] underline w-full cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={handleEmailClick}
      >
        contato@almavistual.com.br
      </p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Mail />
      <ContactInfo2 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start max-w-[400px] min-h-px min-w-px relative" data-name="Row">
      <Content3 />
      <Content4 />
      <Content5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="Content">
      <Row />
      <div className="flex-[1_0_0] h-[516px] min-h-px min-w-px relative rounded-[16px] overflow-hidden" data-name="Map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0827446392773!2d-46.56160492378316!3d-23.61863396405853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f4f0e0c0001%3A0x0!2zMjPCsDM3JzA3LjEiUyA0NsKwMzMnMzMuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr&q=Rua+S%C3%A3o+Paulo,+864+-+S%C3%A3o+Caetano+do+Sul+-+SP,+Brasil"
          className="absolute inset-0 size-full border-0 rounded-[16px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização: Rua São Paulo, 864 - São Caetano do Sul - SP, Brasil"
        />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Content6 />
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-[#fefbf3] relative shrink-0 w-full" data-name="Contact / 14 /">
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
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
        Parcerias
      </p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.1] not-italic relative shrink-0 text-[84px] tracking-[0.84px] w-full">Vamos conversar</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tem perguntas sobre o programa ou quer conhecer melhor o trabalho do Alma? Estamos aqui para ouvir e dialogar com você.
      </p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper1 />
      <Content7 />
    </div>
  );
}

function Button2() {
  const handleClick = () => {
    window.open('https://wa.me/5511987654321', '_blank');
  };

  return (
    <div 
      className="bg-black content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-gray-800 transition-colors" 
      data-name="Button"
      onClick={handleClick}
    >
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Whatsapp
      </p>
    </div>
  );
}

function Button3() {
  const handleClick = () => {
    window.location.href = 'mailto:contato@almavistual.com.br';
  };

  return (
    <div 
      className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-gray-100 transition-colors" 
      data-name="Button"
      onClick={handleClick}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        E-mail
      </p>
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Component">
      <SectionTitle1 />
      <Actions2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-[#fef8e8] relative shrink-0 w-full" data-name="Header / 62 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[60px] tracking-[0.6px] w-full">Lorem Ipsum</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscreva-se para conhecer o atelier e participar de uma aula experimental
      </p>
    </div>
  );
}

function Button4() {
  const handleClick = () => {
    const nav = (window as any).navigateTo;
    if (nav) nav('joinin');
  };

  return (
    <div 
      className="bg-[#fae08f] content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-[#f5d67a] transition-colors" 
      data-name="Button"
      onClick={handleClick}
    >
      <div aria-hidden="true" className="absolute border border-[#fae08f] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscrever
      </p>
    </div>
  );
}

function Button5() {
  const handleClick = () => {
    const nav = (window as any).navigateTo;
    if (nav) nav('contato');
  };

  return (
    <div 
      className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-gray-100 transition-colors" 
      data-name="Button"
      onClick={handleClick}
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
      <Button4 />
      <Button5 />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <Content8 />
      <Actions3 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full" data-name="Component">
      <Column1 />
      <div className="aspect-[600/400] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] group cursor-pointer" data-name="Placeholder Image">
        <div className="size-full overflow-hidden rounded-[16px] transition-all duration-500 ease-out group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] group-hover:-translate-y-2">
          <img alt="Aula experimental no atelier" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src="https://images.unsplash.com/photo-1758522274945-7f000385a3dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBjbGFzcyUyMHBhaW50aW5nJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY5MzA5MTc3fDA&ixlib=rb-4.1.0&q=80&w=1080" />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component1 />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#c8b372] relative shrink-0 w-full" data-name="CTA / 1 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function CompanyLogo1() {
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
      <img alt="Alma Visual" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogo1} />
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
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('joinin')}>
        Faça Parte
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('contato')}>
        Contato
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

function TextInput() {
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

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-white/10 transition-colors" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscrever
      </p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-start relative shrink-0 w-full" data-name="Form">
      <TextInput />
      <Button6 />
    </div>
  );
}

function Content9() {
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

function Actions4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <Form />
      <Content9 />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[400px]" data-name="Column">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[18px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Newsletter
      </p>
      <Actions4 />
    </div>
  );
}

function Content10() {
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

function Row1() {
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
      <Row1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content10 />
      <Credits />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#000000] relative shrink-0 w-full" data-name="Footer / 8 /">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[80px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

export default function ContatoFuncional() {
  const handleNavigate = (page: string) => {
    const nav = (window as any).navigateTo;
    if (nav) nav(page);
  };

  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Contato • Desktop">
      <Navbar currentPage="contato" navigateTo={handleNavigate} />
      <Contact />
      <Header1 />
      <Cta />
      <Footer />
    </div>
  );
}