
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
  CheckCircle,
  Building
} from "lucide-react";
import { PhoneInput } from "@/components/contact/PhoneInput";
import GoogleMap from '@/components/contact/GoogleMap';

// Form service configuration
const FORM_SERVICE_CONFIG = {
  // Option 1: Formspree - Replace with your Formspree endpoint
  formspree: {
    enabled: true,
    endpoint: "https://formspree.io/f/YOUR_FORM_ID", // Replace with your actual Formspree form ID
  },
  // Option 2: EmailJS - Replace with your EmailJS credentials
  emailjs: {
    enabled: false,
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY",
  },
  // Option 3: Netlify Forms
  netlify: {
    enabled: false,
  }
};

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

  const submitToFormspree = async (data: typeof formData) => {
    const response = await fetch(FORM_SERVICE_CONFIG.formspree.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        _replyto: data.email,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return response.json();
  };

  const submitToEmailJS = async (data: typeof formData) => {
    // Note: You'll need to install EmailJS first: npm install @emailjs/browser
    // Then uncomment and use this code:
    /*
    const emailjs = await import('@emailjs/browser');
    
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      to_email: 'info@ska.ltd',
    };

    const response = await emailjs.send(
      FORM_SERVICE_CONFIG.emailjs.serviceId,
      FORM_SERVICE_CONFIG.emailjs.templateId,
      templateParams,
      FORM_SERVICE_CONFIG.emailjs.publicKey
    );

    return response;
    */
    throw new Error('EmailJS not configured. Please install @emailjs/browser and configure the service.');
  };

  const submitToNetlify = async (data: typeof formData) => {
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('form-name', 'contact');
    formDataToSubmit.append('name', data.name);
    formDataToSubmit.append('email', data.email);
    formDataToSubmit.append('phone', data.phone);
    formDataToSubmit.append('subject', data.subject);
    formDataToSubmit.append('message', data.message);

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataToSubmit as any).toString(),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return response;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting form data:', formData);

      // Choose which service to use based on configuration
      if (FORM_SERVICE_CONFIG.formspree.enabled) {
        await submitToFormspree(formData);
        console.log('Form submitted via Formspree');
      } else if (FORM_SERVICE_CONFIG.emailjs.enabled) {
        await submitToEmailJS(formData);
        console.log('Form submitted via EmailJS');
      } else if (FORM_SERVICE_CONFIG.netlify.enabled) {
        await submitToNetlify(formData);
        console.log('Form submitted via Netlify Forms');
      } else {
        // Fallback - simulate submission for demo
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form data (demo mode):', formData);
      }
      
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
      console.error('Form submission error:', error);
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
                  <GoogleMap address="Survey no 150/16A, 150/16B2, 150/16C, Panakattukupam Village, Vandalur Taluk, Chengalpattu - 600048" height="250px" />
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
                    <form 
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                    >
                      {/* Hidden field for Netlify Forms */}
                      <input type="hidden" name="form-name" value="contact" />
                      <input type="hidden" name="bot-field" />
                      
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
                  <strong>Configuration Required:</strong> To enable form submissions, please configure one of the following services in the FORM_SERVICE_CONFIG:
                </p>
                <ul className="mt-2 text-xs text-blue-700 space-y-1">
                  <li>• <strong>Formspree:</strong> Replace YOUR_FORM_ID with your actual Formspree form ID</li>
                  <li>• <strong>EmailJS:</strong> Add your service ID, template ID, and public key</li>
                  <li>• <strong>Netlify Forms:</strong> Deploy to Netlify and enable the netlify option</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
