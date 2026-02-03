import { BlogPost as BlogPostType } from '../data/blogPosts';
import Navbar from './Navbar';
import svgPaths from "../imports/svg-tz52ah6nby";
import svgPathsContent from "../imports/svg-ry4587pdgo";
import imgCompanyLogo from "figma:asset/64b1c89f3bd3a9933dc022439b9a52a682a06397.png";
import { blogPosts } from '../data/blogPosts';
import { useState, useEffect } from 'react';
import BlogPostMobile from './BlogPostMobile';

interface BlogPostProps {
  post: BlogPostType;
  navigateTo: (page: string, id?: number) => void;
}

// ========== HEADER COMPONENTS ==========
function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron_right">
          <path d={svgPaths.p1cff2380} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.666667" />
        </g>
      </svg>
    </div>
  );
}

function Breadcrumb({ category, navigateTo }: { category: string; navigateTo: (page: string) => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black text-center cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={() => navigateTo('blog')}
      >
        Blog
      </p>
      <ChevronRight />
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
        {category}
      </p>
    </div>
  );
}

function AuthorInfo({ author, date, readTime }: { author: string; date: string; readTime: string }) {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] relative shrink-0 text-black w-full" data-name="Content">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 text-[18px]">
        <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
          Por
        </p>
        <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
          {author}
        </p>
      </div>
      <div className="content-stretch flex font-['DM_Sans:Regular',sans-serif] font-normal gap-[8px] items-center relative shrink-0">
        <p className="css-ew64yg relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          {date}
        </p>
        <p className="css-ew64yg relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          •
        </p>
        <p className="css-ew64yg relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          {readTime}
        </p>
      </div>
    </div>
  );
}

function ShareButtons() {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = document.title;
    
    switch(platform) {
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
    }
  };

  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Share Buttons">
      <div 
        className="bg-[#fefbf3] content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[64px] shrink-0 cursor-pointer hover:bg-[#f5f0e3] transition-colors" 
        onClick={() => handleShare('copy')}
      >
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPathsContent.pc015980} fill="var(--fill-0, black)" />
          </svg>
        </div>
      </div>
      <div 
        className="bg-[#fefbf3] content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[64px] shrink-0 cursor-pointer hover:bg-[#f5f0e3] transition-colors" 
        onClick={() => handleShare('linkedin')}
      >
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d={svgPathsContent.p2b170900} fill="var(--fill-0, black)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div 
        className="bg-[#fefbf3] content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[64px] shrink-0 cursor-pointer hover:bg-[#f5f0e3] transition-colors" 
        onClick={() => handleShare('twitter')}
      >
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPathsContent.p214d7500} fill="var(--fill-0, black)" />
          </svg>
        </div>
      </div>
      <div 
        className="bg-[#fefbf3] content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[64px] shrink-0 cursor-pointer hover:bg-[#f5f0e3] transition-colors" 
        onClick={() => handleShare('facebook')}
      >
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPathsContent.p2ed8fe00} fill="var(--fill-0, black)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BlogPostHeader({ post, navigateTo }: { post: BlogPostType; navigateTo: (page: string) => void }) {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
      <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full">
        <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 w-[420px]">
            {/* Top Content */}
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
              <Breadcrumb category={post.category} navigateTo={navigateTo} />
              <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-full not-italic relative shrink-0 text-[60px] text-black tracking-[0.6px] w-[min-content]">
                {post.title}
              </p>
            </div>
            {/* Bottom Content */}
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
              <AuthorInfo author={post.author.name} date={post.date} readTime={post.readTime} />
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
                <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Compartilhe este post
                </p>
                <ShareButtons />
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[450px] min-h-px min-w-px relative rounded-[16px]">
            <img alt={post.title} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={post.imageDetail} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ========== CONTENT COMPONENTS ==========
function Tag({ text }: { text: string }) {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text}
      </p>
    </div>
  );
}

