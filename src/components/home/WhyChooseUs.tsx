
import { Award, BarChart, Users, Shield, Flame, Clock } from 'lucide-react';
import { useState } from 'react';

const WhyChooseUs = () => {
  // Hover state for jump animation
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const features = [
    { 
      icon: Award, 
      title: "Premium Quality", 
      description: "All our products are made using high-grade materials ensuring longevity and performance.",
      color: "bg-brand-gold"
    },
    { 
      icon: Shield, 
      title: "Safety First", 
      description: "Our appliances are designed with advanced safety features to protect your family.",
      color: "bg-brand-green"
    },
    { 
      icon: Flame, 
      title: "Energy Efficient", 
      description: "Designed to provide maximum performance while using minimum energy resources.",
      color: "bg-brand-gold"
    },
    { 
      icon: BarChart, 
      title: "Performance", 
      description: "High efficiency burners and heating elements for faster cooking and boiling times.",
      color: "bg-brand-green"
    },
    { 
      icon: Clock, 
      title: "Durability", 
      description: "Built to last with premium materials and rigorous quality testing procedures.",
      color: "bg-brand-gold"
    },
    { 
      icon: Users, 
      title: "Customer Support", 
      description: "Our dedicated team ensures prompt service and support whenever you need assistance.",
      color: "bg-brand-green"
    }
  ];

  return (
    <section className="py-20 animate-fade-in relative" style={{animationDelay: "750ms"}}>
      {/* Background Graphic Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Why Choose Saiksha Kitchen Appliances</h2>
          <p className="text-gray-600">We pride ourselves on quality, innovation, and customer satisfaction</p>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`text-center p-8 bg-white rounded-xl shadow-lg transition-all duration-300 ${
                hoveredIndex === index ? 'transform -translate-y-4' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`${feature.color} h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse transition-transform duration-300 ${
                hoveredIndex === index ? 'transform scale-110' : ''
              }`}>
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
