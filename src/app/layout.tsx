import type { Metadata } from 'next';
import { Darker_Grotesque, Montserrat, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageLoader } from '@/components/ui/PageLoader';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { MagicEffectsProvider } from '@/components/ui/MagicEffects';
import { AuthProvider } from '@/components/providers/AuthProvider';
import { SessionProvider } from '@/components/providers/SessionProvider';

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
    <html lang="en" className={`${darkerGrotesque.variable} ${montserrat.variable} ${inter.variable} ${playfairDisplay.variable}`}>
      <body className="bg-cream-200 text-charcoal-800 font-body antialiased">
        <SessionProvider>
          <MagicEffectsProvider>
            <AuthProvider>
              <PageLoader />
              <CustomCursor />
              <Header />
              <main>{children}</main>
              <Footer />
            </AuthProvider>
          </MagicEffectsProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
