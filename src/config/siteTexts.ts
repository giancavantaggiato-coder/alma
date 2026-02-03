// Configuração centralizada de todos os textos do site

export interface SiteTexts {
  navbar: {
    logoText: string;
    menuItems: {
      inicio: string;
      oCurso: string;
      trabalhos: string;
      blog: string;
      contato: string;
      faq: string;
      areaDoAluno: string;
    };
  };
  hero: {
    titulo: string;
    subtitulo: string;
    textoBotaoPrincipal: string;
    textoBotaoSecundario: string;
  };
  quemSomos: {
    titulo: string;
    descricao: string;
  };
  abordagem: {
    titulo: string;
    descricao: string;
    items: Array<{
      titulo: string;
      descricao: string;
    }>;
  };
  trabalhos: {
    titulo: string;
    subtitulo: string;
    textoBotao: string;
  };
  ctaAulaAberta: {
    titulo: string;
    descricao: string;
    textoBotao: string;
  };
  newsletter: {
    titulo: string;
    placeholder: string;
    textoBotao: string;
  };
  footer: {
    descricao: string;
    direitos: string;
    menuTitulo: string;
    contatoTitulo: string;
    email: string;
    telefone: string;
    endereco: string;
  };
  facaParte: {
    titulo: string;
    subtitulo: string;
    textoBotao: string;
  };
  contato: {
    titulo: string;
    subtitulo: string;
    textoBotao: string;
  };
  faq: {
    titulo: string;
    subtitulo: string;
  };
  blog: {
    titulo: string;
    subtitulo: string;
  };
}

// Textos padrão do site
export const defaultSiteTexts: SiteTexts = {
  navbar: {
    logoText: "Escola de Design",
    menuItems: {
      inicio: "Início",
      oCurso: "O Curso",
      trabalhos: "Trabalhos",
      blog: "Blog",
      contato: "Contato",
      faq: "FAQ",
      areaDoAluno: "Área do Aluno",
    },
  },
  hero: {
    titulo: "Transforme suas ideias em designs incríveis",
    subtitulo: "Aprenda design com os melhores profissionais do mercado",
    textoBotaoPrincipal: "Começar Agora",
    textoBotaoSecundario: "Saiba Mais",
  },
  quemSomos: {
    titulo: "Quem Somos",
    descricao: "Somos uma escola dedicada a formar os melhores profissionais de design do mercado. Com uma metodologia única e professores experientes, transformamos iniciantes em designers completos.",
  },
  abordagem: {
    titulo: "Nossa Abordagem",
    descricao: "Metodologia prática e focada no mercado de trabalho",
    items: [
      {
        titulo: "Aprenda fazendo",
        descricao: "Projetos reais desde o primeiro dia para desenvolver seu portfólio",
      },
      {
        titulo: "Mentoria individual",
        descricao: "Acompanhamento personalizado com profissionais experientes",
      },
      {
        titulo: "Comunidade ativa",
        descricao: "Rede de networking com alunos e ex-alunos atuando no mercado",
      },
    ],
  },
  trabalhos: {
    titulo: "Trabalhos dos Nossos Alunos",
    subtitulo: "Veja o que nossos alunos estão criando",
    textoBotao: "Ver Todos os Trabalhos",
  },
  ctaAulaAberta: {
    titulo: "Participe de uma Aula Aberta",
    descricao: "Conheça nossa metodologia e tire suas dúvidas com nossos professores",
    textoBotao: "Agendar Aula Grátis",
  },
  newsletter: {
    titulo: "Receba novidades e dicas de design",
    placeholder: "Seu melhor e-mail",
    textoBotao: "Inscrever",
  },
  footer: {
    descricao: "Formando os melhores designers do mercado desde 2020",
    direitos: "© 2024 Escola de Design. Todos os direitos reservados.",
    menuTitulo: "Menu",
    contatoTitulo: "Contato",
    email: "contato@escoladedesign.com",
    telefone: "(11) 9999-9999",
    endereco: "São Paulo, SP",
  },
  facaParte: {
    titulo: "Faça Parte",
    subtitulo: "Inscreva-se para o próximo curso e comece sua jornada no design",
    textoBotao: "Enviar Inscrição",
  },
  contato: {
    titulo: "Entre em Contato",
    subtitulo: "Estamos aqui para tirar suas dúvidas",
    textoBotao: "Enviar Mensagem",
  },
  faq: {
    titulo: "Perguntas Frequentes",
    subtitulo: "Tire suas principais dúvidas sobre o curso",
  },
  blog: {
    titulo: "Blog",
    subtitulo: "Artigos, tutoriais e novidades sobre design",
  },
};

// Função para carregar textos do localStorage (cache local)
export function loadTextsFromLocalStorage(): SiteTexts | null {
  try {
    const stored = localStorage.getItem('siteTexts');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Erro ao carregar textos do localStorage:', error);
  }
  return null;
}

// Função para salvar textos no localStorage
export function saveTextsToLocalStorage(texts: SiteTexts): void {
  try {
    localStorage.setItem('siteTexts', JSON.stringify(texts));
  } catch (error) {
    console.error('Erro ao salvar textos no localStorage:', error);
  }
}

// Hook para usar os textos do site
export function useSiteTexts(): SiteTexts {
  // Tenta carregar do localStorage primeiro
  const storedTexts = loadTextsFromLocalStorage();
  return storedTexts || defaultSiteTexts;
}
