'use client';

import { ProductCard } from './ProductCard';

// Placeholder product data
const products = [
  { id: '1', name: 'Midnight Rose', brand: 'Essence', price: 195, image: '/images/products/midnight-rose.jpg', slug: 'midnight-rose', isNew: true },
  { id: '2', name: 'Ocean Breeze', brand: 'Essence', price: 165, image: '/images/products/ocean-breeze.jpg', slug: 'ocean-breeze' },
  { id: '3', name: 'Golden Amber', brand: 'Essence', price: 225, image: '/images/products/golden-amber.jpg', slug: 'golden-amber' },
  { id: '4', name: 'Velvet Noir', brand: 'Essence', price: 185, image: '/images/products/velvet-noir.jpg', slug: 'velvet-noir' },
  { id: '5', name: 'Eternal Bloom', brand: 'Essence', price: 210, image: '/images/products/eternal-bloom.jpg', slug: 'eternal-bloom' },
  { id: '6', name: 'Mystic Oud', brand: 'Essence', price: 295, image: '/images/products/mystic-oud.jpg', slug: 'mystic-oud' },
  { id: '7', name: 'Fresh Citrus', brand: 'Essence', price: 145, image: '/images/products/fresh-citrus.jpg', slug: 'fresh-citrus' },
  { id: '8', name: 'Sandalwood Dreams', brand: 'Essence', price: 175, image: '/images/products/sandalwood.jpg', slug: 'sandalwood-dreams' },
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

