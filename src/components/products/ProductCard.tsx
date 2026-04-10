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
        className="relative p-[2px] rounded-lg transition-all duration-300"
        style={{
          border: '1px solid #796040',
          backgroundColor: '#F5EDE0',
          boxShadow: isHovered 
            ? '0 8px 20px rgba(121, 96, 64, 0.1)' 
            : '0 2px 8px rgba(0, 0, 0, 0.03)',
          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        }}
      >
        {/* Inner Border Frame */}
        <div
          className="relative rounded-md overflow-hidden"
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
            {/* Image Container - Compact */}
            <div 
              className="relative aspect-[3/4] flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: '#F5EDE0' }}
            >
              {/* Product Image - Zoomed */}
              <div
                className={`relative z-10 w-[95%] h-[95%] transition-transform duration-500 ${
                  isHovered ? 'scale-110' : 'scale-105'
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  quality={100}
                  sizes="240px"
                  className="object-contain"
                />
              </div>

              {/* Badges */}
              {(product.isNew || product.isBestseller) && (
                <div className="absolute top-1.5 left-1.5 flex flex-col gap-0.5 z-20">
                  {product.isNew && (
                    <span 
                      className="px-1.5 py-0.5 text-[8px] font-medium rounded-full"
                      style={{ backgroundColor: '#A8845E', color: '#FEFDFB' }}
                    >
                      New
                    </span>
                  )}
                  {product.isBestseller && (
                    <span 
                      className="px-1.5 py-0.5 text-[8px] font-medium rounded-full"
                      style={{ backgroundColor: '#65553F', color: '#FEFDFB' }}
                    >
                      Bestseller
                    </span>
                  )}
                </div>
              )}
            </div>
          </Link>

          {/* Wishlist Button - Top Right */}
          <button
            type="button"
            onClick={handleWishlist}
            className="absolute top-1.5 right-1.5 z-30 w-6 h-6 rounded-full flex items-center justify-center shadow-sm cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
            style={{ 
              backgroundColor: showWishlistActive ? '#DC2626' : '#FFFFFF', 
              color: showWishlistActive ? '#FFFFFF' : '#65553F',
              border: showWishlistActive ? 'none' : '1px solid #D4C9B8',
              boxShadow: showWishlistActive 
                ? '0 2px 6px rgba(220, 38, 38, 0.3)' 
                : '0 1px 3px rgba(0, 0, 0, 0.06)'
            }}
          >
            <Heart 
              size={10} 
              fill={showWishlistActive ? '#FFFFFF' : 'none'} 
              strokeWidth={showWishlistActive ? 0 : 2}
            />
          </button>

          {/* Separator Line */}
          <div 
            className="mx-2"
            style={{ height: '1px', backgroundColor: '#E5DED3' }}
          />

          {/* Product Info - Compact */}
          <div className="p-2 pt-1.5">
            <Link 
              href={`/products/${product.slug}`} 
              onClick={handleCardClick}
            >
              <h3 
                className="font-display text-[10px] font-semibold uppercase tracking-wide mb-0.5 hover:opacity-70 transition-opacity line-clamp-1"
                style={{ color: '#4A3D2A' }}
              >
                {product.name}
              </h3>
            </Link>
            
            {/* Price */}
            <div className="flex items-center gap-1 mb-0.5">
              {/* <span 
                className="text-[9px] line-through"
                style={{ color: '#9B9B9B' }}
              >
                ${originalPrice}
              </span> */}
              <span 
                className="text-xs font-semibold"
                style={{ color: '#4A3D2A' }}
              >
                ${displayPrice}
              </span>
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-0.5 mb-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={8}
                  fill="#A8845E"
                  color="#A8845E"
                />
              ))}
              <span 
                className="text-[9px] ml-0.5"
                style={{ color: '#6B6B6B' }}
              >
                5.0
              </span>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full py-1.5 rounded-full font-medium text-[10px] flex items-center justify-center gap-1 transition-all duration-300 hover:opacity-90 active:scale-[0.98] cursor-pointer"
              style={{ 
                backgroundColor: isAddedToCart ? '#4CAF50' : '#A8845E', 
                color: '#FFFFFF',
                boxShadow: isAddedToCart 
                  ? '0 2px 6px rgba(76, 175, 80, 0.25)' 
                  : '0 2px 6px rgba(168, 132, 94, 0.15)'
              }}
            >
              {isAddedToCart ? (
                <>
                  <Check size={10} />
                  Added
                </>
              ) : (
                <>
                  <ShoppingBag size={10} />
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
