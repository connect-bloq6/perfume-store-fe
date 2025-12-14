'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const collections = [
  { id: 'women', name: 'For Her', count: 45, image: '/images/collections/women.jpg' },
  { id: 'men', name: 'For Him', count: 38, image: '/images/collections/men.jpg' },
  { id: 'unisex', name: 'Unisex', count: 22, image: '/images/collections/unisex.jpg' },
  { id: 'new-arrivals', name: 'New Arrivals', count: 12, image: '/images/collections/new.jpg' },
  { id: 'bestsellers', name: 'Bestsellers', count: 15, image: '/images/collections/bestsellers.jpg' },
  { id: 'gift-sets', name: 'Gift Sets', count: 8, image: '/images/collections/gifts.jpg' },
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
            className="group relative block aspect-[4/3] overflow-hidden"
          >
            <div className="absolute inset-0 bg-noir-950">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-2xl text-white mb-1">
                {collection.name}
              </h3>
              <p className="text-noir-400 text-sm">
                {collection.count} fragrances
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

