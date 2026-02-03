import svgPaths from "./svg-kv5jv34462";
import imgPlaceholderImage from "figma:asset/f3ea38a274560e8c652c5e56b982cf618cd67aad.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.1] not-italic relative shrink-0 text-[48px] tracking-[0.48px] w-full">Desenho, pintura, escultura e design</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Cada área é abordada a partir de seus fundamentos técnicos e perceptivos, permitindo que o aluno desenvolva repertório, domínio material e clareza formal sem hierarquias rígidas entre os meios.
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Explorar
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        →
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

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[560px] relative shrink-0 w-full" data-name="Content">
      <Content />
      <Actions />
    </div>
  );
}

function Column() {
  return (
    <div className="relative shrink-0 w-full" data-name="Column">
      <div className="content-stretch flex flex-col items-start px-[20px] py-[64px] relative w-full">
        <Content1 />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-col h-[356px] items-center relative shrink-0 w-full" data-name="Image">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage} />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[768px] relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[18px] tracking-[0.18px] w-full">Desenho</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        A base de toda investigação visual e expressão
      </p>
    </div>
  );
}

function Row() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col items-start pb-[128px] pt-[32px] px-[32px] relative w-full">
        <Content2 />
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Column">
      <Image />
      <Row />
    </div>
  );
}

function Slider() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Slider">
      <Column1 />
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

function Content3() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex items-center justify-between left-[8.53%] right-[8.53%]" data-name="Content">
      <SliderDots />
      <SliderButtons />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component">
      <Column />
      <Slider />
      <Content3 />
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-start relative size-full" data-name="Header / 102 /">
      <Component />
    </div>
  );
}