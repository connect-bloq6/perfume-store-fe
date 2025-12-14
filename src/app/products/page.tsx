import { ProductGrid } from '@/components/products/ProductGrid';
import { ProductFilters } from '@/components/products/ProductFilters';
import { ProductSort } from '@/components/products/ProductSort';

export const metadata = {
  title: 'All Fragrances | Essence',
  description: 'Explore our complete collection of luxury perfumes and fragrances.',
};

export default function ProductsPage() {
  return (
    <div className="container-luxury py-12">
      <header className="mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl text-gold-500 mb-4">
          Our Collection
        </h1>
        <p className="text-noir-300 max-w-2xl mx-auto">
          Each fragrance tells a story. Discover scents crafted by master perfumers
          from the finest ingredients around the world.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 flex-shrink-0">
          <ProductFilters />
        </aside>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <p className="text-noir-400">Showing 24 fragrances</p>
            <ProductSort />
          </div>
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}

