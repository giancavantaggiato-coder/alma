import imgPlaceholderImage from "figma:asset/1de7f5b16c38dd3644b963b0bca1dbf2605e03aa.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[44px] tracking-[0.44px] w-full">Comece sua investigação visual</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscreva-se para conhecer o atelier e participar de uma aula experimental
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fae08f] content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#fae08f] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscrever
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contato
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

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Column">
      <Content />
      <Actions />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Component">
      <Column />
      <div className="aspect-[335/218] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component />
    </div>
  );
}

export default function Cta() {
  return (
    <div className="bg-[#c8b372] content-stretch flex flex-col items-start px-[20px] py-[64px] relative size-full" data-name="CTA / 1 /">
      <Container />
    </div>
  );
}