import svgPaths from "./svg-qft7jz0ay6";

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center max-w-[768px] relative shrink-0 text-black text-center w-full" data-name="Section Title">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[44px] tracking-[0.44px] w-full">FAQs</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
    </div>
  );
}

function KeyboardArrowUp() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="keyboard_arrow_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="keyboard_arrow_up">
          <path d={svgPaths.p1a7aba00} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Question() {
  return (
    <div className="relative shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex gap-[24px] items-center overflow-clip py-[16px] relative rounded-[inherit] w-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.6] min-h-px min-w-px relative text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
          Question text goes here
        </p>
        <KeyboardArrowUp />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.15)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Answer() {
  return (
    <div className="content-stretch flex items-start pb-[20px] relative shrink-0 w-full" data-name="Answer">
      <p className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px relative text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
      </p>
    </div>
  );
}

function AccordionItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion Item">
      <Question />
      <Answer />
    </div>
  );
}

function AccordionList() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[768px] relative shrink-0 w-full" data-name="Accordion List">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.15)] border-b border-solid inset-0 pointer-events-none" />
      {[...Array(5).keys()].map((_, i) => (
        <AccordionItem key={i} />
      ))}
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[24px] tracking-[0.24px] w-full">Still have questions?</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contact
      </p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <Button />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[560px] relative shrink-0 w-full" data-name="Content">
      <Content />
      <Actions />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <AccordionList />
      <Content1 />
    </div>
  );
}

export default function Faq() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center px-[20px] py-[64px] relative size-full" data-name="FAQ / 1 /">
      <Container />
    </div>
  );
}