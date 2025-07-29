
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  MailIcon, 
  PhoneIcon, 
  MapPin, 
  Clock, 
  Building,
  Send
} from "lucide-react";
import GoogleMap from '@/components/contact/GoogleMap';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Get in touch with us using the contact information below. We're here to help with all your industrial heating needs.
            </p>
            <div className="w-20 h-1 bg-brand-green mx-auto mt-4"></div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 h-full bg-gradient-to-b from-green-50 to-emerald-50 border-none shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-brand-green">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-green rounded-full p-2 mt-1">
                    <Building className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Head Office</h3>
                    <p className="text-gray-700">No. 147, 2nd Floor, GN Chetty Road,<br />T Nagar, Chennai - 600017</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-green rounded-full p-2 mt-1">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Works</h3>
                    <p className="text-gray-700">Survey no 150/16A, 150/16B2, 150/16C,<br />Panakattukupam Village,<br />Vandalur Taluk, Chengalpattu - 600048</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-green rounded-full p-2 mt-1">
                    <MailIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-700">info@ska.ltd</p>
                    <p className="text-gray-700">sales1@ska.ltd</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-green rounded-full p-2 mt-1">
                    <PhoneIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-700">+91 89258 73926</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-green rounded-full p-2 mt-1">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Hours</h3>
                    <p className="text-gray-700">Monday-Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Form */}
            <Card className="p-8 bg-white shadow-md border-none">
              <h2 className="text-2xl font-bold mb-6 text-brand-green">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-brand-green hover:bg-brand-green/90 text-white"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
            
            {/* Google Map */}
            <Card className="p-6 bg-white shadow-md border-none">
              <h2 className="text-2xl font-bold mb-6">Find Us</h2>
              <GoogleMap address="Survey no 150/16A, 150/16B2, 150/16C, Panakattukupam Village, Vandalur Taluk, Chengalpattu - 600048" height="400px" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
