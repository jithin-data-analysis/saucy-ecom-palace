import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-600">Our Story</h1>
      
      <div className="space-y-6 text-gray-700">
        <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
          <img 
            src="https://cdn.pixabay.com/photo/2017/09/30/09/29/hot-sauce-2801503_1280.jpg" 
            alt="Spice Market in Bangalore"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-lg leading-relaxed">
          In the vibrant city of Bangalore, where the aroma of street food and spices fills the air, our founder Rajesh Patel discovered his passion for creating extraordinary sauces. Born into a family of spice merchants in the bustling KR Market, Rajesh grew up surrounded by the vibrant flavors of South Indian cuisine.
        </p>

        <p className="text-lg leading-relaxed">
          The journey began in 2025 when Rajesh, after years of experimenting with his grandmother's secret recipes from their family kitchen in Malleshwaram, decided to share his love for bold flavors with the world. What started as a small kitchen experiment in his Bangalore apartment quickly grew into Saucy Ecom Palace - a celebration of authentic Indian flavors with a modern twist.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="relative h-48 rounded-lg overflow-hidden">
            <img 
              src="https://cdn.pixabay.com/photo/2019/04/14/03/08/sauce-4126053_1280.jpg" 
              alt="Traditional Indian Spices"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-48 rounded-lg overflow-hidden">
            <img 
              src="https://cdn.pixabay.com/photo/2019/10/13/08/23/sauce-4546043_1280.jpg" 
              alt="Modern Sauce Production"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-red-50 p-6 rounded-lg my-8">
          <h2 className="text-2xl font-semibold mb-4 text-red-700">Our Mission</h2>
          <p className="text-lg">
            We believe that great food brings people together. Our mission is to create sauces that not only enhance your meals but also tell a story - a story of tradition, innovation, and the rich culinary heritage of South India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-red-600">Traditional Roots</h3>
            <p>
              Each of our sauces is crafted using time-honored South Indian cooking techniques, passed down through generations. We source our spices directly from local farmers in Karnataka, ensuring the highest quality and authenticity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-red-600">Modern Innovation</h3>
            <p>
              While we respect tradition, we're not afraid to innovate. Our fusion sauces combine classic South Indian flavors with global influences, creating unique taste experiences that appeal to modern palates.
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed">
          Today, Saucy Ecom Palace stands as a testament to Rajesh's vision - a place where tradition meets innovation, and where every bottle of sauce tells a story of passion, quality, and the rich flavors of South India.
        </p>

        <div className="text-center mt-8">
          <p className="text-red-600 font-semibold">
            Join us on this flavorful journey and experience the taste of South India, one sauce at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 