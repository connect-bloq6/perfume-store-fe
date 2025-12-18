'use client';

import { useState, useMemo } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { useFiltersStore } from '@/store/filters';
import { products } from '@/data/products';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterSection {
  title: string;
  key: string;
  options: FilterOption[];
}

// Helper function to check if a product matches a category filter
function productMatchesCategory(product: typeof products[0], categoryValue: string): boolean {
  const tags = product.tags.map(t => t.toLowerCase());
  const category = product.category.toLowerCase();
  
  switch (categoryValue) {
    case 'women':
      return tags.some(t => t.includes('women')) || category === 'floral';
    case 'men':
      return tags.some(t => t.includes('men')) || category === 'woody';
    case 'unisex':
      return category === 'oriental' || category === 'oud';
    case 'gifts':
      return category === 'collection' || tags.some(t => t.includes('gift'));
    default:
      return false;
  }
}

// Helper function to check if a product matches a fragrance family
function productMatchesFragranceFamily(product: typeof products[0], familyValue: string): boolean {
  const category = product.category.toLowerCase();
  const tags = product.tags.map(t => t.toLowerCase()).join(' ');
  
  switch (familyValue) {
    case 'floral':
      return category === 'floral' || tags.includes('floral');
    case 'oriental':
      return category === 'oriental' || tags.includes('oriental');
    case 'woody':
      return category === 'woody' || tags.includes('woody');
    case 'oud':
      return tags.includes('oud') || product.notes?.base.toLowerCase().includes('oud') || product.notes?.heart.toLowerCase().includes('oud');
    case 'fresh':
      return tags.includes('fresh') || product.notes?.top.toLowerCase().includes('bergamot');
    default:
      return false;
  }
}

// Helper function to check if a product has a specific size
function productMatchesSize(product: typeof products[0], sizeValue: string): boolean {
  return product.volumes.some(v => v.size.includes(sizeValue));
}

// Helper function to check if a product is in a price range
function productMatchesPriceRange(product: typeof products[0], rangeValue: string): boolean {
  const price = product.price;
  switch (rangeValue) {
    case '0-150':
      return price < 150;
    case '150-250':
      return price >= 150 && price < 250;
    case '250-350':
      return price >= 250 && price < 350;
    case '350+':
      return price >= 350;
    default:
      return false;
  }
}

// Count products matching each filter option
function countProducts(sectionKey: string, optionValue: string): number {
  return products.filter(product => {
    switch (sectionKey) {
      case 'category':
        return productMatchesCategory(product, optionValue);
      case 'fragrance':
        return productMatchesFragranceFamily(product, optionValue);
      case 'size':
        return productMatchesSize(product, optionValue);
      case 'price':
        return productMatchesPriceRange(product, optionValue);
      default:
        return false;
    }
  }).length;
}

const filterSections: FilterSection[] = [
  {
    title: 'Category',
    key: 'category',
    options: [
      { value: 'women', label: 'For Her' },
      { value: 'men', label: 'For Him' },
      { value: 'unisex', label: 'Unisex' },
      { value: 'gifts', label: 'Gift Sets' },
    ],
  },
  {
    title: 'Fragrance Family',
    key: 'fragrance',
    options: [
      { value: 'floral', label: 'Floral' },
      { value: 'oriental', label: 'Oriental' },
      { value: 'woody', label: 'Woody' },
      { value: 'oud', label: 'Oud' },
      { value: 'fresh', label: 'Fresh' },
    ],
  },
  {
    title: 'Size',
    key: 'size',
    options: [
      { value: '30ml', label: '30ml' },
      { value: '50ml', label: '50ml' },
      { value: '100ml', label: '100ml' },
    ],
  },
  {
    title: 'Price Range',
    key: 'price',
    options: [
      { value: '0-150', label: 'Under $150' },
      { value: '150-250', label: '$150 - $250' },
      { value: '250-350', label: '$250 - $350' },
      { value: '350+', label: '$350+' },
    ],
  },
];

export function ProductFilters() {
  const [openSections, setOpenSections] = useState<string[]>(['Category', 'Fragrance Family']);
  const { selectedFilters, toggleFilter, clearFilters } = useFiltersStore();

  // Calculate counts for each option
  const optionCounts = useMemo(() => {
    const counts: Record<string, Record<string, number>> = {};
    filterSections.forEach(section => {
      counts[section.key] = {};
      section.options.forEach(option => {
        counts[section.key][option.value] = countProducts(section.key, option.value);
      });
    });
    return counts;
  }, []);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const hasActiveFilters = Object.values(selectedFilters).some(arr => arr.length > 0);
  
  // Get count of active filters
  const activeFilterCount = Object.values(selectedFilters).reduce(
    (sum, arr) => sum + arr.length, 
    0
  );

  return (
    <aside className="space-y-1">
      <div className="flex items-center justify-between mb-6">
        <h3 
          className="font-display text-lg font-semibold"
          style={{ color: '#65553F' }}
        >
          Filters
        </h3>
        {activeFilterCount > 0 && (
          <span 
            className="text-xs px-2 py-0.5 rounded-full"
            style={{ backgroundColor: '#A8845E', color: 'white' }}
          >
            {activeFilterCount}
          </span>
        )}
      </div>

      {filterSections.map((section) => (
        <div 
          key={section.title} 
          className="border-b pb-4 mb-4"
          style={{ borderColor: '#E0D5C3' }}
        >
          <button
            onClick={() => toggleSection(section.title)}
            className="w-full flex items-center justify-between py-2 text-left"
          >
            <span 
              className="text-sm font-medium flex items-center gap-2"
              style={{ color: '#3F3F3F' }}
            >
              {section.title}
              {selectedFilters[section.key]?.length > 0 && (
                <span 
                  className="text-xs px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: '#F5EDE0', color: '#A8845E' }}
                >
                  {selectedFilters[section.key].length}
                </span>
              )}
            </span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${openSections.includes(section.title) ? 'rotate-180' : ''}`}
              style={{ color: '#8B8B8B' }}
            />
          </button>

          {openSections.includes(section.title) && (
            <div className="mt-3 space-y-3">
              {section.options.map((option) => {
                const isSelected = selectedFilters[section.key]?.includes(option.value) || false;
                const count = optionCounts[section.key]?.[option.value] || 0;
                
                return (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div 
                      className="w-4 h-4 rounded border-2 flex items-center justify-center transition-all"
                      style={{ 
                        borderColor: isSelected ? '#A8845E' : '#C5B299',
                        backgroundColor: isSelected ? '#A8845E' : 'transparent'
                      }}
                    >
                      {isSelected && (
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleFilter(section.key, option.value)}
                      className="sr-only"
                    />
                    <span 
                      className="text-sm transition-colors group-hover:opacity-70"
                      style={{ color: isSelected ? '#65553F' : '#6B6B6B' }}
                    >
                      {option.label}
                    </span>
                    <span 
                      className="text-xs ml-auto"
                      style={{ color: '#ABABAB' }}
                    >
                      ({count})
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </div>
      ))}

      {hasActiveFilters && (
        <button 
          onClick={clearFilters}
          className="w-full py-2.5 text-sm font-medium rounded-full transition-all duration-300 mt-4 flex items-center justify-center gap-2 hover:opacity-80"
          style={{ 
            border: '1px solid #C5B299',
            color: '#65553F'
          }}
        >
          <X size={14} />
          Clear All Filters
        </button>
      )}
    </aside>
  );
}

// Export filter helper functions for use in ProductGrid
export { productMatchesCategory, productMatchesFragranceFamily, productMatchesSize, productMatchesPriceRange };
