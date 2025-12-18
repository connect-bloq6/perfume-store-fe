'use client';

import { useMemo } from 'react';
import { products } from '@/data/products';
import { useFiltersStore } from '@/store/filters';
import { 
  productMatchesCategory, 
  productMatchesFragranceFamily, 
  productMatchesSize, 
  productMatchesPriceRange 
} from './ProductFilters';

export function ProductCount() {
  const { selectedFilters } = useFiltersStore();
  
  const filteredCount = useMemo(() => {
    let result = [...products];
    
    const categoryFilters = selectedFilters['category'] || [];
    const fragranceFilters = selectedFilters['fragrance'] || [];
    const sizeFilters = selectedFilters['size'] || [];
    const priceFilters = selectedFilters['price'] || [];
    
    if (categoryFilters.length > 0) {
      result = result.filter(product => 
        categoryFilters.some(filter => productMatchesCategory(product, filter))
      );
    }
    
    if (fragranceFilters.length > 0) {
      result = result.filter(product => 
        fragranceFilters.some(filter => productMatchesFragranceFamily(product, filter))
      );
    }
    
    if (sizeFilters.length > 0) {
      result = result.filter(product => 
        sizeFilters.some(filter => productMatchesSize(product, filter))
      );
    }
    
    if (priceFilters.length > 0) {
      result = result.filter(product => 
        priceFilters.some(filter => productMatchesPriceRange(product, filter))
      );
    }
    
    return result.length;
  }, [selectedFilters]);
  
  const hasFilters = Object.values(selectedFilters).some(arr => arr.length > 0);

  return (
    <p className="text-sm" style={{ color: '#6B6B6B' }}>
      Showing{' '}
      <span style={{ color: '#65553F', fontWeight: 600 }}>
        {filteredCount}
      </span>{' '}
      {filteredCount === 1 ? 'fragrance' : 'fragrances'}
      {hasFilters && (
        <span style={{ color: '#A8845E' }}> (filtered)</span>
      )}
    </p>
  );
}

