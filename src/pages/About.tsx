
import { Building, Award, Users, Clock, Star, MapPin, Mail, ChevronRight, Info, Target, Compass } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import PageTransition from '@/components/common/PageTransition';

interface LeaderProps {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const About = () => {
  const [selectedLeader, setSelectedLeader] = useState<LeaderProps | null>(null);

  const leadershipTeam = [
    {
      name: "Mr. Jaganath Ramakrishnan",
      position: "Director",
      bio: "Mr. Jaganath Ramakrishnan, also the director of Thangam Enterprises and Proprietor of Saiksha Agencies has brought value to this company with deep industry knowledge, strategic partnerships, and a commitment to customer satisfaction, has positioned the company as a trusted leader in the consumer durables and corporate gifting space.",
      image: "public/lovable-uploads/9234820b-7143-420b-8fee-f1729c5d6646.png"
    },
    {
      name: "Mrs. Thangamalar Jaganath",
      position: "Director",
      bio: "Mrs. Thangamalar Jaganath, also Partner at Vasanth & Co, plays a pivotal role in steering the retail giant's legacy. She also leads Thangam Enterprises, a premier B2B provider. With her strategic vision and industry expertise, she continues to drive growth, innovation, and excellence across all ventures. Their collective expertise drives the company's commitment to excellence in product design, manufacturing, and customer satisfaction.",
      image: "public/lovable-uploads/500b1e70-f84a-4ac7-b409-5df61ce5823d.png"
    },
    {
      name: "Mr. Balachandran TB",
      position: "Vice President",
      bio: "The unit is managed by Mr. Balachandran TB, Vice President, whose leadership guarantees precision in every product. Mr. Balachandran, with 25 years as production head at Super Flame (Gas Stove Manufacturer), Delhi followed by 25 years at Butterfly Gandhimadhi Appliances, brings unmatched expertise to lead our manufacturing plant.",
      image: "public/lovable-uploads/365208f2-ccbc-4d31-9233-da5887f389b8.png"
    }
  ];

  const handleOpenLeaderProfile = (leader: LeaderProps) => {
    setSelectedLeader(leader);
  };

  const handleCloseLeaderProfile = () => {
    setSelectedLeader(null);
  };

