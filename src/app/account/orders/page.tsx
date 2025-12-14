import { OrderHistory } from '@/components/account/OrderHistory';

export const metadata = {
  title: 'Order History | Essence',
  description: 'View your past orders.',
};

export default function OrdersPage() {
  return (
    <div className="container-luxury py-12">
      <h1 className="font-display text-4xl text-gold-500 mb-8">Order History</h1>
      <OrderHistory />
    </div>
  );
}

