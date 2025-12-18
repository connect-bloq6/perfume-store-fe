'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, Check } from 'lucide-react';

// Sample cart data - in real app this would come from state/context
const initialCartItems = [
  {
    id: '1',
    name: 'Desert Rose',
    volume: '50ml',
    collection: 'Original',
    price: 145,
    quantity: 20,
    image: '/images/alpha.png',
  },
  {
    id: '2',
    name: 'Mysterious',
    volume: '100ml',
    collection: 'Intense',
    price: 180,
    quantity: 40,
    image: '/images/alpha_chrome.png',
  },
  {
    id: '3',
    name: 'Black Phoenix',
    volume: '150ml',
    collection: 'Limited',
    price: 240,
    quantity: 80,
    image: '/images/alpha_oros.png',
  },
];

const steps = [
  { number: 1, label: 'Shopping cart', active: true },
  { number: 2, label: 'Checkout details', active: false },
  { number: 3, label: 'Order complete', active: false },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleQuantityChange = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleDeleteItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
    setSelectedItems(selected => selected.filter(itemId => itemId !== id));
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map(item => item.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selected => selected.filter(itemId => itemId !== id));
      setSelectAll(false);
    } else {
      const newSelected = [...selectedItems, id];
      setSelectedItems(newSelected);
      if (newSelected.length === cartItems.length) {
        setSelectAll(true);
      }
    }
  };

  const handleDeleteSelected = () => {
    setCartItems(items => items.filter(item => !selectedItems.includes(item.id)));
    setSelectedItems([]);
    setSelectAll(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="container-luxury pt-24 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 
            className="font-playfair mb-8"
            style={{ fontSize: '42px', lineHeight: '52px', color: '#171717' }}
          >
            Your Shopping Cart
          </h1>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-0 max-w-lg mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  {/* Step Circle */}
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium mb-2"
                    style={{ 
                      backgroundColor: step.active ? '#171717' : '#F0F0F0',
                      color: step.active ? '#FFFFFF' : '#9CA3AF'
                    }}
                  >
                    {step.number}
                  </div>
                  {/* Step Label */}
                  <span 
                    className="text-sm whitespace-nowrap"
                    style={{ 
                      color: step.active ? '#171717' : '#9CA3AF',
                      borderBottom: step.active ? '2px solid #171717' : 'none',
                      paddingBottom: '4px'
                    }}
                  >
                    {step.label}
                  </span>
                </div>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div 
                    className="w-24 h-px mx-4 mb-6"
                    style={{ backgroundColor: '#E5E5E5' }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cart Content */}
        <div className="max-w-3xl mx-auto">
          {/* Your cart header */}
          <h2 
            className="font-medium mb-4"
            style={{ fontSize: '20px', color: '#171717' }}
          >
            Your cart
          </h2>

          {/* Select All / Delete Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center justify-between p-4 rounded-xl mb-4"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
          >
            <label className="flex items-center gap-3 cursor-pointer">
              <div 
                className="w-5 h-5 rounded border flex items-center justify-center cursor-pointer transition-colors"
                style={{ 
                  backgroundColor: selectAll ? '#171717' : '#FFFFFF',
                  borderColor: selectAll ? '#171717' : '#D1D5DB'
                }}
                onClick={handleSelectAll}
              >
                {selectAll && <Check size={14} color="#FFFFFF" />}
              </div>
              <span className="text-sm" style={{ color: '#171717' }}>Select All</span>
            </label>
            
            <button
              onClick={handleDeleteSelected}
              disabled={selectedItems.length === 0}
              className="px-6 py-2 rounded-lg text-sm font-medium transition-opacity disabled:opacity-50"
              style={{ backgroundColor: '#171717', color: '#FFFFFF' }}
            >
              Delete
            </button>
          </motion.div>

          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                className="p-5 rounded-xl"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
              >
                <div className="flex items-start gap-4">
                  {/* Product Image */}
                  <div 
                    className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden"
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

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 
                        className="font-medium"
                        style={{ fontSize: '16px', color: '#171717' }}
                      >
                        {item.name}
                      </h3>
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        className="p-1 hover:opacity-70 transition-opacity"
                        aria-label="Delete item"
                      >
                        <Trash2 size={18} style={{ color: '#EF4444' }} />
                      </button>
                    </div>

                    <p className="text-sm mb-1" style={{ color: '#6B6B6B' }}>
                      Volume: <span style={{ color: '#171717' }}>{item.volume}</span>
                    </p>
                    <p className="text-sm mb-3" style={{ color: '#6B6B6B' }}>
                      Collection: <span style={{ color: '#171717' }}>{item.collection}</span>
                    </p>

                    <div className="flex items-center justify-between">
                      <span 
                        className="font-semibold"
                        style={{ fontSize: '16px', color: '#171717' }}
                      >
                        ${item.price}
                      </span>

                      {/* Quantity Selector */}
                      <div 
                        className="flex items-center rounded-lg overflow-hidden"
                        style={{ border: '1px solid #E5E5E5' }}
                      >
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="px-3 py-2 hover:bg-gray-50 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} style={{ color: '#6B6B6B' }} />
                        </button>
                        <span 
                          className="w-12 text-center text-sm font-medium"
                          style={{ color: '#171717' }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="px-3 py-2 hover:bg-gray-50 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} style={{ color: '#6B6B6B' }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

          {/* Empty Cart State */}
          {cartItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-lg mb-4" style={{ color: '#6B6B6B' }}>
                Your cart is empty
              </p>
              <Link
                href="/products"
                className="inline-block px-6 py-3 rounded-full font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#C4A77D', color: '#FFFFFF' }}
              >
                Continue Shopping
              </Link>
            </motion.div>
          )}

          {/* Continue to Checkout */}
          {cartItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center"
            >
              <Link
                href="/products"
                className="text-sm hover:underline"
                style={{ color: '#6B6B6B' }}
              >
                ← Continue Shopping
              </Link>
              <Link
                href="/checkout"
                className="px-8 py-3 rounded-full font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#C4A77D', color: '#FFFFFF' }}
              >
                Proceed to Checkout
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
