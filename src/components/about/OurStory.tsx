'use client';

import Image from 'next/image';
import Link from 'next/link';

export function OurStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Text Content */}
          <div className="lg:pt-4">
            {/* Our Story Badge */}
            <div 
              className="inline-block px-6 py-1 rounded-full mb-6"
              style={{ backgroundColor: '#F5EBD9' }}
            >
              <span 
                className="text-xs font-medium"
                style={{ color: '#A8845E' }}
              >
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2 
              className="font-playfair mb-6"
              style={{
                fontWeight: 400,
                fontSize: '42px',
                lineHeight: '52px',
                color: '#171717'
              }}
            >
              A Journey of Passion
              <br />
              & Excellence
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-5 mb-8" style={{ color: '#6B6B6B' }}>
              <p className="text-base leading-relaxed">
                Founded in the heart of Atlanta, our journey began with a simple 
                dream: to create fragrances that transcend the ordinary. What 
                started as a small boutique has blossomed into a globally 
                recognized brand, celebrated for our commitment to quality and 
                innovation.
              </p>
              <p className="text-base leading-relaxed">
                Each fragrance in our collection is a masterpiece, meticulously 
                crafted by our team of expert perfumers who travel the world in 
                search of the finest ingredients. From the rose gardens of Bulgaria 
                to the vanilla plantations of Madagascar, we source only the best.
              </p>
            </div>

            {/* Explore Button */}
            <Link 
              href="/products"
              className="inline-block px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
              style={{ 
                backgroundColor: '#C4A77D',
                color: '#FFFFFF'
              }}
            >
              Explore Our Collection
            </Link>
          </div>

          {/* Right - Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Cream frame - exact Figma gradient */}
            <div 
              className="relative w-full max-w-[420px]"
              style={{ 
                padding: '14px',
                background: 'linear-gradient(180deg, #F4ECDE 0%, #E8DCC8 100%)',
                borderRadius: '16px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
              }}
            >
              {/* Image container */}
              <div 
                className="relative overflow-hidden"
                style={{ 
                  aspectRatio: '4/5',
                  width: '100%',
                  borderRadius: '10px'
                }}
              >
                <Image
                  src="/images/Landing Page/Background/Single.png"
                  alt="Imperial Gold Elixir Perfume"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
