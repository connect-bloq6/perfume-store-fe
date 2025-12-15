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
    <section className="py-16 md:py-24" style={{ backgroundColor: '#E2DACB' }}>
      <div className="container-luxury">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display"
            style={{ 
              fontWeight: 600,
              fontSize: '48px',
              lineHeight: '20px',
              letterSpacing: '0px',
              color: '#65553F'
            }}
          >
            Best Sellers
          </motion.h2>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                width: '50px',
                height: '50px',
                border: '5px solid #796040',
                color: '#796040',
                opacity: canScrollLeft ? 1 : 0.5,
                cursor: canScrollLeft ? 'pointer' : 'not-allowed'
              }}
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} strokeWidth={5} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                width: '50px',
                height: '50px',
                border: '5px solid #9F8E78',
                color: '#9F8E78',
                opacity: canScrollRight ? 1 : 0.5,
                cursor: canScrollRight ? 'pointer' : 'not-allowed'
              }}
              aria-label="Scroll right"
            >
              <ArrowRight size={20} strokeWidth={5} />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div
          ref={scrollRef}
          onScroll={checkScrollButtons}
          className="flex justify-center pb-4"
          style={{ gap: '5%' }}
        >
          {bestsellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-1 max-w-[320px]"
            >
              <Link href={`/products/${product.name.toLowerCase().replace(' ', '-')}`}>
                <div className="group">
                  {/* Outer Border */}
                  <div
                    className="flex items-center justify-center mx-auto"
                    style={{
                      width: '100%',
                      maxWidth: '313px',
                      height: '456px',
                      border: '1.5px solid #796040',
                      borderRadius: '15px',
                      backgroundColor: 'transparent'
                    }}
                  >
                    {/* Product Card with Inner Border */}
                    <div 
                      className="relative overflow-hidden"
                      style={{ 
                        width: '307px',
                        height: '450px',
                        border: '1.2px solid #BFA583',
                        borderRadius: '15px',
                        backgroundColor: 'transparent'
                      }}
                    >
                    {/* Badge */}
                    {product.badge && (
                      <span 
                        className="absolute top-4 left-4 z-10 font-inter flex items-center justify-center"
                        style={{ 
                          width: '92px',
                          height: '36px',
                          borderRadius: '6px',
                          border: '1px solid transparent',
                          background: 'linear-gradient(#E2DACB, #E2DACB) padding-box, linear-gradient(102.6deg, rgba(255, 255, 255, 0.25) 1.99%, rgba(255, 255, 255, 0) 38.43%) border-box',
                          fontWeight: 700,
                          fontSize: '16px',
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
                        className="relative"
                        style={{
                          width: '100%',
                          maxWidth: '304px',
                          height: '471px',
                          transform: 'scale(1.55) translateY(7%)'
                        }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                          sizes="425px"
                        />
                      </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="pt-4 px-1">
                    <h3 
                      className="font-body transition-colors group-hover:text-[#8B7355]"
                      style={{ 
                        fontWeight: 600,
                        fontSize: '24px',
                        lineHeight: '20px',
                        letterSpacing: '0px',
                        color: '#796040'
                      }}
                    >
                      {product.name}
                    </h3>
                    <p 
                      className="font-body"
                      style={{ 
                        marginTop: '5%',
                        fontSize: '16px',
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
