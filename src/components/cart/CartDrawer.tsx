'use client';

import Link from 'next/link';
import Image from 'next/image';
import { X, ShoppingBag } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/store/cart';
import { useToastStore } from '@/components/ui/Toast';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items: cartItems, removeItem } = useCartStore();
  const showToast = useToastStore((state) => state.showToast);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id);
    showToast(`${name} removed from cart`, 'cart_remove');
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#FAFAFA' }}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: '1px solid #E5E5E5' }}
        >
          <div className="flex items-center gap-3">
            <h2 
              className="font-medium"
              style={{ fontSize: '18px', color: '#171717' }}
            >
              Shopping Cart
            </h2>
            <span 
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium"
              style={{ backgroundColor: '#C5B299', color: '#FFFFFF' }}
            >
              {itemCount}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} style={{ color: '#6B6B6B' }} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(100%-80px)]">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 text-center px-6">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: '#F0F0F0' }}
              >
                <ShoppingBag size={24} style={{ color: '#9CA3AF' }} />
              </div>
              <p className="mb-2" style={{ color: '#171717', fontSize: '16px', fontWeight: 500 }}>
                Your cart is empty
              </p>
              <p className="text-sm mb-6" style={{ color: '#6B6B6B' }}>
                Add some products to get started
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#C5B299', color: '#FFFFFF' }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex gap-4 p-3 rounded-xl"
                      style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
                    >
                      {/* Image */}
                      <div 
                        className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0"
                        style={{ backgroundColor: '#F5F1EA' }}
                      >
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          fill 
                          quality={100}
                          sizes="80px"
                          className="object-contain p-2" 
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 
                              className="font-medium truncate"
                              style={{ color: '#171717', fontSize: '14px' }}
                            >
                              {item.name}
                            </h4>
                            <p className="text-xs mt-0.5" style={{ color: '#6B6B6B' }}>
                              {item.size}
                            </p>
                          </div>
                          <button 
                            onClick={() => handleRemoveItem(item.id, item.name)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                            aria-label="Remove item"
                          >
                            <X size={16} style={{ color: '#9CA3AF' }} />
                          </button>
                        </div>
                        <p 
                          className="text-sm mt-2 font-medium"
                          style={{ color: '#C5B299' }}
                        >
                          {item.quantity} × {formatPrice(item.price)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div 
                className="px-6 py-5"
                style={{ borderTop: '1px solid #E5E5E5', backgroundColor: '#FFFFFF' }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span style={{ color: '#171717', fontSize: '16px', fontWeight: 500 }}>
                    Subtotal
                  </span>
                  <span style={{ color: '#C5B299', fontSize: '18px', fontWeight: 600 }}>
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="text-sm mb-4" style={{ color: '#9CA3AF' }}>
                  Shipping calculated at checkout
                </p>
                
                <div className="space-y-3">
                  <Link href="/checkout" onClick={onClose} className="block">
                    <button
                      className="w-full py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                      style={{ backgroundColor: '#C5B299', color: '#FFFFFF' }}
                    >
                      Checkout
                    </button>
                  </Link>
                  <Link href="/cart" onClick={onClose} className="block">
                    <button
                      className="w-full py-3 rounded-lg text-sm font-medium transition-colors hover:bg-gray-50"
                      style={{ backgroundColor: '#FFFFFF', color: '#171717', border: '1px solid #E5E5E5' }}
                    >
                      View Cart
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
