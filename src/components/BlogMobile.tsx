import { useState } from 'react';
import svgPaths from "../imports/svg-rm3v85rtt1";
import imgPlaceholderImage from "figma:asset/d47f9f5af24fd7129274afad903571dd3819a330.png";
import imgPlaceholderImage1 from "figma:asset/1de7f5b16c38dd3644b963b0bca1dbf2605e03aa.png";
import imgCompanyLogo from "figma:asset/64b1c89f3bd3a9933dc022439b9a52a682a06397.png";
import { blogPosts } from '../data/blogPosts';
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

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
        Reflexões
      </p>
    </div>
  );
}

function ContentHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[44px] tracking-[0.44px] w-full">Pensamentos do atelier</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Acompanhe as discussões, descobertas e momentos que marcam nosso trabalho visual
      </p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper />
      <ContentHeader />
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text}
      </p>
    </div>
  );
}

function Info({ category, readTime }: { category: string; readTime: string }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <Tag text={category} />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        {readTime}
      </p>
    </div>
  );
}

function ContentCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[20px] tracking-[0.2px] w-full">{title}</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {description}
      </p>
    </div>
  );
}

function ContentWithInfo({ category, readTime, title, description }: { category: string; readTime: string; title: string; description: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info category={category} readTime={readTime} />
      <ContentCard title={title} description={description} />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_right">
          <path d={svgPaths.p116eba00} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="Button"
      onClick={onClick}
    >
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ler
      </p>
      <ChevronRight />
    </div>
  );
}

function Card({ post, onClick }: { post: any; onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full cursor-pointer" 
      data-name="Card"
      onClick={onClick}
    >
      <div className="aspect-[335/221] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={post.image || imgPlaceholderImage} />
      </div>
      <ContentWithInfo 
        category={post.category}
        readTime={post.readTime}
        title={post.title}
        description={post.excerpt}
      />
      <Button onClick={onClick} />
    </div>
  );
}

function Row({ onPostClick }: { onPostClick: (id: number) => void }) {
  const displayedPosts = blogPosts.slice(0, 3);
  
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Row">
      {displayedPosts.map((post) => (
        <Card key={post.id} post={post} onClick={() => onPostClick(post.id)} />
      ))}
    </div>
  );
}

function Button3({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-black/10 transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ver tudo
      </p>
    </div>
  );
}

function Actions({ onVerTudoClick }: { onVerTudoClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Actions">
      <Button3 onClick={onVerTudoClick} />
    </div>
  );
}

function Container({ onPostClick }: { onPostClick: (id: number) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Row onPostClick={onPostClick} />
      <Actions onVerTudoClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}

function Blog({ onPostClick }: { onPostClick: (id: number) => void }) {
  return (
    <div className="bg-[#fefbf3] relative shrink-0 w-full" data-name="Blog / 34 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container onPostClick={onPostClick} />
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[44px] tracking-[0.44px] w-full">Acompanhe as novidades do atelier</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Receba reflexões sobre prática visual, atualizações de cursos e convites para atividades do Alma
      </p>
    </div>
  );
}

function TextInput({ value, onChange, placeholder }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string }) {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <input
            type="email"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px relative text-[14px] text-black bg-transparent border-none outline-none placeholder:text-[rgba(0,0,0,0.6)]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          />
        </div>
      </div>
    </div>
  );
}

function Button4({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#fae08f] relative shrink-0 w-full cursor-pointer hover:bg-[#f5d775] transition-colors"
      data-name="Button"
    >
      <div aria-hidden="true" className="absolute border border-[#fae08f] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative w-full">
          <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
            Inscrever
          </p>
        </div>
      </div>
    </button>
  );
}

function Form({ email, setEmail, onSubmit }: { email: string; setEmail: (value: string) => void; onSubmit: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <TextInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu email aqui" />
      <Button4 onClick={onSubmit} />
    </div>
  );
}

function Actions1({ email, setEmail, onSubmit }: { email: string; setEmail: (value: string) => void; onSubmit: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Actions">
      <Form email={email} setEmail={setEmail} onSubmit={onSubmit} />
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[10px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ao se inscrever você concorda com nossos termos e condições.
      </p>
    </div>
  );
}

function Column({ email, setEmail, onSubmit }: { email: string; setEmail: (value: string) => void; onSubmit: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Column">
      <Content7 />
      <Actions1 email={email} setEmail={setEmail} onSubmit={onSubmit} />
    </div>
  );
}

function Component({ email, setEmail, onSubmit }: { email: string; setEmail: (value: string) => void; onSubmit: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Component">
      <Column email={email} setEmail={setEmail} onSubmit={onSubmit} />
      <div className="aspect-[335/218] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage1} />
      </div>
    </div>
  );
}

function Container1({ email, setEmail, onSubmit }: { email: string; setEmail: (value: string) => void; onSubmit: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component email={email} setEmail={setEmail} onSubmit={onSubmit} />
    </div>
  );
}

function Cta({ email, setEmail, onSubmit }: { email: string; setEmail: (value: string) => void; onSubmit: () => void }) {
  return (
    <div className="bg-[#c8b372] relative shrink-0 w-full" data-name="CTA / 2 /">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[64px] relative w-full">
          <Container1 email={email} setEmail={setEmail} onSubmit={onSubmit} />
        </div>
      </div>
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

interface BlogMobileProps {
  navigateTo: (page: string, id?: number) => void;
}

export default function BlogMobile({ navigateTo }: BlogMobileProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ctaEmail, setCtaEmail] = useState('');
  const [footerEmail, setFooterEmail] = useState('');

  const handleNewsletterSubmit = async (email: string, location: string) => {
    if (!email) {
      toast.error('Por favor, insira seu email');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Por favor, insira um email válido');
      return;
    }

    try {
      const { error } = await supabase
        .from('newsletter')
        .insert([{ email, source: location }]);

      if (error) {
        if (error.code === '23505') {
          toast.error('Este email já está cadastrado!');
        } else {
          throw error;
        }
      } else {
        toast.success('Inscrição realizada com sucesso!');
        if (location === 'cta') {
          setCtaEmail('');
        } else {
          setFooterEmail('');
        }
      }
    } catch (error) {
      console.error('Erro ao cadastrar newsletter:', error);
      toast.error('Erro ao realizar inscrição. Tente novamente.');
    }
  };

  const handlePostClick = (id: number) => {
    navigateTo('blogpost', id);
  };

  const handleNavigate = (page: string) => {
    navigateTo(page);
  };

  return (
    <>
      <div className="content-stretch flex flex-col items-start relative size-full bg-[#fefbf3]" data-name="Blog • Mobile">
        <Navbar onLogoClick={() => setIsMenuOpen(true)} />
        <Blog onPostClick={handlePostClick} />
        <Cta 
          email={ctaEmail} 
          setEmail={setCtaEmail} 
          onSubmit={() => handleNewsletterSubmit(ctaEmail, 'blog-mobile-cta')} 
        />
        <Footer 
          onNavigate={handleNavigate}
          email={footerEmail}
          setEmail={setFooterEmail}
          onSubmit={() => handleNewsletterSubmit(footerEmail, 'blog-mobile-footer')}
        />
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </>
  );
}