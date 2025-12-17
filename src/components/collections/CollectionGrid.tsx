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
    image: '/images/Landing Page/Background/Desert Rose.png' 
  },
  { 
    id: 'woody', 
    name: 'Woody', 
    description: 'Bold & sophisticated fragrances',
    count: 8, 
    image: '/images/Landing Page/Background/Mysterious.png' 
  },
  { 
    id: 'oriental', 
    name: 'Oriental', 
    description: 'Rich & exotic blends',
    count: 10, 
    image: '/images/Landing Page/Background/Blue.png' 
  },
  { 
    id: 'gourmand', 
    name: 'Gourmand', 
    description: 'Sweet & indulgent notes',
    count: 6, 
    image: '/images/Landing Page/Background/Subtract2.png' 
  },
  { 
    id: 'luxury', 
    name: 'Luxury', 
    description: 'Premium exclusive collection',
    count: 4, 
    image: '/images/Landing Page/Background/Single.png' 
  },
  { 
    id: 'collection', 
    name: 'Gift Sets', 
    description: 'Perfect for gifting',
    count: 3, 
    image: '/images/Landing Page/Background/Three.png' 
  },
];

export function CollectionGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            className="group block rounded-2xl overflow-hidden transition-shadow hover:shadow-lg"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
          >
            {/* Image */}
            <div 
              className="relative aspect-[4/3] overflow-hidden"
              style={{ backgroundColor: '#FAF8F5' }}
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Content */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 
                  className="font-medium"
                  style={{ color: '#171717', fontSize: '18px' }}
                >
                  {collection.name}
                </h3>
                <span 
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ backgroundColor: '#F5F1EA', color: '#6B6B6B' }}
                >
                  {collection.count} items
                </span>
              </div>
              <p className="text-sm" style={{ color: '#6B6B6B' }}>
                {collection.description}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
