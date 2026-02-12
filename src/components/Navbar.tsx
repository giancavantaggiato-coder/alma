import imgCompanyLogo from "<div styleName={} />
<assets />
<logoalma></logoalma>

interface NavbarProps {
  currentPage?: string;
  navigateTo?: (page: string) => void;
}

function CompanyLogo({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="h-[44px] relative shrink-0 w-[84px] cursor-pointer" 
      data-name="Company Logo"
      onClick={onClick}
    >
      <img alt="Alma Visual" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogo} />
    </div>
  );
}

function NavLinkDropdown({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="Nav Link Dropdown"
      onClick={onClick}
    >
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Blog
      </p>
    </div>
  );
}

function NavLinkDropdown1({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="Nav Link Dropdown"
      onClick={onClick}
    >
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        FAQ
      </p>
    </div>
  );
}

function Column({ 
  onQuemSomosClick, 
  onTrabalhosClick, 
  onContatoClick, 
  onBlogClick, 
  onFaqClick 
}: { 
  onQuemSomosClick?: () => void; 
  onTrabalhosClick?: () => void; 
  onContatoClick?: () => void;
  onBlogClick?: () => void;
  onFaqClick?: () => void;
}) {
  return (
    <div className="content-stretch flex gap-[32px] items-center overflow-clip relative shrink-0" data-name="Column">
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={onQuemSomosClick}
      >
        Quem somos
      </p>
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={onTrabalhosClick}
      >
        Trabalhos
      </p>
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={onContatoClick}
      >
        Contato
      </p>
      <NavLinkDropdown onClick={onBlogClick} />
      <NavLinkDropdown1 onClick={onFaqClick} />
    </div>
  );
}

function Content({ 
  onLogoClick,
  onQuemSomosClick, 
  onTrabalhosClick, 
  onContatoClick,
  onBlogClick,
  onFaqClick 
}: { 
  onLogoClick?: () => void;
  onQuemSomosClick?: () => void; 
  onTrabalhosClick?: () => void; 
  onContatoClick?: () => void;
  onBlogClick?: () => void;
  onFaqClick?: () => void;
}) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Content">
      <CompanyLogo onClick={onLogoClick} />
      <Column 
        onQuemSomosClick={onQuemSomosClick}
        onTrabalhosClick={onTrabalhosClick}
        onContatoClick={onContatoClick}
        onBlogClick={onBlogClick}
        onFaqClick={onFaqClick}
      />
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-black content-stretch flex items-center justify-center px-[20px] py-[8px] relative shrink-0 cursor-pointer hover:bg-[#333] transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Quero começar
      </p>
    </div>
  );
}

function Actions({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Actions">
      <Button onClick={onClick} />
    </div>
  );
}

function Container({ 
  onLogoClick,
  onQuemSomosClick, 
  onTrabalhosClick, 
  onContatoClick,
  onBlogClick,
  onFaqClick,
  onCTAClick
}: { 
  onLogoClick?: () => void;
  onQuemSomosClick?: () => void; 
  onTrabalhosClick?: () => void; 
  onContatoClick?: () => void;
  onBlogClick?: () => void;
  onFaqClick?: () => void;
  onCTAClick?: () => void;
}) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Container">
      <Content 
        onLogoClick={onLogoClick}
        onQuemSomosClick={onQuemSomosClick}
        onTrabalhosClick={onTrabalhosClick}
        onContatoClick={onContatoClick}
        onBlogClick={onBlogClick}
        onFaqClick={onFaqClick}
      />
      <Actions onClick={onCTAClick} />
    </div>
  );
}

function Header({ 
  onLogoClick,
  onQuemSomosClick, 
  onTrabalhosClick, 
  onContatoClick,
  onBlogClick,
  onFaqClick,
  onCTAClick
}: { 
  onLogoClick?: () => void;
  onQuemSomosClick?: () => void; 
  onTrabalhosClick?: () => void; 
  onContatoClick?: () => void;
  onBlogClick?: () => void;
  onFaqClick?: () => void;
  onCTAClick?: () => void;
}) {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[64px] relative size-full bg-[#FEFBF3]">
          <Container 
            onLogoClick={onLogoClick}
            onQuemSomosClick={onQuemSomosClick}
            onTrabalhosClick={onTrabalhosClick}
            onContatoClick={onContatoClick}
            onBlogClick={onBlogClick}
            onFaqClick={onFaqClick}
            onCTAClick={onCTAClick}
          />
        </div>
      </div>
    </div>
  );
}

export default function Navbar({ currentPage, navigateTo }: NavbarProps) {
  const handleLogoClick = () => navigateTo?.('inicio');
  const handleQuemSomosClick = () => navigateTo?.('ocurso');
  const handleTrabalhosClick = () => navigateTo?.('trabalhos');
  const handleContatoClick = () => navigateTo?.('contato');
  const handleBlogClick = () => navigateTo?.('blog');
  const handleFaqClick = () => navigateTo?.('faq');
  const handleCTAClick = () => navigateTo?.('joinin');

  return (
    <div className="bg-[#fef8e8] content-stretch flex flex-col items-center relative w-full shrink-0" data-name="Navbar / 7 /">
      <Header 
        onLogoClick={handleLogoClick}
        onQuemSomosClick={handleQuemSomosClick}
        onTrabalhosClick={handleTrabalhosClick}
        onContatoClick={handleContatoClick}
        onBlogClick={handleBlogClick}
        onFaqClick={handleFaqClick}
        onCTAClick={handleCTAClick}
      />
    </div>
  );
}