
import HeroCarousel from '@/components/home/HeroCarousel';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import OEMClients from '@/components/home/OEMClients';
import FAQ from '@/components/home/FAQ';
import FactoryOverview from '@/components/home/FactoryOverview';
import ZigzagFeature from '@/components/home/ZigzagFeature';

const Home = () => {
  return (
    <div className="flex flex-col relative">
      {/* Enhanced background decoration elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {/* Blob animations */}
        <div className="absolute top-[30%] -right-40 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl blob-animation"></div>
        <div className="absolute top-[70%] -left-40 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl blob-animation" style={{animationDelay: "3s"}}></div>
        <div className="absolute top-[40%] left-1/2 w-64 h-64 bg-brand-gold/5 rounded-full blur-2xl blob-animation" style={{animationDelay: "6s"}}></div>
        
        {/* Wave pattern at bottom of page */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-48 opacity-10 wave-animation" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%2312582A'%3E%3C/path%3E%3C/svg%3E\")",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            transform: 'rotate(180deg)',
          }}
        ></div>
      </div>

      {/* Content with z-index to stay above the background elements */}
      <div className="relative z-10">
        <HeroCarousel />
        <FeaturedProducts />
        <FactoryOverview />
        <ZigzagFeature />
        <div className="bg-pattern-dot py-1"> {/* Separator with pattern */}
          <WhyChooseUs />
        </div>
        <OEMClients />
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
