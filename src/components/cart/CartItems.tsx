'use client';

import { CartItem } from './CartItem';

// Placeholder cart data
const cartItems = [
  { id: '1', name: 'Midnight Rose', size: '50ml', price: 175, quantity: 1, image: '/images/products/midnight-rose.jpg' },
  { id: '2', name: 'Golden Amber', size: '100ml', price: 250, quantity: 2, image: '/images/products/golden-amber.jpg' },
  { id: '3', name: 'Ocean Breeze', size: '50ml', price: 165, quantity: 1, image: '/images/products/ocean-breeze.jpg' },
];

export function CartItems() {
  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-noir-400 mb-4">Your cart is empty</p>
        <a href="/products" className="btn-secondary inline-block">
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

