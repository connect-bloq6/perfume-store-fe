'use client';

import { useWishlistStore } from '@/store/wishlist';

/**
 * Custom hook for wishlist operations
 */
export function useWishlist() {
  const { items, addItem, removeItem, clearWishlist, isInWishlist } =
    useWishlistStore();

  const itemCount = items.length;
  const isEmpty = items.length === 0;

  const toggleItem = (productId: string) => {
    if (isInWishlist(productId)) {
      removeItem(productId);
    } else {
      addItem(productId);
    }
  };

  return {
    items,
    itemCount,
    isEmpty,
    addItem,
    removeItem,
    toggleItem,
    clearWishlist,
    isInWishlist,
  };
}

