/**
 * Site configuration
 */
export const siteConfig = {
  name: 'Essence',
  description: 'Luxury Perfume Boutique',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: '/images/og.jpg',
  links: {
    instagram: 'https://instagram.com/essence',
    facebook: 'https://facebook.com/essence',
    twitter: 'https://twitter.com/essence',
  },
};

/**
 * Navigation links
 */
export const navLinks = [
  { label: 'Shop All', href: '/products' },
  { label: 'Collections', href: '/collections' },
  { label: 'For Her', href: '/collections/women' },
  { label: 'For Him', href: '/collections/men' },
  { label: 'Our Story', href: '/about' },
];

/**
 * Fragrance families
 */
export const fragranceFamilies = [
  { value: 'floral', label: 'Floral' },
  { value: 'oriental', label: 'Oriental' },
  { value: 'woody', label: 'Woody' },
  { value: 'fresh', label: 'Fresh' },
  { value: 'citrus', label: 'Citrus' },
  { value: 'aromatic', label: 'Aromatic' },
  { value: 'gourmand', label: 'Gourmand' },
];

/**
 * Concentration types
 */
export const concentrations = [
  { value: 'parfum', label: 'Parfum', strength: '20-30%' },
  { value: 'edp', label: 'Eau de Parfum', strength: '15-20%' },
  { value: 'edt', label: 'Eau de Toilette', strength: '5-15%' },
  { value: 'cologne', label: 'Cologne', strength: '2-4%' },
];

/**
 * Available sizes
 */
export const availableSizes = [
  { ml: 30, label: '30ml' },
  { ml: 50, label: '50ml' },
  { ml: 100, label: '100ml' },
];

/**
 * Sort options for products
 */
export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A-Z' },
  { value: 'name-desc', label: 'Name: Z-A' },
];

