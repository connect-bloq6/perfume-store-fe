import { Metadata } from 'next';
import { ItemListJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { products } from '@/data/products';
import { siteConfig } from '@/lib/constants';
import CollectionSlugPageClient from './CollectionSlugPageClient';

interface CollectionPageProps {
  params: { slug: string };
}

// Collection metadata mapping
const collectionMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  floral: {
    title: 'Floral Perfumes | Wholesale Rose & Jasmine Fragrances Atlanta',
    description: 'Wholesale floral perfumes featuring rose, jasmine, peony, and lily fragrances. Premium feminine scents for Atlanta retailers. Bulk pricing available.',
    keywords: ['floral perfume wholesale', 'rose fragrance bulk', 'jasmine perfume Atlanta', 'feminine scents wholesale'],
  },
  woody: {
    title: 'Woody Perfumes | Wholesale Sandalwood & Cedar Fragrances Atlanta',
    description: 'Wholesale woody perfumes with sandalwood, cedar, and vetiver notes. Bold masculine fragrances for Atlanta retailers. Competitive bulk pricing.',
    keywords: ['woody perfume wholesale', 'sandalwood fragrance bulk', 'cedar cologne Atlanta', 'masculine scents wholesale'],
  },
  oriental: {
    title: 'Oriental Perfumes | Wholesale Amber & Oud Fragrances Atlanta',
    description: 'Wholesale oriental perfumes featuring amber, oud, and spice notes. Exotic luxury fragrances for Atlanta retailers. Premium quality.',
    keywords: ['oriental perfume wholesale', 'amber fragrance bulk', 'oud perfume Atlanta', 'exotic scents wholesale'],
  },
  gourmand: {
    title: 'Gourmand Perfumes | Wholesale Vanilla & Caramel Fragrances Atlanta',
    description: 'Wholesale gourmand perfumes with vanilla, caramel, and sweet notes. Delicious fragrances for Atlanta retailers. Bulk orders welcome.',
    keywords: ['gourmand perfume wholesale', 'vanilla fragrance bulk', 'sweet perfume Atlanta', 'caramel scents wholesale'],
  },
  luxury: {
    title: 'Luxury Perfumes | Wholesale Premium Designer Fragrances Atlanta',
    description: 'Wholesale luxury perfumes from premium brands. High-end designer fragrances for discerning Atlanta retailers. Exclusive collections.',
    keywords: ['luxury perfume wholesale', 'designer fragrance bulk', 'premium perfume Atlanta', 'exclusive scents wholesale'],
  },
  women: {
    title: 'Women\'s Perfumes | Wholesale Feminine Fragrances Atlanta',
    description: 'Wholesale women\'s perfumes and feminine fragrances. Elegant scents for Atlanta retailers. Complete collection from floral to oriental.',
    keywords: ['women perfume wholesale', 'feminine fragrance bulk', 'ladies perfume Atlanta', 'women scents wholesale'],
  },
  men: {
    title: 'Men\'s Cologne | Wholesale Masculine Fragrances Atlanta',
    description: 'Wholesale men\'s cologne and masculine fragrances. Bold scents for Atlanta retailers. From fresh to woody collections.',
    keywords: ['men cologne wholesale', 'masculine fragrance bulk', 'men perfume Atlanta', 'cologne wholesale'],
  },
  collection: {
    title: 'Gift Sets | Wholesale Perfume Collections Atlanta',
    description: 'Wholesale perfume gift sets and curated collections. Perfect for gifting. Premium packaging for Atlanta retailers.',
    keywords: ['perfume gift set wholesale', 'fragrance collection bulk', 'perfume box Atlanta', 'gift sets wholesale'],
  },
};

// Generate dynamic metadata for each collection
export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const meta = collectionMeta[params.slug] || {
    title: `${params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} Perfumes | Wholesale Fragrances Atlanta`,
    description: `Wholesale ${params.slug} perfumes and fragrances for Atlanta retailers. Premium quality, competitive pricing.`,
    keywords: [`${params.slug} perfume wholesale`, 'fragrance bulk Atlanta'],
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${siteConfig.url}/collections/${params.slug}`,
      type: 'website',
      images: [
        {
          url: '/images/og-collections.jpg',
          width: 1200,
          height: 630,
          alt: `${params.slug} Perfume Collection - CALRA Atlanta`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: `${siteConfig.url}/collections/${params.slug}`,
    },
  };
}

// Generate static params for all collection categories
export async function generateStaticParams() {
  return [
    { slug: 'floral' },
    { slug: 'woody' },
    { slug: 'oriental' },
    { slug: 'gourmand' },
    { slug: 'luxury' },
    { slug: 'women' },
    { slug: 'men' },
    { slug: 'collection' },
  ];
}

export default function CollectionPage({ params }: CollectionPageProps) {
  // Filter products by collection/category
  const filteredProducts = products.filter(p => p.category === params.slug);
  const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;

  // Prepare product data for structured data
  const productListItems = displayProducts.slice(0, 12).map((product) => ({
    name: product.name,
    url: `${siteConfig.url}/products/${product.slug}`,
    image: product.image,
    price: product.price,
  }));

  const collectionName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  
  const breadcrumbItems = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Collections', url: `${siteConfig.url}/collections` },
    { name: collectionName, url: `${siteConfig.url}/collections/${params.slug}` },
  ];

  return (
    <>
      <ItemListJsonLd items={productListItems} name={`CALRA ${collectionName} Collection`} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <CollectionSlugPageClient slug={params.slug} />
    </>
  );
}
