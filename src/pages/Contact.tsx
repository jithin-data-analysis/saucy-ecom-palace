
import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";
import FaqSection from "@/components/contact/FaqSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ContactHero />
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ContactInfo />
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <MapSection />
      
      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
};

export default Contact;
