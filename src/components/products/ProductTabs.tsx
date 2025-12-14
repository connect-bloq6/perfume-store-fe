'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'description', label: 'Description' },
  { id: 'notes', label: 'Fragrance Notes' },
  { id: 'details', label: 'Details' },
  { id: 'reviews', label: 'Reviews (24)' },
];

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <section className="border-t border-noir-800 pt-12 mb-16">
      {/* Tab Headers */}
      <div className="flex flex-wrap gap-8 border-b border-noir-800 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'pb-4 text-sm tracking-wide transition-colors',
              activeTab === tab.id
                ? 'text-gold-500 border-b-2 border-gold-500'
                : 'text-noir-400 hover:text-white'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-3xl">
        {activeTab === 'description' && (
          <div className="space-y-4 text-noir-300">
            <p>
              Discover an enchanting fragrance that captures the essence of timeless 
              elegance. This luxurious perfume is a masterful blend of the finest 
              ingredients sourced from around the world.
            </p>
            <p>
              The journey begins with a burst of fresh citrus and delicate florals, 
              transitioning into a rich heart of rare blooms. The dry down reveals 
              a sophisticated base of precious woods and sensual musks that lingers 
              beautifully on the skin.
            </p>
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-gold-500 font-display text-lg mb-3">Top Notes</h4>
              <ul className="space-y-2 text-noir-300">
                <li>Bergamot</li>
                <li>Pink Pepper</li>
                <li>Mandarin</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold-500 font-display text-lg mb-3">Heart Notes</h4>
              <ul className="space-y-2 text-noir-300">
                <li>Bulgarian Rose</li>
                <li>Jasmine Absolute</li>
                <li>Iris</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold-500 font-display text-lg mb-3">Base Notes</h4>
              <ul className="space-y-2 text-noir-300">
                <li>Sandalwood</li>
                <li>White Musk</li>
                <li>Amber</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'details' && (
          <div className="space-y-4">
            <div className="flex border-b border-noir-800 py-3">
              <span className="w-40 text-noir-400">Concentration</span>
              <span className="text-white">Eau de Parfum</span>
            </div>
            <div className="flex border-b border-noir-800 py-3">
              <span className="w-40 text-noir-400">Longevity</span>
              <span className="text-white">8-10 hours</span>
            </div>
            <div className="flex border-b border-noir-800 py-3">
              <span className="w-40 text-noir-400">Sillage</span>
              <span className="text-white">Moderate to Strong</span>
            </div>
            <div className="flex border-b border-noir-800 py-3">
              <span className="w-40 text-noir-400">Season</span>
              <span className="text-white">All Seasons</span>
            </div>
            <div className="flex border-b border-noir-800 py-3">
              <span className="w-40 text-noir-400">Occasion</span>
              <span className="text-white">Day & Evening</span>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="text-noir-400">
            <p>Customer reviews will be displayed here.</p>
          </div>
        )}
      </div>
    </section>
  );
}

