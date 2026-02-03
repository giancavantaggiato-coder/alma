import svgPaths from "./svg-ry4587pdgo";
import imgPlaceholderImage from "figma:asset/1a2f10ee0e38d54c8ea34530499f2387791709d8.png";
import imgAvatarImage from "figma:asset/3711e237ee3cf1d73ec177a47641af606e0b9d66.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start py-[24px] relative shrink-0 w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[48px] text-black tracking-[0.48px] w-full">Introduction</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Content">
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Content">
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
      </p>
    </div>
  );
}

function CaptionFigure() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Caption Figure">
      <div className="bg-[rgba(0,0,0,0.15)] self-stretch shrink-0 w-[2px]" />
      <p className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px relative text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Image caption goes here
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start py-[48px] relative shrink-0 w-full" data-name="Content">
      <div className="aspect-[768/400] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage} />
      </div>
      <CaptionFigure />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] pt-[20px] relative shrink-0 w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[26px] text-black tracking-[0.26px] w-full">Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Content">
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
      </p>
    </div>
  );
}

function Figure() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Figure">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[20px] items-start pr-[20px] relative w-full">
          <div className="bg-[rgba(0,0,0,0.15)] self-stretch shrink-0 w-[2px]" data-name="Divider" />
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Italic',sans-serif] font-normal italic leading-[28px] min-h-px min-w-px relative text-[20px] text-black">{`"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."`}</p>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex items-start overflow-clip py-[36px] relative shrink-0 w-full" data-name="Content">
      <Figure />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Content">
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
      </p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] pt-[24px] relative shrink-0 w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[40px] text-black tracking-[0.4px] w-full">Conclusion</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Content">
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
      </p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Content">
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
      </p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.
      </p>
    </div>
  );
}

function RichText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Rich Text">
      <Content />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
      <Content7 />
      <Content8 />
      <Content9 />
      <Content10 />
      <Content11 />
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

function Share() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Share">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] min-w-full relative shrink-0 text-[20px] text-black w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Compartilhe este post
      </p>
      <ShareButtons />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Desenho
      </p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Investigação visual
      </p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Prática de atelier
      </p>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Percepção
      </p>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tags">
      <Tag />
      <Tag1 />
      <Tag2 />
      <Tag3 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Content">
      <Share />
      <Tags />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-[768px]" data-name="Content">
      <RichText />
      <Content12 />
    </div>
  );
}

function AvatarContent() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] relative shrink-0 text-[18px] text-black" data-name="Avatar Content">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Marina Souza
      </p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Pesquisadora visual, Alma
      </p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="block max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <AvatarContent />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <Content13 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 768 1">
            <path d="M0 0.5H768" id="Vector 1" stroke="var(--stroke-0, black)" strokeOpacity="0.15" />
          </svg>
        </div>
      </div>
      <Avatar />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content14 />
    </div>
  );
}

export default function Content15() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full" data-name="Content / 29 /">
      <Container />
    </div>
  );
}