function RichTextContent({ post }: { post: BlogPostType }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      {/* Introduction */}
      <div className="content-stretch flex flex-col items-start py-[24px] relative shrink-0 w-full">
        <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[48px] text-black tracking-[0.48px] w-full">
          Introduction
        </p>
      </div>
      
      {post.content.introduction.map((paragraph, index) => (
        <div key={`intro-${index}`} className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full">
          <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            {paragraph}
          </p>
        </div>
      ))}

      {/* Image with caption */}
      {post.content.imageCaption && (
        <div className="content-stretch flex flex-col gap-[8px] items-start py-[48px] relative shrink-0 w-full">
          <div className="aspect-[768/400] relative rounded-[16px] shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={post.image} />
          </div>
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
            <div className="bg-[rgba(0,0,0,0.15)] self-stretch shrink-0 w-[2px]" />
            <p className="css-4hzbpn flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] min-h-px min-w-px relative text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
              {post.content.imageCaption}
            </p>
          </div>
        </div>
      )}

      {/* Quote */}
      {post.content.quote && (
        <div className="content-stretch flex items-start overflow-clip py-[36px] relative shrink-0 w-full">
          <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[20px] items-start pr-[20px] relative w-full">
                <div className="bg-[rgba(0,0,0,0.15)] self-stretch shrink-0 w-[2px]" />
                <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Italic',sans-serif] font-normal italic leading-[28px] min-h-px min-w-px relative text-[20px] text-black">
                  "{post.content.quote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {post.content.mainContent.map((paragraph, index) => (
        <div key={`main-${index}`} className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full">
          <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            {paragraph}
          </p>
        </div>
      ))}

      {/* Conclusion */}
      <div className="content-stretch flex flex-col items-start pb-[20px] pt-[24px] relative shrink-0 w-full">
        <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[40px] text-black tracking-[0.4px] w-full">
          Conclusion
        </p>
      </div>
      
      {post.content.conclusion.map((paragraph, index) => (
        <div key={`conclusion-${index}`} className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full">
          <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            {paragraph}
          </p>
        </div>
      ))}
    </div>
  );
}

function AuthorCard({ author }: { author: BlogPostType['author'] }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[56px]">
        <img alt={author.name} className="block max-w-none size-full rounded-full object-cover" height="56" src={author.avatar} width="56" />
      </div>
      <div className="content-stretch flex flex-col items-start leading-[1.6] relative shrink-0 text-[18px] text-black">
        <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          {author.name}
        </p>
        <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          {author.role}
        </p>
      </div>
    </div>
  );
}

