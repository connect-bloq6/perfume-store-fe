'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Download, Package, Truck, MapPin, Clock, Check } from 'lucide-react';

// Order data
const orderData = {
  orderNumber: 'PSA-2025-9452',
  orderDate: 'December 13, 2025',
  estimatedDelivery: 'December 18, 2025',
  totalAmount: 4467,
};

const trackingData = {
  trackingNumber: 'FDX324098400524',
  carrier: 'FedEx Express',
  steps: [
    { label: 'Dispatched', date: 'Dec 13, 10:30 AM', completed: true },
    { label: 'In Transit', date: 'Dec 13, 2:15 PM', completed: true },
    { label: 'Out for Delivery', date: 'Pending', completed: false },
    { label: 'Delivered', date: 'Pending', completed: false },
  ],
};

const trackingHistory = [
  {
    status: 'In Transit',
    description: 'Package is on the way to destination facility',
    location: 'Atlanta, GA - Distribution Center',
    date: 'Dec 13, 2:15 PM',
    icon: Truck,
    active: true,
  },
  {
    status: 'Dispatched from Warehouse',
    description: 'Package has been picked up by carrier',
    location: 'Atlanta, GA - Perfume Store Warehouse',
    date: 'Dec 13, 10:30 AM',
    icon: Package,
    active: false,
  },
  {
    status: 'Order Processed',
    description: 'Your order has been packed and ready for shipping',
    location: 'Atlanta, GA - Processing Center',
    date: 'Dec 13, 9:00 AM',
    icon: Check,
    active: false,
  },
  {
    status: 'Order Placed',
    description: 'Your order has been successfully placed',
    location: 'Order #PSA-2025-9452',
    date: 'Dec 13, 8:30 AM',
    icon: CheckCircle,
    active: false,
  },
];

const shippingDetails = {
  name: 'John Smith',
  address: '123 Peachtree Street NE',
  city: 'Atlanta, GA 30303',
  deliveryDate: 'December 18, 2025',
  shippingMethod: 'Standard Shipping (3-5 business days)',
};

const orderItems = [
  {
    name: 'Desert Rose',
    volume: '50ml',
    quantity: 2,
    priceEach: 145,
    total: 290,
    image: '/images/alpha.png',
  },
  {
    name: 'Mysterious',
    volume: '100ml',
    quantity: 4,
    priceEach: 180,
    total: 720,
    image: '/images/alpha_chrome.png',
  },
  {
    name: 'Black Phoenix',
    volume: '150ml',
    quantity: 8,
    priceEach: 240,
    total: 1920,
    image: '/images/alpha_oros.png',
  },
];

const orderSummary = {
  subtotal: 5485,
  discount: 1097,
  deliveryFee: 15,
  total: 4467,
};

