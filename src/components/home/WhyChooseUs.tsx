
import { Award, BarChart, Users } from 'lucide-react';

const WhyChooseUs = () => {
  return (
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
  );
};

export default WhyChooseUs;
