export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  colors?: string[];
  sizes?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export type Screen = 'HOME' | 'PRODUCT_DETAIL' | 'BAG' | 'CHECKOUT' | 'CONFIRMATION' | 'EXPLORE' | 'WISHLIST' | 'PROFILE' | 'BLOG' | 'SEARCH_RESULTS';
