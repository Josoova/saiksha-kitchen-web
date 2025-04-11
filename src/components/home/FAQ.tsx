
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of kitchen appliances does Saiksha manufacture?",
      answer: "Saiksha Kitchen Appliances specializes in manufacturing high-quality gas stoves and electric kettles. Our product range includes various models with different burner configurations, designs, and features to suit different customer needs.",
      color: "brand-green"
    },
    {
      question: "Are your gas stoves ISI certified?",
      answer: "Yes, all our gas stoves are ISI certified, ensuring they meet the quality and safety standards set by the Bureau of Indian Standards. This certification guarantees that our products have undergone rigorous testing and comply with national safety regulations.",
      color: "brand-gold"
    },
    {
      question: "Do you offer warranty on your products?",
      answer: "Yes, we provide warranty coverage on all our products. Gas stoves typically come with a 2-year warranty, while electric kettles have a 1-year warranty. The warranty covers manufacturing defects and certain functional issues as specified in the warranty card provided with each product.",
      color: "brand-green"
    },
    {
      question: "Do you offer OEM manufacturing services?",
      answer: "Yes, we offer OEM (Original Equipment Manufacturing) services for brands looking to outsource their production. With our state-of-the-art manufacturing facility and experienced team, we can produce kitchen appliances according to your specifications and brand requirements.",
      color: "brand-gold"
    },
    {
      question: "How can I become a distributor for Saiksha products?",
      answer: "To become a distributor for Saiksha Kitchen Appliances, please contact our sales team through the Contact page on our website. We evaluate potential distributors based on market coverage, business experience, and alignment with our brand values. Our team will guide you through the application process and provide information about our distributor program.",
      color: "brand-green"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 animate-fade-in" style={{animationDelay: "900ms"}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-brand-gold mr-2" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <p className="text-gray-600">Find answers to common questions about our products and services</p>
          <div className="w-20 h-1 bg-brand-green mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`mb-4 border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white`}
              >
                <AccordionTrigger className={`px-6 py-4 text-left text-lg font-medium text-${faq.color} hover:text-${faq.color}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 bg-white">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
