import imgPlaceholderImage from "figma:asset/d568b164c26b35eebe6a407c03f478bc8049c84b.png";

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Fundamentos
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[44px] tracking-[0.44px] w-full">Os princípios que guiam a investigação</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Cada aluno constrói as leis internas do próprio trabalho a partir de uma base comum.
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

function FeatureTab() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Feature Tab">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[48px] items-center justify-center leading-[1.2] not-italic px-[24px] py-[32px] relative size-full text-[20px] text-black tracking-[0.2px]">
          <p className="css-ew64yg relative shrink-0">Feature one</p>
          <p className="absolute css-ew64yg left-[35.5px] text-center top-[18px] translate-x-[-50%]">01</p>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-black w-full" data-name="Header">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[32px] tracking-[0.32px] w-full">Organização visual e composição</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Como os elementos se relacionam no espaço, criando equilíbrio, tensão e significado visual.
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[16px] px-[24px] relative w-full">
        <Header />
        <div className="aspect-[287/320] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage} />
        </div>
      </div>
    </div>
  );
}

function TabPane() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Tab Pane 1">
      <FeatureTab />
      <Content1 />
    </div>
  );
}

function FeatureTab1() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Feature Tab">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[48px] items-center justify-center leading-[1.2] not-italic px-[24px] py-[32px] relative size-full text-[20px] text-black tracking-[0.2px]">
          <p className="css-ew64yg relative shrink-0">Feature two</p>
          <p className="absolute css-ew64yg left-[35px] text-center top-[18px] translate-x-[-50%]">02</p>
        </div>
      </div>
    </div>
  );
}

function TabPane1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Tab Pane 2">
      <FeatureTab1 />
    </div>
  );
}

function FeatureTab2() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Feature Tab">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[48px] items-center justify-center leading-[1.2] not-italic px-[24px] py-[32px] relative size-full text-[20px] text-black tracking-[0.2px]">
          <p className="css-ew64yg relative shrink-0">Feature three</p>
          <p className="absolute css-ew64yg left-[35.5px] text-center top-[18px] translate-x-[-50%]">03</p>
        </div>
      </div>
    </div>
  );
}

function TabPane2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Tab Pane 3">
      <FeatureTab2 />
    </div>
  );
}

function FeatureTab3() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Feature Tab">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[48px] items-center justify-center leading-[1.2] not-italic px-[24px] py-[32px] relative size-full text-[20px] text-black tracking-[0.2px]">
          <p className="css-ew64yg relative shrink-0">Feature four</p>
          <p className="absolute css-ew64yg left-[35.5px] text-center top-[18px] translate-x-[-50%]">04</p>
        </div>
      </div>
    </div>
  );
}

function TabPane3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Tab Pane 4">
      <FeatureTab3 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Row">
      <TabPane />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 1">
            <line id="Divider" stroke="var(--stroke-0, black)" strokeOpacity="0.15" x2="335" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <TabPane1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 1">
            <line id="Divider" stroke="var(--stroke-0, black)" strokeOpacity="0.15" x2="335" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <TabPane2 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 1">
            <line id="Divider" stroke="var(--stroke-0, black)" strokeOpacity="0.15" x2="335" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <TabPane3 />
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-[#fefbf3] relative rounded-[16px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Row />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Content2 />
    </div>
  );
}

export default function Layout() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center px-[20px] py-[64px] relative size-full" data-name="Layout / 351 /">
      <Container />
    </div>
  );
}