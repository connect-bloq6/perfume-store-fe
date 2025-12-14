'use client';

import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

const subjects = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'order', label: 'Order Support' },
  { value: 'returns', label: 'Returns & Exchanges' },
  { value: 'fragrance', label: 'Fragrance Consultation' },
  { value: 'wholesale', label: 'Wholesale Inquiry' },
];

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <Input label="First Name" placeholder="John" id="contact-firstName" required />
        <Input label="Last Name" placeholder="Doe" id="contact-lastName" required />
      </div>
      <Input label="Email" type="email" placeholder="your@email.com" id="contact-email" required />
      <Select label="Subject" options={subjects} id="contact-subject" />
      <div>
        <label htmlFor="contact-message" className="block text-sm text-noir-300 mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={6}
          placeholder="How can we help you?"
          className="w-full bg-noir-900 border border-noir-700 text-white px-4 py-3 placeholder:text-noir-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
          required
        />
      </div>
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}

