import { CartItems } from '@/components/cart/CartItems';
import { CartSummary } from '@/components/cart/CartSummary';

export const metadata = {
  title: 'Shopping Cart | Essence',
  description: 'Review your shopping cart.',
};

export default function CartPage() {
  return (
    <div className="container-luxury py-12">
      <h1 className="font-display text-4xl text-gold-500 mb-8">Your Cart</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CartItems />
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}

