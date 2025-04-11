
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const FactoryOverview = () => {
  // YouTube video configuration
  const youtubeEmbedUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Replace with your actual YouTube video ID
  const youtubeAccountUrl = "https://www.youtube.com/@YourCompanyChannel"; // Replace with your actual YouTube channel URL
  
  return (
    <section className="py-20 relative animate-fade-in" style={{animationDelay: "450ms"}}>
      {/* Background Graphic Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 left-1/3 w-40 h-40 bg-brand-green/5 rounded-full blur-xl"></div>
        
        {/* Wave pattern at bottom of section */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 opacity-15" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%23D4A335'%3E%3C/path%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%23D4A335'%3E%3C/path%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%23D4A335'%3E%3C/path%3E%3C/svg%3E\")",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'rotate(180deg)',
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Factory Overview</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Take a tour of our state-of-the-art manufacturing facility where quality meets innovation</p>
          <div className="w-20 h-1 bg-brand-green mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-3/5 relative rounded-xl overflow-hidden shadow-xl group">
            {/* YouTube Video Embed */}
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden">
              <iframe 
                className="w-full h-full"
                src={youtubeEmbedUrl}
                title="Factory Tour Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-1">Tour Our Production Facility</h3>
              <p>See how our products are manufactured with precision and care</p>
            </div>
          </div>
          
          <div className="md:w-2/5">
            <h3 className="text-2xl font-bold mb-4 text-brand-green">Modern Manufacturing Excellence</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Saiksha Kitchen Appliances, we pride ourselves on our state-of-the-art manufacturing facility. Our factory is equipped with the latest technology and machinery, ensuring that each product meets our high standards of quality and durability.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our skilled team of technicians and engineers work diligently to produce gas stoves and kettles that combine functionality, energy efficiency, and elegant design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-brand-green hover:bg-green-800 text-white group">
                <Link to="/about" className="flex items-center">
                  Learn More About Us
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green/10">
                <a href={youtubeAccountUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  YouTube Channel
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryOverview;
