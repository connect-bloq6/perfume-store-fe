'use client';

import { motion } from 'framer-motion';
import { ProductCard } from '@/components/products/ProductCard';

const bestsellers = [
  {
    id: '5',
    name: 'Eternal Bloom',
    brand: 'Essence',
    price: 210,
    image: '/images/products/eternal-bloom.jpg',
    slug: 'eternal-bloom',
  },
  {
    id: '6',
    name: 'Mystic Oud',
    brand: 'Essence',
    price: 295,
    image: '/images/products/mystic-oud.jpg',
    slug: 'mystic-oud',
    isBestseller: true,
  },
  {
    id: '7',
    name: 'Fresh Citrus',
    brand: 'Essence',
    price: 145,
    image: '/images/products/fresh-citrus.jpg',
    slug: 'fresh-citrus',
  },
];

export function Bestsellers() {
  return (
    <section className="py-24 bg-noir-950">
      <div className="container-luxury">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 block">
            Most Loved
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Bestsellers
          </h2>
          <p className="text-noir-400 max-w-2xl mx-auto">
            Discover why these fragrances have captured hearts around the world
          </p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestsellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

