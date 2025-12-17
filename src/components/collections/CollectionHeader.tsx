'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface CollectionHeaderProps {
  slug: string;
}

const collectionData: Record<string, { title: string; description: string }> = {
  floral: {
    title: 'Floral Collection',
    description: 'Discover delicate and romantic fragrances featuring the finest floral notes. From rose and jasmine to peony and iris.',
  },
  woody: {
    title: 'Woody Collection',
    description: 'Bold, sophisticated scents featuring sandalwood, cedar, and oud. For those who appreciate depth and character.',
  },
  oriental: {
    title: 'Oriental Collection',
    description: 'Rich and exotic fragrances with warm amber, spice, and resinous notes. Captivating and mysterious.',
  },
  gourmand: {
    title: 'Gourmand Collection',
    description: 'Sweet and indulgent scents featuring vanilla, caramel, and delicious edible notes. Irresistibly cozy.',
  },
  luxury: {
    title: 'Luxury Collection',
    description: 'Our most exclusive fragrances crafted with rare and precious ingredients. The pinnacle of perfumery.',
  },
  collection: {
    title: 'Gift Sets',
    description: 'Beautifully curated gift sets perfect for any occasion. Share the joy of luxury fragrance.',
  },
};

export function CollectionHeader({ slug }: CollectionHeaderProps) {
  const collection = collectionData[slug] || {
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description: 'Explore our curated collection of exquisite fragrances.',
  };

  return (
    <header className="mb-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-6">
        <Link 
          href="/" 
          className="hover:text-[#C5B299] transition-colors"
          style={{ color: '#6B6B6B' }}
        >
          Home
        </Link>
        <ChevronRight size={14} style={{ color: '#6B6B6B' }} />
        <Link 
          href="/collections" 
          className="hover:text-[#C5B299] transition-colors"
          style={{ color: '#6B6B6B' }}
        >
          Collections
        </Link>
        <ChevronRight size={14} style={{ color: '#6B6B6B' }} />
        <span style={{ color: '#171717' }}>{collection.title}</span>
      </nav>

      {/* Title & Description */}
      <h1 
        className="font-playfair mb-3"
        style={{ fontSize: '36px', lineHeight: '44px', color: '#171717' }}
      >
        {collection.title}
      </h1>
      <p 
        className="max-w-2xl"
        style={{ color: '#6B6B6B', fontSize: '16px', lineHeight: '24px' }}
      >
        {collection.description}
      </p>
    </header>
  );
}
