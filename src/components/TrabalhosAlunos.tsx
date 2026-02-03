import svgPaths from "../imports/svg-tnfuclzlmq";
import svgStars from "../imports/svg-vjfu3kmblr";
import imgAvatarImage from "figma:asset/3711e237ee3cf1d73ec177a47641af606e0b9d66.png";
import { studentsData } from '../data/students';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import TrabalhosAlunosMobile from './TrabalhosAlunosMobile';

// Imagem de perfil genérica como fallback
const DEFAULT_AVATAR = 'https://images.unsplash.com/photo-1585972949678-b7eff107d061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwYXZhdGFyJTIwcGxhY2Vob2xkZXIlMjBzaWxob3VldHRlfGVufDF8fHx8MTc2OTI4NzQyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

interface TrabalhosAlunosProps {
  navigateTo?: (page: string, studentId?: number) => void;
}

function Tag({ text }: { text: string }) {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text}
      </p>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Tags">
      <Tag text="Desenho" />
      <Tag text="Pintura" />
      <Tag text="Escultura" />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Column">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.1] not-italic relative shrink-0 text-[84px] text-black tracking-[0.84px] w-full">Trabalhos dos alunos</p>
      <Tags />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="Content">
      <Column1 />
      <p className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px relative self-stretch text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Aqui você vê o que nasce quando a prática encontra a investigação. Cada trabalho carrega a marca de quem o fez, sustentado pelos fundamentos que compartilhamos.
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content1 />
    </div>
  );
}

function PortfolioHeader() {
  return (
    <div className="bg-[#fefbf3] relative shrink-0 w-full" data-name="Portfolio Header / 9 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Nosso Atelier
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[60px] tracking-[0.6px] w-full">Nossos alunos</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Cada aluno desenvolve sua própria investigação visual, sustentada pelos fundamentos compartilhados no atelier.
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <TaglineWrapper />
      <Content2 />
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Faça parte
      </p>
    </div>
  );
}

function Actions1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button1 onClick={onClick} />
    </div>
  );
}

function SectionTitle({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[356px]" data-name="Section Title">
      <Content3 />
      <Actions1 onClick={onClick} />
    </div>
  );
}

function Title({ nome, funcao }: { nome: string; funcao: string }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[26px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {nome}
      </p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {funcao}
      </p>
    </div>
  );
}

function Content4({ nome, funcao, descricao }: { nome: string; funcao: string; descricao: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.6] relative shrink-0 text-black w-full" data-name="Content">
      <Title nome={nome} funcao={funcao} />
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {descricao}
      </p>
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity" data-name="LinkedIn">
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
    <div className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity" data-name="X">
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
    <div className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity" data-name="Dribble">
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

function Card({ student, onClick }: { student: typeof studentsData[0]; onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative cursor-pointer group" 
      data-name="Card"
      onClick={onClick}
    >
      <div className="aspect-[390/390] relative rounded-[16px] shrink-0 w-full overflow-hidden" data-name="Placeholder Image">
        <img 
          alt={student.nome} 
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" 
          src={student.imagemPrincipal} 
        />
      </div>
      <Content4 nome={student.nome} funcao={student.funcao} descricao={student.descricao} />
      <SocialIcons />
    </div>
  );
}

function Row({ students, onStudentClick }: { students: typeof studentsData; onStudentClick?: (id: number) => void }) {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      {students.slice(0, 2).map((student) => (
        student.imagemPrincipal && student.nome ? (
          <Card key={student.id} student={student} onClick={() => onStudentClick?.(student.id)} />
        ) : null
      ))}
    </div>
  );
}

function Row2({ students, onStudentClick }: { students: typeof studentsData; onStudentClick?: (id: number) => void }) {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      {students.slice(2, 4).map((student) => (
        student.imagemPrincipal && student.nome ? (
          <Card key={student.id} student={student} onClick={() => onStudentClick?.(student.id)} />
        ) : null
      ))}
    </div>
  );
}

