import type { Metadata, Viewport } from 'next';
import { Darker_Grotesque, Montserrat, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageLoader } from '@/components/ui/PageLoader';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { MagicEffectsProvider } from '@/components/ui/MagicEffects';
import { AuthProvider } from '@/components/providers/AuthProvider';
import { LocalBusinessJsonLd, OrganizationJsonLd, WebsiteJsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/constants';

const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-darker-grotesque',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F1EA' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1A1A' },
  ],
};

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  // Basic Meta Tags
  title: {
    default: 'CALRA | Wholesale Luxury Perfumes for Atlanta Retailers',
    template: '%s | CALRA Perfumes Atlanta',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'CALRA Perfumes', url: siteConfig.url }],
  creator: 'CALRA Luxury Fragrances LLC',
  publisher: 'CALRA Perfumes',
  
  // Canonical URL
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.business.name,
    title: 'CALRA | Wholesale Luxury Perfumes for Atlanta Retailers',
    description: siteConfig.description,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CALRA Perfumes - Atlanta\'s Premier Wholesale Fragrance Distributor',
        type: 'image/jpeg',
      },
      {
        url: '/images/og-image-square.jpg',
        width: 600,
        height: 600,
        alt: 'CALRA Perfumes Logo',
        type: 'image/jpeg',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@calraperfumes',
    creator: '@calraperfumes',
    title: 'CALRA | Wholesale Luxury Perfumes for Atlanta Retailers',
    description: siteConfig.description,
    images: ['/images/og-image.jpg'],
  },
  
  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification for Search Consoles
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    // Add your actual verification codes here
  },
  
  // App & Icons
  applicationName: 'CALRA Perfumes',
  manifest: '/manifest.json',
  icons: {
    icon: [{ url: '/images/Vector.png', type: 'image/png' }],
    apple: [{ url: '/images/Vector.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#C4A77D',
      },
    ],
  },
  
  // Additional Meta
  category: 'shopping',
  classification: 'Wholesale Perfume & Fragrance Distribution',
  
  // Geo targeting for Atlanta
  other: {
    'geo.region': siteConfig.geo.region,
    'geo.placename': siteConfig.geo.placename,
    'geo.position': siteConfig.geo.position,
    'ICBM': siteConfig.geo.ICBM,
    'format-detection': 'telephone=yes',
    'business:contact_data:street_address': siteConfig.address.streetAddress,
    'business:contact_data:locality': siteConfig.address.addressLocality,
    'business:contact_data:region': siteConfig.address.addressRegion,
    'business:contact_data:postal_code': siteConfig.address.postalCode,
    'business:contact_data:country_name': 'United States',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${darkerGrotesque.variable} ${montserrat.variable} ${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Structured Data */}
        <LocalBusinessJsonLd />
        <OrganizationJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className="bg-cream-200 text-charcoal-800 font-body antialiased">
        <MagicEffectsProvider>
          <AuthProvider>
            <PageLoader />
            <CustomCursor />
            <Header />
            <main>{children}</main>
            <Footer />
          </AuthProvider>
        </MagicEffectsProvider>
      </body>
    </html>
  );
}
