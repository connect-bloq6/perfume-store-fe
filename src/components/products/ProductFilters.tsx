'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    ],
  },
  {
    title: 'Fragrance Family',
    options: [
      { value: 'floral', label: 'Floral', count: 28 },
      { value: 'oriental', label: 'Oriental', count: 19 },
      { value: 'woody', label: 'Woody', count: 24 },
      { value: 'fresh', label: 'Fresh', count: 18 },
      { value: 'citrus', label: 'Citrus', count: 15 },
    ],
  },
  {
    title: 'Concentration',
    options: [
      { value: 'parfum', label: 'Parfum', count: 12 },
      { value: 'edp', label: 'Eau de Parfum', count: 45 },
      { value: 'edt', label: 'Eau de Toilette', count: 32 },
      { value: 'cologne', label: 'Cologne', count: 8 },
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
      { value: '0-100', label: 'Under $100', count: 15 },
      { value: '100-200', label: '$100 - $200', count: 42 },
      { value: '200-300', label: '$200 - $300', count: 28 },
      { value: '300+', label: '$300+', count: 12 },
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

  return (
    <aside className="space-y-6">
      <h3 className="font-display text-lg text-gold-500">Filters</h3>

      {filterSections.map((section) => (
        <div key={section.title} className="border-b border-noir-800 pb-4">
          <button
            onClick={() => toggleSection(section.title)}
            className="w-full flex items-center justify-between py-2 text-left"
          >
            <span className="text-sm text-white">{section.title}</span>
            <ChevronDown
              size={16}
              className={cn(
                'text-noir-400 transition-transform duration-200',
                openSections.includes(section.title) && 'rotate-180'
              )}
            />
          </button>

          {openSections.includes(section.title) && (
            <div className="mt-2 space-y-2">
              {section.options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters[section.title]?.includes(option.value) || false}
                    onChange={() => toggleFilter(section.title, option.value)}
                    className="w-4 h-4 bg-noir-900 border border-noir-600 checked:bg-gold-500 checked:border-gold-500 focus:ring-0 focus:ring-offset-0"
                  />
                  <span className="text-sm text-noir-300 group-hover:text-white transition-colors">
                    {option.label}
                  </span>
                  {option.count !== undefined && (
                    <span className="text-xs text-noir-500 ml-auto">
                      ({option.count})
                    </span>
                  )}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

      <button className="w-full btn-secondary text-sm">
        Clear All Filters
      </button>
    </aside>
  );
}

