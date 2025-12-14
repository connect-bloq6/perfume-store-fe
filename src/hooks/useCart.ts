'use client';

import { useCartStore } from '@/store/cart';

/**
 * Custom hook for cart operations
 */
export function useCart() {
  const {
    items,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
  } = useCartStore();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const isEmpty = items.length === 0;

  return {
    items,
    itemCount,
    subtotal,
    isEmpty,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
  };
}

