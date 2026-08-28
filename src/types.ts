export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'main' | 'biryani' | 'desserts' | 'drinks';
  isVeg: boolean;
  isPopular?: boolean;
  image: string;
  spicyLevel?: number; // 0 to 3
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  span?: string;
}

export interface CartItem {
  dish: MenuItem;
  quantity: number;
}
