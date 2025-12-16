import { ProductGrid } from '@/components/products/ProductGrid';
import { ProductFilters } from '@/components/products/ProductFilters';
import { ProductSort } from '@/components/products/ProductSort';

export const metadata = {
  title: 'Shop | Perfume Store Atlanta',
  description: 'Explore our complete collection of luxury perfumes and fragrances.',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container-luxury text-center">
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl mb-4"
            style={{ color: '#65553F', fontWeight: 600 }}
          >
            Our Collection
          </h1>
          <p 
            className="max-w-2xl mx-auto text-base"
            style={{ color: '#6B6B6B' }}
          >
            Each fragrance tells a story. Discover scents crafted by master perfumers
            from the finest ingredients around the world.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="pb-20">
        <div className="container-luxury">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              <ProductFilters />
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Top Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b" style={{ borderColor: '#C5B299' }}>
                <p className="text-sm" style={{ color: '#6B6B6B' }}>
                  Showing <span style={{ color: '#65553F', fontWeight: 600 }}>24</span> fragrances
                </p>
                <ProductSort />
              </div>

              {/* Grid */}
              <ProductGrid />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
