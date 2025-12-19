'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const collections = [
  { 
    id: 'floral', 
    name: 'Floral', 
    description: 'Delicate & romantic scents',
    count: 12, 
    image: '/images/alpha.png' 
  },
  { 
    id: 'woody', 
    name: 'Woody', 
    description: 'Bold & sophisticated fragrances',
    count: 8, 
    image: '/images/alpha_chrome.png' 
  },
  { 
    id: 'oriental', 
    name: 'Oriental', 
    description: 'Rich & exotic blends',
    count: 10, 
    image: '/images/alpha_oros.png' 
  },
  { 
    id: 'gourmand', 
    name: 'Gourmand', 
    description: 'Sweet & indulgent notes',
    count: 6, 
    image: '/images/alpha_safir.png' 
  },
  { 
    id: 'luxury', 
    name: 'Luxury', 
    description: 'Premium exclusive collection',
    count: 4, 
    image: '/images/alpha.png' 
  },
  { 
    id: 'collection', 
    name: 'Gift Sets', 
    description: 'Perfect for gifting',
    count: 3, 
    image: '/images/alpha_chrome.png' 
  },
];

export function CollectionGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
      {collections.map((collection, index) => (
        <motion.div
          key={collection.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={`/collections/${collection.id}`}
            className="group block rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: '#FEFDFB', border: '1px solid #E5DED3' }}
          >
            {/* Image */}
            <div 
              className="relative aspect-square overflow-hidden"
              style={{ backgroundColor: '#F5EDE0' }}
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                quality={100}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-contain p-8 md:p-10 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Content */}
            <div className="p-3 md:p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 
                  className="font-semibold text-sm md:text-base"
                  style={{ color: '#4A3D2A' }}
                >
                  {collection.name}
                </h3>
                <span 
                  className="text-[10px] md:text-xs px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: '#F5EDE0', color: '#A8845E' }}
                >
                  {collection.count}
                </span>
              </div>
              <p className="text-xs md:text-sm" style={{ color: '#6B6B6B' }}>
                {collection.description}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
