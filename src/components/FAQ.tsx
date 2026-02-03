import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-13x1jzkfq0";
import imgPlaceholderImage from "figma:asset/1de7f5b16c38dd3644b963b0bca1dbf2605e03aa.png";
import imgCompanyLogo from "figma:asset/64b1c89f3bd3a9933dc022439b9a52a682a06397.png";
import imgCompanyLogoNav from "figma:asset/91c6f4bb39b820ba4c5b66890346b0f48d74a13f.png";
import Navbar from './Navbar';
import FAQMobile from './FAQMobile';

interface AccordionItemProps {
  question: string;
  answer: string | JSX.Element;
  isOpen: boolean;
  onToggle: () => void;
}

function KeyboardArrowIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`relative shrink-0 size-[32px] transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`} data-name="keyboard_arrow_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="keyboard_arrow_up">
          <path d={svgPaths.p1a7aba00} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion Item">
      <div className="relative shrink-0 w-full" data-name="Question">
        <div 
          className="content-stretch flex gap-[24px] items-center overflow-clip py-[20px] relative rounded-[inherit] w-full cursor-pointer hover:bg-gray-50 transition-colors" 
          data-name="Question"
          onClick={onToggle}
        >
          <p className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.6] min-h-px min-w-px relative text-[20px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
            {question}
          </p>
          <KeyboardArrowIcon isOpen={isOpen} />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.15)] border-solid border-t inset-0 pointer-events-none" />
      </div>
      
      {isOpen && (
        <div className="content-stretch flex items-start pb-[24px] relative shrink-0 w-full animate-fadeIn" data-name="Answer">
          <div className="flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px relative text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
            {typeof answer === 'string' ? <p className="css-4hzbpn mb-0">{answer}</p> : answer}
          </div>
        </div>
      )}
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[768px] relative shrink-0 text-black text-center w-full" data-name="Section Title">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[60px] tracking-[0.6px] w-full">FAQs</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Perguntas frequentes sobre nosso funcionamento
      </p>
    </div>
  );
}

function AccordionList() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "Quais práticas são trabalhadas no curso?",
      answer: (
        <>
          <p className="css-4hzbpn mb-0">
            O curso abrange desenho, pintura, escultura e design.
            <br />
            Na pintura, são exploradas técnicas como aquarela, nanquim, acrílica, óleo e têmpera, entre outras, de acordo com os interesses e o desenvolvimento de cada aluno.
          </p>
          <p className="css-4hzbpn">O design é abordado como processo e construção formal, não como ensino de software, atravessando áreas como design gráfico, de produto, moda e interiores, sempre a partir dos fundamentos da forma, da percepção e do fazer.</p>
        </>
      )
    },
    {
      question: "As aulas são coletivas ou individuais?",
      answer: "As aulas acontecem em formato coletivo, mas com acompanhamento individual.\nCada aluno desenvolve seu próprio percurso, recebendo orientações específicas de acordo com seu nível, interesse e momento de pesquisa, dentro de um ambiente compartilhado de atelier."
    },
    {
      question: "Preciso ter experiência prévia para começar?",
      answer: "Não.\nO Alma trabalha com todos os níveis de experiência, desde iniciantes absolutos até artistas com trajetória consolidada. O ensino parte dos fundamentos da forma, permitindo que cada aluno avance a partir do seu próprio repertório."
    },
    {
      question: "Como funcionam as reposições de aula?",
      answer: "Caso o aluno precise faltar, é possível repor a aula em outro dia disponível, enquanto estiver regularmente matriculado no atelier.\nAs reposições podem ser acumuladas em até 4 aulas, respeitando a disponibilidade de horários e vagas."
    },
    {
      question: "As reposições têm prazo de validade?",
      answer: "As reposições podem ser realizadas durante o período ativo de matrícula. Não é possível repor aulas após o encerramento da matrícula ou pausa prolongada sem vínculo com o atelier."
    }
  ];

  return (
    <div className="content-stretch flex flex-col items-start max-w-[768px] relative shrink-0 w-full" data-name="Accordion List">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.15)] border-b border-solid inset-0 pointer-events-none" />
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[40px] tracking-[0.4px] w-full">Ainda tem dúvidas?</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Se quiser saber mais sobre o funcionamento do atelier, horários ou processo de matrícula, entre em contato conosco.
      </p>
    </div>
  );
}

