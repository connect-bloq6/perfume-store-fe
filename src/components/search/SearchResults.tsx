'use client';

import { ProductCard } from '@/components/products/ProductCard';

interface SearchResultsProps {
  query?: string;
}

const searchResults = [
  { id: '1', name: 'Midnight Rose', brand: 'Essence', price: 195, image: '/images/products/midnight-rose.jpg', slug: 'midnight-rose' },
  { id: '2', name: 'Rose Garden', brand: 'Essence', price: 165, image: '/images/products/rose-garden.jpg', slug: 'rose-garden' },
  { id: '3', name: 'Wild Rose', brand: 'Essence', price: 185, image: '/images/products/wild-rose.jpg', slug: 'wild-rose' },
];

export function SearchResults({ query }: SearchResultsProps) {
  if (!query) {
    return (
      <div className="text-center py-12">
        <p className="text-noir-400">Enter a search term to find fragrances</p>
      </div>
    );
  }

  if (searchResults.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-noir-400 mb-4">No results found for &quot;{query}&quot;</p>
        <p className="text-noir-500 text-sm">Try adjusting your search or browse our collections</p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-noir-400 mb-6">{searchResults.length} results found</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchResults.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

