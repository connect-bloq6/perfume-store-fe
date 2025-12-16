'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A-Z' },
];

export function ProductSort() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(sortOptions[0]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all"
        style={{ 
          border: '1px solid #C5B299',
          color: '#65553F'
        }}
      >
        <span>Sort by: {selected.label}</span>
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
                  setSelected(option);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-cream-100 ${
                  selected.value === option.value ? 'font-medium' : ''
                }`}
                style={{ 
                  color: selected.value === option.value ? '#A8845E' : '#6B6B6B'
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
