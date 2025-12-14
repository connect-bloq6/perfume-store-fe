import type { Metadata } from 'next';
import { Darker_Grotesque, Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

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

export const metadata: Metadata = {
  title: 'CALRA | Perfume Store Atlanta',
  description: 'Crafted for timeless beauty. A collection of artisan perfumes and oils inspired by tradition, crafted with modern elegance.',
  keywords: ['perfume', 'fragrance', 'oud', 'luxury', 'scent', 'atlanta', 'artisan'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${darkerGrotesque.variable} ${montserrat.variable}`}>
      <body className="bg-cream-200 text-charcoal-800 font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
