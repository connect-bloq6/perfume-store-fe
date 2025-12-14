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
      <div className="flex gap-4">
        <div className="relative w-20 h-20 bg-noir-800 flex-shrink-0">
          <Image src={item.image} alt={item.name} fill className="object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-display truncate">{item.name}</h4>
          <p className="text-noir-400 text-sm">{item.size}</p>
          <p className="text-gold-500 text-sm mt-1">
            {item.quantity} × {formatPrice(item.price)}
          </p>
        </div>
        <button className="text-noir-500 hover:text-white transition-colors" aria-label="Remove item">
          <X size={18} />
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-6 py-6 border-b border-noir-800">
      <div className="relative w-24 h-24 md:w-32 md:h-32 bg-noir-800 flex-shrink-0">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between">
          <div>
            <h4 className="text-white font-display text-lg">{item.name}</h4>
            <p className="text-noir-400 text-sm">{item.size}</p>
          </div>
          <button className="text-noir-500 hover:text-white transition-colors" aria-label="Remove item">
            <X size={20} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border border-noir-700">
            <button className="p-2 text-noir-400 hover:text-white transition-colors" aria-label="Decrease quantity">
              <Minus size={14} />
            </button>
            <span className="w-10 text-center text-white text-sm">{item.quantity}</span>
            <button className="p-2 text-noir-400 hover:text-white transition-colors" aria-label="Increase quantity">
              <Plus size={14} />
            </button>
          </div>
          <p className="text-gold-500 font-display text-lg">
            {formatPrice(item.price * item.quantity)}
          </p>
        </div>
      </div>
    </div>
  );
}

