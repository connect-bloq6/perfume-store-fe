import { WishlistGrid } from '@/components/account/WishlistGrid';

export const metadata = {
  title: 'My Wishlist | Essence',
  description: 'Your saved fragrances.',
};

export default function WishlistPage() {
  return (
    <div className="container-luxury py-12">
      <h1 className="font-display text-4xl text-gold-500 mb-8">My Wishlist</h1>
      <WishlistGrid />
    </div>
  );
}

