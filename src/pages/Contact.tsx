
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { 
  MailIcon, 
  PhoneIcon, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle 
} from "lucide-react";
import { PhoneInput } from "@/components/contact/PhoneInput";
import GoogleMap from '@/components/contact/GoogleMap';

const Contact = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Get product name if navigating from product detail page
  const fromProduct = location.state?.fromProduct;
  const productName = location.state?.productName || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: fromProduct ? `Quote Request for ${productName}` : '',
    message: fromProduct ? `I am interested in getting a quote for ${productName}.` : '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, you would send this data to a server or API
      // that would forward it to info@ska.ltd
      console.log('Form data to be sent to info@ska.ltd:', formData);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast({
        title: "Message Sent Successfully",
        description: "We have received your message and will respond soon!",
      });
      
      // Reset form and show success state
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              We'd love to hear from you! Please fill out the form below or use our contact information to get in touch.
            </p>
            <div className="w-20 h-1 bg-brand-green mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="p-6 h-full bg-gradient-to-b from-green-50 to-emerald-50 border-none shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-brand-green">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-green rounded-full p-2 mt-1">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-700">81K Thiruvalluvar Street, Athipet, Chennai, Tamil Nadu 600058</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-green rounded-full p-2 mt-1">
                      <MailIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-700">info@ska.ltd</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-green rounded-full p-2 mt-1">
                      <PhoneIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-700">+91 98765 43210</p>
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
                
                {/* Google Map */}
                <div className="mt-8">
                  <GoogleMap address="81K Thiruvalluvar Street, Athipet, Chennai, Tamil Nadu 600058" height="250px" />
                </div>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-white shadow-md border-none">
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="bg-green-100 rounded-full p-4 mb-6">
                      <CheckCircle className="h-16 w-16 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">Message Sent!</h2>
                    <p className="text-center text-gray-600 mb-6">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-brand-green hover:bg-green-700"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                    {fromProduct && (
                      <div className="bg-amber-50 p-4 rounded-md mb-6 border border-amber-100">
                        <p className="text-amber-800">Requesting a quote for: <strong>{productName}</strong></p>
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <PhoneInput value={formData.phone} onChange={handlePhoneChange} />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is this about?"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your requirements..."
                          rows={5}
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-brand-green hover:bg-green-800 flex items-center justify-center gap-2 py-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </Card>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> All inquiries will be sent to info@ska.ltd and our team will respond within 24-48 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
