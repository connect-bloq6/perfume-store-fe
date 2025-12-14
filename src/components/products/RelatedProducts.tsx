'use client';

import { ProductCard } from './ProductCard';

const relatedProducts = [
  { id: '1', name: 'Midnight Rose', brand: 'Essence', price: 195, image: '/images/products/midnight-rose.jpg', slug: 'midnight-rose' },
  { id: '2', name: 'Ocean Breeze', brand: 'Essence', price: 165, image: '/images/products/ocean-breeze.jpg', slug: 'ocean-breeze' },
  { id: '3', name: 'Golden Amber', brand: 'Essence', price: 225, image: '/images/products/golden-amber.jpg', slug: 'golden-amber' },
  { id: '4', name: 'Velvet Noir', brand: 'Essence', price: 185, image: '/images/products/velvet-noir.jpg', slug: 'velvet-noir' },
];

export function RelatedProducts() {
  return (
    <section>
      <h2 className="font-display text-2xl text-gold-500 mb-8">You May Also Like</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

