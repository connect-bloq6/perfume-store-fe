'use client';

import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/store/cart';
import { Package, ShoppingBag, Clock, CheckCircle, Truck } from 'lucide-react';

// This would come from a real backend/database
// For now showing empty state since no real orders exist
export function OrderHistory() {
  // Get cart items to show if user wants to place an order
  const cartItems = useCartStore((state) => state.items);
  
  // For demo purposes, we'll show an empty state
  // In a real app, this would fetch from an API
  const orders: Array<{
    id: string;
    date: string;
    status: 'Delivered' | 'In Transit' | 'Processing';
    total: number;
    items: Array<{ name: string; size: string; image: string; quantity: number }>;
  }> = [];

  if (orders.length === 0) {
    return (
      <div 
        className="rounded-2xl p-12 text-center"
        style={{ backgroundColor: '#FEFDFB', border: '1px solid #E5DED3' }}
      >
        <div 
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: '#F5EDE0' }}
        >
          <Package size={36} style={{ color: '#A8845E' }} />
        </div>
        <h3 
          className="text-xl font-semibold mb-3"
          style={{ color: '#4A3D2A' }}
        >
          No orders yet
        </h3>
        <p 
          className="mb-6 max-w-md mx-auto"
          style={{ color: '#6B6B6B' }}
        >
          You haven&apos;t placed any orders yet. Start exploring our collection and find your perfect fragrance!
        </p>
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#A8845E', color: '#FFFFFF' }}
        >
          <ShoppingBag size={18} />
          Start Shopping
        </Link>
        
        {cartItems.length > 0 && (
          <div 
            className="mt-8 pt-8"
            style={{ borderTop: '1px solid #E5DED3' }}
          >
            <p className="text-sm mb-4" style={{ color: '#6B6B6B' }}>
              You have {cartItems.length} item{cartItems.length > 1 ? 's' : ''} in your cart
            </p>
            <Link 
              href="/checkout"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors hover:bg-gray-50"
              style={{ backgroundColor: '#FFFFFF', color: '#4A3D2A', border: '1px solid #C5B299' }}
            >
              Complete Your Order
            </Link>
          </div>
        )}
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle size={16} />;
      case 'In Transit':
        return <Truck size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Delivered':
        return { backgroundColor: '#ECFDF5', color: '#059669', border: '1px solid #A7F3D0' };
      case 'In Transit':
        return { backgroundColor: '#FEF3C7', color: '#D97706', border: '1px solid #FCD34D' };
      default:
        return { backgroundColor: '#F5EDE0', color: '#A8845E', border: '1px solid #C5B299' };
    }
  };

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <div 
          key={order.id} 
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: '#FEFDFB', border: '1px solid #E5DED3' }}
        >
          {/* Order Header */}
          <div 
            className="flex flex-wrap items-center justify-between gap-4 p-6"
            style={{ borderBottom: '1px solid #E5DED3' }}
          >
            <div>
              <p 
                className="font-semibold text-lg"
                style={{ color: '#4A3D2A' }}
              >
                {order.id}
              </p>
              <p 
                className="text-sm mt-1"
                style={{ color: '#6B6B6B' }}
              >
                {new Date(order.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <div className="text-right">
              <span 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full"
                style={getStatusStyle(order.status)}
              >
                {getStatusIcon(order.status)}
                {order.status}
              </span>
              <p 
                className="text-lg font-semibold mt-2"
                style={{ color: '#A8845E' }}
              >
                {formatPrice(order.total)}
              </p>
            </div>
          </div>

          {/* Order Items */}
          <div className="p-6">
            <div className="flex flex-wrap gap-6">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div 
                    className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0"
                    style={{ backgroundColor: '#F5EDE0' }}
                  >
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-contain p-2" 
                    />
                  </div>
                  <div>
                    <p 
                      className="font-medium"
                      style={{ color: '#4A3D2A' }}
                    >
                      {item.name}
                    </p>
                    <p 
                      className="text-sm"
                      style={{ color: '#6B6B6B' }}
                    >
                      {item.size} × {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

