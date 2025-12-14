'use client';

import { useState } from 'react';
import { Heart, Minus, Plus, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatPrice } from '@/lib/utils';

interface ProductInfoProps {
  slug: string;
}

const sizes = [
  { ml: 30, price: 125 },
  { ml: 50, price: 175 },
  { ml: 100, price: 250 },
];

export function ProductInfo({ slug }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <p className="text-noir-400 text-sm mb-4">
        Home / Women / Floral
      </p>

      {/* Brand & Name */}
      <span className="text-gold-500 text-sm tracking-[0.3em] uppercase">
        Essence
      </span>
      <h1 className="font-display text-4xl text-white mb-4 capitalize">
        {slug.replace(/-/g, ' ')}
      </h1>

      <Badge variant="new" className="w-fit mb-4">New Arrival</Badge>

      {/* Price */}
      <p className="text-gold-500 text-3xl font-display mb-6">
        {formatPrice(selectedSize.price)}
      </p>

      {/* Description */}
      <p className="text-noir-300 mb-8 leading-relaxed">
        A captivating blend of rare florals and warm woods, this fragrance 
        opens with sparkling bergamot and pink pepper, revealing a heart 
        of Bulgarian rose and jasmine absolute, settled on a base of 
        sandalwood and white musk.
      </p>

      {/* Size Selection */}
      <div className="mb-6">
        <p className="text-sm text-white mb-3">Size</p>
        <div className="flex gap-3">
          {sizes.map((size) => (
            <button
              key={size.ml}
              onClick={() => setSelectedSize(size)}
              className={`px-6 py-3 border transition-colors ${
                selectedSize.ml === size.ml
                  ? 'border-gold-500 text-gold-500'
                  : 'border-noir-700 text-noir-300 hover:border-noir-500'
              }`}
            >
              {size.ml}ml
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-8">
        <p className="text-sm text-white mb-3">Quantity</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-noir-700">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-3 text-noir-400 hover:text-white transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <span className="w-12 text-center text-white">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-3 text-noir-400 hover:text-white transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mb-8">
        <Button variant="primary" size="lg" className="flex-1">
          Add to Cart
        </Button>
        <button
          className="p-4 border border-noir-700 hover:border-gold-500 hover:text-gold-500 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart size={20} />
        </button>
        <button
          className="p-4 border border-noir-700 hover:border-gold-500 hover:text-gold-500 transition-colors"
          aria-label="Share"
        >
          <Share2 size={20} />
        </button>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="p-4 bg-noir-900 text-center">
          <p className="text-gold-500 mb-1">Free Shipping</p>
          <p className="text-noir-400">On orders over $100</p>
        </div>
        <div className="p-4 bg-noir-900 text-center">
          <p className="text-gold-500 mb-1">Easy Returns</p>
          <p className="text-noir-400">30-day return policy</p>
        </div>
      </div>
    </div>
  );
}

