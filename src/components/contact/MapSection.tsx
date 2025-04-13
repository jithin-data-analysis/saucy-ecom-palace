
import React from "react";

const MapSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Find Us</h2>
          <p className="text-gray-600">Visit our headquarters</p>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-sm h-96">
          {/* Using an iframe for Google Maps */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.21646779383!2d77.59835755!3d12.9102685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d3c15e5b5d1%3A0x35247fff62c27458!2sBTM%202nd%20Stage%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1681856724319!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Saucy Palace Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
