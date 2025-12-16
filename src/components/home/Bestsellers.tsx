'use client';

import { useState, useRef } from 'react';
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
  },
  {
    id: 2,
    name: 'Mysterious',
    price: 375,
    image: '/images/Landing Page/Background/Mysterious.png',
    badge: null,
  },
  {
    id: 3,
    name: 'Black Phoenix',
    price: 375,
    image: '/images/Landing Page/Background/Black_Phoenix.png',
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
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#E2DACB' }}>
      <div className="container-luxury">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-[32px] md:text-[40px] lg:text-[48px]"
            style={{ 
              fontWeight: 600,
              lineHeight: '1.2',
              letterSpacing: '0px',
              color: '#65553F'
            }}
          >
            Best Sellers
          </motion.h2>
          
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="rounded-full flex items-center justify-center transition-all duration-300 w-10 h-10 md:w-[50px] md:h-[50px]"
              style={{
                border: '4px solid #796040',
                color: '#796040',
                opacity: canScrollLeft ? 1 : 0.5,
                cursor: canScrollLeft ? 'pointer' : 'not-allowed'
              }}
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" strokeWidth={5} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="rounded-full flex items-center justify-center transition-all duration-300 w-10 h-10 md:w-[50px] md:h-[50px]"
              style={{
                border: '4px solid #9F8E78',
                color: '#9F8E78',
                opacity: canScrollRight ? 1 : 0.5,
                cursor: canScrollRight ? 'pointer' : 'not-allowed'
              }}
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={5} />
            </button>
          </div>
        </div>

        {/* Products Grid - Responsive for tablet */}
        <div
          ref={scrollRef}
          onScroll={checkScrollButtons}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[5%] pb-4"
        >
          {bestsellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              <Link href={`/products/${product.name.toLowerCase().replace(' ', '-')}`}>
                <div className="group">
                  {/* Outer Border - Responsive sizing */}
                  <div
                    className="flex items-center justify-center mx-auto w-full max-w-[280px] md:max-w-[290px] lg:max-w-[313px] h-[380px] md:h-[420px] lg:h-[456px]"
                    style={{
                      border: '1.5px solid #796040',
                      borderRadius: '15px',
                      backgroundColor: 'transparent'
                    }}
                  >
                    {/* Product Card with Inner Border - Responsive */}
                    <div 
                      className="relative overflow-hidden w-[calc(100%-6px)] h-[calc(100%-6px)]"
                      style={{ 
                        border: '1.2px solid #BFA583',
                        borderRadius: '15px',
                        backgroundColor: 'transparent'
                      }}
                    >
                    {/* Badge */}
                    {product.badge && (
                      <span 
                        className="absolute top-3 left-3 md:top-4 md:left-4 z-10 font-inter flex items-center justify-center text-[14px] md:text-[16px]"
                        style={{ 
                          width: '80px',
                          height: '32px',
                          borderRadius: '6px',
                          border: '1px solid transparent',
                          background: 'linear-gradient(#E2DACB, #E2DACB) padding-box, linear-gradient(102.6deg, rgba(255, 255, 255, 0.25) 1.99%, rgba(255, 255, 255, 0) 38.43%) border-box',
                          fontWeight: 700,
                          lineHeight: '100%',
                          letterSpacing: '0.08em',
                          color: '#C09E81'
                        }}
                      >
                        {product.badge}
                      </span>
                    )}
                    
                    {/* Product Image */}
                    <div className="flex items-center justify-center h-full">
                      <div 
                        className="relative w-full h-[350px] md:h-[400px] lg:h-[471px]"
                        style={{
                          maxWidth: '304px',
                          transform: 'scale(1.55) translateY(7%)'
                        }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 280px, (max-width: 1024px) 290px, 313px"
                        />
                      </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="pt-3 md:pt-4 px-1">
                    <h3 
                      className="font-body transition-colors group-hover:text-[#8B7355] text-[20px] md:text-[22px] lg:text-[24px]"
                      style={{ 
                        fontWeight: 600,
                        lineHeight: '1.2',
                        letterSpacing: '0px',
                        color: '#796040'
                      }}
                    >
                      {product.name}
                    </h3>
                    <p 
                      className="font-body text-[14px] md:text-[15px] lg:text-[16px]"
                      style={{ 
                        marginTop: '4%',
                        lineHeight: '20px',
                        color: '#796040'
                      }}
                    >
                      ${product.price}.00
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Horizontal Line */}
        <div 
          className="mt-16 mx-auto"
          style={{
            width: '100%',
            maxWidth: '1554px',
            height: '0px',
            border: '1.5px solid #796040',
            transform: 'rotate(0.19deg)'
          }}
        />
      </div>
    </section>
  );
}
