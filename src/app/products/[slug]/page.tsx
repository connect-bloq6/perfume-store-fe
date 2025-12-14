import { ProductGallery } from '@/components/products/ProductGallery';
import { ProductInfo } from '@/components/products/ProductInfo';
import { ProductTabs } from '@/components/products/ProductTabs';
import { RelatedProducts } from '@/components/products/RelatedProducts';

interface ProductPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ProductPageProps) {
  return {
    title: `${params.slug} | Essence`,
    description: 'Discover this exquisite fragrance from our collection.',
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="container-luxury py-12">
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <ProductGallery />
        <ProductInfo slug={params.slug} />
      </div>
      <ProductTabs />
      <RelatedProducts />
    </div>
  );
}

