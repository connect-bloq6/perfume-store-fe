'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, SlidersHorizontal, Grid3X3, LayoutGrid } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'floral', name: 'Floral' },
  { id: 'woody', name: 'Woody' },
  { id: 'oriental', name: 'Oriental' },
  { id: 'gourmand', name: 'Gourmand' },
  { id: 'luxury', name: 'Luxury' },
  { id: 'collection', name: 'Gift Sets' },
];

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'newest', name: 'Newest' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'rating', name: 'Best Rating' },
];

export default function CollectionsPageClient() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [gridCols, setGridCols] = useState(4);

  // Filter products by category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
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
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-28"
        style={{ backgroundColor: '#F5F1EA' }}
      >
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
              <Link 
                href="/" 
                className="hover:text-[#C5B299] transition-colors"
                style={{ color: '#6B6B6B' }}
              >
                Home
              </Link>
              <ChevronRight size={14} style={{ color: '#6B6B6B' }} aria-hidden="true" />
              <span style={{ color: '#171717' }}>Collections</span>
            </nav>

            <h1 
              className="font-playfair mb-4"
              style={{ fontSize: '48px', lineHeight: '56px', color: '#171717' }}
            >
              Our Collection
            </h1>
            <p 
              className="max-w-2xl mx-auto"
              style={{ color: '#6B6B6B', fontSize: '16px', lineHeight: '24px' }}
            >
              Discover our exquisite range of wholesale luxury fragrances, crafted with the finest ingredients 
              from around the world. Premium perfumes for Atlanta retailers.
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: '#E5E0D5' }}
        />
      </section>

      {/* Main Content */}
      <div className="container-luxury py-10">
        {/* Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8"
        >
          {/* Categories */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Product categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: activeCategory === cat.id ? '#C5B299' : '#FFFFFF',
                  color: activeCategory === cat.id ? '#FFFFFF' : '#6B6B6B',
                  border: `1px solid ${activeCategory === cat.id ? '#C5B299' : '#E5E5E5'}`,
                }}
                role="tab"
                aria-selected={activeCategory === cat.id}
                aria-controls="products-grid"
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort & View Options */}
          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={16} style={{ color: '#6B6B6B' }} aria-hidden="true" />
              <label htmlFor="sort-select" className="sr-only">Sort by</label>
              <select
                id="sort-select"
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

        {/* Results Count */}
        <p className="text-sm mb-6" style={{ color: '#6B6B6B' }}>
          Showing {Math.min(sortedProducts.length, 9)} of {sortedProducts.length} products
        </p>

        {/* Products Grid - Limited to 9 products, 3 per row - Compact cards */}
        <motion.div
          id="products-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
          role="tabpanel"
        >
          {sortedProducts.slice(0, 9).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="max-w-[280px] mx-auto w-full"
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
              No products found
            </p>
            <p className="text-sm mb-6" style={{ color: '#6B6B6B' }}>
              Try adjusting your filters
            </p>
            <button
              onClick={() => setActiveCategory('all')}
              className="px-6 py-2.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#C5B299', color: '#FFFFFF' }}
            >
              View All Products
            </button>
          </div>
        )}

        {/* Load More (placeholder) */}
        {sortedProducts.length >= 6 && (
          <div className="flex justify-center mt-12">
            <button
              className="px-8 py-3 rounded-full text-sm font-medium transition-colors hover:bg-gray-50"
              style={{ border: '1px solid #E5E5E5', color: '#171717' }}
            >
              Load More Products
            </button>
          </div>
        )}
      </div>

      {/* Featured Categories Section */}
      <section className="py-16" style={{ backgroundColor: '#F5F1EA' }}>
        <div className="container-luxury">
          <h2 
            className="font-playfair text-center mb-10"
            style={{ fontSize: '32px', color: '#171717' }}
          >
            Shop by Category
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: 'Floral', desc: 'Delicate & romantic', image: '/images/alpha.png', slug: 'floral' },
              { name: 'Woody', desc: 'Bold & sophisticated', image: '/images/alpha_chrome.png', slug: 'woody' },
              { name: 'Oriental', desc: 'Rich & exotic', image: '/images/alpha_oros.png', slug: 'oriental' },
            ].map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/collections/${cat.slug}`}
                  className="group relative block w-full aspect-[4/5] rounded-2xl overflow-hidden"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: '#FAF8F5' }}
                  >
                    <Image
                      src={cat.image}
                      alt={`${cat.name} fragrances wholesale`}
                      fill
                      quality={100}
                      className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/40 to-transparent">
                    <h3 
                      className="font-medium text-white"
                      style={{ fontSize: '18px' }}
                    >
                      {cat.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {cat.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

