
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-gold">Saiksha Kitchen Appliances Pvt Ltd</h3>
            <p className="mb-4">Bringing quality kitchen appliances to enhance your cooking experience with our premium gas stoves and kettles.</p>
            <img src="/lovable-uploads/44e90ac6-77dd-4cb4-b53b-64c6ce6eea43.png" alt="Saiksha Kitchen Appliances Logo" className="h-16 mb-4" />
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-gold transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-gold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-brand-gold shrink-0 mt-0.5" />
                <span>123 Kitchen Street, Appliance District, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-brand-gold" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-brand-gold" />
                <span>info@saikshakitchen.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Saiksha Kitchen Appliances Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
