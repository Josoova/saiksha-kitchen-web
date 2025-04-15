
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Shield, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-brand-gold">Saiksha Kitchen Appliances Pvt Ltd</h3>
            <p className="mb-4">Bringing quality kitchen appliances to enhance your cooking experience with our premium gas stoves and kettles.</p>
            <img src="/lovable-uploads/44e90ac6-77dd-4cb4-b53b-64c6ce6eea43.png" alt="Saiksha Kitchen Appliances Logo" className="h-16 mb-4" />
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
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
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-brand-gold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-brand-gold shrink-0 mt-0.5" />
                <span>No. 147, 2nd Floor, GN Chetty Road, T Nagar, Chennai - 600017</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-brand-gold" />
                <span>Sales: +91 8925873926</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-brand-gold" />
                <span>Support: +91 9629211841</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-brand-gold" />
                <span>info@ska.ltd</span>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-brand-gold">Certifications</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
                <Shield className="h-8 w-8 mr-3 text-white" />
                <div>
                  <p className="font-medium">ISO 9001 Certified</p>
                  <p className="text-sm text-gray-200">Quality Management System</p>
                </div>
              </div>
              <div className="flex items-center bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
                <Award className="h-8 w-8 mr-3 text-white" />
                <div>
                  <p className="font-medium">BIS Certified</p>
                  <p className="text-sm text-gray-200">Bureau of Indian Standards</p>
                </div>
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
