'use client';

import Image from 'next/image';
import { formatPrice } from '@/lib/utils';

const orderItems = [
  { id: '1', name: 'Desert Rose', size: '50ml', price: 175, quantity: 1, image: '/images/Landing Page/Background/Desert Rose.png' },
  { id: '2', name: 'Mysterious', size: '100ml', price: 250, quantity: 2, image: '/images/Landing Page/Background/Mysterious.png' },
];

export function OrderSummary() {
  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-noir-900 border border-noir-800 p-6 sticky top-24">
      <h3 className="font-display text-xl text-gold-500 mb-6">Order Summary</h3>

      {/* Items */}
      <div className="space-y-4 mb-6">
        {orderItems.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="relative w-16 h-16 bg-noir-800 flex-shrink-0">
              <Image src={item.image} alt={item.name} fill quality={100} sizes="64px" className="object-cover" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-gold-500 text-noir-950 text-xs flex items-center justify-center">
                {item.quantity}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white text-sm truncate">{item.name}</h4>
              <p className="text-noir-400 text-xs">{item.size}</p>
            </div>
            <p className="text-white text-sm">{formatPrice(item.price * item.quantity)}</p>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="space-y-3 border-t border-noir-800 pt-6">
        <div className="flex justify-between text-sm">
          <span className="text-noir-400">Subtotal</span>
          <span className="text-white">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-noir-400">Shipping</span>
          <span className="text-white">{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-noir-400">Tax</span>
          <span className="text-white">{formatPrice(tax)}</span>
        </div>
        <div className="flex justify-between text-lg pt-3 border-t border-noir-800">
          <span className="text-white">Total</span>
          <span className="text-gold-500 font-display">{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
}

