'use client';

import { ProductCard } from './ProductCard';

// Product data using available images
const products = [
  { 
    id: '1', 
    name: 'Signature Collection', 
    brand: 'Extrait De Parfum', 
    price: 295, 
    image: '/images/Landing Page/Background/Main.png', 
    slug: 'signature-collection', 
    isNew: true,
    category: 'For Her'
  },
  { 
    id: '2', 
    name: 'Desert Rose Oud', 
    brand: 'Eau De Parfum', 
    price: 245, 
    image: '/images/Landing Page/Background/Desert Rose.png', 
    slug: 'desert-rose-oud',
    isBestseller: true,
    category: 'Unisex'
  },
  { 
    id: '3', 
    name: 'Mysterious Night', 
    brand: 'Parfum', 
    price: 325, 
    image: '/images/Landing Page/Background/Mysterious.png', 
    slug: 'mysterious-night',
    category: 'For Him'
  },
  { 
    id: '4', 
    name: 'Black Phoenix', 
    brand: 'Extrait De Parfum', 
    price: 385, 
    image: '/images/Landing Page/Background/Black_Phoenix.png', 
    slug: 'black-phoenix',
    isNew: true,
    category: 'Unisex'
  },
  { 
    id: '5', 
    name: 'Azure Dreams', 
    brand: 'Eau De Parfum', 
    price: 195, 
    image: '/images/Landing Page/Background/Blue.png', 
    slug: 'azure-dreams',
    category: 'For Her'
  },
  { 
    id: '6', 
    name: 'Luxe Display', 
    brand: 'Parfum', 
    price: 275, 
    image: '/images/Landing Page/Background/Shelf.png', 
    slug: 'luxe-display',
    isBestseller: true,
    category: 'For Her'
  },
  { 
    id: '7', 
    name: 'Imperial Gold', 
    brand: 'Extrait De Parfum', 
    price: 350, 
    image: '/images/Landing Page/Background/Single.png', 
    slug: 'imperial-gold',
    category: 'Unisex'
  },
  { 
    id: '8', 
    name: 'Velvet Oud Collection', 
    brand: 'Gift Set', 
    price: 450, 
    image: '/images/Landing Page/Background/Three.png', 
    slug: 'velvet-oud-collection',
    isNew: true,
    category: 'Gift Sets'
  },
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
