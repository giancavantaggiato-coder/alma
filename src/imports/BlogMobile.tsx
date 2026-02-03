import svgPaths from "./svg-rm3v85rtt1";
import imgPlaceholderImage from "figma:asset/d47f9f5af24fd7129274afad903571dd3819a330.png";
import imgPlaceholderImage1 from "figma:asset/1de7f5b16c38dd3644b963b0bca1dbf2605e03aa.png";
import imgCompanyLogo from "figma:asset/64b1c89f3bd3a9933dc022439b9a52a682a06397.png";

function Navbar() {
  return <div className="bg-[#fefbf3] h-[64px] shrink-0 w-full" data-name="Navbar / 7 /" />;
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
        Reflexões
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[44px] tracking-[0.44px] w-full">Pensamentos do atelier</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Acompanhe as discussões, descobertas e momentos que marcam nosso trabalho visual
      </p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper />
      <Content />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Processo
      </p>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <Tag />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        8 min de leitura
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[20px] tracking-[0.2px] w-full">O desenho como linguagem de investigação</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Entender como a linha e a forma revelam estruturas invisíveis do mundo
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info />
      <Content1 />
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
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ler
      </p>
      <ChevronRight />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Card">
      <div className="aspect-[335/221] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage} />
      </div>
      <Content2 />
      <Button />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Técnica
      </p>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <Tag1 />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        6 min de leitura
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[20px] tracking-[0.2px] w-full">Materialidade e expressão na pintura</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Explorar como a textura e a cor dialogam com a intenção do artista
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info1 />
      <Content3 />
    </div>
  );
}

function ChevronRight1() {
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
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ler
      </p>
      <ChevronRight1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Card">
      <div className="aspect-[335/221] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage} />
      </div>
      <Content4 />
      <Button1 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Conceito
      </p>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <Tag2 />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        7 min de leitura
      </p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[20px] tracking-[0.2px] w-full">Escultura como construção do espaço</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Refletir sobre volume, proporção e a relação entre forma e vazio
      </p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info2 />
      <Content5 />
    </div>
  );
}

function ChevronRight2() {
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

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ler
      </p>
      <ChevronRight2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Card">
      <div className="aspect-[335/221] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage} />
      </div>
      <Content6 />
      <Button2 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Row">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ver tudo
      </p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Actions">
      <Button3 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Row />
      <Actions />
    </div>
  );
}

function Blog() {
  return (
    <div className="bg-[#fefbf3] relative shrink-0 w-full" data-name="Blog / 34 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[44px] tracking-[0.44px] w-full">Acompanhe as novidades do atelier</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Receba reflexões sobre prática visual, atualizações de cursos e convites para atividades do Alma
      </p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.6)]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Seu email aqui
          </p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#fae08f] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#fae08f] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative w-full">
          <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
            Inscrever
          </p>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <TextInput />
      <Button4 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Actions">
      <Form />
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[10px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ao se inscrever você concorda com nossos termos e condições.
      </p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Column">
      <Content7 />
      <Actions1 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Component">
      <Column />
      <div className="aspect-[335/218] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage1} />
      </div>
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

function Cta() {
  return (
    <div className="bg-[#c8b372] relative shrink-0 w-full" data-name="CTA / 2 /">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[64px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function CompanyLogo() {
  return (
    <div className="h-[44px] relative shrink-0 w-[84px]" data-name="Company Logo">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogo} />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Logo">
      <CompanyLogo />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[16px] items-start leading-[1.6] max-w-[480px] relative shrink-0 text-[12px] text-white w-full" data-name="Links">
      <p className="css-4hzbpn relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Início
      </p>
      <p className="css-4hzbpn relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        O curso
      </p>
      <p className="css-4hzbpn relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Trabalhos
      </p>
      <p className="css-4hzbpn relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contato
      </p>
      <p className="css-4hzbpn relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Blog
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

function TextInput1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px relative text-[14px] text-[rgba(255,255,255,0.6)]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Seu email aqui
          </p>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative w-full">
          <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
            Inscrever
          </p>
        </div>
      </div>
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <TextInput1 />
      <Button5 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex font-normal gap-[4px] h-[18px] items-start relative shrink-0 text-white w-full" data-name="Content">
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[10px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ao inscrever-se você concorda com nossa política de privacidade
      </p>
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid font-['Roboto:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[12px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ao inscrever-se você concorda com nossa política de privacidade
      </p>
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <Form1 />
      <Content8 />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Column">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[14px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscrever
      </p>
      <Actions2 />
    </div>
  );
}

function Content9() {
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
        Política de privacidade
      </p>
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Termos de serviço
      </p>
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Configurações de cookies
      </p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal gap-[32px] items-start leading-[1.6] relative shrink-0 text-[12px] text-white w-full" data-name="Row">
      <FooterLinks />
      <p className="css-ew64yg relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        © 2025 Alma. Todos os direitos reservados.
      </p>
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[16px] relative shrink-0 w-full" data-name="Credits">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 1">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.2" x2="335" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Row1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content9 />
      <Credits />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#000000] relative shrink-0 w-full" data-name="Footer / 8 /">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[48px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

export default function BlogMobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Blog • Mobile">
      <Navbar />
      <Blog />
      <Cta />
      <Footer />
    </div>
  );
}