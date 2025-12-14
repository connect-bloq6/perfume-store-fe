'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const images = [
  '/images/products/detail-1.jpg',
  '/images/products/detail-2.jpg',
  '/images/products/detail-3.jpg',
  '/images/products/detail-4.jpg',
];

export function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-noir-900 overflow-hidden">
        <Image
          src={images[activeIndex]}
          alt="Product image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'relative w-20 h-20 bg-noir-900 overflow-hidden border-2 transition-colors',
              activeIndex === index ? 'border-gold-500' : 'border-transparent hover:border-noir-600'
            )}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

