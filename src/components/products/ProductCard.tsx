'use client';

import Link from 'next/link';
import Image from 'next/image';
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
  const hasDiscount = product.salePrice && product.salePrice < product.price;

  return (
    <div className="group">
      {/* Image Container */}
      <Link 
        href={`/products/${product.slug}`} 
        className="block relative aspect-[3/4] overflow-hidden mb-4"
        style={{ borderRadius: '20px', backgroundColor: '#F5F1EA' }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
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
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: '#FEFDFB', color: '#65553F' }}
            aria-label="Add to wishlist"
          >
            <Heart size={16} />
          </button>
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: '#A8845E', color: '#FEFDFB' }}
            aria-label="Add to cart"
          >
            <ShoppingBag size={16} />
          </button>
        </div>
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
          <h3 
            className="font-display text-base font-medium transition-colors hover:opacity-70"
            style={{ color: '#3F3F3F' }}
          >
            {product.name}
          </h3>
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
    </div>
  );
}
