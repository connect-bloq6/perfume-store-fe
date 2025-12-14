'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bestsellers = [
  {
    id: 1,
    name: 'Desert Rose',
    price: 275,
    color: 'from-rose-200 to-rose-300',
    accentColor: 'bg-rose-400',
    badge: 'Trending',
  },
  {
    id: 2,
    name: 'Mysterious',
    price: 175,
    color: 'from-teal-200 to-teal-300',
    accentColor: 'bg-teal-600',
    badge: null,
  },
  {
    id: 3,
    name: 'Black Phoenix',
    price: 375,
    color: 'from-charcoal-200 to-charcoal-300',
    accentColor: 'bg-charcoal-700',
    badge: null,
  },
  {
    id: 4,
    name: 'Golden Oud',
    price: 325,
    color: 'from-gold-200 to-gold-300',
    accentColor: 'bg-gold-500',
    badge: 'New',
  },
  {
    id: 5,
    name: 'Forest Mist',
    price: 225,
    color: 'from-forest-200 to-forest-300',
    accentColor: 'bg-forest-600',
    badge: null,
  },
];

export function Bestsellers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="section-padding bg-cream-200">
      <div className="container-luxury">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl text-charcoal-800"
          >
            Best Sellers
          </motion.h2>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border border-charcoal-200 transition-all ${
                canScrollLeft 
                  ? 'hover:bg-charcoal-800 hover:text-cream-50 hover:border-charcoal-800' 
                  : 'opacity-40 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border border-charcoal-200 transition-all ${
                canScrollRight 
                  ? 'hover:bg-charcoal-800 hover:text-cream-50 hover:border-charcoal-800' 
                  : 'opacity-40 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Products Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScrollButtons}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {bestsellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px] snap-start"
            >
              <Link href={`/products/${product.name.toLowerCase().replace(' ', '-')}`}>
                <div className="card-product group">
                  {/* Product Image Area */}
                  <div className={`relative aspect-[4/5] bg-gradient-to-br ${product.color} p-8`}>
                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-cream-50 text-charcoal-700 text-xs px-3 py-1.5 rounded-full font-medium">
                        {product.badge}
                      </span>
                    )}
                    
                    {/* Product Illustration */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-32 h-48 transform group-hover:scale-105 transition-transform duration-500">
                        {/* Bottle shape */}
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 ${product.accentColor} rounded-t-lg`} />
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-5 h-3 bg-cream-100" />
                        <div className="absolute top-7 left-1/2 -translate-x-1/2 w-24 h-36 bg-cream-50/90 rounded-2xl shadow-lg flex flex-col items-center justify-end pb-4">
                          {/* Decorative lines */}
                          <div className={`w-12 h-0.5 ${product.accentColor} opacity-30 mb-2`} />
                          <div className="text-[10px] text-charcoal-400 tracking-[0.2em] font-medium">CALRA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-5 bg-cream-50">
                    <h3 className="font-display text-lg text-charcoal-800 group-hover:text-brown-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-charcoal-500 mt-1">${product.price}.00</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
