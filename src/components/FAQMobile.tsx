import { useState } from 'react';
import svgPaths from "../imports/svg-qft7jz0ay6";
import imgPlaceholderImage from "figma:asset/1de7f5b16c38dd3644b963b0bca1dbf2605e03aa.png";
import imgCompanyLogo from "figma:asset/64b1c89f3bd3a9933dc022439b9a52a682a06397.png";
import MobileMenu from './MobileMenu';
import { supabase } from '../lib/supabase';
import { toast } from 'sonner@2.0.3';

function CompanyLogo({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="h-[44px] relative shrink-0 w-[84px] cursor-pointer" 
      data-name="Company Logo"
      onClick={onClick}
    >
      <img alt="Alma Ateliê" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogo} />
    </div>
  );
}

function Content({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <CompanyLogo onClick={onLogoClick} />
    </div>
  );
}

function Content1({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pl-[20px] pr-[12px] py-0 relative size-full">
          <Content onLogoClick={onLogoClick} />
        </div>
      </div>
    </div>
  );
}

function Navbar({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Navbar / 7 /">
      <Content1 onLogoClick={onLogoClick} />
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center max-w-[768px] relative shrink-0 text-black text-center w-full" data-name="Section Title">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[44px] tracking-[0.44px] w-full">FAQs</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tire suas dúvidas sobre o curso, metodologia e inscrições
      </p>
    </div>
  );
}

function KeyboardArrowUp({ isOpen }: { isOpen: boolean }) {
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

function Question({ question, isOpen, onClick }: { question: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div 
      className="relative shrink-0 w-full cursor-pointer hover:bg-black/5 transition-colors" 
      data-name="Question"
      onClick={onClick}
    >
      <div className="content-stretch flex gap-[24px] items-center overflow-clip py-[16px] relative rounded-[inherit] w-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.6] min-h-px min-w-px relative text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
          {question}
        </p>
        <KeyboardArrowUp isOpen={isOpen} />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.15)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Answer({ answer, isOpen }: { answer: string | JSX.Element; isOpen: boolean }) {
  if (!isOpen) return null;
  
  return (
    <div className="content-stretch flex items-start pb-[20px] relative shrink-0 w-full animate-fadeIn" data-name="Answer">
      <div className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px relative text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        {answer}
      </div>
    </div>
  );
}

function AccordionItem({ question, answer, isOpen, onToggle }: { question: string; answer: string | JSX.Element; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion Item">
      <Question question={question} isOpen={isOpen} onClick={onToggle} />
      <Answer answer={answer} isOpen={isOpen} />
    </div>
  );
}

function AccordionList({ faqs, openIndex, setOpenIndex }: { faqs: Array<{ question: string; answer: string | JSX.Element }>; openIndex: number | null; setOpenIndex: (index: number | null) => void }) {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[768px] relative shrink-0 w-full" data-name="Accordion List">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.15)] border-b border-solid inset-0 pointer-events-none" />
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

function ContentBottom() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[24px] tracking-[0.24px] w-full">Ainda tem dúvidas?</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Entre em contato conosco e teremos prazer em ajudar
      </p>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-black/10 transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contato
      </p>
    </div>
  );
}

function Actions({ onContactClick }: { onContactClick: () => void }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <Button onClick={onContactClick} />
    </div>
  );
}

function Content1Bottom({ onContactClick }: { onContactClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[560px] relative shrink-0 w-full" data-name="Content">
      <ContentBottom />
      <Actions onContactClick={onContactClick} />
    </div>
  );
}

function Container({ faqs, openIndex, setOpenIndex, onContactClick }: { faqs: Array<{ question: string; answer: string | JSX.Element }>; openIndex: number | null; setOpenIndex: (index: number | null) => void; onContactClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <AccordionList faqs={faqs} openIndex={openIndex} setOpenIndex={setOpenIndex} />
      <Content1Bottom onContactClick={onContactClick} />
    </div>
  );
}

function Faq({ faqs, openIndex, setOpenIndex, onContactClick }: { faqs: Array<{ question: string; answer: string | JSX.Element }>; openIndex: number | null; setOpenIndex: (index: number | null) => void; onContactClick: () => void }) {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center px-[20px] py-[64px] relative size-full" data-name="FAQ / 1 /">
      <Container faqs={faqs} openIndex={openIndex} setOpenIndex={setOpenIndex} onContactClick={onContactClick} />
    </div>
  );
}

