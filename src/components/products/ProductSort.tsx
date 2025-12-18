'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useFiltersStore, SortOption } from '@/store/filters';

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A-Z' },
];

export function ProductSort() {
  const [isOpen, setIsOpen] = useState(false);
  const { sortBy, setSortBy } = useFiltersStore();
  
  const selectedOption = sortOptions.find(opt => opt.value === sortBy) || sortOptions[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all hover:opacity-80"
        style={{ 
          border: '1px solid #C5B299',
          color: '#65553F'
        }}
      >
        <span>Sort by: {selectedOption.label}</span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div 
            className="absolute right-0 top-full mt-2 py-2 min-w-[200px] rounded-xl shadow-lg z-20"
            style={{ backgroundColor: '#FEFDFB', border: '1px solid #E0D5C3' }}
          >
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setSortBy(option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-cream-100 ${
                  sortBy === option.value ? 'font-medium' : ''
                }`}
                style={{ 
                  color: sortBy === option.value ? '#A8845E' : '#6B6B6B',
                  backgroundColor: sortBy === option.value ? '#F5EDE0' : 'transparent'
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
