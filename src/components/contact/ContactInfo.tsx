
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-600 mb-8">
        We'd love to hear from you! Whether you have a question about our products, want to place a bulk order, or just want to say hello, we're here to help.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-sauce-red/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
            <Mail size={20} className="text-sauce-red" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Email Us</h3>
            <p className="text-gray-600 mb-1">For general inquiries:</p>
            <a href="mailto:info@saucypalace.com" className="text-sauce-red hover:underline">
              info@saucypalace.com
            </a>
            <p className="text-gray-600 mb-1 mt-2">For customer support:</p>
            <a href="mailto:support@saucypalace.com" className="text-sauce-red hover:underline">
              support@saucypalace.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-sauce-orange/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
            <Phone size={20} className="text-sauce-orange" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Call Us</h3>
            <p className="text-gray-600 mb-1">Customer Service:</p>
            <a href="tel:+919845404862" className="text-sauce-orange hover:underline">
              +91 98454 04862
            </a>
            <p className="text-gray-600 mb-1 mt-2">Business Hours:</p>
            <p className="text-gray-700">
              Monday - Friday: 9:00 AM - 5:00 PM IST
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-sauce-green/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
            <MapPin size={20} className="text-sauce-green" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Visit Us</h3>
            <p className="text-gray-600 mb-1">Headquarters:</p>
            <address className="not-italic text-gray-700">
              No. 89, BTM 2nd Stage<br />
              Bangalore, Karnataka<br />
              India
            </address>
          </div>
        </div>
      </div>
      
      {/* Social Media */}
      <div className="mt-12">
        <h3 className="font-medium mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="bg-gray-100 hover:bg-sauce-red/10 transition-colors w-10 h-10 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="#" className="bg-gray-100 hover:bg-sauce-orange/10 transition-colors w-10 h-10 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="#" className="bg-gray-100 hover:bg-sauce-yellow/10 transition-colors w-10 h-10 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
