
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
      // Focus on name field if coming from product page
      const nameInput = document.getElementById('name');
      if (nameInput) {
        nameInput.focus();
        
        // Scroll to form section
        const formSection = document.querySelector('.contact-form-section');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Show toast notification
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
    
    // Simulate form submission
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
      {/* Background pattern elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-40 -right-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] left-1/2 w-64 h-64 bg-brand-gold/5 rounded-full blur-2xl"></div>
      </div>

      {/* Hero Section with background image */}
      <section 
        className="relative bg-gradient-to-r from-brand-green to-green-900 text-white py-16 overflow-hidden animate-fade-in"
        style={{
          backgroundImage: 'url(public/lovable-uploads/896a11a8-b55e-4ef6-a80e-07ceda3ed41c.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow animate-scale-in">Get In Touch</h1>
          <p className="text-lg max-w-3xl mx-auto animate-fade-in" style={{animationDelay: "300ms"}}>
            We're here to answer your questions and provide support for all our products.
          </p>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-4 animate-scale-in" style={{animationDelay: "400ms"}}></div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 contact-form-section relative z-10">
        <div className="absolute inset-0 opacity-20 z-0" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23136a5a' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
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
            
            {/* Contact Information */}
            <div className="animate-fade-in" style={{animationDelay: "300ms"}}>
              <h2 className="text-3xl font-bold mb-6 text-brand-green">Contact Information</h2>
              <div className="grid grid-cols-1 gap-6">
                <Card className="transition-all hover:-translate-y-2 hover:shadow-lg duration-300 bg-white/90 backdrop-blur-sm">
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
                
                <Card className="transition-all hover:-translate-y-2 hover:shadow-lg duration-300 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-brand-green mr-4 shrink-0 mt-1" />
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
                
                <Card className="transition-all hover:-translate-y-2 hover:shadow-lg duration-300 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-brand-green mr-4 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Phone</h3>
                        <p className="text-gray-600">
                          Sales: +91 98765 43210<br />
                          Support: +91 98765 43211<br />
                          General: +91 22 1234 5678
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="transition-all hover:-translate-y-2 hover:shadow-lg duration-300 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-brand-green mr-4 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                        <p className="text-gray-600">
                          info@saikshakitchen.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="transition-all hover:-translate-y-2 hover:shadow-lg duration-300 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-brand-green mr-4 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
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

      {/* Map Section */}
      <section className="py-16 relative z-10 animate-fade-in" style={{animationDelay: "450ms"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-green">Our Location</h2>
            <div className="h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              {/* This is just a placeholder for a real map */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-600">Interactive Map Would Be Displayed Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
