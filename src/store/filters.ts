'use client';

import { create } from 'zustand';

export type SortOption = 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'name-asc';

interface FiltersState {
  // Selected filters by category
  selectedFilters: Record<string, string[]>;
  // Sort option
  sortBy: SortOption;
  // Actions
  toggleFilter: (section: string, value: string) => void;
  clearFilters: () => void;
  clearSection: (section: string) => void;
  setSortBy: (sort: SortOption) => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  selectedFilters: {},
  sortBy: 'featured',
  
  toggleFilter: (section, value) => {
    set((state) => {
      const current = state.selectedFilters[section] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { 
        selectedFilters: { 
          ...state.selectedFilters, 
          [section]: updated 
        } 
      };
    });
  },
  
  clearFilters: () => {
    set({ selectedFilters: {} });
  },
  
  clearSection: (section) => {
    set((state) => ({
      selectedFilters: {
        ...state.selectedFilters,
        [section]: [],
      },
    }));
  },
  
  setSortBy: (sort) => {
    set({ sortBy: sort });
  },
}));

