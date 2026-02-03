import svgPaths from "./svg-jwmiwwbwy2";
import imgPlaceholderImage from "figma:asset/a1dc46dbc526af2e2e411ffe2f5e6aebc505536a.png";

function Title() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[26px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ana Strapazon
      </p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Pintora e Escultora
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.6] relative shrink-0 text-black w-full" data-name="Content">
      <Title />
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
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

function Dribble() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Dribble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Dribble">
          <path clipRule="evenodd" d={svgPaths.p32a55100} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0" data-name="Social Icons">
      <LinkedIn />
      <X />
      <Dribble />
    </div>
  );
}

export default function Card() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="Card">
      <div className="aspect-[390/390] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage} />
      </div>
      <Content />
      <SocialIcons />
    </div>
  );
}