import { useState } from 'react';
import Contact14 from '../imports/Contact14';
import Header62 from '../imports/Header62';
import Cta1 from '../imports/Cta1-244-1007';
import Footer8 from '../imports/Footer8-244-1018';
import imgCompanyLogo from "figma:asset/91c6f4bb39b820ba4c5b66890346b0f48d74a13f.png";
import MobileMenu from './MobileMenu';
import { Toaster } from 'sonner@2.0.3';

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
    <div className="bg-[#fef8e8] content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Navbar / 7 /">
      <Content1 onLogoClick={onLogoClick} />
    </div>
  );
}

export default function ContatoMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="content-stretch flex flex-col items-start relative size-full bg-[#fefbf3]" data-name="Contato • Mobile">
        <Navbar onLogoClick={() => setIsMenuOpen(true)} />
        <Contact14 />
        <Header62 />
        <Cta1 />
        <Footer8 />
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </>
  );
}
