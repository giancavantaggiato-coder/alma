import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  pageKey: string;
  direction?: 'forward' | 'backward';
  animationType?: 'default' | 'special' | 'dramatic';
}

export default function PageTransition({ 
  children, 
  pageKey, 
  direction = 'forward',
  animationType = 'default'
}: PageTransitionProps) {
  // Renderização direta sem animações
  return (
    <div key={pageKey} style={{ width: '100%', minHeight: '100vh' }}>
      {children}
    </div>
  );
}