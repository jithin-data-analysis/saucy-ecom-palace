export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number | null;
  onSale: boolean;
  image: string;
  images: string[];
  category: string;
  spiceLevel: number;
  rating: number;
  shortDescription: string;
  description: string;
  ingredients: string[];
  stockQuantity: number;
  featured: boolean;
  new: boolean;
}
