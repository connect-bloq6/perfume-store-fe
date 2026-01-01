'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Share2, Heart, Minus, Plus, ShoppingCart, ChevronRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { reviews, ratingBreakdown, Product } from '@/data/products';
import { useAuthStore } from '@/store/auth';
import { useCartStore } from '@/store/cart';
import { useWishlistStore } from '@/store/wishlist';
import { useToastStore } from '@/components/ui/Toast';

interface ProductPageClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductPageClient({ product, relatedProducts }: ProductPageClientProps) {
  const [selectedVolume, setSelectedVolume] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Auth store
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const openAuthModal = useAuthStore((state) => state.openAuthModal);
  
  // Cart store
  const addItem = useCartStore((state) => state.addItem);
  
  // Wishlist store
  const wishlistItems = useWishlistStore((state) => state.items);
  const addToWishlist = useWishlistStore((state) => state.addItem);
  const removeFromWishlist = useWishlistStore((state) => state.removeItem);
  const isInWishlist = wishlistItems.includes(product.id);
  
  // Toast
  const showToast = useToastStore((state) => state.showToast);

  const totalReviews = ratingBreakdown.reduce((sum, r) => sum + r.count, 0);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      openAuthModal();
      return;
    }
    
    const selectedVol = product.volumes[selectedVolume];
    const price = selectedVol?.price || product.price;
    
    addItem({
      productId: product.id,
      name: product.name,
      image: product.image,
      size: selectedVol?.size || '50ml',
      price: price,
      quantity: quantity,
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

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="container-luxury py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
          <Link href="/products" className="hover:text-[#C4A77D] transition-colors" style={{ color: '#6B6B6B' }}>
            Products
          </Link>
          <ChevronRight size={14} style={{ color: '#6B6B6B' }} aria-hidden="true" />
          <span style={{ color: '#171717' }}>{product.name}</span>
        </nav>

        {/* Main Product Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="relative aspect-square overflow-hidden"
              style={{ backgroundColor: '#F0EBE3', borderRadius: '24px' }}
            >
              <Image
                src={product.image}
                alt={`${product.name} by ${product.brand} - Luxury Perfume`}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-8"
                priority
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Tags and Actions */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      backgroundColor: index === 0 ? '#C4A77D' : '#F5F5F5',
                      color: index === 0 ? '#FFFFFF' : '#6B6B6B',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button 
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Share this product"
                >
                  <Share2 size={18} style={{ color: '#6B6B6B' }} />
                </button>
                <button 
                  onClick={handleWishlist}
                  className="p-2 rounded-full transition-all"
                  style={{ 
                    backgroundColor: isInWishlist ? '#FEE2E2' : 'transparent',
                  }}
                  aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart 
                    size={18} 
                    fill={isInWishlist ? '#DC2626' : 'none'}
                    style={{ color: isInWishlist ? '#DC2626' : '#6B6B6B' }} 
                  />
                </button>
              </div>
            </div>

            {/* Product Name */}
            <h1 
              className="font-playfair mb-3"
              style={{ fontSize: '36px', lineHeight: '44px', color: '#171717' }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1" role="img" aria-label={`Rating: ${product.rating} out of 5 stars`}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    fill={star <= Math.floor(product.rating) ? '#C4A77D' : 'none'}
                    stroke={star <= product.rating ? '#C4A77D' : '#D1D1D1'}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span style={{ color: '#171717', fontSize: '14px' }}>{product.rating}</span>
              <span style={{ color: '#6B6B6B', fontSize: '14px' }}>({product.reviewCount} reviews)</span>
              <span style={{ color: '#6B6B6B', fontSize: '14px' }}>• {product.soldCount} Sold</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span 
                className="font-playfair"
                style={{ fontSize: '32px', color: '#171717' }}
              >
                ${product.volumes[selectedVolume]?.price || product.price}
              </span>
              {product.discount && (
                <>
                  <span 
                    className="px-2 py-0.5 text-xs font-medium rounded"
                    style={{ backgroundColor: '#FEE2E2', color: '#DC2626' }}
                  >
                    -{product.discount}% off
                  </span>
                  {product.originalPrice && (
                    <span 
                      className="line-through"
                      style={{ fontSize: '16px', color: '#9CA3AF' }}
                    >
                      ${product.originalPrice}
                    </span>
                  )}
                </>
              )}
            </div>

            {/* Volume Selection */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3" style={{ color: '#171717' }}>
                Volume: <span style={{ color: '#6B6B6B' }}>{product.volumes[selectedVolume]?.size}</span>
              </p>
              <div className="flex gap-2" role="radiogroup" aria-label="Select volume">
                {product.volumes.map((vol, index) => (
                  <button
                    key={vol.size}
                    onClick={() => setSelectedVolume(index)}
                    className="px-4 py-2 text-sm rounded-lg transition-all"
                    style={{
                      backgroundColor: selectedVolume === index ? '#3D3D3D' : '#FFFFFF',
                      color: selectedVolume === index ? '#FFFFFF' : '#171717',
                      border: '1px solid',
                      borderColor: selectedVolume === index ? '#3D3D3D' : '#E5E5E5',
                    }}
                    role="radio"
                    aria-checked={selectedVolume === index}
                  >
                    {vol.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Collection/Color Selection */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3" style={{ color: '#171717' }}>
                Collection: <span style={{ color: '#6B6B6B' }}>{product.colors[selectedColor]?.name}</span>
              </p>
              <div className="flex gap-2" role="radiogroup" aria-label="Select collection color">
                {product.colors.map((col, index) => (
                  <button
                    key={col.name}
                    onClick={() => setSelectedColor(index)}
                    className="w-10 h-10 rounded-lg transition-all flex items-center justify-center"
                    style={{
                      backgroundColor: col.color,
                      border: selectedColor === index ? '2px solid #171717' : col.border ? '1px solid #E5E5E5' : 'none',
                    }}
                    aria-label={col.name}
                    role="radio"
                    aria-checked={selectedColor === index}
                  >
                    {selectedColor === index && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8L6.5 11.5L13 5" stroke={col.color === '#F5F5F5' || col.color === '#E5E4E2' || col.color === '#F5E6D3' ? '#171717' : '#FFFFFF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 mb-8">
              <div 
                className="flex items-center rounded-lg overflow-hidden"
                style={{ border: '1px solid #E5E5E5' }}
              >
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} style={{ color: '#6B6B6B' }} />
                </button>
                <span 
                  className="w-12 text-center font-medium"
                  style={{ color: '#171717' }}
                  aria-label={`Quantity: ${quantity}`}
                >
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} style={{ color: '#6B6B6B' }} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all hover:opacity-90"
                style={{ 
                  backgroundColor: isAddedToCart ? '#4CAF50' : '#C4A77D', 
                  color: '#FFFFFF',
                  boxShadow: isAddedToCart 
                    ? '0 2px 6px rgba(76, 175, 80, 0.25)' 
                    : '0 2px 6px rgba(196, 167, 125, 0.25)'
                }}
              >
                {isAddedToCart ? (
                  <>
                    <Check size={18} aria-hidden="true" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} aria-hidden="true" />
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            {/* Product Description */}
            <div 
              className="p-6 rounded-xl"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
            >
              <h2 className="font-semibold mb-3" style={{ color: '#171717' }}>Product Description</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B6B6B' }}>
                {product.description}
              </p>
              <ul className="space-y-2 text-sm" style={{ color: '#6B6B6B' }}>
                <li>• <strong>Top Notes:</strong> {product.notes.top}</li>
                <li>• <strong>Heart Notes:</strong> {product.notes.heart}</li>
                <li>• <strong>Base Notes:</strong> {product.notes.base}</li>
                <li>• <strong>Longevity:</strong> {product.longevity}</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* You May Also Like */}
        <section className="mb-16" aria-labelledby="related-products-heading">
          <h2 
            id="related-products-heading"
            className="font-playfair mb-8"
            style={{ fontSize: '24px', color: '#171717' }}
          >
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/products/${relatedProduct.slug}`}>
                <article 
                  className="group rounded-xl overflow-hidden transition-shadow hover:shadow-lg"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
                >
                  <div 
                    className="relative aspect-square"
                    style={{ backgroundColor: '#F0EBE3' }}
                  >
                    <Image
                      src={relatedProduct.image}
                      alt={`${relatedProduct.name} by ${relatedProduct.brand}`}
                      fill
                      quality={100}
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1" style={{ color: '#171717' }}>{relatedProduct.name}</h3>
                    <p style={{ color: '#171717' }}>${relatedProduct.price}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Ratings & Reviews */}
        <section className="mb-16" aria-labelledby="reviews-heading">
          <h2 
            id="reviews-heading"
            className="font-playfair mb-8"
            style={{ fontSize: '24px', color: '#171717' }}
          >
            Ratings & Reviews
          </h2>

          {/* Rating Summary */}
          <div 
            className="p-6 rounded-xl mb-8"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
          >
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              {/* Overall Rating */}
              <div className="text-center">
                <div 
                  className="font-playfair mb-2"
                  style={{ fontSize: '48px', color: '#171717' }}
                >
                  {product.rating}
                </div>
                <div className="flex items-center justify-center gap-1 mb-2" role="img" aria-label={`Average rating: ${product.rating} out of 5`}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      fill={star <= Math.floor(product.rating) ? '#C4A77D' : 'none'}
                      stroke={star <= product.rating ? '#C4A77D' : '#D1D1D1'}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-sm" style={{ color: '#6B6B6B' }}>
                  Based on {product.reviewCount} reviews
                </p>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-2">
                {ratingBreakdown.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <span className="text-sm w-8" style={{ color: '#6B6B6B' }}>{item.stars} ★</span>
                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#F0F0F0' }}>
                      <div 
                        className="h-full rounded-full"
                        style={{ 
                          backgroundColor: '#C4A77D',
                          width: `${(item.count / totalReviews) * 100}%`
                        }}
                      />
                    </div>
                    <span className="text-sm w-8 text-right" style={{ color: '#6B6B6B' }}>{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-4">
            {reviews.map((review) => (
              <article 
                key={review.id}
                className="p-6 rounded-xl"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium text-white"
                      style={{ backgroundColor: review.color }}
                      aria-hidden="true"
                    >
                      {review.initials}
                    </div>
                    <div>
                      <p className="font-medium" style={{ color: '#171717' }}>{review.name}</p>
                      <div className="flex items-center gap-1" role="img" aria-label={`Rating: ${review.rating} out of 5`}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={12}
                            fill={star <= review.rating ? '#C4A77D' : 'none'}
                            stroke={star <= review.rating ? '#C4A77D' : '#D1D1D1'}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <time className="text-sm" style={{ color: '#9CA3AF' }}>{review.date}</time>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#6B6B6B' }}>
                  {review.text}
                </p>
                <div className="flex items-center gap-4">
                  <button 
                    className="text-sm hover:underline"
                    style={{ color: '#6B6B6B' }}
                  >
                    Helpful ({review.helpful})
                  </button>
                  <button 
                    className="text-sm hover:underline"
                    style={{ color: '#6B6B6B' }}
                  >
                    Reply
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-8">
            <button
              className="px-8 py-3 rounded-full text-sm font-medium transition-colors hover:bg-gray-50"
              style={{ border: '1px solid #E5E5E5', color: '#171717' }}
            >
              Load More Reviews
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