  return (
    <PageTransition>
      <div className="relative">
        {/* Floating background elements */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
          <div className="absolute top-20 left-10 animate-bounce-subtle">
            <Star className="h-4 w-4 text-brand-gold/40" />
          </div>
          <div className="absolute bottom-40 right-20 animate-bounce-subtle" style={{animationDelay: '2s'}}>
            <Award className="h-6 w-6 text-brand-green/40" />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] animate-fade-in">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
            <img 
              src="public/lovable-uploads/896a11a8-b55e-4ef6-a80e-07ceda3ed41c.png" 
              alt="Factory" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-enter">About Saiksha Kitchen Appliances</h1>
              <p className="text-lg md:text-xl max-w-2xl">
                We are a leading manufacturer of high-quality kitchen appliances dedicated to enhancing the cooking experience in Indian homes.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 animate-fade-in relative z-10" style={{animationDelay: "200ms"}}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 hover-scale">
                <img 
                  src="public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png"
                  alt="Saiksha Kitchen Factory" 
                  className="rounded-lg shadow-lg transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-brand-green">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2022, Saiksha Kitchen Appliances Private Limited, has swiftly emerged as a 
                  trusted name in the manufacturing of high-quality kitchen and home appliances. The 
                  company is headquartered in Chennai, Tamil Nadu, and prides itself on combining 
                  cutting-edge technology with robust quality standards to meet the diverse needs of 
                  modern households.
                </p>
                <p className="text-gray-700 mb-4">
                  What started as a small workshop has now grown into a state-of-the-art manufacturing facility that produces 
                  ten thousands of gas stoves and kettles each month, serving customers across the country.
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
        <section className="py-16 bg-gray-50 animate-fade-in relative z-10" style={{animationDelay: "400ms"}}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-brand-green">Our Vision & Mission</h2>
              <p className="text-gray-600">Guiding principles that drive our company forward</p>
              <div className="w-20 h-1 bg-brand-gold mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-brand-green/10 to-brand-green/5 p-10 rounded-xl shadow-lg hover:shadow-xl transition-all border border-brand-green/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-green/10 w-24 h-24 rounded-full -mr-12 -mt-12 blur-xl"></div>
                <div className="absolute bottom-0 left-0 bg-brand-green/10 w-32 h-32 rounded-full -ml-16 -mb-16 blur-xl"></div>
                
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-brand-green rounded-full mr-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-green">Our Vision</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed relative z-10 text-lg">
                  To deliver innovative, reliable, and energy-efficient kitchen appliances that meet the 
                  evolving needs of consumers worldwide. To prosper long into the future, while 
                  maintaining top quality and minimizing costs. The company also believes in caring for 
                  the community and giving back to society.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow">
                    <span className="h-3 w-3 bg-brand-green rounded-full mr-2"></span>
                    <span className="text-sm font-medium">Innovation</span>
                  </div>
                  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow">
                    <span className="h-3 w-3 bg-brand-green rounded-full mr-2"></span>
                    <span className="text-sm font-medium">Quality</span>
                  </div>
                  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow">
                    <span className="h-3 w-3 bg-brand-green rounded-full mr-2"></span>
                    <span className="text-sm font-medium">Community</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-gold/10 to-brand-gold/5 p-10 rounded-xl shadow-lg hover:shadow-xl transition-all border border-brand-gold/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-gold/10 w-24 h-24 rounded-full -mr-12 -mt-12 blur-xl"></div>
                <div className="absolute bottom-0 left-0 bg-brand-gold/10 w-32 h-32 rounded-full -ml-16 -mb-16 blur-xl"></div>
                
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-brand-gold rounded-full mr-4">
                    <Compass className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-gold">Our Mission</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed relative z-10 text-lg">
                  To be the leading provider of kitchen appliances, committed to superior design, 
                  technology, and sustainability. To bring innovation and quality to every kitchen and 
                  home, empowering customers with reliable and stylish appliances. To cultivate a group 
                  of employees who accept the work philosophy, have family support, and are proud of 
                  the company.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow">
                    <span className="h-3 w-3 bg-brand-gold rounded-full mr-2"></span>
                    <span className="text-sm font-medium">Leadership</span>
                  </div>
                  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow">
                    <span className="h-3 w-3 bg-brand-gold rounded-full mr-2"></span>
                    <span className="text-sm font-medium">Excellence</span>
                  </div>
                  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow">
                    <span className="h-3 w-3 bg-brand-gold rounded-full mr-2"></span>
                    <span className="text-sm font-medium">Empowerment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 animate-fade-in relative z-10" style={{animationDelay: "600ms"}}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-brand-green">Our Core Values</h2>
              <p className="text-gray-600">The principles that guide our business operations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="bg-brand-green h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on the quality of our products and maintain strict quality control measures.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="bg-brand-gold h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We conduct our business with honesty, transparency, and ethical practices at all levels.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="bg-brand-green h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
                <p className="text-gray-600">
                  We put our customers at the center of everything we do, ensuring their satisfaction and trust.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="bg-brand-gold h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
        <section className="py-16 bg-gray-50 animate-fade-in relative z-10" style={{animationDelay: "800ms"}}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-brand-green">Our Leadership</h2>
              <p className="text-gray-600">The team driving our vision forward</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadershipTeam.map((leader, index) => (
                <Card key={index} className="overflow-hidden shadow-lg transition-all hover:scale-105 cursor-pointer" onClick={() => handleOpenLeaderProfile(leader)}>
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-brand-green font-medium mb-3">{leader.position}</p>
                    <p className="text-gray-600 line-clamp-3">
                      {leader.bio}
                    </p>
                    <Button variant="link" className="text-brand-green p-0 mt-2 flex items-center">
                      Read more <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="py-16 animate-fade-in relative z-10" style={{animationDelay: "1000ms"}}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-brand-green">Our Infrastructure</h2>
              <p className="text-gray-600">State-of-the-art manufacturing facilities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="hover-scale">
                <img 
                  src="public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png" 
                  alt="Manufacturing Facility" 
                  className="rounded-lg shadow-lg h-80 w-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="hover-scale">
                <img 
                  src="public/lovable-uploads/2e31a859-9ba3-46b9-8eae-8b9580dfe7bb.png" 
                  alt="Production Line" 
                  className="rounded-lg shadow-lg h-80 w-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-green">Manufacturing Excellence</h3>
              <p className="text-gray-700 mb-4">
                Saiksha Kitchen Appliances is the first and largest fully-integrated electric kettle 
                factory in South India, aimed towards the manufacture of electric kettles and ISI 
                certified gas stoves. Most of the manufacturing process is in-house, resulting in a 
                homogeneous production line which boasts unparalleled efficiency while reducing the 
                rejections in the process.
              </p>
              <p className="text-gray-700">
                The factory boasts a wide range of sophisticated and modern machinery and 
                infrastructure which gives our works an output of 2,00,000 electric kettles and 50,000 
                gas stoves per month. The workspace is divided into 2 production lines, one each for 
                electric kettle and gas stove manufacturing. With a wide array of machinery like laser 
                welders, multi-ton presses, brazing machines, ultrasonic cleaner, polishers and 
                inspection equipment divided among the two production lines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center transition-all hover:shadow-xl hover:-translate-y-1">
                <img 
                  src="public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png" 
                  alt="Manufacturing Process" 
                  className="rounded-lg h-48 w-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Advanced Machinery</h3>
                <p className="text-gray-600">
                  State-of-the-art equipment ensuring precision and quality in every product.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center transition-all hover:shadow-xl hover:-translate-y-1">
                <img 
                  src="public/lovable-uploads/896a11a8-b55e-4ef6-a80e-07ceda3ed41c.png" 
                  alt="Quality Control" 
                  className="rounded-lg h-48 w-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Quality Control</h3>
                <p className="text-gray-600">
                  Rigorous testing procedures to ensure every product meets our high standards.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center transition-all hover:shadow-xl hover:-translate-y-1">
                <img 
                  src="public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png" 
                  alt="Workspace" 
                  className="rounded-lg h-48 w-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Production Capacity</h3>
                <p className="text-gray-600">
                  Large-scale manufacturing capabilities to meet market demands efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-gray-50 animate-fade-in relative z-10" style={{animationDelay: "1200ms"}}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-brand-green">Contact Information</h2>
              <p className="text-gray-600">Reach out to us for inquiries and collaborations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <MapPin className="h-6 w-6 text-brand-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Head Office</h3>
                      <p className="text-gray-700">
                        No. 147, 2nd Floor, GN Chetty Road,<br />
                        T Nagar, Chennai - 600017
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-brand-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email</h3>
                      <p className="text-gray-700">info@ska.lt</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <Building className="h-6 w-6 text-brand-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Works</h3>
                      <p className="text-gray-700">
                        Survey no 150/16A, 150/16B2, 150/16C,<br />
                        Panakattukupam Village, Vandalur Taluk,<br />
                        Chengalpattu - 600048
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leader Profile Dialog */}
        <Dialog open={!!selectedLeader} onOpenChange={handleCloseLeaderProfile}>
          {selectedLeader && (
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-brand-green">{selectedLeader.name}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 gap-4">
                <div className="h-60 overflow-hidden rounded-lg">
                  <img 
                    src={selectedLeader.image} 
                    alt={selectedLeader.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-gold mb-2">{selectedLeader.position}</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedLeader.bio}</p>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </PageTransition>
  );
};

export default About;
