# 🔧 Como Usar os Textos Editáveis nos Componentes

Este documento mostra como integrar o sistema de textos editáveis nos componentes do site.

## Importação Básica

```typescript
import { useSiteTexts } from '../config/siteTexts';
```

## Exemplo 1: Componente Navbar

```typescript
import { useSiteTexts } from '../config/siteTexts';

export function Navbar() {
  const texts = useSiteTexts();
  
  return (
    <nav>
      <div className="logo">
        {texts.navbar.logoText}
      </div>
      <ul className="menu">
        <li><a href="#inicio">{texts.navbar.menuItems.inicio}</a></li>
        <li><a href="#ocurso">{texts.navbar.menuItems.oCurso}</a></li>
        <li><a href="#trabalhos">{texts.navbar.menuItems.trabalhos}</a></li>
        <li><a href="#blog">{texts.navbar.menuItems.blog}</a></li>
        <li><a href="#contato">{texts.navbar.menuItems.contato}</a></li>
        <li><a href="#faq">{texts.navbar.menuItems.faq}</a></li>
        <li><a href="#area">{texts.navbar.menuItems.areaDoAluno}</a></li>
      </ul>
    </nav>
  );
}
```

## Exemplo 2: Seção Hero

```typescript
import { useSiteTexts } from '../config/siteTexts';

export function HeroSection() {
  const texts = useSiteTexts();
  
  return (
    <section className="hero">
      <h1>{texts.hero.titulo}</h1>
      <p>{texts.hero.subtitulo}</p>
      <div className="buttons">
        <button className="primary">
          {texts.hero.textoBotaoPrincipal}
        </button>
        <button className="secondary">
          {texts.hero.textoBotaoSecundario}
        </button>
      </div>
    </section>
  );
}
```

## Exemplo 3: Seção Quem Somos

```typescript
import { useSiteTexts } from '../config/siteTexts';

export function QuemSomosSection() {
  const texts = useSiteTexts();
  
  return (
    <section className="quem-somos">
      <h2>{texts.quemSomos.titulo}</h2>
      <p>{texts.quemSomos.descricao}</p>
    </section>
  );
}
```

## Exemplo 4: Seção Abordagem com Array

```typescript
import { useSiteTexts } from '../config/siteTexts';

export function AbordagemSection() {
  const texts = useSiteTexts();
  
  return (
    <section className="abordagem">
      <h2>{texts.abordagem.titulo}</h2>
      <p>{texts.abordagem.descricao}</p>
      
      <div className="grid">
        {texts.abordagem.items.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

## Exemplo 5: Footer

```typescript
import { useSiteTexts } from '../config/siteTexts';

export function Footer() {
  const texts = useSiteTexts();
  
  return (
    <footer>
      <div className="footer-content">
        <div className="about">
          <h3>{texts.navbar.logoText}</h3>
          <p>{texts.footer.descricao}</p>
        </div>
        
        <div className="menu">
          <h4>{texts.footer.menuTitulo}</h4>
          <ul>
            <li>{texts.navbar.menuItems.inicio}</li>
            <li>{texts.navbar.menuItems.oCurso}</li>
            <li>{texts.navbar.menuItems.trabalhos}</li>
          </ul>
        </div>
        
        <div className="contato">
          <h4>{texts.footer.contatoTitulo}</h4>
          <p>Email: {texts.footer.email}</p>
          <p>Tel: {texts.footer.telefone}</p>
          <p>{texts.footer.endereco}</p>
        </div>
      </div>
      
      <div className="copyright">
        {texts.footer.direitos}
      </div>
    </footer>
  );
}
```

## Exemplo 6: Formulário Newsletter

```typescript
import { useSiteTexts } from '../config/siteTexts';
import { useState } from 'react';

