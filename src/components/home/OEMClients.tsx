
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Building, CheckCircle, Sparkles, TrendingUp } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const OEMClients = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  
  const plugin = Autoplay({ delay: 2000, stopOnInteraction: false });

  const clients = [
    { name: "Sowbaghya", logo: "/lovable-uploads/9234820b-7143-420b-8fee-f1729c5d6646.png" },
    { name: "Premier", logo: "/lovable-uploads/365208f2-ccbc-4d31-9233-da5887f389b8.png" },
    { name: "Thangam", logo: "/lovable-uploads/500b1e70-f84a-4ac7-b409-5df61ce5823d.png" },
    { name: "Butterfly", logo: "/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png" },
    { name: "Prestige", logo: "/lovable-uploads/2e31a859-9ba3-46b9-8eae-8b9580dfe7bb.png" },
    { name: "Twinbirds", logo: "/lovable-uploads/44e90ac6-77dd-4cb4-b53b-64c6ce6eea43.png" },
    { name: "Easy", logo: "/lovable-uploads/896a11a8-b55e-4ef6-a80e-07ceda3ed41c.png" },
    { name: "Diamond", logo: "/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png" }
  ];

  return (
    <section className="py-20 relative animate-fade-in overflow-hidden" style={{animationDelay: "850ms"}}>
      {/* Enhanced Background with moving elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl blob-animation"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl blob-animation" style={{animationDelay: "2s"}}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-brand-green/3 rounded-full blur-2xl animate-bounce-subtle"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-brand-gold/3 rounded-full blur-2xl animate-bounce-subtle" style={{animationDelay: "1s"}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Building className="h-8 w-8 text-brand-green animate-bounce-subtle" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-brand-green to-brand-gold bg-clip-text text-transparent">
              Our OEM Clients
            </h2>
            <Sparkles className="h-6 w-6 text-brand-gold animate-pulse" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted manufacturing partner for leading kitchen appliance brands in India. 
            We pride ourselves on maintaining the highest standards of quality and reliability.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-green to-brand-gold mx-auto mt-4 animate-pulse"></div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-6 w-6 text-brand-green animate-bounce-subtle" />
                <h3 className="text-2xl font-bold text-brand-green">Manufacturing Excellence</h3>
              </div>
              <p className="text-gray-700 mb-6">
                We partner with renowned brands to manufacture kitchen appliances that meet their exacting standards. 
                Our OEM services ensure consistent quality, timely delivery, and cost-effective solutions.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-brand-green group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700">ISO 9001 Certified Manufacturing</span>
                </div>
                <div className="flex items-center gap-2 group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-brand-green group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700">Customized Production Solutions</span>
                </div>
                <div className="flex items-center gap-2 group hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-brand-green group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700">Rigorous Quality Control</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 mt-8 relative">
              <Carousel 
                opts={{
                  loop: true,
                  align: "start",
                }}
                plugins={[plugin]}
                className="w-full"
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
              >
                <CarouselContent>
                  {clients.map((client, index) => (
                    <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3 p-2">
                      <div className="flex flex-col justify-center items-center p-8 h-40 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300 border border-gray-100 group">
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="h-full max-h-24 object-contain group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                        />
                        <p className="mt-4 font-medium text-gray-700 group-hover:text-brand-green transition-colors duration-300">{client.name}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-brand-green hover:text-white transition-all duration-300" />
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-brand-green hover:text-white transition-all duration-300" />
              </Carousel>
            </div>
          </div>
          
          {/* Trending Feature: Stats Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center group">
              <div className="text-3xl font-bold text-brand-green mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-gray-600 text-sm">OEM Partners</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-brand-gold mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-brand-green mb-2 group-hover:scale-110 transition-transform duration-300">1M+</div>
              <div className="text-gray-600 text-sm">Products Manufactured</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-brand-gold mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-gray-600 text-sm">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OEMClients;
