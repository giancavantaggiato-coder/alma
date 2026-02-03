import svgPaths from "./svg-r9ostvpjbz";
import imgPlaceholderImage from "figma:asset/2a6354c57c6b0d54922805cb60313905a793bc74.png";

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contato
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[44px] tracking-[0.44px] w-full">Entre em contato</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tire suas dúvidas sobre o programa
      </p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper />
      <Content />
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

function ContactInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Contact Info">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[18px] tracking-[0.18px] w-full">Email</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Envie sua mensagem diretamente
      </p>
      <a
        href="mailto:contato@almavisual.com.br"
        className="[text-decoration-skip-ink:none] css-4hzbpn decoration-solid font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] underline w-full hover:text-[#C8B372] transition-colors"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        contato@almavisual.com.br
      </a>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <Mail />
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
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Contact Info">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[18px] tracking-[0.18px] w-full">Telefone</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ligue para conversar conosco
      </p>
      <a
        href="tel:+5511987654321"
        className="[text-decoration-skip-ink:none] css-4hzbpn decoration-solid font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] underline w-full hover:text-[#C8B372] transition-colors"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        +55 (11) 98765-4321
      </a>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <Call />
      <ContactInfo1 />
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

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[18px] tracking-[0.18px] w-full">Atelier</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Rua da Pesquisa Visual, 247, São Paulo, SP
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
  const handleLocationClick = () => {
    window.open('https://maps.google.com/?q=Rua+da+Pesquisa+Visual+247+São+Paulo+SP', '_blank');
  };

  return (
    <button
      onClick={handleLocationClick}
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
      data-name="Button"
    >
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ver localização
      </p>
      <ChevronRight />
    </button>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Actions">
      <Button />
    </div>
  );
}

function ContactInfo2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Contact Info">
      <Content3 />
      <Actions />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <LocationOn />
      <ContactInfo2 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[400px] relative shrink-0 w-full" data-name="Row">
      <Content1 />
      <Content2 />
      <Content4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Content">
      <Row />
      <div className="h-[400px] relative rounded-[16px] shrink-0 w-full overflow-hidden" data-name="Map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1974890928876!2d-46.66156492463324!3d-23.561414878787696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-[16px]"
        />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Content5 />
    </div>
  );
}

export default function Contact() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-start px-[20px] py-[64px] relative size-full" data-name="Contact / 14 /">
      <Container />
    </div>
  );
}