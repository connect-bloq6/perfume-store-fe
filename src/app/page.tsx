import { Hero } from '@/components/home/Hero';
import { FeaturedCollection } from '@/components/home/FeaturedCollection';
import { Categories } from '@/components/home/Categories';
import { Bestsellers } from '@/components/home/Bestsellers';
import { Newsletter } from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <Categories />
      <Bestsellers />
      <Newsletter />
    </>
  );
}

