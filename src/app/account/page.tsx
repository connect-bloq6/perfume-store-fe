import { AccountOverview } from '@/components/account/AccountOverview';

export const metadata = {
  title: 'My Account | CALRA',
  description: 'Manage your account and view order history.',
};

export default function AccountPage() {
  return (
    <main className="min-h-screen pt-32 pb-20" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 
          className="font-display text-3xl md:text-4xl font-semibold mb-8"
          style={{ color: '#4A3D2A' }}
        >
          My Account
        </h1>
        <AccountOverview />
      </div>
    </main>
  );
}