function ContentCta() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[44px] tracking-[0.44px] w-full">Aula Aberta</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscreva-se para conhecer o atelier e participar de uma aula experimental
      </p>
    </div>
  );
}

function ButtonCta({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[#fae08f] content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-[#f5d775] transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[#fae08f] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscrever
      </p>
    </div>
  );
}

function Button1Cta({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-black/10 transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contato
      </p>
    </div>
  );
}

function ActionsCta({ onSignupClick, onContactClick }: { onSignupClick: () => void; onContactClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <ButtonCta onClick={onSignupClick} />
      <Button1Cta onClick={onContactClick} />
    </div>
  );
}

function ColumnCta({ onSignupClick, onContactClick }: { onSignupClick: () => void; onContactClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Column">
      <ContentCta />
      <ActionsCta onSignupClick={onSignupClick} onContactClick={onContactClick} />
    </div>
  );
}

function Component({ onSignupClick, onContactClick }: { onSignupClick: () => void; onContactClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Component">
      <ColumnCta onSignupClick={onSignupClick} onContactClick={onContactClick} />
      <div className="aspect-[335/218] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage} />
      </div>
    </div>
  );
}

function ContainerCta({ onSignupClick, onContactClick }: { onSignupClick: () => void; onContactClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component onSignupClick={onSignupClick} onContactClick={onContactClick} />
    </div>
  );
}

function Cta({ onSignupClick, onContactClick }: { onSignupClick: () => void; onContactClick: () => void }) {
  return (
    <div className="bg-[#c8b372] content-stretch flex flex-col items-start px-[20px] py-[64px] relative size-full" data-name="CTA / 1 /">
      <ContainerCta onSignupClick={onSignupClick} onContactClick={onContactClick} />
    </div>
  );
}

function CompanyLogoFooter() {
  return (
    <div className="h-[44px] relative shrink-0 w-[84px]" data-name="Company Logo">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogo} />
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

function Links({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="content-stretch flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[16px] items-start leading-[1.6] max-w-[480px] relative shrink-0 text-[12px] text-white w-full" data-name="Links">
      <p className="css-4hzbpn relative shrink-0 w-full cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => onNavigate('inicio')}>
        Início
      </p>
      <p className="css-4hzbpn relative shrink-0 w-full cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => onNavigate('ocurso')}>
        O curso
      </p>
      <p className="css-4hzbpn relative shrink-0 w-full cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => onNavigate('trabalhos')}>
        Trabalhos
      </p>
      <p className="css-4hzbpn relative shrink-0 w-full cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => onNavigate('contato')}>
        Contato
      </p>
      <p className="css-4hzbpn relative shrink-0 w-full cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => onNavigate('blog')}>
        Blog
      </p>
    </div>
  );
}

function Column1({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Column">
      <Logo />
      <Links onNavigate={onNavigate} />
    </div>
  );
}

function TextInput1({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <input
            type="email"
            value={value}
            onChange={onChange}
            placeholder="Seu email aqui"
            className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px relative text-[14px] text-white bg-transparent border-none outline-none placeholder:text-[rgba(255,255,255,0.6)]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          />
        </div>
      </div>
    </div>
  );
}

function Button5({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative shrink-0 w-full cursor-pointer hover:bg-white/10 transition-colors"
      data-name="Button"
    >
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative w-full">
          <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
            Inscrever
          </p>
        </div>
      </div>
    </button>
  );
}

function Form1({ email, setEmail, onSubmit }: { email: string; setEmail: (value: string) => void; onSubmit: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <TextInput1 value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button5 onClick={onSubmit} />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex font-normal gap-[4px] items-start relative shrink-0 text-white w-full" data-name="Content">
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] leading-[1.6] relative shrink-0 text-[10px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ao inscrever-se você concorda com nossa política de privacidade
      </p>
    </div>
  );
}

function Actions2({ email, setEmail, onSubmit }: { email: string; setEmail: (value: string) => void; onSubmit: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <Form1 email={email} setEmail={setEmail} onSubmit={onSubmit} />
      <Content8 />
    </div>
  );
}

function Column2({ email, setEmail, onSubmit }: { email: string; setEmail: (value: string) => void; onSubmit: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Column">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[14px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscrever
      </p>
      <Actions2 email={email} setEmail={setEmail} onSubmit={onSubmit} />
    </div>
  );
}

function Content9({ onNavigate, email, setEmail, onSubmit }: { onNavigate: (page: string) => void; email: string; setEmail: (value: string) => void; onSubmit: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Content">
      <Column1 onNavigate={onNavigate} />
      <Column2 email={email} setEmail={setEmail} onSubmit={onSubmit} />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 underline" data-name="Footer Links">
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }}>
        Política de privacidade
      </p>
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }}>
        Termos de serviço
      </p>
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }}>
        Configurações de cookies
      </p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal gap-[32px] items-start leading-[1.6] relative shrink-0 text-[12px] text-white w-full" data-name="Row">
      <FooterLinks />
      <p className="css-ew64yg relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        © 2025 Alma. Todos os direitos reservados.
      </p>
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[16px] relative shrink-0 w-full" data-name="Credits">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 1">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.2" x2="335" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Row1 />
    </div>
  );
}

