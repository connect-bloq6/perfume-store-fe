'use client';

interface CollectionHeaderProps {
  slug: string;
}

const collectionData: Record<string, { title: string; description: string }> = {
  women: {
    title: 'For Her',
    description: 'Discover feminine fragrances that captivate and enchant. From delicate florals to bold orientals.',
  },
  men: {
    title: 'For Him',
    description: 'Bold, sophisticated scents for the modern gentleman. Commanding presence in every bottle.',
  },
  unisex: {
    title: 'Unisex',
    description: 'Boundary-defying fragrances that transcend traditional categories. For those who dare to be different.',
  },
};

export function CollectionHeader({ slug }: CollectionHeaderProps) {
  const collection = collectionData[slug] || {
    title: slug.replace(/-/g, ' '),
    description: 'Explore our curated collection of exquisite fragrances.',
  };

  return (
    <header className="mb-12 text-center">
      <h1 className="font-display text-4xl md:text-5xl text-gold-500 mb-4 capitalize">
        {collection.title}
      </h1>
      <p className="text-noir-300 max-w-2xl mx-auto">
        {collection.description}
      </p>
    </header>
  );
}

