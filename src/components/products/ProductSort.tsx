'use client';

import { Select } from '@/components/ui/Select';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A-Z' },
  { value: 'name-desc', label: 'Name: Z-A' },
];

export function ProductSort() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-noir-400">Sort by:</span>
      <Select
        options={sortOptions}
        defaultValue="featured"
        className="w-48"
      />
    </div>
  );
}

