import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Order Confirmed | Essence',
  description: 'Your order has been successfully placed.',
};

export default function CheckoutSuccessPage() {
  return (
    <div className="container-luxury py-24 text-center">
      <CheckCircle className="w-20 h-20 text-gold-500 mx-auto mb-6" />
      <h1 className="font-display text-4xl text-gold-500 mb-4">
        Thank You for Your Order
      </h1>
      <p className="text-noir-300 mb-8 max-w-md mx-auto">
        Your order has been confirmed and will be shipped shortly.
        A confirmation email has been sent to your inbox.
      </p>
      <Link href="/products" className="btn-primary inline-block">
        Continue Shopping
      </Link>
    </div>
  );
}

