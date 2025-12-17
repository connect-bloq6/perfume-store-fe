import { AboutHero } from '@/components/about/AboutHero';
import { OurStory } from '@/components/about/OurStory';
import { Craftsmanship } from '@/components/about/Craftsmanship';

export const metadata = {
  title: 'About Us | Perfume Store Atlanta',
  description: 'Discover the story behind Perfume Store Atlanta - crafting timeless fragrances since 1985.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <Craftsmanship />
    </>
  );
}
