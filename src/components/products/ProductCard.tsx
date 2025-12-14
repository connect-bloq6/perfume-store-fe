'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingBag } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
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
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.salePrice && product.salePrice < product.price;

  return (
    <div className="group relative">
      {/* Image Container */}
      <Link href={`/products/${product.slug}`} className="block relative aspect-[3/4] overflow-hidden bg-noir-900">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && <Badge variant="new">New</Badge>}
          {hasDiscount && <Badge variant="sale">Sale</Badge>}
          {product.isBestseller && <Badge variant="default">Bestseller</Badge>}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="w-10 h-10 bg-noir-950/80 backdrop-blur-sm flex items-center justify-center hover:bg-gold-500 hover:text-noir-950 transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart size={18} />
          </button>
          <button
            className="w-10 h-10 bg-noir-950/80 backdrop-blur-sm flex items-center justify-center hover:bg-gold-500 hover:text-noir-950 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-4">
        <p className="text-noir-400 text-xs tracking-wide uppercase mb-1">
          {product.brand}
        </p>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display text-lg text-white hover:text-gold-500 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          {hasDiscount ? (
            <>
              <span className="text-gold-500 font-medium">
                {formatPrice(product.salePrice!)}
              </span>
              <span className="text-noir-500 text-sm line-through">
                {formatPrice(product.price)}
              </span>
            </>
          ) : (
            <span className="text-gold-500 font-medium">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

