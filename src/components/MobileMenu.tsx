import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import imgCompanyLogo from "../imports/figma:asset/3530cd741ed4641cce367422608ca56d8cecd116.png";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { label: 'Quem somos', page: 'ocurso' },
    { label: 'Trabalhos', page: 'trabalhos' },
    { label: 'Contato', page: 'contato' },
    { label: 'Blog', page: 'blog' },
    { label: 'FAQ', page: 'faq' },
  ];

  const handleNavigation = (page: string) => {
    if ((window as any).navigateTo) {
      (window as any).navigateTo(page);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black z-50 flex flex-col"
        >
          {/* Header com Logo e Botão Fechar */}
          <div className="flex items-center justify-between pl-16 pr-3 py-4">
            <div className="h-11 w-21">
              <img 
                alt="Alma Ateliê" 
                className="h-full w-full object-contain brightness-0 invert" 
                src={imgCompanyLogo} 
              />
            </div>
            
            <button
              onClick={onClose}
              className="size-12 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="size-6 text-white" />
            </button>
          </div>

          {/* Menu Items */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="flex-1 flex flex-col items-center justify-center gap-12 pb-20"
          >
            {menuItems.map((item, index) => (
              <motion.button
                key={item.page}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + index * 0.05, duration: 0.4 }}
                onClick={() => handleNavigation(item.page)}
                className="font-['Inter:Medium',sans-serif] font-medium text-5xl text-white tracking-[0.48px] hover:text-[#FEFBF3] transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}