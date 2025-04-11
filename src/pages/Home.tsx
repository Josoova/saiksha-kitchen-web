
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
      {/* Background decoration elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[30%] -right-40 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[70%] -left-40 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] left-1/2 w-64 h-64 bg-brand-gold/5 rounded-full blur-2xl"></div>
      </div>

      {/* Content with z-index to stay above the background elements */}
      <div className="relative z-10">
        <HeroCarousel />
        <FeaturedProducts />
        <FactoryOverview />
        <ZigzagFeature />
        <WhyChooseUs />
        <OEMClients />
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
