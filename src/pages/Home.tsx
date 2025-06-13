
import HeroCarousel from '@/components/home/HeroCarousel';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import OEMClients from '@/components/home/OEMClients';
import FAQ from '@/components/home/FAQ';
import FactoryOverview from '@/components/home/FactoryOverview';
import ZigzagFeature from '@/components/home/ZigzagFeature';
import ScrollToTop from '@/components/home/ScrollToTop';
import FloatingElements from '@/components/home/FloatingElements';
import { Award, Shield } from 'lucide-react'; 

const Home = () => {
  return (
    <div className="flex flex-col relative">
      {/* Floating decorative elements */}
      <FloatingElements />
      
      {/* Content with z-index to stay above the background elements */}
      <div className="relative z-10">
        <HeroCarousel />
        
        {/* New OEM Partner Section */}
        <section className="py-20 bg-gradient-to-r from-brand-green/5 to-brand-gold/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-green">
                Trusted OEM Partner for India's Leading Brands
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-gold">
                Welcome to Saiksha Kitchen Appliances Pvt Ltd
              </h3>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-brand-green/10">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                  At Saiksha Kitchen Appliances Pvt Ltd, we are proud to be a trusted OEM partner for leading brands in India's home and kitchen appliance industry. With a focus on quality, innovation, and reliability, we specialize in the manufacturing of electric kettles, multi kettles, and gas stoves.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                  Our commitment goes beyond customer satisfaction — quality is our core principle, and we ensure every product meets the highest standards of safety and performance. We also offer customized product development, tailored to your brand's specific needs.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  Backed by advanced infrastructure and a skilled team, we have a manufacturing capacity of up to <span className="font-bold text-brand-green">2,00,000 units per month</span>, enabling us to meet large-scale demands without compromising on quality or delivery timelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-b from-blue-50 via-white to-green-50">
          <FeaturedProducts />
        </div>
        <FactoryOverview />
        <div className="bg-gradient-to-r from-amber-100 to-orange-50">
          <ZigzagFeature />
        </div>
        <div className="py-10 bg-gradient-to-b from-white to-green-100">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* ISO Certification */}
              <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
                <Shield className="h-12 w-12 text-brand-green mb-3" />
                <h3 className="text-xl font-bold mb-2 text-brand-green">ISO 9001 Certified</h3>
                <p className="text-gray-600 text-center">Quality Management System</p>
              </div>
              
              {/* BIS Certification */}
              <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
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
      
      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
