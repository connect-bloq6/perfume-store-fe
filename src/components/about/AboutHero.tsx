'use client';

export function AboutHero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-luxury">
        {/* Since 2010 Badge */}
        <div className="flex justify-center">
          <div 
            className="inline-block px-6 py-2 rounded-full -mb-5 relative z-10"
            style={{ backgroundColor: '#F5EBD9' }}
          >
            <span 
              className="text-sm font-medium"
              style={{ color: '#A8845E' }}
            >
              Since 2010
            </span>
          </div>
        </div>

        {/* Card Container */}
        <div 
          className="text-center px-8 md:px-20 py-14 md:py-20"
          style={{ 
            backgroundColor: '#F8F7F4',
            borderRadius: '8px'
          }}
        >
          {/* Main Heading */}
          <h1 
            className="font-playfair mb-6"
            style={{
              fontWeight: 400,
              fontSize: '48px',
              lineHeight: '60px',
              color: '#171717'
            }}
          >
            Crafting Memories
            <br />
            Through Fragrance
          </h1>

          {/* Description */}
          <p 
            className="text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: '#6B6B6B' }}
          >
            At Perfume Store Atlanta, we believe every scent tells a story. For over a 
            decade, we&apos;ve been creating luxury fragrances that capture emotions, 
            celebrate moments, and define elegance.
          </p>
        </div>
      </div>
    </section>
  );
}
