
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { 
  MailIcon, 
  PhoneIcon, 
  MapPin, 
  Clock, 
  Building
} from "lucide-react";
import GoogleMap from '@/components/contact/GoogleMap';

const Contact = () => {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
