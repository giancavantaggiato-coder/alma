import { useState } from 'react';
import { BlogPost as BlogPostType } from '../data/blogPosts';
import BlogPostHeader3 from '../imports/BlogPostHeader3-244-1630';
import Content29 from '../imports/Content29-244-1658';
import imgCompanyLogo from "figma:asset/91c6f4bb39b820ba4c5b66890346b0f48d74a13f.png";
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

// Wrapper personalizado para o BlogPostHeader com dados do post
function BlogPostHeaderWrapper({ post, onBackClick }: { post: BlogPostType; onBackClick: () => void }) {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Confira: ${post.title}`;
    
    switch (platform) {
      case 'link':
        navigator.clipboard.writeText(url);
        toast.success('Link copiado!');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
    }
  };

  return (
    <BlogPostHeader3 
      post={post}
      onBackClick={onBackClick}
      onShare={handleShare}
    />
  );
}

// Wrapper personalizado para o Content com dados do post
function ContentWrapper({ post }: { post: BlogPostType }) {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Confira: ${post.title}`;
    
    switch (platform) {
      case 'link':
        navigator.clipboard.writeText(url);
        toast.success('Link copiado!');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
    }
  };

  return <Content29 post={post} onShare={handleShare} />;
}

interface BlogPostMobileProps {
  post: BlogPostType;
  navigateTo: (page: string, id?: number) => void;
}

export default function BlogPostMobile({ post, navigateTo }: BlogPostMobileProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBackClick = () => {
    navigateTo('blog');
  };

  const handleNavigate = (page: string) => {
    navigateTo(page);
  };

  return (
    <>
      <div className="content-stretch flex flex-col items-start relative size-full bg-[#fefbf3]" data-name="Blog Post • Mobile">
        <Navbar onLogoClick={() => setIsMenuOpen(true)} />
        <BlogPostHeaderWrapper post={post} onBackClick={handleBackClick} />
        <ContentWrapper post={post} />
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </>
  );
}