function Content5({ onStudentClick }: { onStudentClick?: (id: number) => void }) {
  // Filtrar apenas alunos com perfil visível e com dados completos
  const visibleStudents = studentsData.filter(student => 
    student.perfilVisivel !== false && 
    student.imagemPrincipal && 
    student.nome &&
    student.descricao
  );
  
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[64px] items-start min-h-px min-w-px relative" data-name="Content">
      {visibleStudents.length > 0 && <Row students={visibleStudents} onStudentClick={onStudentClick} />}
      {visibleStudents.length > 2 && <Row2 students={visibleStudents} onStudentClick={onStudentClick} />}
    </div>
  );
}

function Component({ onStudentClick, onVerTodosClick }: { onStudentClick?: (id: number) => void; onVerTodosClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="Component">
      <SectionTitle onClick={onVerTodosClick} />
      <Content5 onStudentClick={onStudentClick} />
    </div>
  );
}

function Container2({ onStudentClick, onVerTodosClick }: { onStudentClick?: (id: number) => void; onVerTodosClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component onStudentClick={onStudentClick} onVerTodosClick={onVerTodosClick} />
    </div>
  );
}

function Team({ onStudentClick, onVerTodosClick }: { onStudentClick?: (id: number) => void; onVerTodosClick?: () => void }) {
  return (
    <div className="bg-[#fefbf3] relative shrink-0 w-full" data-name="Team / 20 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container2 onStudentClick={onStudentClick} onVerTodosClick={onVerTodosClick} />
        </div>
      </div>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[768px] relative shrink-0 text-black w-full" data-name="Section Title">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[60px] tracking-[0.6px] w-full">O que disseram</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
          <path d={svgStars.p23629f00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgStars.p84d7480} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgStars.p24418170} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgStars.p28ff5800} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgStars.p32177b30} fill="var(--fill-0, black)" id="Vector_5" />
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

function AvatarContent({ nome, area }: { nome: string; area: string }) {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] relative shrink-0 text-[18px] text-black" data-name="Avatar Content">
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        {nome}
      </p>
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        {area}
      </p>
    </div>
  );
}

function Avatar({ nome, area, avatarImage }: { nome: string; area: string; avatarImage?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt={nome} className="block max-w-none size-full rounded-full object-cover" height="56" src={avatarImage || DEFAULT_AVATAR} width="56" />
      </div>
      <AvatarContent nome={nome} area={area} />
    </div>
  );
}

function TestimonialColumn({ quote, nome, area, avatarImage }: { quote: string; nome: string; area: string; avatarImage?: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px overflow-clip relative" data-name="Column">
      <Stars />
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-full not-italic relative shrink-0 text-[26px] text-black tracking-[0.26px] w-[min-content]">{quote}</p>
      <Avatar nome={nome} area={area} avatarImage={avatarImage} />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <TestimonialColumn 
        quote={`"Aqui aprendi que o desenho não é cópia, é investigação. Cada linha tem peso, tem propósito."`}
        nome="Marina Souza"
        area="Aluna, pintura"
        avatarImage={imgAvatarImage}
      />
      <TestimonialColumn 
        quote={`"A forma emerge quando você para de pensar, elaborar e começa a ver. O atelier ensina isso e muito mais."`}
        nome="Lucas Ferreira"
        area="Aluno, escultura"
        avatarImage={imgAvatarImage}
      />
      <TestimonialColumn 
        quote={`"Encontrei minha própria linguagem visual aqui, sem pressão de tendências ou modelos prontos."`}
        nome="Ana Cardoso"
        area="Aluna, design"
        avatarImage={imgAvatarImage}
      />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle1 />
      <Content6 />
    </div>
  );
}

function Testimonial() {
  return (
    <div className="bg-[#fefbf3] relative shrink-0 w-full" data-name="Testimonial / 6 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[60px] tracking-[0.6px] w-full">Quer fazer parte?</p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscreva-se para conhecer o atelier e participar de uma aula experimental
      </p>
    </div>
  );
}

