'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, User, Mail, Phone, Home, CreditCard } from 'lucide-react';

const steps = [
  { number: 1, label: 'Shopping cart', active: false, completed: true },
  { number: 2, label: 'Checkout details', active: true, completed: false },
  { number: 3, label: 'Order complete', active: false, completed: false },
];

const paymentMethods = [
  { id: 'card', label: 'Credit / Debit Card' },
  { id: 'paypal', label: 'PayPal' },
  { id: 'cod', label: 'Cash on Delivery' },
];

// Cart items for order summary calculation
const cartItems = [
  { name: 'Desert Rose', price: 145, quantity: 20 },
  { name: 'Mysterious', price: 180, quantity: 40 },
  { name: 'Black Phoenix', price: 240, quantity: 80 },
];

export default function CheckoutPage() {
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    window.location.href = '/checkout/success';
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
                      backgroundColor: step.active ? '#171717' : step.completed ? '#C5B299' : '#F0F0F0',
                      color: step.active || step.completed ? '#FFFFFF' : '#9CA3AF'
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

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_400px] gap-8 max-w-6xl mx-auto">
          {/* Left Column - Forms */}
          <div>
          {/* Shipping Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl mb-6"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
          >
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={20} style={{ color: '#6B6B6B' }} />
              <h2 className="font-semibold text-lg" style={{ color: '#171717' }}>
                Shipping Information
              </h2>
            </div>

            {/* Form Fields */}
            <div className="space-y-5">
              {/* First Name / Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#171717' }}>
                    First Name
                  </label>
                  <div className="relative">
                    <User 
                      size={18} 
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      style={{ color: '#9CA3AF' }}
                    />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter first name"
                      className="w-full pl-12 pr-4 py-3 rounded-xl text-sm outline-none transition-colors focus:border-[#C4A77D]"
                      style={{ 
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E5E5',
                        color: '#171717'
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#171717' }}>
                    Last Name
                  </label>
                  <div className="relative">
                    <User 
                      size={18} 
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      style={{ color: '#9CA3AF' }}
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter last name"
                      className="w-full pl-12 pr-4 py-3 rounded-xl text-sm outline-none transition-colors focus:border-[#C4A77D]"
                      style={{ 
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E5E5',
                        color: '#171717'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Email / Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#171717' }}>
                    Email
                  </label>
                  <div className="relative">
                    <Mail 
                      size={18} 
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      style={{ color: '#9CA3AF' }}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                      className="w-full pl-12 pr-4 py-3 rounded-xl text-sm outline-none transition-colors focus:border-[#C4A77D]"
                      style={{ 
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E5E5',
                        color: '#171717'
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#171717' }}>
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone 
                      size={18} 
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      style={{ color: '#9CA3AF' }}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      className="w-full pl-12 pr-4 py-3 rounded-xl text-sm outline-none transition-colors focus:border-[#C4A77D]"
                      style={{ 
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E5E5',
                        color: '#171717'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Street Address */}
              <div>
                <label className="block text-sm mb-2" style={{ color: '#171717' }}>
                  Street Address
                </label>
                <div className="relative">
                  <Home 
                    size={18} 
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: '#9CA3AF' }}
                  />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter street address"
                    className="w-full pl-12 pr-4 py-3 rounded-xl text-sm outline-none transition-colors focus:border-[#C4A77D]"
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E5E5',
                      color: '#171717'
                    }}
                  />
                </div>
              </div>

              {/* City / ZIP Code */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#171717' }}>
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter city"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors focus:border-[#C4A77D]"
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E5E5',
                      color: '#171717'
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#171717' }}>
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="Enter ZIP code"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors focus:border-[#C4A77D]"
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E5E5',
                      color: '#171717'
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Method */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl mb-6"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
          >
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6">
              <CreditCard size={20} style={{ color: '#6B6B6B' }} />
              <h2 className="font-semibold text-lg" style={{ color: '#171717' }}>
                Payment Method
              </h2>
            </div>

            {/* Payment Options */}
            <div className="space-y-3 mb-6">
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  className="flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-colors"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    border: selectedPayment === method.id ? '2px solid #171717' : '1px solid #E5E5E5'
                  }}
                >
                  <div 
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: selectedPayment === method.id ? '#171717' : '#D1D5DB' }}
                  >
                    {selectedPayment === method.id && (
                      <div 
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: '#171717' }}
                      />
                    )}
                  </div>
                  <span className="text-sm" style={{ color: '#171717' }}>{method.label}</span>
                  <input
                    type="radio"
                    name="payment"
                    value={method.id}
                    checked={selectedPayment === method.id}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="hidden"
                  />
                </label>
              ))}
            </div>

            {/* Card Details (shown when Credit/Debit Card is selected) */}
            {selectedPayment === 'card' && (
              <div className="space-y-4 pt-4" style={{ borderTop: '1px solid #F0F0F0' }}>
                {/* Card Number */}
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#171717' }}>
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors focus:border-[#C4A77D]"
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E5E5',
                      color: '#171717'
                    }}
                  />
                </div>

                {/* Expiry / CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#171717' }}>
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors focus:border-[#C4A77D]"
                      style={{ 
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E5E5',
                        color: '#171717'
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#171717' }}>
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors focus:border-[#C4A77D]"
                      style={{ 
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E5E5',
                        color: '#171717'
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          </div>

          {/* Right Column - Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:sticky lg:top-8 h-fit"
          >
            <div 
              className="p-6 rounded-2xl"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
            >
              <h2 className="font-semibold text-xl mb-6" style={{ color: '#171717' }}>
                Order Summary
              </h2>

              {/* Summary Items */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span style={{ color: '#6B6B6B' }}>Subtotal</span>
                  <span className="font-medium" style={{ color: '#171717' }}>
                    ${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#6B6B6B' }}>Discount (-20%)</span>
                  <span className="font-medium" style={{ color: '#EF4444' }}>
                    -${Math.round(cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 0.2).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#6B6B6B' }}>Delivery Fee</span>
                  <span className="font-medium" style={{ color: '#171717' }}>$15</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px mb-6" style={{ backgroundColor: '#F0F0F0' }} />

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-semibold text-lg" style={{ color: '#171717' }}>Total</span>
                <span className="font-bold text-2xl" style={{ color: '#171717' }}>
                  ${(
                    cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0) -
                    Math.round(cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 0.2) +
                    15
                  ).toLocaleString()}
                </span>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-medium transition-opacity hover:opacity-90 mb-3"
                style={{ backgroundColor: '#C5B299', color: '#FFFFFF' }}
              >
                Place Order
              </button>

              {/* Terms */}
              <p className="text-center text-xs whitespace-nowrap" style={{ color: '#9CA3AF' }}>
                By placing your order, you agree to our terms and conditions
              </p>
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
