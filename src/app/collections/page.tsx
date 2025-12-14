import { CollectionGrid } from '@/components/collections/CollectionGrid';

export const metadata = {
  title: 'Collections | Essence',
  description: 'Explore our curated fragrance collections.',
};

export default function CollectionsPage() {
  return (
    <div className="container-luxury py-12">
      <header className="mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl text-gold-500 mb-4">
          Our Collections
        </h1>
        <p className="text-noir-300 max-w-2xl mx-auto">
          Curated selections for every mood, season, and occasion.
        </p>
      </header>
      <CollectionGrid />
    </div>
  );
}

