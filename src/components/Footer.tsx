import { useState } from 'react';
import imgCompanyLogo from "figma:asset/64b1c89f3bd3a9933dc022439b9a52a682a06397.png";

interface FooterProps {
  navigateTo?: (page: string) => void;
}

function CompanyLogo({ navigateTo }: { navigateTo?: (page: string) => void }) {
  return (
    <div 
      className="h-[44px] relative shrink-0 w-[84px] cursor-pointer" 
      data-name="Company Logo"
      onClick={() => navigateTo?.('inicio')}
    >
      <img alt="Alma Visual" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogo} />
    </div>
  );
}

function Logo({ navigateTo }: { navigateTo?: (page: string) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Logo">
      <CompanyLogo navigateTo={navigateTo} />
    </div>
  );
}

function Links({ navigateTo }: { navigateTo?: (page: string) => void }) {
  return (
    <div className="content-start flex flex-wrap font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[32px] items-start leading-[1.6] max-w-[480px] relative shrink-0 text-[16px] text-white w-full" data-name="Links">
      <p 
        className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => navigateTo?.('inicio')}
      >
        Início
      </p>
      <p 
        className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => navigateTo?.('ocurso')}
      >
        O curso
      </p>
      <p 
        className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => navigateTo?.('trabalhos')}
      >
        Trabalhos
      </p>
      <p 
        className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => navigateTo?.('contato')}
      >
        Contato
      </p>
      <p 
        className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => navigateTo?.('blog')}
      >
        Blog
      </p>
      <p 
        className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => navigateTo?.('acesso')}
      >
        Acesso
      </p>
    </div>
  );
}

function Column({ navigateTo }: { navigateTo?: (page: string) => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <Logo navigateTo={navigateTo} />
      <Links navigateTo={navigateTo} />
    </div>
  );
}

function TextInput({ value, onChange, onKeyPress }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void }) {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Text input">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <input
            type="email"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            placeholder="Seu email aqui"
            className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px relative text-[18px] text-white placeholder:text-[rgba(255,255,255,0.6)] bg-transparent border-none outline-none w-full"
            style={{ fontVariationSettings: "'opsz' 14" }}
          />
        </div>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-white hover:text-black transition-colors" 
      data-name="Button"
    >
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscrever
      </p>
    </div>
  );
}

function Form({ value, onChange, onKeyPress, onButtonClick }: { 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}) {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-start relative shrink-0 w-full" data-name="Form">
      <TextInput value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <Button onClick={onButtonClick} />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex font-normal gap-[4px] h-[18px] items-start relative shrink-0 text-[12px] text-white w-full" data-name="Content">
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] leading-[1.6] relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ao inscrever-se você concorda com nossa política de privacidade
      </p>
    </div>
  );
}

function Actions({ value, onChange, onKeyPress, onButtonClick }: { 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <Form value={value} onChange={onChange} onKeyPress={onKeyPress} onButtonClick={onButtonClick} />
      <Content />
    </div>
  );
}

function Column1({ value, onChange, onKeyPress, onButtonClick }: { 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[400px]" data-name="Column">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[18px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscrever
      </p>
      <Actions value={value} onChange={onChange} onKeyPress={onKeyPress} onButtonClick={onButtonClick} />
    </div>
  );
}

function Content1({ navigateTo, value, onChange, onKeyPress, onButtonClick }: { 
  navigateTo?: (page: string) => void;
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Content">
      <Column navigateTo={navigateTo} />
      <Column1 value={value} onChange={onChange} onKeyPress={onKeyPress} onButtonClick={onButtonClick} />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 underline" data-name="Footer Links">
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

function Row() {
  return (
    <div className="content-stretch flex font-['DM_Sans:Regular',sans-serif] font-normal items-start justify-between leading-[1.6] relative shrink-0 text-[16px] text-white w-full" data-name="Row">
      <FooterLinks />
      <p className="css-ew64yg relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        © 2025 Alma. Todos os direitos reservados.
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

function Container({ navigateTo, value, onChange, onKeyPress, onButtonClick }: { 
  navigateTo?: (page: string) => void;
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content1 navigateTo={navigateTo} value={value} onChange={onChange} onKeyPress={onKeyPress} onButtonClick={onButtonClick} />
      <Credits />
    </div>
  );
}

export default function Footer({ navigateTo }: FooterProps) {
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  
  const handleEmailKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  };
  
  const handleButtonClick = () => {
    if (email.trim()) {
      // Salvar o email temporariamente no localStorage
      localStorage.setItem('signupEmailTemp', email);
      // Navegar para a página de acesso
      navigateTo?.('acesso');
    }
  };

  return (
    <div className="bg-[#000000] content-stretch flex flex-col items-center px-[64px] py-[80px] relative size-full" data-name="Footer / 8 /">
      <Container navigateTo={navigateTo} value={email} onChange={handleEmailChange} onKeyPress={handleEmailKeyPress} onButtonClick={handleButtonClick} />
    </div>
  );
}