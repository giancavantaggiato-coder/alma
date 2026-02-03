function Tag() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Desenho
      </p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Pintura
      </p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Escultura
      </p>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Tags">
      <Tag />
      <Tag1 />
      <Tag2 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Column">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.1] not-italic relative shrink-0 text-[48px] text-black tracking-[0.48px] w-full">Trabalhos dos alunos</p>
      <Tags />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <Column />
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Aqui você vê o que nasce quando a prática encontra a investigação. Cada trabalho carrega a marca de quem o fez, sustentado pelos fundamentos que compartilhamos.
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content />
    </div>
  );
}

export default function PortfolioHeader() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-start px-[20px] py-[64px] relative size-full" data-name="Portfolio Header / 9 /">
      <Container />
    </div>
  );
}