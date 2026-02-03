import svgPaths from "./svg-tz52ah6nby";
import imgPlaceholderImage from "figma:asset/d7666effadfe2b84fb77cce4ebdf857aeee76bd3.png";

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron_right">
          <path d={svgPaths.p1cff2380} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.666667" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
        Blog
      </p>
      <ChevronRight />
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
        Prática
      </p>
    </div>
  );
}

function ContentTop() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content Top">
      <Content />
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-full not-italic relative shrink-0 text-[60px] text-black tracking-[0.6px] w-[min-content]">O desenho como investigação visual cotidiana</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 text-[18px]" data-name="Content">
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Por
      </p>
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Marina Souza
      </p>
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex font-['DM_Sans:Regular',sans-serif] font-normal gap-[8px] items-center relative shrink-0" data-name="Time">
      <p className="css-ew64yg relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        15 mar 2024
      </p>
      <p className="css-ew64yg relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        •
      </p>
      <p className="css-ew64yg relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        7 min leitura
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] relative shrink-0 text-black w-full" data-name="Content">
      <Content1 />
      <Time />
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="link">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="link">
          <path d={svgPaths.pc015980} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ShareButton() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[64px] shrink-0" data-name="Share Button">
      <Link />
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="LinkedIn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="LinkedIn">
          <path clipRule="evenodd" d={svgPaths.p2b170900} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ShareButton1() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[64px] shrink-0" data-name="Share Button">
      <LinkedIn />
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d={svgPaths.p214d7500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ShareButton2() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[64px] shrink-0" data-name="Share Button">
      <X />
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Facebook">
          <path d={svgPaths.p2ed8fe00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ShareButton3() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[64px] shrink-0" data-name="Share Button">
      <Facebook />
    </div>
  );
}

function ShareButtons() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Share Buttons">
      <ShareButton />
      <ShareButton1 />
      <ShareButton2 />
      <ShareButton3 />
    </div>
  );
}

function Social() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Social">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Compartilhe este post
      </p>
      <ShareButtons />
    </div>
  );
}

function ContentBottom() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content Bottom">
      <Content2 />
      <Social />
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 w-[420px]" data-name="Section Title">
      <ContentTop />
      <ContentBottom />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="Content">
      <SectionTitle />
      <div className="flex-[1_0_0] h-[450px] min-h-px min-w-px relative rounded-[16px]" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content3 />
    </div>
  );
}

export default function BlogPostHeader() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full" data-name="Blog Post Header / 3 /">
      <Container />
    </div>
  );
}