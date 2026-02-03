import svgPaths from "../imports/svg-xafg0mq000";
import imgCompanyLogo from "figma:asset/91c6f4bb39b820ba4c5b66890346b0f48d74a13f.png";

interface StudentData {
  id: number;
  nome: string;
  funcao?: string;
  descricao: string;
  imagemPrincipal: string;
  imagemSobre: string;
  tags: string[];
  periodo: string;
  meios: string;
  portfolio?: string;
  substack?: string;
  sobreTitulo: string;
  sobreTexto: string[];
  galeria: string[];
  perfilVisivel?: boolean;
}

export type { StudentData };

interface TrabalhoDoAlunoProps {
  student: StudentData;
  onNavigate: (page: string) => void;
}

export function TrabalhoDoAluno({ student, onNavigate }: TrabalhoDoAlunoProps) {
  return (
    <div className="bg-[#fefbf3] flex flex-col items-center w-full min-h-screen">
      {/* Navbar */}
      <div className="bg-[#fefbf3] w-full flex flex-col items-center overflow-clip shrink-0">
        <div className="h-[72px] w-full">
          <div className="flex flex-row items-center overflow-clip size-full">
            <div className="flex items-center justify-between px-[64px] size-full">
              <div className="flex flex-1 items-center justify-between">
                {/* Logo */}
                <div className="flex gap-[24px] items-center">
                  <div 
                    className="h-[44px] w-[84px] cursor-pointer"
                    onClick={() => onNavigate('Inicio')}
                  >
                    <img alt="" className="object-contain size-full" src={imgCompanyLogo} />
                  </div>
                  <div className="flex gap-[32px] items-center overflow-clip">
                    <p 
                      className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
                      style={{ fontVariationSettings: "'opsz' 14" }}
                      onClick={() => onNavigate('OCurso')}
                    >
                      O curso
                    </p>
                    <p 
                      className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[18px] text-black cursor-pointer hover:opacity-70 transition-opacity" 
                      style={{ fontVariationSettings: "'opsz' 14" }}
                      onClick={() => onNavigate('Inicio')}
                    >
                      Trabalhos
                    </p>
                    <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Contato
                    </p>
                    <div className="flex gap-[4px] items-center justify-center">
                      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Mais
                      </p>
                      <div className="size-[24px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path clipRule="evenodd" d={svgPaths.pee47f00} fill="black" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div 
                  className="bg-black flex items-center justify-center px-[20px] py-[8px] cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => onNavigate('JoinIn')}
                >
                  <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
                  <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Quero começar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#fefbf3] flex flex-col items-center overflow-clip pb-[40px] pt-[36px] px-[64px] w-full max-w-[1440px]">
        <div className="flex flex-col gap-[80px] items-start max-w-[1280px] w-full">
          <div className="h-[480px] relative w-full rounded-[16px] overflow-hidden">
            <img 
              alt={student.nome} 
              className="absolute inset-0 object-cover size-full" 
              src={student.imagemPrincipal} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Content over image */}
            <div className="absolute bottom-0 left-0 right-0 p-[48px]">
              <div className="flex gap-[32px] items-end justify-between w-full">
                <div className="flex flex-col gap-[20px] flex-1 text-white">
                  <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.1] not-italic text-[84px] tracking-[0.84px]">
                    {student.nome}
                  </p>
                  <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[20px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    {student.descricao}
                  </p>
                </div>

                <div className="flex flex-col gap-[32px] max-w-[480px] text-white">
                  <div className="flex gap-[32px] w-full">
                    <div className="flex flex-col gap-[8px] flex-1">
                      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic text-[26px] tracking-[0.26px]">Período</p>
                      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        {student.periodo}
                      </p>
                    </div>
                    <div className="flex flex-col gap-[8px] flex-1">
                      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic text-[26px] tracking-[0.26px]">Meios</p>
                      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        {student.meios}
                      </p>
                    </div>
                  </div>
                  {(student.portfolio || student.substack) && (
                    <div className="flex gap-[32px] w-full">
                      {student.portfolio && (
                        <div className="flex flex-col gap-[8px] flex-1">
                          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic text-[26px] tracking-[0.26px]">Portfólio</p>
                          <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[18px] underline" style={{ fontVariationSettings: "'opsz' 14" }}>
                            {student.portfolio}
                          </p>
                        </div>
                      )}
                      {student.substack && (
                        <div className="flex flex-col gap-[8px] flex-1">
                          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic text-[26px] tracking-[0.26px]">Substack</p>
                          <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[18px] underline" style={{ fontVariationSettings: "'opsz' 14" }}>
                            {student.substack}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sobre Section */}
      <div className="bg-[#fefbf3] flex flex-col items-center overflow-clip py-[80px] px-[64px] w-full">
        <div className="flex gap-[80px] items-start max-w-[1280px] w-full">
          <div className="h-[640px] relative rounded-[16px] w-[480px] shrink-0">
            <img 
              alt="Sobre" 
              className="absolute inset-0 object-cover size-full rounded-[16px]" 
              src={student.imagemSobre} 
            />
          </div>
          
          <div className="flex flex-col gap-[32px] flex-1 text-black">
            <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic text-[48px] tracking-[0.48px]">
              {student.sobreTitulo}
            </p>
            {student.sobreTexto.map((paragrafo, index) => (
              <p 
                key={index}
                className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[18px]" 
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                {paragrafo}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Galeria Section */}
      <div className="bg-[#fef8e8] flex flex-col items-center overflow-clip pb-[80px] px-[64px] w-full">
        <div className="flex flex-col gap-[48px] items-start max-w-[1280px] w-full">
          <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic text-[48px] text-black tracking-[0.48px]">
            Galeria
          </p>
          
          <div className="grid grid-cols-3 gap-[24px] w-full">
            {student.galeria.map((imagem, index) => (
              <div key={index}>
                <div className="aspect-square relative rounded-[16px] overflow-hidden bg-[#f5f5f5]">
                  <img 
                    alt={`Galeria ${index + 1}`} 
                    className="absolute inset-0 object-cover size-full" 
                    src={imagem} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explore Mais CTA */}
      <div className="bg-[#fefbf3] flex flex-col items-center overflow-clip py-[80px] px-[64px] w-full">
        <div className="flex gap-[80px] items-center max-w-[1280px] w-full">
          <div className="flex flex-col gap-[32px] flex-1 text-black">
            <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic text-[48px] tracking-[0.48px]">
              Explore mais trabalhos
            </p>
            <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[20px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Veja outros processos e investigações desenvolvidos pelos alunos do atelier.
            </p>
            <div 
              className="bg-black flex items-center justify-center px-[20px] py-[12px] w-fit cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => onNavigate('Inicio')}
            >
              <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
                Ver galeria
              </p>
            </div>
          </div>
          
          <div className="h-[400px] relative rounded-[16px] w-[480px] shrink-0 bg-[#e5e5e5]">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#999" strokeWidth="1.5"/>
                <circle cx="8.5" cy="8.5" r="1.5" fill="#999"/>
                <path d="M3 16l5-5 3 3 6-6 4 4v5H3v-1z" fill="#999"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-[#dfd699] flex flex-col items-center overflow-clip py-[80px] px-[64px] w-full">
        <div className="flex gap-[80px] items-center justify-between max-w-[1280px] w-full">
          <div className="flex flex-col gap-[32px] flex-1 text-black">
            <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic text-[48px] tracking-[0.48px]">
              Comece sua investigação visual
            </p>
            <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[20px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Desenvolva seu olhar, técnica e repertório visual através de um processo estruturado e individual.
            </p>
            <div className="flex gap-[16px] items-center">
              <div 
                className="bg-black flex items-center justify-center px-[20px] py-[12px] cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => onNavigate('JoinIn')}
              >
                <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[18px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Começar
                </p>
              </div>
              <div 
                className="bg-transparent border border-black flex items-center justify-center px-[20px] py-[12px] cursor-pointer hover:bg-black/10 transition-colors"
                onClick={() => onNavigate('OCurso')}
              >
                <p className="css-ew64yg font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.6] text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Sobre o curso
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black flex flex-col items-center overflow-clip py-[48px] px-[64px] w-full">
        <div className="flex flex-col gap-[48px] max-w-[1280px] w-full">
          <div className="flex gap-[80px] items-start justify-between w-full">
            <div className="flex flex-col gap-[24px]">
              <div className="h-[44px] w-[84px]">
                <img alt="" className="object-contain size-full brightness-0 invert" src={imgCompanyLogo} />
              </div>
              <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[16px] text-white max-w-[320px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Um atelier de investigação visual através do desenho, pintura e composição.
              </p>
            </div>
            
            <div className="flex gap-[48px]">
              <div className="flex flex-col gap-[16px]">
                <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] text-[16px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Links
                </p>
                <div className="flex flex-col gap-[12px]">
                  <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[14px] text-white/70 cursor-pointer hover:text-white transition-colors" style={{ fontVariationSettings: "'opsz' 14" }}>
                    O Curso
                  </p>
                  <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[14px] text-white/70 cursor-pointer hover:text-white transition-colors" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Trabalhos
                  </p>
                  <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[14px] text-white/70 cursor-pointer hover:text-white transition-colors" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Faça Parte
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-[24px]">
            <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[14px] text-white/50" style={{ fontVariationSettings: "'opsz' 14" }}>
              © 2024 Atelier. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}