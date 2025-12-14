'use client';

import Link from 'next/link';
import { ProductCard } from '@/components/products/ProductCard';

const wishlistItems = [
  { id: '1', name: 'Velvet Noir', brand: 'Essence', price: 185, image: '/images/products/velvet-noir.jpg', slug: 'velvet-noir' },
  { id: '2', name: 'Mystic Oud', brand: 'Essence', price: 295, image: '/images/products/mystic-oud.jpg', slug: 'mystic-oud' },
];

export function WishlistGrid() {
  if (wishlistItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-noir-400 mb-4">Your wishlist is empty</p>
        <Link href="/products" className="btn-secondary inline-block">
          Explore Fragrances
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {wishlistItems.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

