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
  /** Optional scent family line, e.g. "Amber – Woody" */
  profile?: string;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'alpha-saphir',
    name: 'Alpha Saphir',
    brand: 'CALRA',
    price: 370,
    // originalPrice: 440,
    // discount: 34,
    rating: 4.5,
    reviewCount: 47,
    soldCount: 134,
    tags: ['Best seller', 'Floral / Oriental'],
    volumes: [{ size: '3.4 oz', price: 250 }],
    colors: [
      { name: 'Original', color: '#F5F5F5', border: true },
      { name: 'Black', color: '#2D2D2D' },
      { name: 'Gold', color: '#C4A77D' },
      { name: 'Brown', color: '#8B7355' },
      { name: 'Dark', color: '#3D3D3D' },
    ],
    description: 'Alpha Saphir is a captivating blend of floral and oriental notes, designed for those who appreciate timeless elegance. This luxurious fragrance opens with delicate rose petals, transitions to warm amber heart notes, and settles into a rich oud base.',
    notes: {
      top: 'Shinus Molle, Neroli, Nutmeg, Cardamom, Saffron',
      heart: 'Rosewood, Patchouli, Sandalwood, Vetiver, Guaiac Wood',
      base: 'Iris, Amber, Cypriol / Labdanum, Oud',
    },
    longevity: '8-10 hours',
    image: '/images/Alpha-sapphire-without-bg.png',
    category: 'floral',
  },
  {
    id: '7',
    slug: 'desert-rose',
    name: 'Desert Rose',
    brand: 'La Perfume',
    price: 325,
    // originalPrice: 390,
    // discount: 17,
    rating: 4.8,
    reviewCount: 93,
    soldCount: 234,
    tags: ['Women', 'Floral / Romantic'],
    volumes: [{ size: '3.4 oz', price: 325 }],
    colors: [
      { name: 'Rose', color: '#E8B4B8', border: false },
      { name: 'Gold', color: '#C4A77D' },
      { name: 'Blush', color: '#F5D0C5' },
    ],
    description: 'Desert Rose is an exquisite feminine fragrance that embodies grace and sophistication. A delicate symphony of rose petals, soft peony, and warm sandalwood creates an unforgettable aura of timeless beauty.',
    notes: {
      top: 'Rose Petals, Peony, Bergamot',
      heart: 'White Jasmine, Lily of the Valley, Iris',
      base: 'Sandalwood, White Musk, Cashmere Wood',
    },
    longevity: '8-10 hours',
    image: '/images/women/Desert_rose.png',
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
    volumes: [{ size: '3.4 oz', price: 375 }],
    colors: [
      { name: 'Green', color: '#2D4A3E', border: false },
      { name: 'Black', color: '#1A1A1A' },
      { name: 'Gold', color: '#C4A77D' },
    ],
    description: 'Mysterious is an enigmatic fragrance that captures the essence of midnight forests and whispered secrets. A sophisticated blend of deep woods and aromatic spices creates an aura of intrigue and allure.',
    notes: {
      top: 'Bergamot, Cardamom, Shinus Molle, Violet Leaves Absolute, Mint',
      heart: 'Sage, Lavandin, Melon, Pineapple',
      base: 'Vanilla, Guaiac Wood, Cedarwood, Amber Notes',
    },
    longevity: '10-12 hours',
    image: '/images/Mysterious_Green_without_BG.png',
    category: 'woody',
  },
  {
    id: '8',
    slug: 'la-perfume-enchante',
    name: 'La Perfume Enchante\'e',
    brand: 'La Perfume',
    price: 250,
    // originalPrice: 420,
    // discount: 18,
    rating: 4.9,
    reviewCount: 156,
    soldCount: 289,
    tags: ['Best seller', 'Women', 'Oriental'],
    volumes: [{ size: '3.4 oz', price: 250 }],
    colors: [
      { name: 'Coral', color: '#E8A87C', border: false },
      { name: 'Gold', color: '#C4A77D' },
      { name: 'Nude', color: '#E6C9A8' },
    ],
    description: 'Velvet Orchid is a sensuous and captivating fragrance for the modern woman. Rich orchid notes intertwined with honey and rum create an intoxicating blend that lingers beautifully throughout the day.',
    notes: {
      top: 'Mandarin, Fruity Notes, Grapefruit, Rose, Lily of the Valley',
      heart: 'Peony, Magnolia, Ylang Ylang, Sweet Notes, Lactonic Notes',
      base: 'Benzoin Resinoid, White Musk, Vanilla, Woody Notes',
    },
    longevity: '10-12 hours',
    image: '/images/women/La_perfume.png',
    category: 'oriental',
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
    volumes: [{ size: '3.4 oz', price: 375 }],
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
    image: '/images/Black_Phoenix_without_BG.png',
    category: 'oriental',
  },
  {
    id: '9',
    slug: 'la-perfume-fearless',
    name: 'La Perfume Fearless',
    brand: 'La Perfume',
    price: 310,
    // originalPrice: 375,
    // discount: 17,
    rating: 4.7,
    reviewCount: 112,
    soldCount: 198,
    tags: ['New Arrival', 'Women', 'Floral'],
    volumes: [{ size: '3.4 oz', price: 250 }],
    colors: [
      { name: 'Pink', color: '#FFB6C1', border: false },
      { name: 'Rose Gold', color: '#B76E79' },
      { name: 'Pearl', color: '#F5F5F5' },
    ],
    description: 'Midnight Bloom captures the essence of a moonlit garden in full bloom. This enchanting fragrance weaves together night-blooming jasmine, tuberose, and soft musk for a scent that is both mysterious and feminine.',
    notes: {
      top: 'Jasmine, Saffron, Sweet Orange, Fruity Notes, Spicy Notes',
      heart: 'Amber Notes, Sage, Lavender, Tonka Bean',
      base: 'Sweet Woods, Oakmoss, Patchouli, Cashmere',
    },
    longevity: '8-10 hours',
    image: '/images/women/la_perfume2.png',
    category: 'floral',
  },
  {
    id: '4',
    slug: 'imperial-gold',
    name: 'Imperial Gold',
    brand: 'CALRA',
    price: 420,
    // originalPrice: 500,
    // discount: 16,
    rating: 4.9,
    reviewCount: 124,
    soldCount: 312,
    tags: ['Limited Edition', 'Luxury'],
    volumes: [{ size: '3.4 oz', price: 375 }],
    colors: [
      { name: 'Gold', color: '#C4A77D', border: false },
      { name: 'Rose Gold', color: '#B76E79' },
      { name: 'Platinum', color: '#E5E4E2' },
    ],
    description: 'Imperial Gold Elixir is the epitome of luxury perfumery. Crafted with the rarest ingredients from around the world, this opulent fragrance embodies sophistication and prestige. A true masterpiece for the discerning collector.',
    notes: {
      top: 'Cardamom, Orange, Bergamot, Black Pepper',
      heart: 'Lavender, Violet Leaves Absolute, Clary Sage',
      base: 'Benzoin Resinoid, Cedarwood, Patchouli, Amber Notes',
    },
    longevity: '12+ hours',
    image: '/images/Imperial_Golde_Without_BG.png',
    category: 'luxury',
  },
  {
    id: '5',
    slug: 'la-perfume-intensa',
    name: 'La Perfume Intensa',
    brand: 'La Perfume',
    price: 295,
    // originalPrice: 350,
    // discount: 16,
    rating: 4.6,
    reviewCount: 78,
    soldCount: 198,
    tags: ['Popular', 'Gourmand / Sweet'],
    volumes: [{ size: '3.4 oz', price: 250 }],
    colors: [
      { name: 'Caramel', color: '#C68E4E', border: false },
      { name: 'Cream', color: '#F5E6D3' },
      { name: 'Brown', color: '#8B5A2B' },
    ],
    description: 'Wild Caramel is a delectable gourmand fragrance that wraps you in warmth and sweetness. The irresistible blend of caramelized sugar, vanilla, and soft musks creates a cozy, inviting scent perfect for any occasion.',
    notes: {
      top: 'Ambery Notes, Bergamot, Floral Notes, Nutmeg, Sweet Notes, Vanilla',
      heart: 'Jasmine, Labdanum, Orris, Rose, Leather',
      base: 'Ambergris, Balsamic Notes, Musk, Patchouli, Vanilla, Woody Notes',
    },
    longevity: '6-8 hours',
    image: '/images/women/intesnse02.png',
    category: 'gourmand',
  },
  {
    id: '6',
    slug: 'alpha-chrome',
    name: 'Alpha Chrome',
    brand: 'CALRA',
    price: 450,
    rating: 4.8,
    reviewCount: 56,
    soldCount: 145,
    tags: ['Exclusive', 'Gift Set'],
    volumes: [{ size: '3.4 oz', price: 250 }],
    colors: [
      { name: 'Black', color: '#1A1A1A', border: false },
      { name: 'Gold', color: '#C4A77D' },
    ],
    description: 'The Midnight Collection brings together three of our most captivating evening fragrances in one luxurious set. Perfect for gifting or for those who love variety, this collection offers a scent for every mood.',
    notes: {
      top: 'Lavender, Saffron, Nutmeg, Tea Leaves, Cardamom',
      heart: 'Patchouli, Vetiver, Jasmine, Leather',
      base: 'Musky Notes, Oud, Incense, Amber Notes',
    },
    longevity: '8-12 hours',
    image: '/images/aloha-chrome-without-bg.png',
    category: 'collection',
  },
  {
    id: '16',
    slug: 'la-perfume-wild-caramel',
    name: 'La Perfume Wild Caramel',
    brand: 'La Perfume',
    price: 380,
    // originalPrice: 450,
    // discount: 16,
    rating: 4.8,
    reviewCount: 134,
    soldCount: 267,
    tags: ['New Arrival', 'Women', 'Intense'],
    volumes: [{ size: '3.4 oz', price: 250 }],
    colors: [
      { name: 'Rose Gold', color: '#B76E79', border: false },
      { name: 'Gold', color: '#C4A77D' },
      { name: 'Blush', color: '#F5D0C5' },
    ],
    description: 'Intense Passion is a bold and captivating fragrance that embodies feminine strength and allure. With its rich blend of exotic florals and warm spices, this scent leaves a lasting impression that turns heads.',
    notes: {
      top: 'Litchi, Cassis, Bergamot, Bucchu, Apricot',
      heart: 'Turkish Rose, Violet, Osmanthus, Incense',
      base: 'Vanilla, Amber Notes, Patchouli, Tolu Balsam',
    },
    longevity: '10-12 hours',
    image: '/images/women/intense3.png',
    category: 'oriental',
  },
  {
    id: '17',
    slug: 'alpha-oros-grande',
    name: 'Alpha Oros Grande',
    brand: 'CALRA',
    price: 250,
    rating: 4.7,
    reviewCount: 54,
    soldCount: 142,
    tags: ['New Arrival', 'Amber / Woody'],
    volumes: [{ size: '3.4 oz', price: 250 }],
    colors: [
      { name: 'Gold', color: '#C4A77D', border: false },
      { name: 'Black', color: '#1A1A1A' },
      { name: 'Bronze', color: '#8B7355' },
    ],
    description:
      'Alpha Oros Grande is an amber–woody CALRA signature: bright citrus and spice open into aromatic lavender and sage, then settle into resinous woods, patchouli, and warm amber.',
    notes: {
      top: 'Cardamom, Orange, Bergamot, Black Pepper',
      heart: 'Lavender, Violet Leaves Absolute, Clary Sage',
      base: 'Benzoin Resinoid, Cedarwood, Patchouli, Amber Notes',
    },
    profile: 'Amber – Woody',
    longevity: '10-12 hours',
    image: '/images/Alpha-Oros-Grande-without-bg.png',
    category: 'woody',
  },
  {
    id: '18',
    slug: 'alpha-jade',
    name: 'Alpha Jade',
    brand: 'CALRA',
    price: 250,
    rating: 4.6,
    reviewCount: 41,
    soldCount: 98,
    tags: ['New Arrival', 'Aromatic / Fougère'],
    volumes: [{ size: '3.4 oz', price: 250 }],
    colors: [
      { name: 'Jade', color: '#2D4A3E', border: false },
      { name: 'Black', color: '#1A1A1A' },
      { name: 'Gold', color: '#C4A77D' },
    ],
    description:
      'Alpha Jade balances cool aromatics and green freshness with a soft fruity lift, drying down to vanilla, guaiac wood, cedar, and amber for a refined fougère character.',
    notes: {
      top: 'Bergamot, Cardamom, Shinus Molle, Violet Leaves Absolute, Mint',
      heart: 'Sage, Lavandin, Melon, Pineapple',
      base: 'Vanilla, Guaiac Wood, Cedarwood, Amber Notes',
    },
    profile: 'Aromatic – Fougère',
    longevity: '8-10 hours',
    image: '/images/Alpha-Jade-Without-bg.png',
    category: 'woody',
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

