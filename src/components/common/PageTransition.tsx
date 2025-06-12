
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  delay?: number;
}

const PageTransition = ({ children, delay = 0 }: PageTransitionProps) => {
  return (
    <div 
      className="animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
