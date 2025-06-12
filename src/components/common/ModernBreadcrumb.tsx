
import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const ModernBreadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNames: { [key: string]: string } = {
    'about': 'About Us',
    'products': 'Products',
    'contact': 'Contact',
    'gas-stoves': 'Gas Stoves',
    'electric-kettles': 'Electric Kettles'
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="flex items-center text-brand-green hover:text-brand-gold transition-colors duration-300 group"
            >
              <Home className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform duration-300" />
              Home
            </Link>
          </li>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbNames[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);

            return (
              <li key={pathname} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-gray-700 font-medium">{displayName}</span>
                ) : (
                  <Link 
                    to={routeTo} 
                    className="text-brand-green hover:text-brand-gold transition-colors duration-300 hover:underline"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default ModernBreadcrumb;
