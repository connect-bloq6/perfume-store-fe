'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'au', label: 'Australia' },
];

export function CheckoutForm() {
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-8">
      {/* Contact */}
      <section>
        <h2 className="font-display text-xl text-gold-500 mb-4">Contact</h2>
        <Input
          type="email"
          label="Email"
          placeholder="your@email.com"
          id="email"
        />
      </section>

      {/* Shipping Address */}
      <section>
        <h2 className="font-display text-xl text-gold-500 mb-4">Shipping Address</h2>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Input label="First Name" placeholder="John" id="firstName" />
            <Input label="Last Name" placeholder="Doe" id="lastName" />
          </div>
          <Input label="Address" placeholder="123 Main St" id="address" />
          <Input label="Apartment, suite, etc. (optional)" placeholder="Apt 4B" id="apartment" />
          <div className="grid grid-cols-2 gap-4">
            <Input label="City" placeholder="New York" id="city" />
            <Input label="Postal Code" placeholder="10001" id="postalCode" />
          </div>
          <Select label="Country" options={countries} id="country" />
          <Input label="Phone" type="tel" placeholder="+1 (555) 000-0000" id="phone" />
        </div>
      </section>

      {/* Payment */}
      <section>
        <h2 className="font-display text-xl text-gold-500 mb-4">Payment</h2>
        <div className="bg-noir-900 border border-noir-700 p-4 mb-4">
          <p className="text-noir-400 text-sm">
            This is a demo store. Payment integration would go here.
          </p>
        </div>
        <div className="grid gap-4">
          <Input label="Card Number" placeholder="1234 5678 9012 3456" id="cardNumber" />
          <div className="grid grid-cols-2 gap-4">
            <Input label="Expiry Date" placeholder="MM/YY" id="expiry" />
            <Input label="CVV" placeholder="123" id="cvv" />
          </div>
          <Input label="Name on Card" placeholder="John Doe" id="cardName" />
        </div>
      </section>

      <Button variant="primary" size="lg" className="w-full">
        Complete Order
      </Button>
    </div>
  );
}

