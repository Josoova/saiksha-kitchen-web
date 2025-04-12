import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();
  const comingFromProduct = location.state?.fromProduct || false;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: comingFromProduct ? 'Product Inquiry' : '',
    message: comingFromProduct ? 'I am interested in getting a quote for your products.' : '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    if (comingFromProduct) {
      const nameInput = document.getElementById('name');
      if (nameInput) {
        nameInput.focus();
        
        const formSection = document.querySelector('.contact-form-section');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        toast.info("Please fill out the form for a product quote.");
      }
    }
  }, [comingFromProduct]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-40 -right-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl blob-animation"></div>
        <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl blob-animation" style={{animationDelay: "2s"}}></div>
        <div className="absolute top-[60%] left-1/2 w-64 h-64 bg-brand-gold/5 rounded-full blur-2xl blob-animation" style={{animationDelay: "4s"}}></div>
        
        <div 
          className="absolute bottom-0 left-0 right-0 h-48 opacity-10 wave-animation" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%2312582A'%3E%3C/path%3E%3C/svg%3E\")",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            transform: 'rotate(180deg)',
          }}
        ></div>
      </div>

      <section 
        className="relative bg-gradient-to-r from-brand-green to-green-900 text-white py-20 overflow-hidden animate-fade-in"
        style={{
          backgroundImage: 'url(public/lovable-uploads/896a11a8-b55e-4ef6-a80e-07ceda3ed41c.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        
        <div 
          className="absolute inset-0 opacity-20 z-0" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg animate-scale-in">Get In Touch</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in" style={{animationDelay: "300ms"}}>
            We're here to answer your questions and provide support for all our products.
          </p>
          <div className="w-32 h-1 bg-brand-gold mx-auto mt-6 animate-scale-in" style={{animationDelay: "400ms"}}></div>
        </div>
      </section>

      <section className="py-16 contact-form-section relative z-10 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 opacity-20 z-0 bg-pattern-dot"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in" style={{animationDelay: "150ms"}}>
              <Card className="backdrop-blur-sm bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-brand-green rounded-lg overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-brand-green flex items-center">
                    <Send className="h-6 w-6 mr-3 text-brand-gold" />
                    {comingFromProduct ? 'Request a Quote' : 'Send us a Message'}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="transition-all duration-300 focus:border-brand-green focus:ring-brand-green"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block mb-2 font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="transition-all duration-300 focus:border-brand-green focus:ring-brand-green"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block mb-2 font-medium">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          className="transition-all duration-300 focus:border-brand-green focus:ring-brand-green"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block mb-2 font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        required
                        className="transition-all duration-300 focus:border-brand-green focus:ring-brand-green"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        rows={5}
                        required
                        className="transition-all duration-300 focus:border-brand-green focus:ring-brand-green"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-brand-green hover:bg-green-800 transition-all hover:scale-105" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : (comingFromProduct ? 'Send Quote Request' : 'Send Message')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: "300ms"}}>
              <h2 className="text-3xl font-bold mb-6 text-brand-green">Contact Information</h2>
              <div className="grid grid-cols-1 gap-6">
                <Card className="transition-all hover:-translate-y-2 hover:shadow-lg duration-300 bg-white/90 backdrop-blur-sm border-l-4 border-brand-green">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-brand-green mr-4 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Head Office</h3>
                        <p className="text-gray-600">
                          No. 147, 2nd Floor, GN Chetty Road,<br />
                          T Nagar, Chennai - 600017
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="transition-all hover:-translate-y-2 hover:shadow-lg duration-300 bg-white/90 backdrop-blur-sm border-l-4 border-brand-gold">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-brand-gold mr-4 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Works</h3>
                        <p className="text-gray-600">
                          Survey no 150/16A, 150/16B2, 150/16C,<br />
                          Panakattukupam Village,<br />
                          Vandalur Taluk, Chengalpattu - 600048
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="transition-all hover:-translate-y-2 hover:shadow-lg duration-300 bg-white/90 backdrop-blur-sm border-l-4 border-brand-green">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-brand-green mr-4 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Phone</h3>
                        <p className="text-gray-600">
                          Sales: +91 8925873926<br />
                          Support: +91 9629211841<br />
                          General: +91 22 1234 5678
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="transition-all hover:-translate-y-2 hover:shadow-lg duration-300 bg-white/90 backdrop-blur-sm border-l-4 border-brand-gold">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-brand-gold mr-4 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                        <p className="text-gray-600">
                          info@ska.ltd<br />
                          sales1@ska.ltd
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="transition-all hover:-translate-y-2 hover:shadow-lg duration-300 bg-white/90 backdrop-blur-sm border-l-4 border-brand-green">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-brand-green mr-4 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                        <p className="text-gray-600">
                          Monday - Saturday: 10:00 AM - 7:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative z-10 animate-fade-in" style={{animationDelay: "450ms"}}>
        <div 
          className="absolute top-0 left-0 right-0 h-20 opacity-10" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%23D4A335'%3E%3C/path%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%23D4A335'%3E%3C/path%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%23D4A335'%3E%3C/path%3E%3C/svg%3E\")",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-green">Our Location</h2>
            <div className="h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="w-full h-full flex items-center justify-center bg-gray-200 relative">
                <div className="absolute inset-0 bg-pattern-grid opacity-30"></div>
                <p className="text-gray-600 relative z-10 font-medium">Interactive Map Would Be Displayed Here</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600">Visit our factory to see our manufacturing excellence in action.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
