'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { formatPrice } from '@/lib/utils';

export function CartSummary() {
  const subtotal = 840;
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-noir-900 border border-noir-800 p-6">
      <h3 className="font-display text-xl text-gold-500 mb-6">Order Summary</h3>

      {/* Promo Code */}
      <div className="mb-6">
        <label className="block text-sm text-noir-300 mb-2">Promo Code</label>
        <div className="flex gap-2">
          <Input placeholder="Enter code" className="flex-1" />
          <Button variant="secondary" size="sm">Apply</Button>
        </div>
      </div>

      {/* Summary Lines */}
      <div className="space-y-3 border-t border-noir-800 pt-6">
        <div className="flex justify-between text-sm">
          <span className="text-noir-400">Subtotal</span>
          <span className="text-white">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-noir-400">Shipping</span>
          <span className="text-white">
            {shipping === 0 ? 'Free' : formatPrice(shipping)}
          </span>
        </div>
        <div className="flex justify-between text-lg pt-3 border-t border-noir-800">
          <span className="text-white">Total</span>
          <span className="text-gold-500 font-display">{formatPrice(total)}</span>
        </div>
      </div>

      <Link href="/checkout" className="block mt-6">
        <Button variant="primary" className="w-full">
          Proceed to Checkout
        </Button>
      </Link>

      <p className="text-noir-500 text-xs text-center mt-4">
        Taxes calculated at checkout
      </p>
    </div>
  );
}

