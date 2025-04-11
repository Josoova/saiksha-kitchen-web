
import HeroCarousel from '@/components/home/HeroCarousel';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import OEMClients from '@/components/home/OEMClients';
import FAQ from '@/components/home/FAQ';
import FactoryOverview from '@/components/home/FactoryOverview';
import ZigzagFeature from '@/components/home/ZigzagFeature';

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroCarousel />
      <FeaturedProducts />
      <FactoryOverview />
      <ZigzagFeature />
      <WhyChooseUs />
      <OEMClients />
      <FAQ />
    </div>
  );
};

export default Home;
