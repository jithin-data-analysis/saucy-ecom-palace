import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Ghost Pepper Hot Sauce",
    price: 12.99,
    salePrice: 9.99,
    onSale: true,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=687&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515946951604-5161e441dc04?q=80&w=687&auto=format&fit=crop",
    ],
    category: "hot",
    spiceLevel: 5,
    rating: 4.8,
    shortDescription: "Intense heat with smoky undertones",
    description: "Our Ghost Pepper Hot Sauce delivers an unforgettable kick with the perfect balance of heat and flavor. Made with authentic ghost peppers, this sauce adds intense spice to any dish while maintaining a complex flavor profile with smoky undertones and a hint of sweetness.",
    ingredients: ["Ghost Peppers", "Vinegar", "Garlic", "Salt", "Sugar", "Xanthan Gum"],
    stockQuantity: 45,
    featured: true,
    new: false
  },
  {
    id: "2",
    name: "Hickory Smoke BBQ Sauce",
    price: 10.99,
    salePrice: null,
    onSale: false,
    image: "https://images.unsplash.com/photo-1608500218890-c4f9548a4171?q=80&w=687&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608500218890-c4f9548a4171?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo/2023/03/14/20/10/barbecue-sauce-7852372_1280.jpg",
      "https://images.unsplash.com/photo/2018/07/14/21/30/sauce-3538105_1280.jpg"
    ],
    category: "bbq",
    spiceLevel: 2,
    rating: 4.9,
    shortDescription: "Rich, smoky flavor for perfect grilling",
    description: "Our signature Hickory Smoke BBQ Sauce combines real hickory smoke with a perfect balance of sweet and tangy flavors. Ideal for basting, marinating, or as a dipping sauce. Elevate your grilling game with this rich, flavorful sauce.",
    ingredients: ["Tomato Paste", "Brown Sugar", "Vinegar", "Molasses", "Natural Hickory Smoke Flavor", "Spices", "Salt"],
    stockQuantity: 78,
    featured: true,
    new: false
  },
  {
    id: "3",
    name: "Mango Habanero Sauce",
    price: 11.99,
    salePrice: null,
    onSale: false,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=687&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo/2017/09/30/09/29/hot-sauce-2801503_1280.jpg",
      "https://images.unsplash.com/photo/2019/04/14/03/08/sauce-4126054_1280.jpg"
    ],
    category: "specialty",
    spiceLevel: 4,
    rating: 4.7,
    shortDescription: "Sweet tropical mangos with a spicy kick",
    description: "Our Mango Habanero Sauce perfectly balances the sweet tropical flavor of ripe mangos with the fiery heat of habanero peppers. Great for wings, tacos, grilled chicken, or as a dipping sauce for a sweet and spicy flavor explosion.",
    ingredients: ["Mangoes", "Habanero Peppers", "Sugar", "Vinegar", "Lime Juice", "Salt", "Garlic"],
    stockQuantity: 32,
    featured: true,
    new: true
  },
  {
    id: "4",
    name: "Classic Hot Sauce Collection",
    price: 24.99,
    salePrice: null,
    onSale: false,
    image: "/lovable-uploads/caa98b18-9333-4994-a9a7-b3dad221d493.png",
    images: [
      "/lovable-uploads/caa98b18-9333-4994-a9a7-b3dad221d493.png",
      "https://images.unsplash.com/photo-1620705013083-7cc3c45b11a5?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607430761612-701f567a6801?q=80&w=687&auto=format&fit=crop",
    ],
    category: "gift",
    spiceLevel: 3,
    rating: 4.9,
    shortDescription: "Our three most popular hot sauces in one gift box",
    description: "This gift box features our three most popular hot sauces: Ghost Pepper Hot Sauce, Jalapeño Lime Hot Sauce, and Chipotle Hot Sauce. Perfect as a gift for the hot sauce enthusiast in your life or as a sampler to discover your favorite.",
    ingredients: ["Various ingredients from our signature hot sauces"],
    stockQuantity: 15,
    featured: true,
    new: false
  },
  {
    id: "5",
    name: "Garlic Chili Sauce",
    price: 9.99,
    salePrice: null,
    onSale: false,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=687&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo/2019/04/14/03/08/sauce-4126055_1280.jpg",
      "https://images.unsplash.com/photo/2017/09/30/09/29/sauce-2801505_1280.jpg"
    ],
    category: "hot",
    spiceLevel: 3,
    rating: 4.6,
    shortDescription: "Savory garlic with a spicy chili kick",
    description: "Our Garlic Chili Sauce combines the savory depth of roasted garlic with the balanced heat of red chilis. Perfect for stir-fries, marinades, or as a condiment for almost any dish that could use a flavorful kick.",
    ingredients: ["Red Chili", "Garlic", "Vinegar", "Sugar", "Salt", "Xanthan Gum"],
    stockQuantity: 60,
    featured: false,
    new: false
  },
  {
    id: "6",
    name: "Carolina Reaper Extreme",
    price: 14.99,
    salePrice: 13.49,
    onSale: true,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=687&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo/2019/04/14/03/08/sauce-4126053_1280.jpg",
      "https://images.unsplash.com/photo/2017/09/30/09/29/sauce-2801506_1280.jpg"
    ],
    category: "hot",
    spiceLevel: 6,
    rating: 4.5,
    shortDescription: "Our hottest sauce for extreme heat lovers",
    description: "Warning: Extremely Hot! Made with authentic Carolina Reaper peppers, currently the world's hottest pepper. This sauce is for serious heat seekers only. Despite its extreme heat, we've crafted a sauce with remarkable flavor notes of fruit and sweet heat.",
    ingredients: ["Carolina Reaper Peppers", "Vinegar", "Salt", "Garlic", "Citric Acid"],
    stockQuantity: 25,
    featured: false,
    new: true
  },
  {
    id: "7",
    name: "Honey Chipotle BBQ",
    price: 11.99,
    salePrice: null,
    onSale: false,
    image: "/lovable-uploads/63103765-3a3a-4310-973f-c7c31c5e667f.png",
    images: [
      "/lovable-uploads/63103765-3a3a-4310-973f-c7c31c5e667f.png",
      "https://images.unsplash.com/photo-1608500218890-c4f9548a4171?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611027795566-38f74944d676?q=80&w=687&auto=format&fit=crop",
    ],
    category: "bbq",
    spiceLevel: 2,
    rating: 4.7,
    shortDescription: "Sweet honey balanced with smoky chipotle",
    description: "This unique BBQ sauce combines the natural sweetness of pure honey with the smoky heat of chipotle peppers. The result is a perfectly balanced sauce that caramelizes beautifully on the grill and adds a sweet, smoky, slightly spicy flavor to any meat.",
    ingredients: ["Tomato Paste", "Honey", "Apple Cider Vinegar", "Chipotle Peppers", "Molasses", "Spices", "Salt"],
    stockQuantity: 42,
    featured: false,
    new: false
  },
  {
    id: "8",
    name: "Truffle Hot Sauce",
    price: 18.99,
    salePrice: null,
    onSale: false,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=687&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo/2019/04/14/03/08/sauce-4126056_1280.jpg",
      "https://images.unsplash.com/photo/2019/04/14/03/08/sauce-4126057_1280.jpg"
    ],
    category: "specialty",
    spiceLevel: 2,
    rating: 4.9,
    shortDescription: "Luxurious truffle flavor with a mild heat",
    description: "Our gourmet Truffle Hot Sauce combines the earthy, luxurious flavor of black truffles with a mild chili heat. This sophisticated sauce elevates everyday dishes like eggs, pasta, pizza, and grilled meats to restaurant-quality experiences.",
    ingredients: ["Black Truffles", "Red Chili Peppers", "Olive Oil", "Garlic", "Sea Salt"],
    stockQuantity: 18,
    featured: false,
    new: false
  }
];

export const featuredProducts = products.filter(product => product.featured);
