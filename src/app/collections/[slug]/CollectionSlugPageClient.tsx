'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Grid3X3, LayoutGrid } from 'lucide-react';
import { CollectionHeader } from '@/components/collections/CollectionHeader';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';

interface CollectionSlugPageClientProps {
  slug: string;
}

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'newest', name: 'Newest' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'rating', name: 'Best Rating' },
];

export default function CollectionSlugPageClient({ slug }: CollectionSlugPageClientProps) {
  const [sortBy, setSortBy] = useState('featured');
  const [gridCols, setGridCols] = useState(3);

  // Filter products by collection/category
  const filteredProducts = products.filter(p => p.category === slug);

  // If no products match, show all products
  const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;

  // Sort products
  const sortedProducts = [...displayProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return parseInt(b.id) - parseInt(a.id);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="container-luxury py-10">
        <CollectionHeader slug={slug} />

        {/* Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6"
          style={{ borderBottom: '1px solid #F0F0F0' }}
        >
          {/* Results Count */}
          <p className="text-sm" style={{ color: '#6B6B6B' }}>
            Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
          </p>

          {/* Sort & View Options */}
          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={16} style={{ color: '#6B6B6B' }} aria-hidden="true" />
              <label htmlFor="collection-sort" className="sr-only">Sort by</label>
              <select
                id="collection-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm py-2 px-3 rounded-lg appearance-none cursor-pointer"
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E5E5E5',
                  color: '#171717',
                  minWidth: '160px'
                }}
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Grid Toggle */}
            <div 
              className="hidden md:flex items-center rounded-lg overflow-hidden"
              style={{ border: '1px solid #E5E5E5' }}
              role="group"
              aria-label="Grid view options"
            >
              <button
                onClick={() => setGridCols(3)}
                className="p-2 transition-colors"
                style={{ 
                  backgroundColor: gridCols === 3 ? '#C5B299' : '#FFFFFF',
                  color: gridCols === 3 ? '#FFFFFF' : '#6B6B6B'
                }}
                aria-label="3 column grid"
                aria-pressed={gridCols === 3}
              >
                <Grid3X3 size={18} />
              </button>
              <button
                onClick={() => setGridCols(4)}
                className="p-2 transition-colors"
                style={{ 
                  backgroundColor: gridCols === 4 ? '#C5B299' : '#FFFFFF',
                  color: gridCols === 4 ? '#FFFFFF' : '#6B6B6B'
                }}
                aria-label="4 column grid"
                aria-pressed={gridCols === 4}
              >
                <LayoutGrid size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={`grid gap-6 ${
            gridCols === 4 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ProductCard 
                product={{
                  id: product.id,
                  name: product.name,
                  brand: product.brand,
                  price: product.price,
                  image: product.image,
                  slug: product.slug,
                  isNew: product.tags?.includes('New Arrival'),
                  isBestseller: product.tags?.includes('Best seller'),
                  salePrice: product.originalPrice ? product.price : undefined,
                  category: product.category,
                }} 
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg mb-2" style={{ color: '#171717' }}>
              No products found in this collection
            </p>
            <p className="text-sm" style={{ color: '#6B6B6B' }}>
              Check back soon for new additions
            </p>
          </div>
        )}
      </div>
    </div>
  );
}



