
import { Star, CheckCircle2 } from 'lucide-react';

const VisionMission = () => {
  return (
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
  );
};

export default VisionMission;
