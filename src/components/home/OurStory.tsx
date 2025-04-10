
import React from 'react';

const OurStory = () => {
  return (
    <section className="py-16 bg-gray-50 animate-fade-in" style={{animationDelay: "300ms"}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img 
              src="public/lovable-uploads/2e31a859-9ba3-46b9-8eae-8b9580dfe7bb.png" 
              alt="Our Factory" 
              className="rounded-lg shadow-lg hover:shadow-xl transition-all"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Founded in 2022, Saiksha Kitchen Appliances Private Limited, has swiftly emerged as a trusted name in the manufacturing of high-quality kitchen and home appliances. The company is headquartered in Chennai, Tamil Nadu, and prides itself on combining cutting-edge technology with robust quality standards to meet the diverse needs of modern households.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              What started as a small workshop has now grown into a state-of-the-art manufacturing facility that produces tens of thousands of gas stoves and kettles each month, serving customers across the country.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg font-semibold">
              Our commitment to quality and innovation has made us a trusted name in Indian kitchens, and we continue to expand our product range to meet the evolving needs of modern homes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
