import { Hero } from '@/components/home/Hero';
import { Bestsellers } from '@/components/home/Bestsellers';
import { OudBenefits } from '@/components/home/OudBenefits';
import { StoreShowcase } from '@/components/home/StoreShowcase';
import { FAQ } from '@/components/home/FAQ';
import { Newsletter } from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Bestsellers />
      <OudBenefits />
      <StoreShowcase />
      <FAQ />
      <Newsletter />
    </>
  );
}
