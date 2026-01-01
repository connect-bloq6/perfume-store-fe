import { Metadata } from 'next';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ProductFilters } from '@/components/products/ProductFilters';
import { ProductSort } from '@/components/products/ProductSort';
import { ProductCount } from '@/components/products/ProductCount';
import { ItemListJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { products } from '@/data/products';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Shop Wholesale Perfumes | Luxury Fragrances for Atlanta Retailers',
  description: 'Browse our complete wholesale perfume collection. Premium luxury fragrances, oud oils, floral scents, and designer perfumes available for Atlanta retailers. Competitive bulk pricing.',
  keywords: [
    'wholesale perfume catalog',
    'bulk perfume Atlanta',
    'luxury fragrance wholesale',
    'designer perfume distributor',
    'oud perfume wholesale',
    'floral perfume bulk',
    'oriental fragrance wholesale',
    'woody perfume supplier',
    'gourmand scents wholesale',
    'Atlanta perfume inventory',
  ],
  openGraph: {
    title: 'Shop Wholesale Perfumes | CALRA Atlanta',
    description: 'Browse our complete wholesale perfume collection. Premium luxury fragrances for Atlanta retailers.',
    url: `${siteConfig.url}/products`,
    type: 'website',
    images: [
      {
        url: '/images/og-products.jpg',
        width: 1200,
        height: 630,
        alt: 'CALRA Wholesale Perfume Collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop Wholesale Perfumes | CALRA Atlanta',
    description: 'Browse our complete wholesale perfume collection for retailers.',
  },
  alternates: {
    canonical: `${siteConfig.url}/products`,
  },
};

export default function ProductsPage() {
  // Prepare product data for structured data
  const productListItems = products.slice(0, 10).map((product) => ({
    name: product.name,
    url: `${siteConfig.url}/products/${product.slug}`,
    image: product.image,
    price: product.price,
  }));

  const breadcrumbItems = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Products', url: `${siteConfig.url}/products` },
  ];

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <ItemListJsonLd items={productListItems} name="CALRA Wholesale Perfume Collection" />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container-luxury text-center">
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl mb-4"
            style={{ color: '#65553F', fontWeight: 600 }}
          >
            Our Collection
          </h1>
          <p 
            className="max-w-2xl mx-auto text-base"
            style={{ color: '#6B6B6B' }}
          >
            Each fragrance tells a story. Discover premium wholesale perfumes crafted by master perfumers
            from the finest ingredients around the world. Competitive pricing for Atlanta retailers.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="pb-20">
        <div className="container-luxury">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              <ProductFilters />
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Top Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b" style={{ borderColor: '#C5B299' }}>
                <ProductCount />
                <ProductSort />
              </div>

              {/* Grid */}
              <ProductGrid />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
