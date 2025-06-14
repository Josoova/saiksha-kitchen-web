
import HeroCarousel from '@/components/home/HeroCarousel';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import OEMClients from '@/components/home/OEMClients';
import FAQ from '@/components/home/FAQ';
import FactoryOverview from '@/components/home/FactoryOverview';
import ZigzagFeature from '@/components/home/ZigzagFeature';
import ScrollToTop from '@/components/home/ScrollToTop';
import FloatingElements from '@/components/home/FloatingElements';
import { Award, Shield, Factory, Users, Star, Handshake } from 'lucide-react'; 

const Home = () => {
  return (
    <div className="flex flex-col relative">
      {/* Floating decorative elements */}
      <FloatingElements />
      
      {/* Content with z-index to stay above the background elements */}
      <div className="relative z-10">
        <HeroCarousel />
        
        {/* Enhanced OEM Partner Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Background with multiple gradients and patterns */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-green-50/30"></div>
          <div className="absolute inset-0 bg-pattern-dot opacity-5"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-brand-green/10 to-brand-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-l from-brand-gold/10 to-brand-green/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-green/5 rounded-full blur-2xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-green/10 to-brand-gold/10 rounded-full border border-brand-green/20 mb-6">
                <Factory className="h-5 w-5 text-brand-green" />
                <span className="font-semibold text-brand-green text-lg">Premium Manufacturing Partner</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-green via-green-600 to-brand-gold bg-clip-text text-transparent leading-tight">
                Trusted OEM Partner
              </h2>
              <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-brand-gold">
                for India's Leading Brands
              </h3>
              
              <div className="w-32 h-1 bg-gradient-to-r from-brand-green to-brand-gold mx-auto mb-8 rounded-full"></div>
              
              <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">
                Welcome to Saiksha Kitchen Appliances Pvt Ltd
              </h4>
            </div>
            
            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {/* Main Content Card */}
                <div className="lg:col-span-2">
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50 relative overflow-hidden">
                    {/* Card decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-gold/10 to-transparent rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-brand-green/10 to-transparent rounded-tr-full"></div>
                    
                    <div className="relative z-10">
                      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                        At Saiksha Kitchen Appliances Pvt Ltd, we are proud to be a <span className="font-bold text-brand-green">trusted OEM partner</span> for leading brands in India's home and kitchen appliance industry. With a focus on quality, innovation, and reliability, we specialize in the manufacturing of <span className="font-semibold text-brand-gold">electric kettles, multi kettles, and gas stoves</span>.
                      </p>
                      
                      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                        Our commitment goes beyond customer satisfaction — <span className="font-bold text-brand-green">quality is our core principle</span>, and we ensure every product meets the highest standards of safety and performance. We also offer <span className="font-semibold text-brand-gold">customized product development</span>, tailored to your brand's specific needs.
                      </p>
                      
                      <div className="bg-gradient-to-r from-brand-green/5 to-brand-gold/5 rounded-2xl p-6 border-l-4 border-brand-green">
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                          Backed by advanced infrastructure and a skilled team, we have a manufacturing capacity of up to <span className="font-bold text-2xl text-brand-green">2,00,000 units per month</span>, enabling us to meet large-scale demands without compromising on quality or delivery timelines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Stats and Features Sidebar */}
                <div className="space-y-6">
                  {/* Key Stats */}
                  <div className="bg-gradient-to-br from-brand-green to-green-700 rounded-3xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <div className="relative z-10">
                      <Users className="h-12 w-12 mb-4 text-brand-gold" />
                      <h3 className="text-2xl font-bold mb-2">2,00,000+</h3>
                      <p className="text-green-100">Units Monthly Capacity</p>
                    </div>
                  </div>
                  
                  {/* Quality Assurance */}
                  <div className="bg-gradient-to-br from-brand-gold to-amber-600 rounded-3xl p-8 text-white relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                    <div className="relative z-10">
                      <Star className="h-12 w-12 mb-4 text-white" />
                      <h3 className="text-2xl font-bold mb-2">100%</h3>
                      <p className="text-amber-100">Quality Tested Products</p>
                    </div>
                  </div>
                  
                  {/* OEM Partners */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl">
                    <Handshake className="h-12 w-12 mb-4 text-brand-green" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">10+</h3>
                    <p className="text-gray-600">OEM Partners</p>
                  </div>
                </div>
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
