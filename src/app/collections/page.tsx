import { Metadata } from 'next';
import { ItemListJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { products } from '@/data/products';
import { siteConfig } from '@/lib/constants';
import CollectionsPageClient from './CollectionsPageClient';

export const metadata: Metadata = {
  title: 'Perfume Collections | Wholesale Designer Fragrances Atlanta',
  description: 'Browse our curated perfume collections for wholesale. Floral, woody, oriental, and gourmand fragrances available for Atlanta retailers. Premium quality, competitive bulk pricing.',
  keywords: [
    'perfume collections wholesale',
    'wholesale fragrance categories',
    'floral perfume bulk',
    'woody cologne wholesale',
    'oriental fragrance Atlanta',
    'gourmand perfume distributor',
    'luxury perfume categories',
    'designer fragrance collections',
    'wholesale scent categories',
    'Atlanta perfume inventory',
  ],
  openGraph: {
    title: 'Perfume Collections | CALRA Wholesale Atlanta',
    description: 'Browse our curated perfume collections. Premium wholesale fragrances for Atlanta retailers.',
    url: `${siteConfig.url}/collections`,
    type: 'website',
    images: [
      {
        url: '/images/og-collections.jpg',
        width: 1200,
        height: 630,
        alt: 'CALRA Perfume Collections',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfume Collections | CALRA Wholesale Atlanta',
    description: 'Browse our curated wholesale perfume collections.',
  },
  alternates: {
    canonical: `${siteConfig.url}/collections`,
  },
};

export default function CollectionsPage() {
  // Prepare product data for structured data
  const productListItems = products.slice(0, 9).map((product) => ({
    name: product.name,
    url: `${siteConfig.url}/products/${product.slug}`,
    image: product.image,
    price: product.price,
  }));

  const breadcrumbItems = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Collections', url: `${siteConfig.url}/collections` },
  ];

  return (
    <>
      <ItemListJsonLd items={productListItems} name="CALRA Perfume Collections" />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <CollectionsPageClient />
    </>
  );
}
