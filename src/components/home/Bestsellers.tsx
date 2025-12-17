'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const bestsellers = [
  {
    id: 1,
    name: 'Desert Rose',
    price: 375,
    image: '/images/Landing Page/Background/Desert Rose.png',
    badge: 'Trending',
    slug: 'desert-rose-signature',
  },
  {
    id: 2,
    name: 'Mysterious',
    price: 375,
    image: '/images/Landing Page/Background/Mysterious.png',
    badge: null,
    slug: 'mysterious',
  },
  {
    id: 3,
    name: 'Black Phoenix',
    price: 375,
    image: '/images/Landing Page/Background/Black_Phoenix.png',
    badge: null,
    slug: 'black-phoenix',
  },
];

// Simple product card component
function ProductCard({ product, index }: { product: typeof bestsellers[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.slug}`}>
        <div className="group cursor-pointer">
          {/* Image Container */}
          <div 
            className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4"
            style={{ backgroundColor: '#D9D2C5' }}
          >
            {/* Badge */}
            {product.badge && (
              <div 
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium z-10"
                style={{ backgroundColor: '#C5B299', color: '#FFFFFF' }}
              >
                {product.badge}
              </div>
            )}
            
            {/* Product Image */}
            <motion.div
              className="relative w-full h-full"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                quality={100}
                priority={index < 2}
              />
            </motion.div>
          </div>
          
          {/* Product Info */}
          <div className="space-y-1">
            <h3 
              className="font-display text-lg font-medium"
              style={{ color: '#3D3D3D' }}
            >
              {product.name}
            </h3>
            <p 
              className="text-base font-medium"
              style={{ color: '#796040' }}
            >
              ${product.price}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function Bestsellers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 360;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: '#E2DACB' }}>
      <div className="container-luxury">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <div>
            <h2
              className="font-display text-[32px] md:text-[40px] lg:text-[48px]"
              style={{ 
                fontWeight: 600,
                lineHeight: '1.2',
                letterSpacing: '0px',
                color: '#65553F'
              }}
            >
              Best Sellers
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30"
              style={{ 
                backgroundColor: canScrollLeft ? '#C5B299' : 'transparent',
                border: '1px solid #C5B299'
              }}
            >
              <ArrowLeft 
                size={18} 
                style={{ color: canScrollLeft ? '#FFFFFF' : '#C5B299' }}
              />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30"
              style={{ 
                backgroundColor: canScrollRight ? '#C5B299' : 'transparent',
                border: '1px solid #C5B299'
              }}
            >
              <ArrowRight 
                size={18} 
                style={{ color: canScrollRight ? '#FFFFFF' : '#C5B299' }}
              />
            </button>
          </div>
        </div>

        {/* Products Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-5 md:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:-mx-0 md:px-0"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
