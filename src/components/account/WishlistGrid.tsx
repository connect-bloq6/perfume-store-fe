'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingBag, Star, Trash2 } from 'lucide-react';
import { useWishlistStore } from '@/store/wishlist';
import { useCartStore } from '@/store/cart';
import { useAuthStore } from '@/store/auth';
import { useToastStore } from '@/components/ui/Toast';
import { products } from '@/data/products';

export function WishlistGrid() {
  const [mounted, setMounted] = useState(false);
  const wishlistItems = useWishlistStore((state) => state.items);
  const removeFromWishlist = useWishlistStore((state) => state.removeItem);
  const addToCart = useCartStore((state) => state.addItem);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const openAuthModal = useAuthStore((state) => state.openAuthModal);
  const showToast = useToastStore((state) => state.showToast);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Get actual products from wishlist IDs
  const wishlistProducts = products.filter((product) => 
    wishlistItems.includes(product.id)
  );

  const handleRemoveFromWishlist = (productId: string, productName: string) => {
    removeFromWishlist(productId);
    showToast(`${productName} removed from wishlist`, 'success');
  };

  const handleAddToCart = (product: typeof products[0]) => {
    if (!isAuthenticated) {
      openAuthModal();
      return;
    }

    addToCart({
      productId: product.id,
      name: product.name,
      image: product.image,
      size: '50ml',
      price: product.price,
      quantity: 1,
    });
    showToast(`${product.name} added to cart!`, 'success');
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="text-center py-12">
        <div className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin mx-auto" style={{ borderColor: '#A8845E' }} />
      </div>
    );
  }

  if (wishlistProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <div 
          className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#F5EDE0' }}
        >
          <Heart size={32} style={{ color: '#A8845E' }} />
        </div>
        <h3 
          className="font-display text-xl mb-2"
          style={{ color: '#65553F' }}
        >
          Your wishlist is empty
        </h3>
        <p 
          className="text-sm mb-6"
          style={{ color: '#6B6B6B' }}
        >
          Save your favorite fragrances to find them later.
        </p>
        <Link 
          href="/products" 
          className="inline-block px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:opacity-90"
          style={{ backgroundColor: '#A8845E', color: '#FEFDFB' }}
        >
          Explore Fragrances
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {wishlistProducts.map((product) => {
        const originalPrice = Math.round(product.price * 1.13);
        
        return (
          <div
            key={product.id}
            className="relative p-[3px] rounded-2xl transition-all duration-300 hover:-translate-y-1"
            style={{
              border: '1.5px solid #796040',
              backgroundColor: '#FEFDFB',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
            }}
          >
            {/* Inner Border Frame */}
            <div
              className="relative rounded-xl overflow-hidden"
              style={{
                border: '1px solid #C5B299',
                backgroundColor: '#FEFDFB',
              }}
            >
              {/* Image */}
              <Link href={`/products/${product.slug}`} className="block">
                <div 
                  className="relative aspect-square flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: '#FEFDFB' }}
                >
                  <div className="relative z-10 w-[90%] h-[90%]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>

              {/* Wishlist Remove Button - Red Heart */}
              <button
                onClick={() => handleRemoveFromWishlist(product.id, product.name)}
                className="absolute top-7 right-7 z-30 w-9 h-9 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
                style={{ 
                  backgroundColor: '#DC2626',
                  boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)'
                }}
              >
                <Heart size={16} fill="#FFFFFF" color="#FFFFFF" />
              </button>

              {/* Separator */}
              <div className="mx-4" style={{ height: '1px', backgroundColor: '#E5DED3' }} />

              {/* Product Info */}
              <div className="p-4 pt-3">
                <Link href={`/products/${product.slug}`}>
                  <h3 
                    className="font-display text-base font-semibold uppercase tracking-wide mb-2 hover:opacity-70 transition-opacity"
                    style={{ color: '#4A3D2A' }}
                  >
                    {product.name}
                  </h3>
                </Link>
                
                {/* Price */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm line-through" style={{ color: '#9B9B9B' }}>
                    ${originalPrice}
                  </span>
                  <span className="text-lg font-semibold" style={{ color: '#4A3D2A' }}>
                    ${product.price}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={14} fill="#A8845E" color="#A8845E" />
                  ))}
                  <span className="text-sm ml-1" style={{ color: '#6B6B6B' }}>
                    {product.rating}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full py-2.5 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.98]"
                  style={{ 
                    backgroundColor: '#A8845E', 
                    color: '#FEFDFB',
                    boxShadow: '0 4px 12px rgba(168, 132, 94, 0.3)'
                  }}
                >
                  <ShoppingBag size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
