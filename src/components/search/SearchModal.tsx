'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      onClose();
      setQuery('');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-xl">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-noir-500" size={20} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for fragrances..."
            className="w-full bg-noir-800 border border-noir-700 text-white pl-12 pr-4 py-4 placeholder:text-noir-500 focus:outline-none focus:border-gold-500 transition-colors"
            autoFocus
          />
        </div>
      </form>

      {/* Quick Links */}
      <div className="mt-6">
        <p className="text-sm text-noir-400 mb-3">Popular Searches</p>
        <div className="flex flex-wrap gap-2">
          {['Rose', 'Oud', 'Citrus', 'Woody', 'Floral'].map((term) => (
            <button
              key={term}
              onClick={() => {
                router.push(`/search?q=${term}`);
                onClose();
              }}
              className="px-3 py-1 bg-noir-800 text-noir-300 text-sm hover:bg-noir-700 hover:text-white transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
}

