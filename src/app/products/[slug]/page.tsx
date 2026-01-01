import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { ProductJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/constants';
import ProductPageClient from './ProductPageClient';

interface ProductPageProps {
  params: { slug: string };
}

// Generate dynamic metadata for each product
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  const productUrl = `${siteConfig.url}/products/${product.slug}`;
  const productImage = product.image.startsWith('http') ? product.image : `${siteConfig.url}${product.image}`;

  return {
    title: `${product.name} by ${product.brand} | Wholesale Perfume Atlanta`,
    description: `${product.description.slice(0, 155)}... Buy ${product.name} wholesale from CALRA Atlanta. ${product.notes.top} top notes, ${product.longevity} longevity. Starting at $${product.price}.`,
    keywords: [
      product.name.toLowerCase(),
      `${product.brand} perfume`,
      `${product.category} fragrance wholesale`,
      'wholesale perfume Atlanta',
      'luxury fragrance distributor',
      `buy ${product.name} wholesale`,
      product.notes.top.toLowerCase(),
      product.notes.heart.toLowerCase(),
      product.notes.base.toLowerCase(),
    ],
    openGraph: {
      title: `${product.name} by ${product.brand} | CALRA Wholesale Atlanta`,
      description: product.description.slice(0, 200),
      url: productUrl,
      type: 'website',
      images: [
        {
          url: productImage,
          width: 800,
          height: 800,
          alt: `${product.name} - ${product.brand} Luxury Perfume`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} by ${product.brand}`,
      description: product.description.slice(0, 150),
      images: [productImage],
    },
    alternates: {
      canonical: productUrl,
    },
    other: {
      'product:price:amount': product.price.toString(),
      'product:price:currency': 'USD',
      'product:brand': product.brand,
      'product:category': product.category,
      'product:availability': 'in stock',
    },
  };
}

// Generate static params for all products (for static generation)
export async function generateStaticParams() {
  const { products } = await import('@/data/products');
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(params.slug, 4);
  
  const breadcrumbItems = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Products', url: `${siteConfig.url}/products` },
    { name: product.name, url: `${siteConfig.url}/products/${product.slug}` },
  ];

  return (
    <>
      {/* Structured Data */}
      <ProductJsonLd
        name={product.name}
        description={product.description}
        image={product.image}
        price={product.price}
        originalPrice={product.originalPrice}
        rating={product.rating}
        reviewCount={product.reviewCount}
        brand={product.brand}
        slug={product.slug}
        category={product.category}
        inStock={true}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      
      {/* Client Component */}
      <ProductPageClient product={product} relatedProducts={relatedProducts} />
    </>
  );
}
