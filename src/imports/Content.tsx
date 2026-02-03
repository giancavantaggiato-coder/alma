import svgPaths from "./svg-0w6zp2nrqs";

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
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0" data-name="Slider Arrow">
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
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0" data-name="Slider Arrow">
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

export default function Content() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full" data-name="Content">
      <SliderDots />
      <SliderButtons />
    </div>
  );
}