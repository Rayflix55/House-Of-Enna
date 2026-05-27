import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Straight Dress',
    price: 13000,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop',
    category: 'Dresses',
    description: 'Straight Dress 💛. Made to fit you perfectly. Fully lined, clean finishing. In-stock fabrics only. Delivery in Abuja & nationwide.\n\nDM "DRESS" on WhatsApp to order + see available prints.',
    colors: ['#EAB308', '#000000', '#043327'],
    sizes: ['S', 'M', 'L', 'XL', 'Custom Fit'],
    colorImages: {
      '#EAB308': 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop',
      '#000000': 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop',
      '#043327': 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&auto=format&fit=crop'
    }
  },
  {
    id: '2',
    name: 'Two-Piece Set',
    price: 14000,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop',
    category: 'Two-Piece Sets',
    description: 'Two-Piece Set 💛. Top + skirt, made to fit. Perfect for casual + outings. In-stock fabrics only. Delivery in Abuja & nationwide.\n\nDM "SET" on WhatsApp to order + see prints.',
    colors: ['#EAB308', '#EF4444', '#10B981'],
    sizes: ['S', 'M', 'L', 'XL', 'Custom Fit'],
    colorImages: {
      '#EAB308': 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop',
      '#EF4444': 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop',
      '#10B981': 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&auto=format&fit=crop'
    }
  },
  {
    id: '3',
    name: 'Luxury Lace Dress',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop',
    category: 'Luxury Lace',
    description: 'Luxury Lace Dress ✨. Fully lined, clean finishing. Made to fit you perfectly. In-stock lace only. Delivery in Abuja & nationwide.\n\nDM "LACE" on WhatsApp to order + see designs.',
    colors: ['#FFFFFF', '#D4AF37', '#722F37'],
    sizes: ['S', 'M', 'L', 'XL', 'Custom Fit'],
    colorImages: {
      '#FFFFFF': 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop',
      '#D4AF37': 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop',
      '#722F37': 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=800&auto=format&fit=crop'
    }
  },
  {
    id: '4',
    name: 'Ankara Multi-Layer Dress',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop',
    category: 'Dresses',
    description: 'Beautiful multi-layered vibrant Ankara Dress designed to turn heads. Fully customized stitching to standard sizes or personal measurements. Available in Abuja and nationwide.',
    colors: ['#EAB308', '#e25c30', '#DB2777'],
    sizes: ['S', 'M', 'L', 'XL', 'Custom Fit'],
    colorImages: {
      '#EAB308': 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop',
      '#e25c30': 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop',
      '#DB2777': 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&auto=format&fit=crop'
    }
  },
  {
    id: '5',
    name: 'Premium Senator Wear',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&auto=format&fit=crop',
    category: 'Senator & Native',
    description: 'Modern men senator wear, custom fitted. Comes with top and trousers. Tailored with premium material for events, weddings, and executive looks.',
    colors: ['#1E293B', '#043327', '#0F172A'],
    sizes: ['M', 'L', 'XL', 'XXL', 'Custom Fit'],
    colorImages: {
      '#1E293B': 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&auto=format&fit=crop',
      '#043327': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop',
      '#0F172A': 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&auto=format&fit=crop'
    }
  },
  {
    id: '6',
    name: 'Adire Silk Kaftan',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop',
    category: 'Dresses',
    description: 'Elegant loose-flowing Adire Pure Silk Kaftan. High end premium feeling material combined with traditional Nigerian printing craftsmanship.',
    colors: ['#eae3d5', '#e25c30', '#059669'],
    sizes: ['Free Size', 'Custom Fit'],
    colorImages: {
      '#eae3d5': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop',
      '#e25c30': 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop',
      '#059669': 'https://images.unsplash.com/photo-1495385794356-15371f548e61?w=800&auto=format&fit=crop'
    }
  }
];


export const CATEGORIES = [
  { name: 'Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&auto=format&fit=crop' },
  { name: 'Two-Piece Sets', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&auto=format&fit=crop' },
  { name: 'Luxury Lace', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=300&auto=format&fit=crop' },
  { name: 'Senator & Native', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=300&auto=format&fit=crop' }
];
