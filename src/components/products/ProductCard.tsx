'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  slug: string;
  isNew?: boolean;
  isBestseller?: boolean;
  salePrice?: number;
  category?: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const hasDiscount = product.salePrice && product.salePrice < product.price;

  return (
    <motion.div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <Link 
        href={`/products/${product.slug}`} 
        className="block relative aspect-[3/4] overflow-hidden mb-4"
        style={{ borderRadius: '20px', backgroundColor: '#F5F1EA' }}
      >
        {/* Shadow effect */}
        <motion.div
          className="absolute inset-0 rounded-[20px] pointer-events-none z-10"
          animate={{
            boxShadow: isHovered 
              ? '0 15px 40px rgba(121, 96, 64, 0.15)' 
              : '0 5px 20px rgba(0, 0, 0, 0.05)',
          }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain"
            style={{ padding: '20px' }}
          />
        </motion.div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
          {product.isNew && (
            <span 
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{ backgroundColor: '#A8845E', color: '#FEFDFB' }}
            >
              New
            </span>
          )}
          {hasDiscount && (
            <span 
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{ backgroundColor: '#C75050', color: '#FEFDFB' }}
            >
              Sale
            </span>
          )}
          {product.isBestseller && (
            <span 
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{ backgroundColor: '#65553F', color: '#FEFDFB' }}
            >
              Bestseller
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <motion.div 
          className="absolute top-3 right-3 flex flex-col gap-2 z-20"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#FEFDFB', color: '#65553F' }}
            whileHover={{ scale: 1.15, backgroundColor: '#C5B299', color: '#FFFFFF' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Add to wishlist"
            onClick={(e) => e.preventDefault()}
          >
            <Heart size={16} />
          </motion.button>
          <motion.button
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#A8845E', color: '#FEFDFB' }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Add to cart"
            onClick={(e) => e.preventDefault()}
          >
            <ShoppingBag size={16} />
          </motion.button>
        </motion.div>
      </Link>

      {/* Product Info */}
      <div className="px-1">
        <p 
          className="text-xs tracking-wide uppercase mb-1"
          style={{ color: '#8B8B8B' }}
        >
          {product.brand}
        </p>
        <Link href={`/products/${product.slug}`}>
          <motion.h3 
            className="font-display text-base font-medium"
            style={{ color: '#3F3F3F' }}
            whileHover={{ color: '#A8845E' }}
          >
            {product.name}
          </motion.h3>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          {hasDiscount ? (
            <>
              <span 
                className="font-medium"
                style={{ color: '#A8845E' }}
              >
                {formatPrice(product.salePrice!)}
              </span>
              <span 
                className="text-sm line-through"
                style={{ color: '#ABABAB' }}
              >
                {formatPrice(product.price)}
              </span>
            </>
          ) : (
            <span 
              className="font-medium"
              style={{ color: '#A8845E' }}
            >
              {formatPrice(product.price)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
