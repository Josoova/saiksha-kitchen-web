
import { Building, Award, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-green to-green-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Saiksha Kitchen Appliances</h1>
          <p className="text-lg max-w-3xl mx-auto">
            We are a leading manufacturer of high-quality kitchen appliances dedicated to enhancing the cooking experience in Indian homes.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Saiksha Kitchen Factory" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-brand-green">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Saiksha Kitchen Appliances Pvt Ltd began with a simple mission: to create reliable, efficient, 
                and beautifully designed kitchen appliances that make cooking a joyful experience.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small workshop has now grown into a state-of-the-art manufacturing facility that produces 
                thousands of gas stoves and kettles each month, serving customers across the country.
              </p>
              <p className="text-gray-700">
                Our commitment to quality and innovation has made us a trusted name in Indian kitchens, and we continue to 
                expand our product range to meet the evolving needs of modern homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-brand-green">Our Vision & Mission</h2>
            <p className="text-gray-600">Guiding principles that drive our company forward</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-brand-green">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted kitchen appliance brand in India, recognized for our commitment to quality, 
                innovation, and customer satisfaction. We aspire to be present in every Indian kitchen, making cooking 
                safer, more efficient, and enjoyable.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-brand-green">Our Mission</h3>
              <p className="text-gray-700">
                To design and manufacture kitchen appliances that blend functionality with aesthetics, ensuring they 
                meet the highest standards of safety, efficiency, and durability. We strive to understand the needs 
                of Indian households and continuously innovate to exceed customer expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-brand-green">Our Core Values</h2>
            <p className="text-gray-600">The principles that guide our business operations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-brand-green h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our products and maintain strict quality control measures.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-brand-green h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical practices at all levels.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-brand-green h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                We put our customers at the center of everything we do, ensuring their satisfaction and trust.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-brand-green h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously strive to improve our products through research and technological advancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-brand-green">Our Leadership</h2>
            <p className="text-gray-600">The team driving our vision forward</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="CEO" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-1">Rajesh Kumar</h3>
              <p className="text-brand-green font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600">
                With over 20 years in the industry, Rajesh's vision and leadership have been instrumental in our growth.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="COO" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-1">Priya Sharma</h3>
              <p className="text-brand-green font-medium mb-3">Chief Operations Officer</p>
              <p className="text-gray-600">
                Priya oversees our manufacturing processes, ensuring efficiency and quality standards are maintained.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="CTO" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-1">Anil Patel</h3>
              <p className="text-brand-green font-medium mb-3">Head of Research & Development</p>
              <p className="text-gray-600">
                Anil leads our innovation initiatives, developing new products and improving existing ones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