function Button() {
  const handleClick = () => {
    const nav = (window as any).navigateTo;
    if (nav) nav('contato');
  };

  return (
    <div 
      className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-gray-100 transition-colors" 
      data-name="Button"
      onClick={handleClick}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contato
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
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <AccordionList />
      <Content1 />
    </div>
  );
}

function Faq() {
  return (
    <div className="bg-[#fefbf3] relative shrink-0 w-full" data-name="FAQ / 1 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[60px] tracking-[0.6px] w-full">Atividades Complementares</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscreva-se para conhecer o atelier e participar de uma aula experimental
      </p>
    </div>
  );
}

function Button1() {
  const handleClick = () => {
    const nav = (window as any).navigateTo;
    if (nav) nav('joinin');
  };

  return (
    <div 
      className="bg-[#fae08f] content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-[#f5d67a] transition-colors" 
      data-name="Button"
      onClick={handleClick}
    >
      <div aria-hidden="true" className="absolute border border-[#fae08f] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscrever
      </p>
    </div>
  );
}

function Button2() {
  const handleClick = () => {
    const nav = (window as any).navigateTo;
    if (nav) nav('contato');
  };

  return (
    <div 
      className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-gray-100 transition-colors" 
      data-name="Button"
      onClick={handleClick}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contato
      </p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <Content2 />
      <Actions1 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full" data-name="Component">
      <Column />
      <div className="aspect-[600/400] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] group cursor-pointer" data-name="Placeholder Image">
        <div className="size-full overflow-hidden rounded-[16px] transition-all duration-500 ease-out group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] group-hover:-translate-y-2">
          <img alt="Atelier vintage de arte" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src="https://images.unsplash.com/photo-1752649937003-571f63aa7280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYXJ0JTIwc3R1ZGlvJTIwcGFpbnRpbmclMjBvbGR8ZW58MXx8fHwxNzY5MzA5MzcxfDA&ixlib=rb-4.1.0&q=80&w=1080" />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#c8b372] relative shrink-0 w-full" data-name="CTA / 1 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function CompanyLogoNav() {
  const handleClick = () => {
    const nav = (window as any).navigateTo;
    if (nav) nav('inicio');
  };

  return (
    <div 
      className="h-[44px] relative shrink-0 w-[84px] cursor-pointer" 
      data-name="Company Logo"
      onClick={handleClick}
    >
      <img alt="Alma Visual" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogoNav} />
    </div>
  );
}

function NavLinkDropdown() {
  const handleClick = () => {
    const nav = (window as any).navigateTo;
    if (nav) nav('faq');
  };

  return (
    <div 
      className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="Nav Link Dropdown"
      onClick={handleClick}
    >
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        FAQ
      </p>
    </div>
  );
}

function ColumnNav() {
  const handleNavigate = (page: string) => {
    const nav = (window as any).navigateTo;
    if (nav) nav(page);
  };

  return (
    <div className="content-stretch flex gap-[32px] items-center overflow-clip relative shrink-0" data-name="Column">
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => handleNavigate('ocurso')}
      >
        O curso
      </p>
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => handleNavigate('trabalhos')}
      >
        Trabalhos
      </p>
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => handleNavigate('contato')}
      >
        Contato
      </p>
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => handleNavigate('blog')}
      >
        Blog
      </p>
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => handleNavigate('joinin')}
      >
        Faça Parte
      </p>
      <NavLinkDropdown />
    </div>
  );
}

