/**
 * Site configuration - SEO optimized for Atlanta Perfume Retail
 */
export const siteConfig = {
  name: 'CALRA',
  tagline: 'Luxury Perfumes for Atlanta Retailers',
  description: 'Atlanta\'s premier wholesale perfume distributor. CALRA offers luxury fragrances, artisan oud oils, and designer scents for retail partners. Free shipping on bulk orders.',
  shortDescription: 'Wholesale luxury perfumes and fragrances for Atlanta retailers',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://calraperfumes.com',
  ogImage: '/images/og-image.jpg',
  
  // Contact Information
  contact: {
    phone: '+1 (404) 555-8932',
    email: 'wholesale@calraperfumes.com',
    supportEmail: 'support@calraperfumes.com',
  },
  
  // Address for Local SEO
  address: {
    streetAddress: '3500 Peachtree Road NE, Suite 200',
    addressLocality: 'Atlanta',
    addressRegion: 'GA',
    postalCode: '30326',
    addressCountry: 'US',
    fullAddress: '3500 Peachtree Road NE, Suite 200, Atlanta, GA 30326',
  },
  
  // Business Hours
  businessHours: {
    weekdays: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
    saturday: 'Sat: 10:00 AM - 4:00 PM EST',
    sunday: 'Sun: Closed',
    openingHours: ['Mo-Fr 09:00-18:00', 'Sa 10:00-16:00'],
  },
  
  // Social Media Links
  links: {
    instagram: 'https://instagram.com/calraperfumes',
    facebook: 'https://facebook.com/calraperfumes',
    twitter: 'https://twitter.com/calraperfumes',
    linkedin: 'https://linkedin.com/company/calraperfumes',
    pinterest: 'https://pinterest.com/calraperfumes',
  },
  
  // SEO Keywords
  keywords: [
    'wholesale perfume Atlanta',
    'luxury fragrance distributor Georgia',
    'perfume for retailers Atlanta',
    'bulk perfume wholesale',
    'designer fragrances wholesale',
    'oud perfume Atlanta',
    'artisan perfume wholesale',
    'luxury scents for retailers',
    'perfume supplier Atlanta GA',
    'wholesale cologne distributor',
    'fragrance wholesale southeast',
    'perfume business Atlanta',
    'CALRA perfumes',
    'Atlanta perfume store',
    'Georgia fragrance wholesale',
  ],
  
  // Geo targeting
  geo: {
    region: 'US-GA',
    placename: 'Atlanta',
    position: '33.8481;-84.3733',
    ICBM: '33.8481, -84.3733',
  },
  
  // Business Info for Schema
  business: {
    name: 'CALRA Perfumes',
    legalName: 'CALRA Luxury Fragrances LLC',
    foundingDate: '2018',
    priceRange: '$$$',
    currencyAccepted: 'USD',
    paymentAccepted: ['Credit Card', 'Debit Card', 'Wire Transfer', 'PayPal'],
    areaServed: ['Atlanta', 'Georgia', 'Southeast United States'],
    sameAs: [
      'https://instagram.com/calraperfumes',
      'https://facebook.com/calraperfumes',
      'https://twitter.com/calraperfumes',
      'https://linkedin.com/company/calraperfumes',
    ],
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
  { label: 'Contact', href: '/contact' },
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
  { ml: 150, label: '150ml' },
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

/**
 * SEO page titles template
 */
export const pageTitles = {
  home: 'CALRA | Wholesale Luxury Perfumes for Atlanta Retailers',
  products: 'Shop Wholesale Perfumes | CALRA - Atlanta Fragrance Distributor',
  collections: 'Perfume Collections | Wholesale Designer Fragrances Atlanta',
  about: 'About CALRA | Atlanta\'s Premier Perfume Wholesale Partner',
  contact: 'Contact Us | CALRA Wholesale Perfumes Atlanta',
  cart: 'Shopping Cart | CALRA Perfumes',
  checkout: 'Checkout | CALRA Perfumes',
};
