'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingBag, Star, Check } from 'lucide-react';
import { useAuthStore } from '@/store/auth';
import { useCartStore } from '@/store/cart';
import { useWishlistStore } from '@/store/wishlist';
import { useToastStore } from '@/components/ui/Toast';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  slug: string;
  isNew?: boolean;
  isBestseller?: boolean;
  salePrice?: number;
  category?: string;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [mounted, setMounted] = useState(false);
  const hasDiscount = product.salePrice && product.salePrice < product.price;
  
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const openAuthModal = useAuthStore((state) => state.openAuthModal);
  const addItem = useCartStore((state) => state.addItem);
  const showToast = useToastStore((state) => state.showToast);
  
  // Wishlist store
  const wishlistItems = useWishlistStore((state) => state.items);
  const addToWishlist = useWishlistStore((state) => state.addItem);
  const removeFromWishlist = useWishlistStore((state) => state.removeItem);
  
  // Check if product is in wishlist
  const isInWishlist = wishlistItems.includes(product.id);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCardClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      openAuthModal();
    }
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      openAuthModal();
      return;
    }
    
    const price = hasDiscount ? product.salePrice! : product.price;
    
    addItem({
      productId: product.id,
      name: product.name,
      image: product.image,
      size: '50ml',
      price: price,
      quantity: 1,
    });
    
    setIsAddedToCart(true);
    showToast(`${product.name} added to cart!`, 'success');
    
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const handleWishlist = () => {
    if (!isAuthenticated) {
      openAuthModal();
      return;
    }
    
    if (isInWishlist) {
      removeFromWishlist(product.id);
      showToast(`${product.name} removed from wishlist`, 'remove');
    } else {
      addToWishlist(product.id);
      showToast(`${product.name} added to wishlist!`, 'success');
    }
  };

  // Calculate original price for display
  const originalPrice = hasDiscount ? product.price : Math.round(product.price * 1.13);
  const displayPrice = hasDiscount ? product.salePrice : product.price;

  // Show wishlist state only after mount to prevent hydration mismatch
  const showWishlistActive = mounted && isInWishlist;

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Border Frame */}
      <div
        className="relative p-[3px] rounded-2xl transition-all duration-300"
        style={{
          border: '1.5px solid #796040',
          backgroundColor: '#F5EDE0',
          boxShadow: isHovered 
            ? '0 15px 40px rgba(121, 96, 64, 0.15)' 
            : '0 5px 20px rgba(0, 0, 0, 0.05)',
          transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        }}
      >
        {/* Inner Border Frame */}
        <div
          className="relative rounded-xl overflow-hidden"
          style={{
            border: '1px solid #C5B299',
            backgroundColor: '#F5EDE0',
          }}
        >
          {/* Clickable Image Area */}
          <Link 
            href={`/products/${product.slug}`} 
            onClick={handleCardClick}
            className="block"
          >
            {/* Image Container */}
            <div 
              className="relative aspect-square flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: '#F5EDE0' }}
            >
              {/* Product Image */}
              <div
                className={`relative z-10 w-[90%] h-[90%] transition-transform duration-500 ${
                  isHovered ? 'scale-105' : 'scale-100'
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  quality={100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>

              {/* Badges */}
              {(product.isNew || product.isBestseller) && (
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
                  {product.isNew && (
                    <span 
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{ backgroundColor: '#A8845E', color: '#FEFDFB' }}
                    >
                      New
                    </span>
                  )}
                  {product.isBestseller && (
                    <span 
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{ backgroundColor: '#65553F', color: '#FEFDFB' }}
                    >
                      Bestseller
                    </span>
                  )}
                </div>
              )}
            </div>
          </Link>

          {/* Wishlist Button - Top Right - Outside Link */}
          <button
            type="button"
            onClick={handleWishlist}
            className="absolute top-7 right-7 z-30 w-9 h-9 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
            style={{ 
              backgroundColor: showWishlistActive ? '#DC2626' : '#FFFFFF', 
              color: showWishlistActive ? '#FFFFFF' : '#65553F',
              border: showWishlistActive ? 'none' : '1px solid #D4C9B8',
              boxShadow: showWishlistActive 
                ? '0 4px 12px rgba(220, 38, 38, 0.4)' 
                : '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Heart 
              size={16} 
              fill={showWishlistActive ? '#FFFFFF' : 'none'} 
              strokeWidth={showWishlistActive ? 0 : 2}
            />
          </button>

          {/* Separator Line */}
          <div 
            className="mx-4"
            style={{ height: '1px', backgroundColor: '#E5DED3' }}
          />

          {/* Product Info */}
          <div className="p-4 pt-3">
            <Link 
              href={`/products/${product.slug}`} 
              onClick={handleCardClick}
            >
              <h3 
                className="font-display text-base font-semibold uppercase tracking-wide mb-2 hover:opacity-70 transition-opacity"
                style={{ color: '#4A3D2A' }}
              >
                {product.name}
              </h3>
            </Link>
            
            {/* Price */}
            <div className="flex items-center gap-2 mb-2">
              <span 
                className="text-sm line-through"
                style={{ color: '#9B9B9B' }}
              >
                ${originalPrice}
              </span>
              <span 
                className="text-lg font-semibold"
                style={{ color: '#4A3D2A' }}
              >
                ${displayPrice}
              </span>
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={14}
                  fill="#A8845E"
                  color="#A8845E"
                />
              ))}
              <span 
                className="text-sm ml-1"
                style={{ color: '#6B6B6B' }}
              >
                5.0
              </span>
            </div>

            {/* Add to Cart Button - Always Visible */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full py-2.5 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 active:scale-[0.98] cursor-pointer"
              style={{ 
                backgroundColor: isAddedToCart ? '#4CAF50' : '#A8845E', 
                color: '#FFFFFF',
                boxShadow: isAddedToCart 
                  ? '0 4px 12px rgba(76, 175, 80, 0.4)' 
                  : '0 4px 12px rgba(168, 132, 94, 0.3)'
              }}
            >
              {isAddedToCart ? (
                <>
                  <Check size={16} />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag size={16} />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
