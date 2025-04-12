
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
      {/* Content with z-index to stay above the background elements */}
      <div className="relative z-10">
        <HeroCarousel />
        <div className="bg-gradient-to-b from-white via-gray-50 to-white">
          <FeaturedProducts />
        </div>
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
