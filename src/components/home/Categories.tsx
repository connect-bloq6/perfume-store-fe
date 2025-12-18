'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'women',
    name: 'For Her',
    description: 'Feminine & alluring scents',
    image: '/images/categories/women.jpg',
    href: '/collections/women',
  },
  {
    id: 'men',
    name: 'For Him',
    description: 'Bold & sophisticated fragrances',
    image: '/images/categories/men.jpg',
    href: '/collections/men',
  },
  {
    id: 'unisex',
    name: 'Unisex',
    description: 'Timeless & versatile',
    image: '/images/categories/unisex.jpg',
    href: '/collections/unisex',
  },
];

export function Categories() {
  return (
    <section className="py-24 bg-noir-900/50">
      <div className="container-luxury">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 block">
            Explore
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            Shop by Category
          </h2>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={category.href}
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <div className="absolute inset-0 bg-noir-950">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display text-2xl text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-noir-300 text-sm mb-4">
                    {category.description}
                  </p>
                  <span className="text-gold-500 text-sm tracking-wide group-hover:text-gold-400 transition-colors">
                    Explore Collection →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

