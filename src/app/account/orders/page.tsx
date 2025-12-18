import { OrderHistory } from '@/components/account/OrderHistory';

export const metadata = {
  title: 'Order History | CALRA',
  description: 'View your past orders.',
};

export default function OrdersPage() {
  return (
    <main className="min-h-screen pt-32 pb-20" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 
          className="font-display text-3xl md:text-4xl font-semibold mb-8"
          style={{ color: '#4A3D2A' }}
        >
          Order History
        </h1>
        <OrderHistory />
      </div>
    </main>
  );
}