function Button3({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-black content-stretch flex items-center justify-center px-[24px] py-[10px] relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="Button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inscreva-se
      </p>
    </div>
  );
}

function Actions2({ onInscricaoClick }: { onInscricaoClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button3 onClick={onInscricaoClick} />
    </div>
  );
}

function Column5({ onInscricaoClick }: { onInscricaoClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <Content7 />
      <Actions2 onInscricaoClick={onInscricaoClick} />
    </div>
  );
}

function Component1({ onInscricaoClick }: { onInscricaoClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full" data-name="Component">
      <Column5 onInscricaoClick={onInscricaoClick} />
      <div className="aspect-[600/400] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Placeholder Image">
        <div className="size-full overflow-hidden rounded-[16px]">
          <img alt="Atelier de arte" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src="https://images.unsplash.com/photo-1730206562928-0efd62560435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdHVkaW8lMjBjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjkyOTk4ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
        </div>
      </div>
    </div>
  );
}

function Container4({ onInscricaoClick }: { onInscricaoClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component1 onInscricaoClick={onInscricaoClick} />
    </div>
  );
}

function Cta({ onInscricaoClick }: { onInscricaoClick?: () => void }) {
  return (
    <div className="bg-[#c8b372] relative shrink-0 w-full" data-name="CTA / 1 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container4 onInscricaoClick={onInscricaoClick} />
        </div>
      </div>
    </div>
  );
}

function CompanyLogo1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="h-[44px] relative shrink-0 w-[84px] cursor-pointer" data-name="Company Logo" onClick={onClick}>
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src="figma:asset/3530cd741ed4641cce367422608ca56d8cecd116.png" />
    </div>
  );
}

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Logo">
      <CompanyLogo1 onClick={onClick} />
    </div>
  );
}

function Links() {
  return null;
}

function Column6({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <Logo onClick={onLogoClick} />
    </div>
  );
}

function Content9({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Content">
      <Column6 onLogoClick={onLogoClick} />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 underline" data-name="Footer Links">
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }}>
        Privacy Policy
      </p>
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }}>
        Terms of Service
      </p>
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }}>
        Cookies Settings
      </p>
    </div>
  );
}

function FooterRow() {
  return (
    <div className="content-stretch flex font-['DM_Sans:Regular',sans-serif] font-normal items-start justify-between leading-[1.6] relative shrink-0 text-[16px] text-white w-full" data-name="Row">
      <FooterLinks />
      <p className="css-ew64yg relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        © 2024 Atelier. All rights reserved.
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
      <FooterRow />
    </div>
  );
}

function Container5({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content9 onLogoClick={onLogoClick} />
      <Credits />
    </div>
  );
}

function Footer({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <div className="bg-[#000000] relative shrink-0 w-full" data-name="Footer / 8 /">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[80px] relative w-full">
          <Container5 onLogoClick={onLogoClick} />
        </div>
      </div>
    </div>
  );
}

export default function TrabalhosAlunos({ navigateTo }: TrabalhosAlunosProps) {
  const handleNavigateStudent = (studentId: number) => navigateTo?.('student', studentId);
  const handleNavigateNossosAlunos = () => navigateTo?.('nossosalunos');
  const handleNavigateJoinIn = () => navigateTo?.('joinin');
  const handleNavigateInicio = () => navigateTo?.('inicio');

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
    return <TrabalhosAlunosMobile />;
  }

  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Trabalhos dos Alunos • Desktop">
      <Navbar currentPage="trabalhos" navigateTo={navigateTo} />
      <PortfolioHeader />
      <Team 
        onStudentClick={handleNavigateStudent}
        onVerTodosClick={handleNavigateNossosAlunos}
      />
      <Testimonial />
      <Cta onInscricaoClick={handleNavigateJoinIn} />
      <Footer onLogoClick={handleNavigateInicio} />
    </div>
  );
}