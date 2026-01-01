import { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { Bestsellers } from '@/components/home/Bestsellers';
import { OudBenefits } from '@/components/home/OudBenefits';
import { StoreShowcase } from '@/components/home/StoreShowcase';
import { FAQ } from '@/components/home/FAQ';
import { PerfumeShowcase } from '@/components/home/PerfumeShowcase';
import { Newsletter } from '@/components/home/Newsletter';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'CALRA | Wholesale Luxury Perfumes for Atlanta Retailers',
  description: 'Atlanta\'s premier wholesale perfume distributor. CALRA offers luxury fragrances, artisan oud oils, and designer scents for retail partners across Georgia. Competitive wholesale pricing, free shipping on bulk orders.',
  keywords: [
    'wholesale perfume Atlanta',
    'luxury fragrance distributor Georgia',
    'perfume for retailers Atlanta',
    'bulk perfume wholesale',
    'Atlanta perfume supplier',
    'designer fragrances wholesale',
    'oud perfume Atlanta',
    'artisan perfume wholesale',
    'perfume business Atlanta',
    'wholesale cologne Georgia',
  ],
  openGraph: {
    title: 'CALRA | Wholesale Luxury Perfumes for Atlanta Retailers',
    description: 'Atlanta\'s premier wholesale perfume distributor. Luxury fragrances, artisan oud oils, and designer scents for retail partners.',
    url: siteConfig.url,
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CALRA Perfumes - Atlanta Wholesale Fragrance Distributor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CALRA | Wholesale Luxury Perfumes for Atlanta Retailers',
    description: 'Atlanta\'s premier wholesale perfume distributor for retail partners.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Bestsellers />
      <OudBenefits />
      <StoreShowcase />
      <FAQ />
      <PerfumeShowcase />
      <Newsletter />
    </>
  );
}
