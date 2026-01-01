import { Metadata } from 'next';
import { FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/constants';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us | CALRA Wholesale Perfumes Atlanta',
  description: 'Get in touch with CALRA - Atlanta\'s premier wholesale perfume distributor. Contact our sales team for bulk pricing, retailer partnerships, and product inquiries. Located in Atlanta, GA.',
  keywords: [
    'contact CALRA perfumes',
    'wholesale perfume inquiry Atlanta',
    'perfume distributor contact',
    'Atlanta fragrance wholesale sales',
    'bulk perfume order Atlanta',
    'retailer partnership perfume',
    'perfume wholesale inquiry',
    'Atlanta perfume store contact',
  ],
  openGraph: {
    title: 'Contact Us | CALRA Wholesale Perfumes Atlanta',
    description: 'Get in touch with Atlanta\'s premier wholesale perfume distributor. Contact us for bulk pricing and retailer partnerships.',
    url: `${siteConfig.url}/contact`,
    type: 'website',
    images: [
      {
        url: '/images/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact CALRA Perfumes Atlanta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | CALRA Wholesale Perfumes Atlanta',
    description: 'Get in touch with Atlanta\'s premier wholesale perfume distributor.',
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

// FAQ data for structured data
const faqItems = [
  {
    question: 'Do you offer fragrance consultations?',
    answer: 'Yes, we offer complimentary 30-minute fragrance consultations with our expert perfumers. Book an appointment to discover your perfect scent.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to over 50 countries worldwide. International shipping times vary between 5-14 business days depending on your location.',
  },
  {
    question: 'What is your return policy?',
    answer: "We offer a 30-day return policy for unopened products. If you're not satisfied with your purchase, contact our support team for assistance.",
  },
  {
    question: 'Can I request a sample before purchasing?',
    answer: 'Absolutely! We offer sample sets of our most popular fragrances. You can also request specific samples with any full-size purchase.',
  },
  {
    question: 'Can my fragrances be personalized?',
    answer: 'Yes, we offer personalization services including custom engraving on select bottles and bespoke fragrance creation for special occasions.',
  },
  {
    question: 'What sizes do your perfumes come in?',
    answer: 'Our perfumes are available in 30ml, 50ml, 100ml, and 150ml sizes. Some limited editions may have different size options.',
  },
  {
    question: 'Do you offer gift wrapping?',
    answer: 'Yes, complimentary gift wrapping is available for all orders. Simply select the gift wrap option at checkout.',
  },
  {
    question: 'How should I store my perfume?',
    answer: 'Store your perfume in a cool, dry place away from direct sunlight and heat. Keep the cap on when not in use to preserve the fragrance.',
  },
  {
    question: 'How does shipping work?',
    answer: 'We offer free standard shipping on orders over $100. Express and overnight options are available at checkout for an additional fee.',
  },
  {
    question: 'Do you have a loyalty program?',
    answer: 'Yes! Our Essence Rewards program lets you earn points on every purchase, which can be redeemed for discounts and exclusive products.',
  },
];

export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Contact', url: `${siteConfig.url}/contact` },
  ];

  return (
    <>
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ContactPageClient />
    </>
  );
}
