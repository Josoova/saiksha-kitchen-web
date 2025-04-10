
import HeroCarousel from '@/components/home/HeroCarousel';
import OurStory from '@/components/home/OurStory';
import VisionMission from '@/components/home/VisionMission';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import OEMClients from '@/components/home/OEMClients';
import FAQ from '@/components/home/FAQ';

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroCarousel />
      <OurStory />
      <VisionMission />
      <FeaturedProducts />
      <WhyChooseUs />
      <OEMClients />
      <FAQ />
    </div>
  );
};

export default Home;
