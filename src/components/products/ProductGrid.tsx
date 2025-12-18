'use client';

import { useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { products, Product } from '@/data/products';
import { useFiltersStore } from '@/store/filters';
import { 
  productMatchesCategory, 
  productMatchesFragranceFamily, 
  productMatchesSize, 
  productMatchesPriceRange 
} from './ProductFilters';

export function ProductGrid() {
  const { selectedFilters, sortBy } = useFiltersStore();
  
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];
    
    // Apply filters
    const categoryFilters = selectedFilters['category'] || [];
    const fragranceFilters = selectedFilters['fragrance'] || [];
    const sizeFilters = selectedFilters['size'] || [];
    const priceFilters = selectedFilters['price'] || [];
    
    // Filter by category
    if (categoryFilters.length > 0) {
      result = result.filter(product => 
        categoryFilters.some(filter => productMatchesCategory(product, filter))
      );
    }
    
    // Filter by fragrance family
    if (fragranceFilters.length > 0) {
      result = result.filter(product => 
        fragranceFilters.some(filter => productMatchesFragranceFamily(product, filter))
      );
    }
    
    // Filter by size
    if (sizeFilters.length > 0) {
      result = result.filter(product => 
        sizeFilters.some(filter => productMatchesSize(product, filter))
      );
    }
    
    // Filter by price range
    if (priceFilters.length > 0) {
      result = result.filter(product => 
        priceFilters.some(filter => productMatchesPriceRange(product, filter))
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'newest':
        // Sort by ID descending (newer products have higher IDs in this case)
        result.sort((a, b) => {
          const aIsNew = a.tags.some(t => t.toLowerCase().includes('new'));
          const bIsNew = b.tags.some(t => t.toLowerCase().includes('new'));
          if (aIsNew && !bIsNew) return -1;
          if (!aIsNew && bIsNew) return 1;
          return parseInt(b.id) - parseInt(a.id);
        });
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        // Sort by bestseller and rating
        result.sort((a, b) => {
          const aIsBestseller = a.tags.some(t => t.toLowerCase().includes('best'));
          const bIsBestseller = b.tags.some(t => t.toLowerCase().includes('best'));
          if (aIsBestseller && !bIsBestseller) return -1;
          if (!aIsBestseller && bIsBestseller) return 1;
          return b.rating - a.rating;
        });
        break;
    }
    
    return result;
  }, [selectedFilters, sortBy]);
  
  // Check if any filters are active
  const hasActiveFilters = Object.values(selectedFilters).some(arr => arr.length > 0);

  if (filteredAndSortedProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <div 
          className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#F5EDE0' }}
        >
          <svg 
            className="w-10 h-10" 
            fill="none" 
            stroke="#A8845E" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
        <h3 
          className="font-display text-xl mb-2"
          style={{ color: '#65553F' }}
        >
          No products found
        </h3>
        <p 
          className="text-sm mb-6"
          style={{ color: '#6B6B6B' }}
        >
          Try adjusting your filters to find what you&apos;re looking for.
        </p>
        {hasActiveFilters && (
          <button
            onClick={() => useFiltersStore.getState().clearFilters()}
            className="px-6 py-2.5 text-sm font-medium rounded-full transition-all hover:opacity-80"
            style={{ 
              backgroundColor: '#A8845E',
              color: 'white'
            }}
          >
            Clear All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredAndSortedProducts.map((product) => (
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