export function NewsletterForm() {
  const texts = useSiteTexts();
  const [email, setEmail] = useState('');
  
  return (
    <form className="newsletter">
      <h3>{texts.newsletter.titulo}</h3>
      <input 
        type="email"
        placeholder={texts.newsletter.placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">
        {texts.newsletter.textoBotao}
      </button>
    </form>
  );
}
```

## Exemplo 7: CTA Aula Aberta

```typescript
import { useSiteTexts } from '../config/siteTexts';

export function CtaAulaAberta() {
  const texts = useSiteTexts();
  
  return (
    <section className="cta-aula-aberta">
      <h2>{texts.ctaAulaAberta.titulo}</h2>
      <p>{texts.ctaAulaAberta.descricao}</p>
      <button>
        {texts.ctaAulaAberta.textoBotao}
      </button>
    </section>
  );
}
```

## Exemplo 8: Usando em Componentes Existentes do Figma

Se você já tem componentes importados do Figma, pode sobrescrever os textos assim:

```typescript
import InicioDesktop from './imports/InicioDesktop';
import { useSiteTexts } from './config/siteTexts';
import { useEffect } from 'react';

export function HomePage() {
  const texts = useSiteTexts();
  
  // Após o componente renderizar, atualizar textos no DOM
  useEffect(() => {
    // Exemplo: substituir título do hero
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      heroTitle.textContent = texts.hero.titulo;
    }
    
    // Exemplo: substituir botões
    const primaryBtn = document.querySelector('.hero-btn-primary');
    if (primaryBtn) {
      primaryBtn.textContent = texts.hero.textoBotaoPrincipal;
    }
  }, [texts]);
  
  return <InicioDesktop />;
}
```

## Boas Práticas

### ✅ Faça

- **Use o hook `useSiteTexts()`** em todos os componentes que precisam de texto editável
- **Teste após editar** para garantir que os textos aparecem corretamente
- **Mantenha fallbacks** para caso os textos não carreguem
- **Use React.memo** se o componente renderiza muitas vezes

```typescript
import { memo } from 'react';
import { useSiteTexts } from '../config/siteTexts';

export const MeuComponente = memo(() => {
  const texts = useSiteTexts();
  // ...
});
```

### ❌ Evite

- **Não hardcode textos** diretamente nos componentes
- **Não use textos diferentes** do que está no sistema de configuração
- **Não modifique** a estrutura do objeto `SiteTexts` sem atualizar o editor

## Performance

O sistema usa `localStorage` para cache, então os textos são carregados rapidamente. Para otimizar ainda mais:

```typescript
// Em vez de chamar useSiteTexts() em cada componente,
// você pode passá-lo como prop de um componente pai

export function App() {
  const texts = useSiteTexts();
  
  return (
    <>
      <Navbar texts={texts.navbar} />
      <HeroSection texts={texts.hero} />
      <Footer texts={texts.footer} />
    </>
  );
}

// E nos componentes filhos:
interface NavbarProps {
  texts: SiteTexts['navbar'];
}

export function Navbar({ texts }: NavbarProps) {
  return (
    <nav>
      <div className="logo">{texts.logoText}</div>
      {/* ... */}
    </nav>
  );
}
```

## Atualização em Tempo Real

Se você quiser que os textos sejam atualizados em tempo real sem recarregar a página, você pode implementar um listener:

```typescript
import { useEffect, useState } from 'react';
import { useSiteTexts, loadTextsFromLocalStorage } from '../config/siteTexts';

export function useLiveTexts() {
  const [texts, setTexts] = useState(useSiteTexts());
  
  useEffect(() => {
    const handleStorageChange = () => {
      const newTexts = loadTextsFromLocalStorage();
      if (newTexts) {
        setTexts(newTexts);
      }
    };
    
    // Escutar mudanças no localStorage
    window.addEventListener('storage', handleStorageChange);
    
    // Também pode criar um intervalo para verificar mudanças
    const interval = setInterval(handleStorageChange, 5000);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);
  
  return texts;
}
```

## Suporte a Múltiplos Idiomas (Futuro)

Se você quiser adicionar suporte a múltiplos idiomas no futuro, a estrutura já está preparada:

```typescript
// No arquivo siteTexts.ts, você poderia adicionar:
export const siteTexts = {
  pt: defaultSiteTexts,
  en: {
    navbar: {
      logoText: "Design School",
      menuItems: {
        inicio: "Home",
        // ...
      }
    }
    // ...
  }
};

// E no hook:
export function useSiteTexts(lang: 'pt' | 'en' = 'pt') {
  // ...
  return siteTexts[lang];
}
```

---

**Dúvidas?** Consulte o arquivo `/INSTRUCOES_EDITOR_TEXTOS.md` para mais informações sobre o editor administrativo.
