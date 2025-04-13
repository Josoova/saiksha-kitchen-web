
import HeroCarousel from '@/components/home/HeroCarousel';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import OEMClients from '@/components/home/OEMClients';
import FAQ from '@/components/home/FAQ';
import FactoryOverview from '@/components/home/FactoryOverview';
import ZigzagFeature from '@/components/home/ZigzagFeature';
import { Award, Shield } from 'lucide-react'; 

const Home = () => {
  return (
    <div className="flex flex-col relative">
      {/* Content with z-index to stay above the background elements */}
      <div className="relative z-10">
        <HeroCarousel />
        <div className="bg-gradient-to-b from-blue-50 via-white to-green-50">
          <FeaturedProducts />
        </div>
        <FactoryOverview />
        <div className="bg-gradient-to-r from-amber-100 to-orange-50">
          <ZigzagFeature />
        </div>
        <div className="py-10 bg-gradient-to-b from-white to-green-100">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-fade-in">
              {/* ISO Certification */}
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all hover:-translate-y-1">
                <Shield className="h-12 w-12 text-brand-green mb-3" />
                <h3 className="text-xl font-bold mb-2 text-brand-green">ISO 9001 Certified</h3>
                <p className="text-gray-600 text-center">Quality Management System</p>
              </div>
              
              {/* BIS Certification - Corrected from PIS */}
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all hover:-translate-y-1">
                <Award className="h-12 w-12 text-brand-gold mb-3" />
                <h3 className="text-xl font-bold mb-2 text-brand-gold">BIS Certified</h3>
                <p className="text-gray-600 text-center">Bureau of Indian Standards</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-purple-100 to-indigo-100"> 
          <WhyChooseUs />
        </div>
        <div className="bg-gradient-to-b from-rose-100 to-amber-50">
          <OEMClients />
        </div>
        <div className="bg-gradient-to-r from-cyan-100 to-blue-50">
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default Home;

