import { CheckoutForm } from '@/components/checkout/CheckoutForm';
import { OrderSummary } from '@/components/checkout/OrderSummary';

export const metadata = {
  title: 'Checkout | Essence',
  description: 'Complete your purchase.',
};

export default function CheckoutPage() {
  return (
    <div className="container-luxury py-12">
      <h1 className="font-display text-4xl text-gold-500 mb-8">Checkout</h1>
      <div className="grid lg:grid-cols-2 gap-12">
        <CheckoutForm />
        <OrderSummary />
      </div>
    </div>
  );
}

