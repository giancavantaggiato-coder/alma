import svgPaths from "./svg-yeu3910u0i";
import imgCard from "figma:asset/3f8b70b6cdfe9ef6ed25dae5d47b67bb81b754da.png";

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tagline
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[44px] tracking-[0.44px] w-full">Heading goes here</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</p>
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

function TaglineWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tagline
      </p>
    </div>
  );
}

function ContentTop() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
      <TaglineWrapper1 />
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-full not-italic relative shrink-0 text-[32px] text-white tracking-[0.32px] w-[min-content]">Medium length section heading goes here</p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_right">
          <path d={svgPaths.p116eba00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Button
      </p>
      <ChevronRight />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Actions">
      <Button />
    </div>
  );
}

function ContentBottom() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content Bottom">
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
      <Actions />
    </div>
  );
}

function Card() {
  return (
    <div className="h-[568px] relative shrink-0 w-full" data-name="Card">
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-end p-[24px] relative size-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgCard} />
            <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
          </div>
          <ContentTop />
          <ContentBottom />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Content">
      {[...Array(2).keys()].map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Content1 />
    </div>
  );
}

function Layout() {
  return (
    <div className="absolute bg-[#fefbf3] content-stretch flex flex-col h-[1515px] items-center left-0 overflow-clip px-[20px] py-[64px] top-0 w-[375px]" data-name="Layout / 422 /">
      <Container />
    </div>
  );
}

export default function BenefitsSection() {
  return (
    <div className="relative size-full" data-name="Benefits Section">
      <Layout />
    </div>
  );
}