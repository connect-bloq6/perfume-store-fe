import { AboutHero } from '@/components/about/AboutHero';
import { OurStory } from '@/components/about/OurStory';
import { Craftsmanship } from '@/components/about/Craftsmanship';

export const metadata = {
  title: 'About Us | Essence',
  description: 'Discover the story behind Essence luxury perfumes.',
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

