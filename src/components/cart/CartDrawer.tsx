'use client';

import Link from 'next/link';
import { Drawer } from '@/components/ui/Drawer';
import { Button } from '@/components/ui/Button';
import { CartItem } from './CartItem';
import { formatPrice } from '@/lib/utils';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Placeholder cart items
const cartItems = [
  { id: '1', name: 'Midnight Rose', size: '50ml', price: 175, quantity: 1, image: '/images/products/midnight-rose.jpg' },
  { id: '2', name: 'Golden Amber', size: '100ml', price: 250, quantity: 2, image: '/images/products/golden-amber.jpg' },
];

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Shopping Cart">
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <p className="text-noir-400 mb-6">Your cart is empty</p>
          <Button variant="secondary" onClick={onClose}>
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} compact />
            ))}
          </div>

          {/* Summary */}
          <div className="border-t border-noir-700 pt-6 mt-6 space-y-4">
            <div className="flex justify-between text-lg">
              <span className="text-noir-300">Subtotal</span>
              <span className="text-gold-500 font-display">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-noir-500 text-sm">Shipping calculated at checkout</p>
            <Link href="/checkout" onClick={onClose}>
              <Button variant="primary" className="w-full">
                Checkout
              </Button>
            </Link>
            <Link href="/cart" onClick={onClose}>
              <Button variant="secondary" className="w-full">
                View Cart
              </Button>
            </Link>
          </div>
        </div>
      )}
    </Drawer>
  );
}

