export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  soldCount: number;
  tags: string[];
  volumes: { size: string; price: number }[];
  colors: { name: string; color: string; border?: boolean }[];
  description: string;
  notes: {
    top: string;
    heart: string;
    base: string;
  };
  longevity: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'desert-rose-signature',
    name: 'Desert Rose Signature',
    brand: 'CALRA',
    price: 370,
    originalPrice: 440,
    discount: 34,
    rating: 4.5,
    reviewCount: 47,
    soldCount: 134,
    tags: ['Best seller', 'Floral / Oriental'],
    volumes: [
      { size: '30ml', price: 270 },
      { size: '50ml', price: 370 },
      { size: '100ml', price: 520 },
      { size: '150ml', price: 680 },
    ],
    colors: [
      { name: 'Original', color: '#F5F5F5', border: true },
      { name: 'Black', color: '#2D2D2D' },
      { name: 'Gold', color: '#C4A77D' },
      { name: 'Brown', color: '#8B7355' },
      { name: 'Dark', color: '#3D3D3D' },
    ],
    description: 'Desert Rose Signature is a captivating blend of floral and oriental notes, designed for those who appreciate timeless elegance. This luxurious fragrance opens with delicate rose petals, transitions to warm amber heart notes, and settles into a rich oud base.',
    notes: {
      top: 'Rose, Bergamot, Pink Pepper',
      heart: 'Jasmine, Amber, Patchouli',
      base: 'Oud, Vanilla, Musk',
    },
    longevity: '8-10 hours',
    image: '/images/Landing Page/Background/Desert Rose.png',
    category: 'floral',
  },
  {
    id: '2',
    slug: 'mysterious',
    name: 'Mysterious',
    brand: 'CALRA',
    price: 375,
    originalPrice: 450,
    discount: 17,
    rating: 4.7,
    reviewCount: 62,
    soldCount: 189,
    tags: ['New Arrival', 'Woody / Spicy'],
    volumes: [
      { size: '30ml', price: 275 },
      { size: '50ml', price: 375 },
      { size: '100ml', price: 540 },
      { size: '150ml', price: 700 },
    ],
    colors: [
      { name: 'Green', color: '#2D4A3E', border: false },
      { name: 'Black', color: '#1A1A1A' },
      { name: 'Gold', color: '#C4A77D' },
    ],
    description: 'Mysterious is an enigmatic fragrance that captures the essence of midnight forests and whispered secrets. A sophisticated blend of deep woods and aromatic spices creates an aura of intrigue and allure.',
    notes: {
      top: 'Cardamom, Black Pepper, Saffron',
      heart: 'Oud, Incense, Cedar',
      base: 'Sandalwood, Vetiver, Leather',
    },
    longevity: '10-12 hours',
    image: '/images/Landing Page/Background/Mysterious.png',
    category: 'woody',
  },
  {
    id: '3',
    slug: 'black-phoenix',
    name: 'Black Phoenix',
    brand: 'CALRA',
    price: 375,
    originalPrice: 420,
    discount: 11,
    rating: 4.8,
    reviewCount: 89,
    soldCount: 256,
    tags: ['Best seller', 'Oriental / Amber'],
    volumes: [
      { size: '30ml', price: 280 },
      { size: '50ml', price: 375 },
      { size: '100ml', price: 530 },
      { size: '150ml', price: 690 },
    ],
    colors: [
      { name: 'Black', color: '#1A1A1A', border: false },
      { name: 'Gold', color: '#C4A77D' },
      { name: 'Dark Blue', color: '#1E3A5F' },
    ],
    description: 'Black Phoenix rises from the ashes with an intense and memorable presence. This bold fragrance combines smoky undertones with rich amber notes, creating a scent that commands attention and leaves a lasting impression.',
    notes: {
      top: 'Bergamot, Cinnamon, Ginger',
      heart: 'Rose Absolute, Oud, Amber',
      base: 'Musk, Benzoin, Tonka Bean',
    },
    longevity: '12+ hours',
    image: '/images/Landing Page/Background/Blue.png',
    category: 'oriental',
  },
  {
    id: '4',
    slug: 'imperial-gold-elixir',
    name: 'Imperial Gold Elixir',
    brand: 'CALRA',
    price: 420,
    originalPrice: 500,
    discount: 16,
    rating: 4.9,
    reviewCount: 124,
    soldCount: 312,
    tags: ['Limited Edition', 'Luxury'],
    volumes: [
      { size: '30ml', price: 320 },
      { size: '50ml', price: 420 },
      { size: '100ml', price: 600 },
      { size: '150ml', price: 780 },
    ],
    colors: [
      { name: 'Gold', color: '#C4A77D', border: false },
      { name: 'Rose Gold', color: '#B76E79' },
      { name: 'Platinum', color: '#E5E4E2' },
    ],
    description: 'Imperial Gold Elixir is the epitome of luxury perfumery. Crafted with the rarest ingredients from around the world, this opulent fragrance embodies sophistication and prestige. A true masterpiece for the discerning collector.',
    notes: {
      top: 'Royal Oud, Saffron, Pink Pepper',
      heart: 'Bulgarian Rose, Iris, Jasmine Sambac',
      base: 'Ambergris, Sandalwood, White Musk',
    },
    longevity: '12+ hours',
    image: '/images/Landing Page/Background/Single.png',
    category: 'luxury',
  },
  {
    id: '5',
    slug: 'wild-caramel',
    name: 'Wild Caramel',
    brand: 'La Perfume',
    price: 295,
    originalPrice: 350,
    discount: 16,
    rating: 4.6,
    reviewCount: 78,
    soldCount: 198,
    tags: ['Popular', 'Gourmand / Sweet'],
    volumes: [
      { size: '30ml', price: 220 },
      { size: '50ml', price: 295 },
      { size: '100ml', price: 420 },
      { size: '150ml', price: 560 },
    ],
    colors: [
      { name: 'Caramel', color: '#C68E4E', border: false },
      { name: 'Cream', color: '#F5E6D3' },
      { name: 'Brown', color: '#8B5A2B' },
    ],
    description: 'Wild Caramel is a delectable gourmand fragrance that wraps you in warmth and sweetness. The irresistible blend of caramelized sugar, vanilla, and soft musks creates a cozy, inviting scent perfect for any occasion.',
    notes: {
      top: 'Salted Caramel, Almond, Bergamot',
      heart: 'Vanilla Orchid, Praline, Coconut',
      base: 'Sandalwood, White Musk, Benzoin',
    },
    longevity: '6-8 hours',
    image: '/images/Landing Page/Background/Subtract2.png',
    category: 'gourmand',
  },
  {
    id: '6',
    slug: 'midnight-collection',
    name: 'Midnight Collection',
    brand: 'CALRA',
    price: 450,
    rating: 4.8,
    reviewCount: 56,
    soldCount: 145,
    tags: ['Exclusive', 'Gift Set'],
    volumes: [
      { size: '3x30ml', price: 450 },
      { size: '3x50ml', price: 620 },
    ],
    colors: [
      { name: 'Black', color: '#1A1A1A', border: false },
      { name: 'Gold', color: '#C4A77D' },
    ],
    description: 'The Midnight Collection brings together three of our most captivating evening fragrances in one luxurious set. Perfect for gifting or for those who love variety, this collection offers a scent for every mood.',
    notes: {
      top: 'Various premium notes',
      heart: 'Exclusive blends',
      base: 'Long-lasting bases',
    },
    longevity: '8-12 hours',
    image: '/images/Landing Page/Background/Three.png',
    category: 'collection',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getRelatedProducts(currentSlug: string, limit: number = 4): Product[] {
  return products.filter(p => p.slug !== currentSlug).slice(0, limit);
}

export const reviews = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    initials: 'SM',
    rating: 5,
    date: '2 days ago',
    text: 'Absolutely stunning fragrance! This has become my signature scent. The blend of notes is perfectly balanced, and it lasts all day. I\'ve received so many compliments. Highly recommend!',
    helpful: 12,
    color: '#C4A77D',
  },
  {
    id: 2,
    name: 'James Davidson',
    initials: 'JD',
    rating: 4,
    date: '1 week ago',
    text: 'Great fragrance with excellent longevity. The base is rich without being overpowering. Perfect for evening wear. Only reason for 4 stars is the price point, but you\'re definitely getting quality.',
    helpful: 8,
    color: '#7B9E89',
  },
  {
    id: 3,
    name: 'Emily Carter',
    initials: 'EC',
    rating: 5,
    date: '2 weeks ago',
    text: 'This perfume is luxurious and elegant. The top notes are beautiful and the heart adds warmth. The packaging is also gorgeous - makes for a perfect gift. Will definitely be purchasing again!',
    helpful: 15,
    color: '#9B8AA6',
  },
  {
    id: 4,
    name: 'Michael Rodriguez',
    initials: 'MR',
    rating: 4,
    date: '3 weeks ago',
    text: 'Sophisticated scent that\'s perfect for special occasions. The projection is good without being overwhelming. My partner loves it! Shipping was fast and the customer service was excellent.',
    helpful: 6,
    color: '#8B9EAA',
  },
];

export const ratingBreakdown = [
  { stars: 5, count: 28 },
  { stars: 4, count: 12 },
  { stars: 3, count: 5 },
  { stars: 2, count: 1 },
  { stars: 1, count: 1 },
];

