'use client';

import Link from 'next/link';
import { ProductCard } from '@/components/products/ProductCard';
import { motion } from 'framer-motion';

const featuredProducts = [
  {
    id: '1',
    name: 'Midnight Rose',
    brand: 'Essence',
    price: 195,
    image: '/images/products/midnight-rose.jpg',
    slug: 'midnight-rose',
    isNew: true,
  },
  {
    id: '2',
    name: 'Ocean Breeze',
    brand: 'Essence',
    price: 165,
    image: '/images/products/ocean-breeze.jpg',
    slug: 'ocean-breeze',
  },
  {
    id: '3',
    name: 'Golden Amber',
    brand: 'Essence',
    price: 225,
    image: '/images/products/golden-amber.jpg',
    slug: 'golden-amber',
  },
  {
    id: '4',
    name: 'Velvet Noir',
    brand: 'Essence',
    price: 185,
    image: '/images/products/velvet-noir.jpg',
    slug: 'velvet-noir',
  },
];

export function FeaturedCollection() {
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
            Curated For You
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Featured Collection
          </h2>
          <p className="text-noir-400 max-w-2xl mx-auto">
            Our most beloved fragrances, handpicked by our master perfumers
          </p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
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

        <div className="text-center mt-12">
          <Link href="/products" className="btn-secondary">
            View All Fragrances
          </Link>
        </div>
      </div>
    </section>
  );
}

