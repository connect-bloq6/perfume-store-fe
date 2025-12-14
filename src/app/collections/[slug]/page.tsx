import { CollectionHeader } from '@/components/collections/CollectionHeader';
import { ProductGrid } from '@/components/products/ProductGrid';

interface CollectionPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: CollectionPageProps) {
  return {
    title: `${params.slug} Collection | Essence`,
    description: 'Explore this curated collection of exquisite fragrances.',
  };
}

export default function CollectionPage({ params }: CollectionPageProps) {
  return (
    <div className="container-luxury py-12">
      <CollectionHeader slug={params.slug} />
      <ProductGrid />
    </div>
  );
}

