
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ShieldCheck, Clock, Users, Zap } from 'lucide-react';

const FAQ = () => {
  return (
    <section className="py-16 animate-fade-in" style={{animationDelay: "1050ms"}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to common questions about our products</p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-green to-brand-gold mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border border-brand-green rounded-lg mb-4 overflow-hidden">
              <AccordionTrigger className="px-4 py-3 bg-gradient-to-r from-brand-green/10 to-brand-green/5 hover:bg-brand-green/20 flex items-center text-brand-green">
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-brand-gold" />
                  <span className="text-lg font-semibold">What makes Saiksha gas stoves different from others in the market?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white border-t border-brand-green/20">
                <p className="text-gray-700 pl-7">
                  Saiksha gas stoves stand out due to their superior build quality with durable brass burners, efficient gas consumption, aesthetic design with toughened glass tops, and robust quality control standards. Our stoves are designed for both performance and safety, making them an excellent choice for modern kitchens.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-brand-gold rounded-lg mb-4 overflow-hidden">
              <AccordionTrigger className="px-4 py-3 bg-gradient-to-r from-brand-gold/10 to-brand-gold/5 hover:bg-brand-gold/20 flex items-center text-brand-gold">
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 mr-2 text-brand-green" />
                  <span className="text-lg font-semibold">Are your products ISI certified?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white border-t border-brand-gold/20">
                <p className="text-gray-700 pl-7">
                  Yes, all our gas stoves are ISI certified, which ensures they meet the stringent safety and quality standards set by the Bureau of Indian Standards. This certification is a testament to our commitment to manufacturing high-quality and safe kitchen appliances.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-brand-green rounded-lg mb-4 overflow-hidden">
              <AccordionTrigger className="px-4 py-3 bg-gradient-to-r from-brand-green/10 to-brand-green/5 hover:bg-brand-green/20 flex items-center text-brand-green">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-brand-gold" />
                  <span className="text-lg font-semibold">What warranty do you offer on your products?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white border-t border-brand-green/20">
                <p className="text-gray-700 pl-7">
                  We offer a standard 1-year warranty on all our products against manufacturing defects. Premium models come with extended warranties of up to 3 years. Our warranty ensures that you get prompt service and support if any issues arise during the warranty period.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-brand-gold rounded-lg mb-4 overflow-hidden">
              <AccordionTrigger className="px-4 py-3 bg-gradient-to-r from-brand-gold/10 to-brand-gold/5 hover:bg-brand-gold/20 flex items-center text-brand-gold">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-brand-green" />
                  <span className="text-lg font-semibold">Do you offer bulk orders for businesses?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white border-t border-brand-gold/20">
                <p className="text-gray-700 pl-7">
                  Yes, we cater to bulk orders for businesses, hotels, institutions, and corporate gifting. We offer competitive pricing for bulk orders and can customize products according to specific requirements. Please contact our sales team for more information on bulk orders and corporate partnerships.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-brand-green rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-3 bg-gradient-to-r from-brand-green/10 to-brand-green/5 hover:bg-brand-green/20 flex items-center text-brand-green">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-brand-gold" />
                  <span className="text-lg font-semibold">How can I get my product serviced?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-white border-t border-brand-green/20">
                <p className="text-gray-700 pl-7">
                  For product service, you can reach out to our customer support team through phone, email, or by visiting our service center. We have a network of service centers across the country to ensure quick and efficient service. Our trained technicians will address your concerns promptly to minimize any inconvenience.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