const steps = [
  { number: 1, label: 'Shopping cart', completed: true },
  { number: 2, label: 'Checkout details', completed: true },
  { number: 3, label: 'Order complete', completed: true },
];

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="container-luxury pt-32 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 
            className="font-playfair mb-6"
            style={{ fontSize: '36px', lineHeight: '44px', color: '#171717' }}
          >
            Your Shopping Cart
      </h1>

          {/* Progress Steps - All Completed */}
          <div className="flex items-center justify-center gap-0 max-w-md mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-2"
                    style={{ backgroundColor: '#C5B299' }}
                  >
                    <Check size={18} color="#FFFFFF" />
                  </div>
                  <span 
                    className="text-xs whitespace-nowrap"
                    style={{ color: '#6B6B6B' }}
                  >
                    {step.label}
                  </span>
                </div>
                
                {index < steps.length - 1 && (
                  <div 
                    className="w-16 h-px mx-3 mb-5"
                    style={{ backgroundColor: '#C5B299' }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Order Confirmed Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-6"
        >
          <div 
            className="p-8 rounded-2xl text-center"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
          >
            {/* Checkmark Icon */}
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#ECFDF5' }}
            >
              <CheckCircle size={32} style={{ color: '#10B981' }} />
            </div>

            <h2 
              className="font-playfair mb-3"
              style={{ fontSize: '28px', color: '#171717' }}
            >
              Order Confirmed!
            </h2>

            <p className="text-sm mb-6" style={{ color: '#6B6B6B' }}>
              Thank you for your purchase. Your order has been successfully placed and will be delivered soon.
            </p>

            {/* Order Details Box */}
            <div 
              className="p-5 rounded-xl mb-6"
              style={{ backgroundColor: '#FBF9F6' }}
            >
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-xs mb-1" style={{ color: '#9CA3AF' }}>Order Number</p>
                  <p className="font-semibold text-sm" style={{ color: '#171717' }}>{orderData.orderNumber}</p>
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: '#9CA3AF' }}>Order Date</p>
                  <p className="font-semibold text-sm" style={{ color: '#171717' }}>{orderData.orderDate}</p>
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: '#9CA3AF' }}>Estimated Delivery</p>
                  <p className="font-semibold text-sm" style={{ color: '#171717' }}>{orderData.estimatedDelivery}</p>
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: '#9CA3AF' }}>Total Amount</p>
                  <p className="font-semibold text-sm" style={{ color: '#9CA3AF' }}>${orderData.totalAmount.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-3">
              <button
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#C5B299', color: '#FFFFFF' }}
              >
                <Download size={16} />
                Download Invoice
              </button>
              <button
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-gray-50"
                style={{ border: '1px solid #E5E5E5', color: '#171717' }}
              >
                Track Order
              </button>
            </div>
          </div>
        </motion.div>

        {/* Order Tracking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-6"
        >
          <div 
            className="p-6 rounded-2xl"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
          >
            <h3 className="font-semibold mb-4" style={{ color: '#171717' }}>Order Tracking</h3>

            {/* Tracking Info Bar */}
            <div 
              className="flex justify-between items-center p-4 rounded-xl mb-6"
              style={{ backgroundColor: '#FBF9F6' }}
            >
              <div>
                <p className="text-xs mb-1" style={{ color: '#9CA3AF' }}>Tracking Number</p>
                <p className="font-semibold text-sm" style={{ color: '#171717' }}>{trackingData.trackingNumber}</p>
              </div>
              <div className="text-right">
                <p className="text-xs mb-1" style={{ color: '#9CA3AF' }}>Shipping Carrier</p>
                <div className="flex items-center gap-1">
                  <Truck size={14} style={{ color: '#6B6B6B' }} />
                  <p className="font-semibold text-sm" style={{ color: '#171717' }}>{trackingData.carrier}</p>
                </div>
              </div>
            </div>

            {/* Tracking Progress */}
            <div className="flex justify-between items-start mb-8 px-2">
              {trackingData.steps.map((step, index) => (
                <div key={step.label} className="flex flex-col items-center relative">
                  {/* Connector Line */}
                  {index < trackingData.steps.length - 1 && (
                    <div 
                      className="absolute top-5 left-[calc(50%+20px)] w-[calc(100%-10px)] h-px"
                      style={{ backgroundColor: step.completed ? '#C5B299' : '#E5E5E5' }}
                    />
                  )}
                  
                  {/* Step Circle */}
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-2 relative z-10"
                    style={{ 
                      backgroundColor: step.completed ? '#C5B299' : '#F0F0F0',
                    }}
                  >
                    {step.completed ? (
                      <Check size={16} color="#FFFFFF" />
                    ) : (
                      <Clock size={16} style={{ color: '#9CA3AF' }} />
                    )}
                  </div>
                  
                  <p 
                    className="text-xs font-medium text-center"
                    style={{ color: step.completed ? '#171717' : '#9CA3AF' }}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-center" style={{ color: '#9CA3AF' }}>
                    {step.date}
                  </p>
                </div>
              ))}
            </div>

            {/* Tracking History */}
            <h4 className="font-semibold text-sm mb-4" style={{ color: '#171717' }}>Tracking History</h4>
            <div className="space-y-4">
              {trackingHistory.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: item.active ? '#ECFDF5' : '#F5F5F5' }}
                  >
                    <item.icon size={14} style={{ color: item.active ? '#10B981' : '#9CA3AF' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p 
                          className="font-medium text-sm"
                          style={{ color: item.active ? '#10B981' : '#171717' }}
                        >
                          {item.status}
                        </p>
                        <p className="text-xs" style={{ color: '#6B6B6B' }}>{item.description}</p>
                        <p className="text-xs" style={{ color: '#9CA3AF' }}>{item.location}</p>
                      </div>
                      <p className="text-xs" style={{ color: '#9CA3AF' }}>{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Shipping Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-2xl mx-auto mb-6"
        >
          <div 
            className="p-6 rounded-2xl"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
          >
            <h3 className="font-semibold mb-4" style={{ color: '#171717' }}>Shipping Details</h3>
            
            <div 
              className="grid grid-cols-2 gap-4 p-4 rounded-xl"
              style={{ backgroundColor: '#FBF9F6' }}
            >
              <div>
                <p className="text-xs mb-1" style={{ color: '#9CA3AF' }}>Shipping Address</p>
                <p className="font-semibold text-sm" style={{ color: '#171717' }}>{shippingDetails.name}</p>
                <p className="text-sm" style={{ color: '#6B6B6B' }}>{shippingDetails.address}</p>
                <p className="text-sm" style={{ color: '#6B6B6B' }}>{shippingDetails.city}</p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: '#9CA3AF' }}>Estimated Delivery</p>
                <p className="font-semibold text-sm" style={{ color: '#171717' }}>{shippingDetails.deliveryDate}</p>
                <p className="text-sm" style={{ color: '#6B6B6B' }}>{shippingDetails.shippingMethod}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Order Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-6"
        >
          <div 
            className="p-6 rounded-2xl"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
          >
            <h3 className="font-semibold mb-4" style={{ color: '#171717' }}>Order Items</h3>
            
            <div className="space-y-4 mb-6">
              {orderItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex-shrink-0 overflow-hidden"
                    style={{ backgroundColor: '#F5F1EA' }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      quality={100}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm" style={{ color: '#171717' }}>{item.name}</p>
                    <p className="text-xs" style={{ color: '#6B6B6B' }}>
                      Volume: {item.volume} • Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm" style={{ color: '#171717' }}>${item.total}</p>
                    <p className="text-xs" style={{ color: '#9CA3AF' }}>${item.priceEach} each</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="space-y-2 pt-4" style={{ borderTop: '1px solid #F0F0F0' }}>
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: '#6B6B6B' }}>Subtotal</span>
                <span className="text-sm font-medium" style={{ color: '#171717' }}>${orderSummary.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: '#6B6B6B' }}>Discount (-20%)</span>
                <span className="text-sm font-medium" style={{ color: '#EF4444' }}>-${orderSummary.discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm" style={{ color: '#6B6B6B' }}>Delivery Fee</span>
                <span className="text-sm font-medium" style={{ color: '#171717' }}>${orderSummary.deliveryFee}</span>
              </div>
              <div className="flex justify-between pt-3 mt-2" style={{ borderTop: '1px solid #F0F0F0' }}>
                <span className="font-semibold" style={{ color: '#171717' }}>Total</span>
                <span className="font-bold text-xl" style={{ color: '#C5B299' }}>${orderSummary.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Continue Shopping Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center mt-8"
        >
          <Link
            href="/products"
            className="inline-block px-8 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#171717', color: '#FFFFFF' }}
          >
        Continue Shopping
      </Link>
        </motion.div>
      </div>
    </div>
  );
}
