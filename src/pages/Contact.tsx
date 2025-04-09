
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-green to-green-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Get in touch with our team for product inquiries, support, or business opportunities.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-green">Send us a Message</h2>
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
                  />
                </div>
                
                <Button type="submit" className="w-full bg-brand-green hover:bg-green-800" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-green">Contact Information</h2>
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-brand-green mr-4 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Head Office</h3>
                        <p className="text-gray-600">
                          123 Kitchen Street, Appliance District<br />
                          Mumbai, Maharashtra 400001<br />
                          India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
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
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-brand-green mr-4 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                        <p className="text-gray-600">
                          Sales: sales@saikshakitchen.com<br />
                          Support: support@saikshakitchen.com<br />
                          General: info@saikshakitchen.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-green">Our Location</h2>
          <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
            {/* This is just a placeholder for a real map */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-600">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
