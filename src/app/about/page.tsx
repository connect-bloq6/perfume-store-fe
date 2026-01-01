import { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { OurStory } from '@/components/about/OurStory';
import { Craftsmanship } from '@/components/about/Craftsmanship';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us | Atlanta\'s Premier Perfume Wholesale Partner',
  description: 'Discover the story behind CALRA - Atlanta\'s trusted wholesale perfume distributor since 2018. We partner with retailers across Georgia to bring luxury fragrances to customers who appreciate timeless elegance.',
  keywords: [
    'about CALRA perfumes',
    'Atlanta perfume company',
    'wholesale fragrance history',
    'luxury perfume distributor story',
    'Georgia perfume supplier',
    'artisan fragrance Atlanta',
    'perfume business Atlanta',
    'wholesale perfume partner',
  ],
  openGraph: {
    title: 'About CALRA | Atlanta\'s Premier Perfume Wholesale Partner',
    description: 'Discover the story behind CALRA - Atlanta\'s trusted wholesale perfume distributor since 2018.',
    url: `${siteConfig.url}/about`,
    type: 'website',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About CALRA Perfumes Atlanta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About CALRA | Atlanta\'s Premier Perfume Wholesale Partner',
    description: 'Discover the story behind CALRA - Atlanta\'s trusted wholesale perfume distributor.',
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Home', url: siteConfig.url },
    { name: 'About Us', url: `${siteConfig.url}/about` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <AboutHero />
      <OurStory />
      <Craftsmanship />
    </>
  );
}
