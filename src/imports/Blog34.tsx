import svgPaths from "./svg-11zozzcpiy";
import imgPlaceholderImage from "figma:asset/d47f9f5af24fd7129274afad903571dd3819a330.png";

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
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[60px] tracking-[0.6px] w-full">Pensamentos do atelier</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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

function Tag() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Processo
      </p>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <Tag />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        8 min de leitura
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[32px] tracking-[0.32px] w-full">O desenho como linguagem de investigação</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ler
      </p>
      <ChevronRight />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Card">
      <div className="aspect-[405.3333435058594/270] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
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
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Técnica
      </p>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <Tag1 />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        6 min de leitura
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[32px] tracking-[0.32px] w-full">Materialidade e expressão na pintura</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ler
      </p>
      <ChevronRight1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Card">
      <div className="aspect-[405.33331298828125/270] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
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
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Conceito
      </p>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <Tag2 />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        7 min de leitura
      </p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[32px] tracking-[0.32px] w-full">Escultura como construção do espaço</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ler
      </p>
      <ChevronRight2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Card">
      <div className="aspect-[405.33331298828125/270] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage} />
      </div>
      <Content6 />
      <Button2 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
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
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Content7 />
      <Actions />
    </div>
  );
}

export default function Blog() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full" data-name="Blog / 34 /">
      <Container />
    </div>
  );
}