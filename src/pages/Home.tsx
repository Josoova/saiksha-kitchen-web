
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Award, BarChart, Users, CheckCircle2, PlusCircle, MinusCircle, Star, ShieldCheck, Clock, Zap, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlay) {
        const nextButton = document.querySelector('.client-carousel .embla__button--next') as HTMLButtonElement;
        if (nextButton) nextButton.click();
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <div className="flex flex-col">
      {/* Hero Section with Carousel */}
      <section className="relative bg-gradient-to-r from-brand-green to-green-900 text-white py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <Carousel 
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <CarouselContent>
              {/* Slide 1 */}
              <CarouselItem className="w-full">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-enter">Premium Kitchen Appliances for Modern Homes</h1>
                    <p className="text-lg mb-6">
                      Discover our range of high-quality gas stoves and kettles designed for efficiency, durability, and style.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button asChild className="bg-brand-gold hover:bg-amber-600 text-white animate-scale-in">
                        <Link to="/products">Browse Products</Link>
                      </Button>
                      <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-brand-green animate-scale-in" style={{animationDelay: "150ms"}}>
                        <Link to="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="md:w-1/2 hover-scale">
                    <img 
                      src="public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png" 
                      alt="Modern Kitchen with Gas Stove" 
                      className="rounded-lg shadow-xl transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                </div>
              </CarouselItem>
              
              {/* Slide 2 */}
              <CarouselItem className="w-full">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-enter">India's Leading Kitchen Appliance Manufacturer</h1>
                    <p className="text-lg mb-6">
                      With state-of-the-art manufacturing facilities and a commitment to quality, we deliver excellence in every product.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button asChild className="bg-brand-gold hover:bg-amber-600 text-white animate-scale-in">
                        <Link to="/about">Our Story</Link>
                      </Button>
                      <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-brand-green animate-scale-in" style={{animationDelay: "150ms"}}>
                        <Link to="/products">View Products</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="md:w-1/2 hover-scale">
                    <img 
                      src="public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png" 
                      alt="Electric Kettle" 
                      className="rounded-lg shadow-xl transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
              <CarouselPrevious className="relative translate-y-0 left-auto" />
              <CarouselNext className="relative translate-y-0 right-auto" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50 animate-fade-in" style={{animationDelay: "300ms"}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-brand-green mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img 
                src="public/lovable-uploads/2e31a859-9ba3-46b9-8eae-8b9580dfe7bb.png" 
                alt="Our Factory" 
                className="rounded-lg shadow-lg hover:shadow-xl transition-all"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Founded in 2022, Saiksha Kitchen Appliances Private Limited, has swiftly emerged as a trusted name in the manufacturing of high-quality kitchen and home appliances. The company is headquartered in Chennai, Tamil Nadu, and prides itself on combining cutting-edge technology with robust quality standards to meet the diverse needs of modern households.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                What started as a small workshop has now grown into a state-of-the-art manufacturing facility that produces tens of thousands of gas stoves and kettles each month, serving customers across the country.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                Our commitment to quality and innovation has made us a trusted name in Indian kitchens, and we continue to expand our product range to meet the evolving needs of modern homes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission Section */}
      <section className="py-16 animate-fade-in bg-gradient-to-r from-green-50 to-green-100" style={{animationDelay: "450ms"}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Our Vision & Mission</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl p-2">
              <div className="bg-gradient-to-r from-brand-green to-green-700 text-white p-6 rounded-t-lg">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <Star className="mr-2 h-6 w-6 text-brand-gold" /> Our Vision
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  To be the leading provider of kitchen appliances, committed to superior design, technology, and sustainability. To bring innovation and quality to every kitchen and home, empowering customers with reliable and stylish appliances. To cultivate a group of employees who accept the work philosophy, have family support, and are proud of the company.
                </p>
              </div>
            </div>
            
            {/* Mission Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl p-2">
              <div className="bg-gradient-to-r from-brand-gold to-amber-600 text-white p-6 rounded-t-lg">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <CheckCircle2 className="mr-2 h-6 w-6 text-white" /> Our Mission
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  To deliver innovative, reliable, and energy-efficient kitchen appliances that meet the evolving needs of consumers worldwide. To prosper long into the future, while maintaining top quality and minimizing costs. The company also believes in caring for the community and giving back to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50 animate-fade-in" style={{animationDelay: "600ms"}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Our Featured Products</h2>
            <p className="text-gray-600">Designed for efficiency and built to last</p>
            <div className="w-20 h-1 bg-brand-green mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gas Stove Card */}
            <Card className="overflow-hidden shadow-lg transition-all hover:scale-105 duration-300">
              <img 
                src="public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png" 
                alt="Premium Gas Stove" 
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Premium Gas Stoves</h3>
                <p className="text-gray-600 mb-4">
                  Our range of gas stoves combines elegant design with powerful performance to transform your cooking experience.
                </p>
                <Button asChild className="bg-brand-green hover:bg-green-800">
                  <Link to="/products" className="flex items-center">
                    Explore Range <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Kettle Card */}
            <Card className="overflow-hidden shadow-lg transition-all hover:scale-105 duration-300">
              <img 
                src="public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png" 
                alt="Electric Kettle" 
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Modern Kettles</h3>
                <p className="text-gray-600 mb-4">
                  From traditional to electric, our kettles offer quick heating and elegant designs to enhance your kitchen.
                </p>
                <Button asChild className="bg-brand-green hover:bg-green-800">
                  <Link to="/products" className="flex items-center">
                    Discover Kettles <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 animate-fade-in" style={{animationDelay: "750ms"}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Why Choose Saiksha Kitchen Appliances</h2>
            <p className="text-gray-600">We pride ourselves on quality, innovation, and customer satisfaction</p>
            <div className="w-20 h-1 bg-brand-gold mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 transition-all hover:-translate-y-2 duration-300">
              <div className="bg-brand-gold h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                All our products are made using high-grade materials ensuring longevity and performance.
              </p>
            </div>
            
            <div className="text-center p-6 transition-all hover:-translate-y-2 duration-300" style={{transitionDelay: "150ms"}}>
              <div className="bg-brand-green h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <BarChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Energy Efficient</h3>
              <p className="text-gray-600">
                Designed to provide maximum performance while using minimum energy resources.
              </p>
            </div>
            
            <div className="text-center p-6 transition-all hover:-translate-y-2 duration-300" style={{transitionDelay: "300ms"}}>
              <div className="bg-brand-gold h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Our dedicated team ensures prompt service and support whenever you need assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Clients Section */}
      <section className="py-16 bg-gray-50 animate-fade-in" style={{animationDelay: "900ms"}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Our OEM Clients</h2>
            <p className="text-gray-600">Trusted manufacturing partners in the kitchen appliance industry</p>
            <div className="w-20 h-1 bg-brand-green mx-auto mt-4"></div>
          </div>
          
          <div className="mt-8 relative client-carousel">
            <Carousel 
              opts={{
                loop: true,
                align: "start",
              }}
              className="w-full"
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
            >
              <CarouselContent>
                {/* Client Logos */}
                {[
                  { name: "Sowbaghya", logo: "public/lovable-uploads/9234820b-7143-420b-8fee-f1729c5d6646.png" },
                  { name: "Premier", logo: "public/lovable-uploads/365208f2-ccbc-4d31-9233-da5887f389b8.png" },
                  { name: "Thangam", logo: "public/lovable-uploads/500b1e70-f84a-4ac7-b409-5df61ce5823d.png" },
                  { name: "Butterfly", logo: "public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png" },
                  { name: "Prestige", logo: "public/lovable-uploads/2e31a859-9ba3-46b9-8eae-8b9580dfe7bb.png" }
                ].map((client, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                    <div className="p-1">
                      <div className="flex flex-col justify-center items-center p-6 h-32 bg-white rounded-lg shadow hover:shadow-lg transition-all hover:scale-105 duration-300">
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="h-full object-contain"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* FAQ Section with Green and Gold Colors */}
      <section className="py-16 animate-fade-in" style={{animationDelay: "1050ms"}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about our products</p>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-green to-brand-gold mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border border-brand-green rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-4 py-3 bg-gradient-to-r from-brand-green/10 to-brand-green/5 hover:bg-brand-green/20 flex items-center text-brand-green">
                  <div className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-brand-gold" />
                    <span className="text-lg font-semibold">What makes Saiksha gas stoves different from others in the market?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 bg-white border-t border-brand-green/20">
                  <p className="text-gray-700 pl-7">
                    Saiksha gas stoves stand out due to their superior build quality with durable brass burners, efficient gas consumption, aesthetic design with toughened glass tops, and robust quality control standards. Our stoves are designed for both performance and safety, making them an excellent choice for modern kitchens.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-brand-gold rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-4 py-3 bg-gradient-to-r from-brand-gold/10 to-brand-gold/5 hover:bg-brand-gold/20 flex items-center text-brand-gold">
                  <div className="flex items-center">
                    <ShieldCheck className="h-5 w-5 mr-2 text-brand-green" />
                    <span className="text-lg font-semibold">Are your products ISI certified?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 bg-white border-t border-brand-gold/20">
                  <p className="text-gray-700 pl-7">
                    Yes, all our gas stoves are ISI certified, which ensures they meet the stringent safety and quality standards set by the Bureau of Indian Standards. This certification is a testament to our commitment to manufacturing high-quality and safe kitchen appliances.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-brand-green rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-4 py-3 bg-gradient-to-r from-brand-green/10 to-brand-green/5 hover:bg-brand-green/20 flex items-center text-brand-green">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-brand-gold" />
                    <span className="text-lg font-semibold">What warranty do you offer on your products?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 bg-white border-t border-brand-green/20">
                  <p className="text-gray-700 pl-7">
                    We offer a standard 1-year warranty on all our products against manufacturing defects. Premium models come with extended warranties of up to 3 years. Our warranty ensures that you get prompt service and support if any issues arise during the warranty period.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-brand-gold rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-4 py-3 bg-gradient-to-r from-brand-gold/10 to-brand-gold/5 hover:bg-brand-gold/20 flex items-center text-brand-gold">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-brand-green" />
                    <span className="text-lg font-semibold">Do you offer bulk orders for businesses?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 bg-white border-t border-brand-gold/20">
                  <p className="text-gray-700 pl-7">
                    Yes, we cater to bulk orders for businesses, hotels, institutions, and corporate gifting. We offer competitive pricing for bulk orders and can customize products according to specific requirements. Please contact our sales team for more information on bulk orders and corporate partnerships.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-brand-green rounded-lg overflow-hidden">
                <AccordionTrigger className="px-4 py-3 bg-gradient-to-r from-brand-green/10 to-brand-green/5 hover:bg-brand-green/20 flex items-center text-brand-green">
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-brand-gold" />
                    <span className="text-lg font-semibold">How can I get my product serviced?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 bg-white border-t border-brand-green/20">
                  <p className="text-gray-700 pl-7">
                    For product service, you can reach out to our customer support team through phone, email, or by visiting our service center. We have a network of service centers across the country to ensure quick and efficient service. Our trained technicians will address your concerns promptly to minimize any inconvenience.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
