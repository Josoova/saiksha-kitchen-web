
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ModernBreadcrumb from '@/components/common/ModernBreadcrumb';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ModernBreadcrumb />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
