'use client';

import { ProductCard } from './ProductCard';
import { products } from '@/data/products';

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={{
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            slug: product.slug,
            isNew: product.tags.includes('New Arrival'),
            isBestseller: product.tags.includes('Best seller'),
            category: product.category,
          }} 
        />
      ))}
    </div>
  );
}
