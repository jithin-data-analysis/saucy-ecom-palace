import React from 'react';
import { Shield, Lightbulb, LineChart, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-sauce-red" />,
      title: "Quality",
      description: "We never compromise on quality. From ingredient selection to production, we maintain the highest standards."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-sauce-orange" />,
      title: "Innovation",
      description: "We constantly explore new flavor combinations and techniques to bring exciting tastes to your table."
    },
    {
      icon: <LineChart className="w-8 h-8 text-sauce-yellow" />,
      title: "Sustainability",
      description: "We're committed to sustainable practices throughout our production process and supply chain."
    },
    {
      icon: <Users className="w-8 h-8 text-sauce-green" />,
      title: "Community",
      description: "We believe in giving back to our community and supporting local initiatives and food banks."
    }
  ];

  const team = [
    {
      name: "Jithin",
      role: "GenAI Specialist",
      description: "Leading our AI initiatives to enhance customer experience and optimize sauce recipes.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      color: "bg-sauce-red"
    },
    {
      name: "Rajesh",
      role: "Sauce Specialist",
      description: "Master sauce creator with exceptional taste and culinary innovation skills.",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      color: "bg-sauce-orange"
    },
    {
      name: "Chandru",
      role: "Cloud & DevOps Specialist",
      description: "Ensuring our systems run smoothly and securely across all platforms.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      color: "bg-sauce-yellow"
    },
    {
      name: "Ajay",
      role: "ML Engineer",
      description: "Developing predictive models to forecast flavor trends and customer preferences.",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      color: "bg-sauce-green"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Story Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl font-bold text-center mb-8">Our Story</h1>
        
        {/* Hero Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
          <img 
            src="/images/flowing sauace 1.jpeg" 
            alt="Flowing sauce splash"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Crafting Flavors Since 2025</h2>
              <p className="text-lg">A journey of passion, tradition, and innovation</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            In the vibrant city of Bangalore, where the aroma of street food and spices fills the air, our founder Rajesh discovered his passion for creating extraordinary sauces. Born into a family of spice merchants in the bustling KR Market, Rajesh grew up surrounded by the vibrant flavors of South Indian cuisine.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="rounded-xl overflow-hidden h-[300px]">
              <img 
                src="/images/flowing sauace 2.jpeg" 
                alt="Artisanal sauce creation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-[300px]">
              <img 
                src="/images/flowing sauace 3.jpeg" 
                alt="Premium sauce collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The journey began in 2025 when Rajesh, after years of experimenting with his grandmother's secret recipes from their family kitchen in Malleshwaram, decided to share his love for bold flavors with the world. What started as a small kitchen experiment in his Bangalore apartment quickly grew into Saucy Palace - a celebration of authentic Indian flavors with a modern twist.
          </p>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden h-[400px] my-12">
            <img 
              src="/images/sauce dream.jpeg" 
              alt="Sauce crafting perfection"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-lg leading-relaxed">
            Today, Saucy Palace stands as a testament to Rajesh's vision - a place where tradition meets innovation, and where every bottle of sauce tells a story of passion, quality, and the rich flavors of South India.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <p className="text-gray-600">At Saucy Palace, these core values guide everything we do.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4 mx-auto">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-600 mb-12">The passionate people behind your favorite sauces.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="relative inline-block mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full ${member.color} border-2 border-white`}></div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sauce-red font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About; 