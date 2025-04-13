
import React from "react";

const FaqSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quick answers to common questions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">What are your shipping policies?</h3>
              <p className="text-gray-600">
                We offer free shipping on orders over ₹1,000 within India. Standard shipping typically takes 3-5 business days. International shipping is available to select countries.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do you offer wholesale pricing?</h3>
              <p className="text-gray-600">
                Yes, we offer wholesale pricing for retailers and restaurants. Please contact our sales team at wholesale@saucypalace.com for more information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">Are your sauces gluten-free?</h3>
              <p className="text-gray-600">
                Many of our sauces are gluten-free, but not all. Each product page specifies whether the sauce is gluten-free. We take allergen safety very seriously.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">What is your return policy?</h3>
              <p className="text-gray-600">
                We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, please contact our customer service team for a refund or replacement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
