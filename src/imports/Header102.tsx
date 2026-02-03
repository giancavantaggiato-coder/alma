import svgPaths from "./svg-5hinryfdme";
import imgPlaceholderImage from "figma:asset/e9d5969403252297c45b63e750f4ae9e837c2ba1.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.1] not-italic relative shrink-0 text-[84px] tracking-[0.84px] w-full">Desenho, pintura, escultura e design</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Cada área é abordada a partir de seus fundamentos técnicos e perceptivos, permitindo que o aluno desenvolva repertório, domínio material e clareza formal sem hierarquias rígidas entre os meios.
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center gap-[12px] px-[24px] py-[10px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Explorar →
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[560px] relative shrink-0 w-full" data-name="Content">
      <Content />
      <Button />
    </div>
  );
}

function Column() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Column">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center pl-[64px] pr-[80px] relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative w-full max-h-[400px]" data-name="Image">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Placeholder Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgPlaceholderImage} />
        </div>
      </div>
    </div>
  );
}

function Content2() {
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
      <div className="content-stretch flex flex-col items-start pb-[64px] pt-[24px] px-[32px] relative w-full">
        <Content2 />
      </div>
    </div>
  );
}

function Column1() {
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

function SliderButtons() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex gap-0 items-center relative rounded-[50px] shrink-0" data-name="Slider Buttons">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex items-center justify-center p-[12px] relative shrink-0">
        <ArrowBack />
      </div>
      <div className="w-[1px] h-[24px] bg-[rgba(0,0,0,0.15)]" />
      <div className="flex items-center justify-center p-[12px] relative shrink-0">
        <ArrowForward />
      </div>
    </div>
  );
}

function Content3() {
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
      <Column1 />
      <Content3 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="Component">
      <Column />
      <Slider />
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center relative size-full" data-name="Header / 102 /">
      <Component />
    </div>
  );
}