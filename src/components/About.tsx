import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-600">Our Story</h1>
      
      <div className="space-y-6 text-gray-700">
        {/* Main Banner Image - KR Market */}
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1336&auto=format&fit=crop" 
            alt="KR Market Bangalore"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">The Heart of Bangalore's Spice Trade</h2>
          </div>
        </div>

        <p className="text-lg leading-relaxed">
          In the vibrant city of Bangalore, where the aroma of street food and spices fills the air, our founder Rajesh Patel discovered his passion for creating extraordinary sauces. Born into a family of spice merchants in the bustling KR Market, Rajesh grew up surrounded by the vibrant flavors of South Indian cuisine.
        </p>

        <p className="text-lg leading-relaxed">
          The journey began in 2025 when Rajesh, after years of experimenting with his grandmother's secret recipes from their family kitchen in Malleshwaram, decided to share his love for bold flavors with the world. What started as a small kitchen experiment in his Bangalore apartment quickly grew into Saucy Ecom Palace - a celebration of authentic Indian flavors with a modern twist.
        </p>

        {/* Image Grid - Traditional and Modern */}
        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1603105037880-880cd4edfb1d?q=80&w=1287&auto=format&fit=crop" 
              alt="Traditional South Indian Spices"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">Traditional Spices</h3>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1603105037880-880cd4edfb1d?q=80&w=1287&auto=format&fit=crop" 
              alt="Modern Sauce Production"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">Modern Production</h3>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-6 rounded-lg my-8">
          <h2 className="text-2xl font-semibold mb-4 text-red-700">Our Mission</h2>
          <p className="text-lg">
            We believe that great food brings people together. Our mission is to create sauces that not only enhance your meals but also tell a story - a story of tradition, innovation, and the rich culinary heritage of South India.
          </p>
        </div>

        {/* Values Section with Images */}
        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1603105037880-880cd4edfb1d?q=80&w=1287&auto=format&fit=crop" 
                alt="Traditional Cooking"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-red-600">Traditional Roots</h3>
            <p>
              Each of our sauces is crafted using time-honored South Indian cooking techniques, passed down through generations. We source our spices directly from local farmers in Karnataka, ensuring the highest quality and authenticity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1603105037880-880cd4edfb1d?q=80&w=1287&auto=format&fit=crop" 
                alt="Modern Innovation"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-red-600">Modern Innovation</h3>
            <p>
              While we respect tradition, we're not afraid to innovate. Our fusion sauces combine classic South Indian flavors with global influences, creating unique taste experiences that appeal to modern palates.
            </p>
          </div>
        </div>

        {/* Final Image - Team/Production */}
        <div className="relative h-96 rounded-lg overflow-hidden my-8">
          <img 
            src="https://images.unsplash.com/photo-1603105037880-880cd4edfb1d?q=80&w=1287&auto=format&fit=crop" 
            alt="Saucy Ecom Palace Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-xl">Passionate about bringing authentic South Indian flavors to your table</p>
            </div>
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