function Container2({ onNavigate, email, setEmail, onSubmit }: { onNavigate: (page: string) => void; email: string; setEmail: (value: string) => void; onSubmit: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content9 onNavigate={onNavigate} email={email} setEmail={setEmail} onSubmit={onSubmit} />
      <Credits />
    </div>
  );
}

function Footer({ onNavigate, email, setEmail, onSubmit }: { onNavigate: (page: string) => void; email: string; setEmail: (value: string) => void; onSubmit: () => void }) {
  return (
    <div className="bg-[#000000] relative shrink-0 w-full" data-name="Footer / 8 /">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[48px] relative w-full">
          <Container2 onNavigate={onNavigate} email={email} setEmail={setEmail} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

interface FAQMobileProps {
  navigateTo: (page: string) => void;
}

export default function FAQMobile({ navigateTo }: FAQMobileProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [footerEmail, setFooterEmail] = useState('');

  const faqs = [
    {
      question: "Qual é a duração do curso?",
      answer: "O curso tem duração de 12 meses, com encontros semanais de 3 horas. Nossa metodologia valoriza o processo de aprendizado e desenvolvimento gradual das habilidades visuais."
    },
    {
      question: "Preciso ter experiência prévia em arte?",
      answer: "Não é necessário ter experiência prévia. O curso foi desenvolvido para receber alunos de todos os níveis, desde iniciantes até aqueles com alguma prática artística. Nossa abordagem personalizada se adapta ao ritmo de cada aluno."
    },
    {
      question: "Quais materiais preciso ter?",
      answer: "Fornecemos uma lista completa de materiais básicos após a inscrição. Trabalhamos principalmente com materiais acessíveis e de qualidade, priorizando o desenvolvimento técnico sobre equipamentos caros."
    },
    {
      question: "Como funciona a aula experimental?",
      answer: "A aula experimental é uma oportunidade de conhecer o atelier, a metodologia e a professora. Você participará de uma atividade prática de aproximadamente 2 horas, sem custo e sem compromisso de matrícula."
    },
    {
      question: "Qual é o tamanho das turmas?",
      answer: "Trabalhamos com turmas reduzidas de no máximo 8 alunos. Isso garante atenção individualizada e acompanhamento próximo do desenvolvimento de cada pessoa."
    }
  ];

  const handleNewsletterSubmit = async () => {
    if (!footerEmail) {
      toast.error('Por favor, insira seu email');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(footerEmail)) {
      toast.error('Por favor, insira um email válido');
      return;
    }

    try {
      const { error } = await supabase
        .from('newsletter')
        .insert([{ email: footerEmail, source: 'faq-mobile-footer' }]);

      if (error) {
        if (error.code === '23505') {
          toast.error('Este email já está cadastrado!');
        } else {
          throw error;
        }
      } else {
        toast.success('Inscrição realizada com sucesso!');
        setFooterEmail('');
      }
    } catch (error) {
      console.error('Erro ao cadastrar newsletter:', error);
      toast.error('Erro ao realizar inscrição. Tente novamente.');
    }
  };

  const handleNavigate = (page: string) => {
    navigateTo(page);
  };

  return (
    <>
      <div className="content-stretch flex flex-col items-start relative size-full bg-[#fefbf3]" data-name="FAQ • Mobile">
        <Navbar onLogoClick={() => setIsMenuOpen(true)} />
        <Faq 
          faqs={faqs} 
          openIndex={openIndex} 
          setOpenIndex={setOpenIndex}
          onContactClick={() => navigateTo('contato')}
        />
        <Cta 
          onSignupClick={() => navigateTo('joinin')}
          onContactClick={() => navigateTo('contato')}
        />
        <Footer 
          onNavigate={handleNavigate}
          email={footerEmail}
          setEmail={setFooterEmail}
          onSubmit={handleNewsletterSubmit}
        />
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}