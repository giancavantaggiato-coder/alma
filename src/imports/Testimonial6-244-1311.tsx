import svgPaths from "./svg-whwy9iffui";
import imgAvatarImage from "figma:asset/3711e237ee3cf1d73ec177a47641af606e0b9d66.png";

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[768px] relative shrink-0 text-black w-full" data-name="Section Title">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[44px] tracking-[0.44px] w-full">O que disseram</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        O que dizem quem estuda conosco
      </p>
    </div>
  );
}

function Stars() {
  return (
    <div className="h-[18.889px] relative shrink-0 w-[116px]" data-name="Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 18.8889">
        <g clipPath="url(#clip0_24_532)" id="Stars">
          <path d={svgPaths.p23629f00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p84d7480} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p24418170} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p28ff5800} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p32177b30} fill="var(--fill-0, black)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_24_532">
            <rect fill="white" height="18.8889" width="116" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AvatarContent() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] relative shrink-0 text-[14px] text-black" data-name="Avatar Content">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Marina Souza
      </p>
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Aluna, pintura
      </p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="block max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <AvatarContent />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <Stars />
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-full not-italic relative shrink-0 text-[18px] text-black tracking-[0.18px] w-[min-content]">{`"Aqui aprendi que o desenho não é cópia, é investigação. Cada linha tem peso, tem propósito."`}</p>
      <Avatar />
    </div>
  );
}

function Stars1() {
  return (
    <div className="h-[18.889px] relative shrink-0 w-[116px]" data-name="Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 18.8889">
        <g clipPath="url(#clip0_24_532)" id="Stars">
          <path d={svgPaths.p23629f00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p84d7480} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p24418170} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p28ff5800} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p32177b30} fill="var(--fill-0, black)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_24_532">
            <rect fill="white" height="18.8889" width="116" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AvatarContent1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] relative shrink-0 text-[14px] text-black" data-name="Avatar Content">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lucas Ferreira
      </p>
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Aluno, escultura
      </p>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="block max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <AvatarContent1 />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <Stars1 />
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-full not-italic relative shrink-0 text-[18px] text-black tracking-[0.18px] w-[min-content]">{`"A forma emerge quando você para de pensar e começa a ver. O atelier ensina isso."`}</p>
      <Avatar1 />
    </div>
  );
}

function Stars2() {
  return (
    <div className="h-[18.889px] relative shrink-0 w-[116px]" data-name="Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 18.8889">
        <g clipPath="url(#clip0_24_532)" id="Stars">
          <path d={svgPaths.p23629f00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p84d7480} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p24418170} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p28ff5800} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p32177b30} fill="var(--fill-0, black)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_24_532">
            <rect fill="white" height="18.8889" width="116" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AvatarContent2() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] relative shrink-0 text-[14px] text-black" data-name="Avatar Content">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ana Cardoso
      </p>
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Aluna, design
      </p>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="block max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <AvatarContent2 />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <Stars2 />
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-full not-italic relative shrink-0 text-[18px] text-black tracking-[0.18px] w-[min-content]">{`"Encontrei minha própria linguagem visual aqui, sem pressão de tendências ou modelos prontos."`}</p>
      <Avatar2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Content">
      <Column />
      <Column1 />
      <Column2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Content />
    </div>
  );
}

export default function Testimonial() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-start px-[20px] py-[64px] relative size-full" data-name="Testimonial / 6 /">
      <Container />
    </div>
  );
}