import { AccountOverview } from '@/components/account/AccountOverview';

export const metadata = {
  title: 'My Account | Essence',
  description: 'Manage your account and view order history.',
};

export default function AccountPage() {
  return (
    <div className="container-luxury py-12">
      <h1 className="font-display text-4xl text-gold-500 mb-8">My Account</h1>
      <AccountOverview />
    </div>
  );
}

