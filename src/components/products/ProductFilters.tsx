'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterSection {
  title: string;
  options: { value: string; label: string; count?: number }[];
}

const filterSections: FilterSection[] = [
  {
    title: 'Category',
    options: [
      { value: 'women', label: 'For Her', count: 45 },
      { value: 'men', label: 'For Him', count: 38 },
      { value: 'unisex', label: 'Unisex', count: 22 },
      { value: 'gifts', label: 'Gift Sets', count: 12 },
    ],
  },
  {
    title: 'Fragrance Family',
    options: [
      { value: 'floral', label: 'Floral', count: 28 },
      { value: 'oriental', label: 'Oriental', count: 19 },
      { value: 'woody', label: 'Woody', count: 24 },
      { value: 'oud', label: 'Oud', count: 15 },
      { value: 'fresh', label: 'Fresh', count: 18 },
    ],
  },
  {
    title: 'Concentration',
    options: [
      { value: 'parfum', label: 'Parfum', count: 12 },
      { value: 'edp', label: 'Eau de Parfum', count: 45 },
      { value: 'extrait', label: 'Extrait De Parfum', count: 20 },
    ],
  },
  {
    title: 'Size',
    options: [
      { value: '30ml', label: '30ml', count: 55 },
      { value: '50ml', label: '50ml', count: 78 },
      { value: '100ml', label: '100ml', count: 65 },
    ],
  },
  {
    title: 'Price Range',
    options: [
      { value: '0-150', label: 'Under $150', count: 15 },
      { value: '150-250', label: '$150 - $250', count: 42 },
      { value: '250-350', label: '$250 - $350', count: 28 },
      { value: '350+', label: '$350+', count: 12 },
    ],
  },
];

export function ProductFilters() {
  const [openSections, setOpenSections] = useState<string[]>(['Category', 'Fragrance Family']);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const toggleFilter = (section: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[section] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [section]: updated };
    });
  };

  const hasActiveFilters = Object.values(selectedFilters).some(arr => arr.length > 0);

  return (
    <aside className="space-y-1">
      <h3 
        className="font-display text-lg font-semibold mb-6"
        style={{ color: '#65553F' }}
      >
        Filters
      </h3>

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
              className="text-sm font-medium"
              style={{ color: '#3F3F3F' }}
            >
              {section.title}
            </span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${openSections.includes(section.title) ? 'rotate-180' : ''}`}
              style={{ color: '#8B8B8B' }}
            />
          </button>

          {openSections.includes(section.title) && (
            <div className="mt-3 space-y-3">
              {section.options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters[section.title]?.includes(option.value) || false}
                    onChange={() => toggleFilter(section.title, option.value)}
                    className="w-4 h-4 rounded border-2 appearance-none cursor-pointer transition-all"
                    style={{ 
                      borderColor: selectedFilters[section.title]?.includes(option.value) ? '#A8845E' : '#C5B299',
                      backgroundColor: selectedFilters[section.title]?.includes(option.value) ? '#A8845E' : 'transparent'
                    }}
                  />
                  <span 
                    className="text-sm transition-colors group-hover:opacity-70"
                    style={{ color: '#6B6B6B' }}
                  >
                    {option.label}
                  </span>
                  {option.count !== undefined && (
                    <span 
                      className="text-xs ml-auto"
                      style={{ color: '#ABABAB' }}
                    >
                      ({option.count})
                    </span>
                  )}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

      {hasActiveFilters && (
        <button 
          onClick={() => setSelectedFilters({})}
          className="w-full py-2.5 text-sm font-medium rounded-full transition-all duration-300 mt-4"
          style={{ 
            border: '1px solid #C5B299',
            color: '#65553F'
          }}
        >
          Clear All Filters
        </button>
      )}
    </aside>
  );
}