function BlogPostContent({ post }: { post: BlogPostType }) {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
      <div className="content-stretch flex flex-col items-center max-w-[1280px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[768px] relative shrink-0 w-full">
          {/* Main Content */}
          <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-[768px]">
            <RichTextContent post={post} />
            
            {/* Share and Tags */}
            <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
                <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] min-w-full relative shrink-0 text-[20px] text-black w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Compartilhe este post
                </p>
                <ShareButtons />
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                {post.tags.map((tag, index) => (
                  <Tag key={index} text={tag} />
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 768 1">
                <path d="M0 0.5H768" stroke="black" strokeOpacity="0.15" />
              </svg>
            </div>
          </div>

          {/* Author */}
          <AuthorCard author={post.author} />
        </div>
      </div>
    </div>
  );
}

// ========== FOOTER ==========
function Footer({ navigateTo }: { navigateTo: (page: string) => void }) {
  const handleNavigate = (page: string) => {
    navigateTo(page);
  };

  return (
    <div className="bg-[#000000] relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[80px] relative w-full">
          <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">
                <div 
                  className="h-[44px] relative shrink-0 w-[84px] cursor-pointer" 
                  onClick={() => handleNavigate('inicio')}
                >
                  <img alt="Alma Visual" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogo} />
                </div>
                <div className="content-start flex flex-wrap font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[32px] items-start leading-[1.6] max-w-[480px] relative shrink-0 text-[16px] text-white w-full">
                  <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('inicio')}>Início</p>
                  <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('ocurso')}>O Curso</p>
                  <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('trabalhos')}>Trabalhos</p>
                  <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('contato')}>Contato</p>
                  <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('blog')}>Blog</p>
                  <p className="css-ew64yg relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'opsz' 14" }} onClick={() => handleNavigate('joinin')}>Faça Parte</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
              <div className="h-0 relative shrink-0 w-full">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
                  <line stroke="white" strokeOpacity="0.2" x2="1280" y1="0.5" y2="0.5" />
                </svg>
              </div>
              <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[16px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
                © 2024 Alma Visual. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========== RELATED POSTS SECTION ==========
function RelatedPostCard({ relatedPost, onClick }: { relatedPost: BlogPostType; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex-shrink-0 w-[380px] cursor-pointer group snap-start"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full h-[220px] mb-4 rounded-[12px] overflow-hidden">
        <img 
          src={relatedPost.image} 
          alt={relatedPost.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        {/* Category and Read Time */}
        <div className="flex items-center gap-2 text-[13px]">
          <span className="font-['DM_Sans:Medium',sans-serif] font-medium text-black/50 tracking-[0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            {relatedPost.category}
          </span>
          <span className="text-black/30">·</span>
          <span className="font-['DM_Sans:Regular',sans-serif] font-normal text-black/50" style={{ fontVariationSettings: "'opsz' 14" }}>
            {relatedPost.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-['Inter:Medium',sans-serif] font-medium text-[24px] leading-[1.3] text-black tracking-[-0.2px] transition-opacity duration-200 group-hover:opacity-70">
          {relatedPost.title}
        </h3>

        {/* Excerpt */}
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal text-[15px] leading-[1.6] text-black/60 line-clamp-2" style={{ fontVariationSettings: "'opsz' 14" }}>
          {relatedPost.excerpt}
        </p>

        {/* Read More Link */}
        <div className="flex items-center gap-2 mt-2">
          <span className="font-['DM_Sans:Regular',sans-serif] font-normal text-[14px] text-black/70 group-hover:text-black transition-colors" style={{ fontVariationSettings: "'opsz' 14" }}>
            Ler artigo
          </span>
          <div className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/60 group-hover:text-black transition-colors" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function RelatedPosts({ currentPostId, navigateTo }: { currentPostId: number; navigateTo: (page: string, id?: number) => void }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useState<HTMLDivElement | null>(null)[0];
  
  // Get related posts (exclude current post)
  const relatedPosts = blogPosts.filter(post => post.id !== currentPostId).slice(0, 6);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('related-posts-scroll');
    if (container) {
      const scrollAmount = 420; // card width + gap
      const newPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = document.getElementById('related-posts-scroll');
    if (container) {
      const handleScrollUpdate = () => {
        setScrollPosition(container.scrollLeft);
      };
      container.addEventListener('scroll', handleScrollUpdate);
      return () => container.removeEventListener('scroll', handleScrollUpdate);
    }
  }, []);

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = true; // Simplified for now

  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-2">
            <p className="font-['DM_Sans:Regular',sans-serif] font-normal text-[14px] text-black/40 uppercase tracking-[2px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              REFLEXÕES
            </p>
            <h2 className="font-['Inter:Medium',sans-serif] font-medium text-[48px] leading-[1.1] text-black tracking-[-0.5px]">
              Continue explorando
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border transition-all duration-300 flex items-center justify-center
                ${canScrollLeft 
                  ? 'border-black/20 hover:border-black/40 hover:bg-black/5 cursor-pointer' 
                  : 'border-black/10 opacity-40 cursor-not-allowed'}`}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 15L7 10L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/70" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border transition-all duration-300 flex items-center justify-center
                ${canScrollRight 
                  ? 'border-black/20 hover:border-black/40 hover:bg-black/5 cursor-pointer' 
                  : 'border-black/10 opacity-40 cursor-not-allowed'}`}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 15L13 10L8 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/70" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Cards Container */}
        <div className="relative w-full">
          <div 
            id="related-posts-scroll"
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {relatedPosts.map((relatedPost) => (
              <RelatedPostCard
                key={relatedPost.id}
                relatedPost={relatedPost}
                onClick={() => navigateTo('blogpost', relatedPost.id)}
              />
            ))}
          </div>
          
          {/* Fade Overlay Right */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Custom Scrollbar Hide CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

// ========== MAIN COMPONENT ==========
export default function BlogPost({ post, navigateTo }: BlogPostProps) {
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
    return <BlogPostMobile post={post} navigateTo={navigateTo} />;
  }

  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Navbar currentPage="blog" navigateTo={navigateTo} />
      <BlogPostHeader post={post} navigateTo={navigateTo} />
      <BlogPostContent post={post} />
      <RelatedPosts currentPostId={post.id} navigateTo={navigateTo} />
      <Footer navigateTo={navigateTo} />
    </div>
  );
}