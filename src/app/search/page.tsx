import { SearchResults } from '@/components/search/SearchResults';
import { SearchFilters } from '@/components/search/SearchFilters';

export const metadata = {
  title: 'Search | Essence',
  description: 'Search our fragrance collection.',
};

interface SearchPageProps {
  searchParams: { q?: string };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  return (
    <div className="container-luxury py-12">
      <header className="mb-12">
        <h1 className="font-display text-4xl text-gold-500 mb-4">
          Search Results
        </h1>
        {searchParams.q && (
          <p className="text-noir-300">
            Results for &quot;{searchParams.q}&quot;
          </p>
        )}
      </header>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 flex-shrink-0">
          <SearchFilters />
        </aside>
        <div className="flex-1">
          <SearchResults query={searchParams.q} />
        </div>
      </div>
    </div>
  );
}