function ContentNav() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Content">
      <CompanyLogoNav />
      <ColumnNav />
    </div>
  );
}

function ButtonNav() {
  const handleClick = () => {
    const nav = (window as any).navigateTo;
    if (nav) nav('joinin');
  };

  return (
    <div 
      className="bg-black content-stretch flex items-center justify-center px-[20px] py-[8px] relative shrink-0 cursor-pointer hover:bg-gray-800 transition-colors" 
      data-name="Button"
      onClick={handleClick}
    >
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Quero começar
      </p>
    </div>
  );
}

function ActionsNav() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Actions">
      <ButtonNav />
    </div>
  );
}

function ContainerNav() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Container">
      <ContentNav />
      <ActionsNav />
    </div>
  );
}

function HeaderNav() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[64px] relative size-full">
          <ContainerNav />
        </div>
      </div>
    </div>
  );
}

function CompanyLogoFooter() {
  const handleClick = () => {
    const nav = (window as any).navigateTo;
    if (nav) nav('inicio');
  };

  return (
    <div 
      className="h-[44px] relative shrink-0 w-[84px] cursor-pointer" 
      data-name="Company Logo"
      onClick={handleClick}
    >
      <img alt="Alma Visual" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogo} />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Logo">
      <CompanyLogoFooter />
    </div>
  );
}

function Links() {
  const handleNavigate = (page: string) => {
    const nav = (window as any).navigateTo;
    if (nav) nav(page);
  };

  return (
    <div className="content-start flex flex-wrap font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[32px] items-start leading-[1.6] max-w-[480px] relative shrink-0 text-[16px] text-white w-full" data-name="Links">
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('inicio')}>
        Início
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('ocurso')}>
        O Curso
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('trabalhos')}>
        Trabalhos
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('joinin')}>
        Faça Parte
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('contato')}>
        Contato
      </p>
      <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('blog')}>
        Blog
      </p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <Logo />
      <Links />
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Text input">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <input 
            type="email"
            placeholder="Digite seu email"
            className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px bg-transparent border-none outline-none text-[18px] text-white placeholder:text-[rgba(255,255,255,0.6)]" 
            style={{ fontVariationSettings: "'opsz' 14" }}
          />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-white/10 transition-colors" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscrever
      </p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-start relative shrink-0 w-full" data-name="Form">
      <TextInput />
      <Button3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex font-normal gap-[4px] h-[18px] items-start relative shrink-0 text-[12px] text-white w-full" data-name="Content">
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] leading-[1.6] relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ao se inscrever você concorda com nossa
      </p>
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid font-['DM_Sans:Regular',sans-serif] leading-[1.6] relative shrink-0 underline cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }}>
        Política de Privacidade
      </p>
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <Form />
      <Content3 />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[400px]" data-name="Column">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[18px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Newsletter
      </p>
      <Actions2 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Content">
      <Column1 />
      <Column2 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 underline" data-name="Footer Links">
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }}>
        Política de Privacidade
      </p>
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }}>
        Termos de Serviço
      </p>
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }}>
        Configurações de Cookies
      </p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex font-['DM_Sans:Regular',sans-serif] font-normal items-start justify-between leading-[1.6] relative shrink-0 text-[16px] text-white w-full" data-name="Row">
      <FooterLinks />
      <p className="css-ew64yg relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        © 2024 Alma Visual. Todos os direitos reservados.
      </p>
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Credits">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.2" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Row />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content4 />
      <Credits />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#000000] relative shrink-0 w-full" data-name="Footer / 8 /">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[80px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

interface FAQProps {
  navigateTo: (page: string) => void;
}

export default function FAQ({ navigateTo }: FAQProps) {
  // Expor função de navegação globalmente
  (window as any).navigateTo = navigateTo;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return <FAQMobile navigateTo={navigateTo} />;
  }

  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="FAQ • Desktop">
      <Navbar currentPage="faq" navigateTo={navigateTo} />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}