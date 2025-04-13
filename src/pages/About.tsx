
import { ShieldCheck, Truck, Medal, BarChart3 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sauce-red/10 to-sauce-orange/10 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Saucy Palace</h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            We're on a mission to transform ordinary meals into extraordinary culinary adventures with our premium sauces.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Saucy Palace was born out of a passion for flavor and culinary experimentation. Founded in 2018 by Chef Maria Rodriguez, our journey began in a small kitchen with big dreams.
              </p>
              <p className="text-gray-700 mb-4">
                What started as creating sauces for family and friends quickly grew into a beloved brand with a loyal following. Our commitment to quality ingredients and innovative flavor combinations has remained our guiding principle.
              </p>
              <p className="text-gray-700">
                Today, we're proud to offer over 50 different sauce varieties, each crafted in small batches to ensure the highest quality and flavor consistency.
              </p>
            </div>
            <div className="relative h-[400px]">
              <div className="absolute top-8 -right-4 w-64 h-64 rounded-full bg-sauce-yellow/30 blur-md"></div>
              <div className="absolute -bottom-8 left-8 w-48 h-48 rounded-full bg-sauce-green/30 blur-md"></div>
              
              <div className="absolute top-0 right-0 w-56 h-72 bg-white rounded-xl shadow-xl transform rotate-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1598511726622-8924da213b28?q=80&w=687&auto=format&fit=crop" 
                  alt="Sauce preparation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/4 left-0 w-52 h-64 bg-white rounded-xl shadow-xl transform -rotate-3 overflow-hidden z-10">
                <img 
                  src="https://images.unsplash.com/photo-1606312618658-a03cceb5fcc5?q=80&w=687&auto=format&fit=crop" 
                  alt="Sauce ingredients" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-1/4 w-48 h-56 bg-white rounded-xl shadow-xl transform -rotate-12 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1627485937980-221c88ac04a9?q=80&w=687&auto=format&fit=crop" 
                  alt="Sauce bottles" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Saucy Palace, these core values guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-sauce-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck size={24} className="text-sauce-red" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. From ingredient selection to production, we maintain the highest standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-sauce-orange/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Medal size={24} className="text-sauce-orange" />
              </div>
              <h3 className="font-bold text-lg mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new flavor combinations and techniques to bring exciting tastes to your table.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-sauce-yellow/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-sauce-yellow" />
              </div>
              <h3 className="font-bold text-lg mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to sustainable practices throughout our production process and supply chain.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-sauce-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Truck size={24} className="text-sauce-green" />
              </div>
              <h3 className="font-bold text-lg mb-2">Community</h3>
              <p className="text-gray-600">
                We believe in giving back to our community and supporting local initiatives and food banks.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind your favorite sauces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 relative">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/33.jpg" 
                    alt="Maria Rodriguez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-1/4 bg-sauce-red w-8 h-8 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="font-bold text-lg mb-1">Maria Rodriguez</h3>
              <p className="text-sauce-red font-medium mb-2">Founder & Head Chef</p>
              <p className="text-gray-600 text-sm">
                Culinary innovator with over 15 years of experience in gourmet kitchens around the world.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/54.jpg" 
                    alt="David Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-1/4 bg-sauce-orange w-8 h-8 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="font-bold text-lg mb-1">David Chen</h3>
              <p className="text-sauce-orange font-medium mb-2">Production Manager</p>
              <p className="text-gray-600 text-sm">
                Quality control expert ensuring each bottle meets our high standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/45.jpg" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-1/4 bg-sauce-yellow w-8 h-8 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="font-bold text-lg mb-1">Sarah Johnson</h3>
              <p className="text-sauce-yellow font-medium mb-2">Flavor Developer</p>
              <p className="text-gray-600 text-sm">
                Taste expert with a background in food science and culinary arts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Marcus Williams" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-1/4 bg-sauce-green w-8 h-8 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="font-bold text-lg mb-1">Marcus Williams</h3>
              <p className="text-sauce-green font-medium mb-2">Sustainability Officer</p>
              <p className="text-gray-600 text-sm">
                Leading our eco-friendly initiatives and sustainable sourcing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-sauce">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Join Our Flavorful Journey</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Ready to explore our world of sauces? Check out our collection and find your new favorite flavor.
          </p>
          <a 
            href="/products" 
            className="inline-block bg-white text-sauce-red font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Shop Our Sauces
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
