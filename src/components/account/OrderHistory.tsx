'use client';

import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';

const orders = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    status: 'Delivered',
    total: 420,
    items: [
      { name: 'Midnight Rose', size: '50ml', image: '/images/products/midnight-rose.jpg' },
      { name: 'Golden Amber', size: '100ml', image: '/images/products/golden-amber.jpg' },
    ],
  },
  {
    id: 'ORD-002',
    date: '2024-02-01',
    status: 'In Transit',
    total: 165,
    items: [
      { name: 'Ocean Breeze', size: '50ml', image: '/images/products/ocean-breeze.jpg' },
    ],
  },
];

export function OrderHistory() {
  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-noir-400 mb-4">You haven&apos;t placed any orders yet</p>
        <Link href="/products" className="btn-secondary inline-block">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <div key={order.id} className="bg-noir-900 border border-noir-800 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-noir-800">
            <div>
              <p className="text-white font-medium">{order.id}</p>
              <p className="text-noir-400 text-sm">{new Date(order.date).toLocaleDateString()}</p>
            </div>
            <div className="text-right">
              <span className={`inline-block px-3 py-1 text-xs ${
                order.status === 'Delivered' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gold-500/20 text-gold-400'
              }`}>
                {order.status}
              </span>
              <p className="text-gold-500 font-display mt-1">{formatPrice(order.total)}</p>
            </div>
          </div>

          <div className="flex gap-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="relative w-16 h-16 bg-noir-800">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-white text-sm">{item.name}</p>
                  <p className="text-noir-400 text-xs">{item.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

