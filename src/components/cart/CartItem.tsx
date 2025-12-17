'use client';

import Image from 'next/image';
import { Minus, Plus, X } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

interface CartItemData {
  id: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartItemProps {
  item: CartItemData;
  compact?: boolean;
}

export function CartItem({ item, compact = false }: CartItemProps) {
  if (compact) {
    return (
      <div 
        className="flex gap-4 p-3 rounded-xl"
        style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
      >
        <div 
          className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0"
          style={{ backgroundColor: '#F5F1EA' }}
        >
          <Image 
            src={item.image} 
            alt={item.name} 
            fill 
            quality={100}
            sizes="80px"
            className="object-contain p-2" 
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div>
              <h4 
                className="font-medium truncate"
                style={{ color: '#171717', fontSize: '14px' }}
              >
                {item.name}
              </h4>
              <p className="text-xs mt-0.5" style={{ color: '#6B6B6B' }}>
                {item.size}
              </p>
            </div>
            <button 
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              aria-label="Remove item"
            >
              <X size={16} style={{ color: '#9CA3AF' }} />
            </button>
          </div>
          <p 
            className="text-sm mt-2 font-medium"
            style={{ color: '#C5B299' }}
          >
            {item.quantity} × {formatPrice(item.price)}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="flex gap-4 p-4 rounded-xl"
      style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
    >
      <div 
        className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden flex-shrink-0"
        style={{ backgroundColor: '#F5F1EA' }}
      >
        <Image 
          src={item.image} 
          alt={item.name} 
          fill 
          quality={100}
          sizes="(max-width: 768px) 96px, 112px"
          className="object-contain p-3" 
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div>
            <h4 
              className="font-medium"
              style={{ color: '#171717', fontSize: '16px' }}
            >
              {item.name}
            </h4>
            <p className="text-sm mt-1" style={{ color: '#6B6B6B' }}>
              {item.size}
            </p>
          </div>
          <button 
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Remove item"
          >
            <X size={18} style={{ color: '#9CA3AF' }} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div 
            className="flex items-center rounded-lg overflow-hidden"
            style={{ border: '1px solid #E5E5E5' }}
          >
            <button 
              className="px-3 py-2 hover:bg-gray-50 transition-colors" 
              aria-label="Decrease quantity"
            >
              <Minus size={14} style={{ color: '#6B6B6B' }} />
            </button>
            <span 
              className="w-10 text-center text-sm font-medium"
              style={{ color: '#171717' }}
            >
              {item.quantity}
            </span>
            <button 
              className="px-3 py-2 hover:bg-gray-50 transition-colors" 
              aria-label="Increase quantity"
            >
              <Plus size={14} style={{ color: '#6B6B6B' }} />
            </button>
          </div>
          <p 
            className="font-semibold"
            style={{ color: '#C5B299', fontSize: '16px' }}
          >
            {formatPrice(item.price * item.quantity)}
          </p>
        </div>
      </div>
    </div>
  );
}
