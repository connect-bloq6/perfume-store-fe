'use client';

import { Sparkles, Heart, Leaf, Award, Globe, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { number: '15', letter: '', suffix: '+', label: 'Years of Excellence' },
  { number: '500', letter: 'K', suffix: '+', label: 'Happy Customers' },
  { number: '150', letter: '', suffix: '+', label: 'Unique Fragrances' },
  { number: '50', letter: '', suffix: '+', label: 'Countries Served' },
];

const values = [
  {
    icon: Sparkles,
    title: 'Exceptional Quality',
    description: 'Every fragrance is crafted with the finest ingredients sourced from around the world.',
  },
  {
    icon: Heart,
    title: 'Passionate Craftsmanship',
    description: 'Our perfumers pour their heart into creating unique, memorable scents.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    description: 'We\'re committed to eco-friendly sourcing and sustainable production methods.',
  },
  {
    icon: Award,
    title: 'Award-Winning',
    description: 'Recognized globally for our innovative fragrances and exceptional service.',
  },
];

const features = [
  {
    icon: Globe,
    title: 'Global Ingredient Sourcing',
    description: 'We partner with the finest growers and suppliers across 6 continents.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our team includes award-winning perfumers with over 100 years of combined experience.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Innovation',
    description: 'We invest heavily in R&D to create the next generation of luxury fragrances.',
  },
];

const milestones = [
  {
    year: '2010',
    title: 'The Beginning',
    description: 'Founded in Atlanta with a vision to bring luxury fragrances to everyone.',
    position: 'left',
  },
  {
    year: '2015',
    title: 'Global Expansion',
    description: 'Expanded operations to serve customers across 50+ countries worldwide.',
    position: 'right',
  },
  {
    year: '2020',
    title: 'Innovation Award',
    description: 'Received the International Fragrance Innovation Award for our Desert Rose collection.',
    position: 'left',
  },
  {
    year: '2024',
    title: 'Sustainability Leader',
    description: 'Achieved 100% sustainable sourcing and carbon-neutral production.',
    position: 'right',
  },
];

export function Craftsmanship() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-luxury">
        {/* Stats Row */}
        <div className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center py-10 px-8 rounded-3xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1"
                style={{ 
                  backgroundColor: '#FAFAFA',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.04)';
                }}
              >
                {/* Number */}
                <div 
                  className="font-playfair mb-2 inline-flex items-end justify-center"
                  style={{
                    fontSize: '60px',
                    fontWeight: 400,
                    lineHeight: '60px',
                    color: '#796040'
                  }}
                >
                  <span>{stat.number}</span>
                  {stat.letter && <span>{stat.letter}</span>}
                  <span 
                    style={{ 
                      fontSize: '96px',
                      fontWeight: 100,
                      position: 'relative',
                      top: '-24px',
                      marginLeft: '2px',
                      lineHeight: '0.5'
                    }}
                  >
                    {stat.suffix}
                  </span>
                </div>
                <p 
                  className="text-sm"
                  style={{ color: '#6E6A63' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values Section */}
        <div className="text-center mb-12">
          {/* Our Values Badge */}
          <div 
            className="inline-block px-6 py-1 rounded-full mb-6"
            style={{ backgroundColor: '#F5EBD9' }}
          >
            <span 
              className="text-xs font-medium"
              style={{ color: '#A8845E' }}
            >
              Our Values
            </span>
          </div>

          {/* Heading */}
          <h2 
            className="font-playfair mb-4"
            style={{
              fontWeight: 400,
              fontSize: '42px',
              lineHeight: '52px',
              color: '#171717'
            }}
          >
            What We Stand For
          </h2>

          {/* Description */}
          <p 
            className="max-w-2xl mx-auto"
            style={{ color: '#6B6B6B' }}
          >
            Our core values guide everything we do, from sourcing ingredients 
            to crafting the perfect bottle.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 rounded-2xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1"
              style={{ 
                backgroundColor: '#FAFAFA',
                border: '1px solid #F0F0F0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#E5DED3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = '#F0F0F0';
              }}
            >
              {/* Icon */}
              <div className="mb-5">
                <value.icon 
                  size={28} 
                  strokeWidth={1.5}
                  style={{ color: '#C4A77D' }} 
                />
              </div>

              {/* Title */}
              <h3 
                className="font-medium text-base mb-3"
                style={{ color: '#171717' }}
              >
                {value.title}
              </h3>

              {/* Description */}
              <p 
                className="text-sm leading-relaxed"
                style={{ color: '#6B6B6B' }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section 4 - Artisan Craftsmanship */}
        <div className="grid lg:grid-cols-2 gap-4 items-start py-8 max-w-6xl mx-auto">
          {/* Left - Images (using pre-designed Container images) */}
          <div className="space-y-3">
            {/* Top Image - Container.png */}
            <div 
              className="relative w-full cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
              }}
            >
              <Image
                src="/images/Container.png"
                alt="Perfume bottle with elegant design"
                width={800}
                height={540}
                className="w-full h-auto"
                quality={100}
                priority
                unoptimized
              />
            </div>

            {/* Bottom Image - Container2.png */}
            <div 
              className="relative w-full cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
              }}
            >
              <Image
                src="/images/Container2.png"
                alt="Our perfume collection"
                width={800}
                height={540}
                className="w-full h-auto"
                quality={100}
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-6">
            {/* Badge */}
            <div 
              className="inline-block px-5 py-1.5 rounded-full mb-5"
              style={{ backgroundColor: '#F5EBD9' }}
            >
              <span 
                className="text-sm font-medium"
                style={{ color: '#A8845E' }}
              >
                The Art of Perfumery
              </span>
            </div>

            {/* Heading */}
            <h2 
              className="font-playfair mb-5"
              style={{
                fontWeight: 400,
                fontSize: '42px',
                lineHeight: '50px',
                color: '#171717'
              }}
            >
              Artisan Craftsmanship
              <br />
              Meets Modern Innovation
            </h2>

            {/* Description */}
            <p 
              className="mb-8 leading-relaxed"
              style={{ color: '#6B6B6B', fontSize: '16px', lineHeight: '26px' }}
            >
              Our master perfumers combine centuries-old techniques with 
              cutting-edge technology to create fragrances that are both timeless 
              and contemporary. Each bottle represents hundreds of hours of 
              research, testing, and refinement.
            </p>

            {/* Features List */}
            <div className="space-y-5">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4"
                >
                  {/* Icon */}
                  <div 
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F5EBD9' }}
                  >
                    <feature.icon 
                      size={20} 
                      strokeWidth={1.5}
                      style={{ color: '#A8845E' }} 
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h4 
                      className="font-semibold mb-1"
                      style={{ color: '#171717', fontSize: '15px' }}
                    >
                      {feature.title}
                    </h4>
                    <p 
                      className="leading-relaxed"
                      style={{ color: '#6B6B6B', fontSize: '14px' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5 - Milestones Timeline */}
        <div className="py-20 mt-16">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div 
              className="inline-block px-5 py-1.5 rounded-full mb-5"
              style={{ backgroundColor: '#F5EBD9' }}
            >
              <span 
                className="text-sm font-medium"
                style={{ color: '#A8845E' }}
              >
                Our Journey
              </span>
            </div>

            {/* Heading */}
            <h2 
              className="font-playfair"
              style={{
                fontWeight: 400,
                fontSize: '42px',
                lineHeight: '52px',
                color: '#171717'
              }}
            >
              Milestones That Define Us
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full"
              style={{ backgroundColor: '#C5B299', width: '2px' }}
            />

            {/* Milestones */}
            <div className="space-y-16">
              {milestones.map((milestone) => (
                <div
                  key={milestone.year}
                  className="relative grid grid-cols-[1fr_80px_1fr] items-center"
                >
                  {/* Left Content */}
                  {milestone.position === 'left' ? (
                    <>
                      <div className="pr-6">
                        <div 
                          className="p-6"
                          style={{ 
                            backgroundColor: '#FAFAFA',
                            border: '1px solid #E8E4DD',
                            borderRadius: '20px',
                            borderTopLeftRadius: '30px',
                            borderBottomLeftRadius: '30px',
                          }}
                        >
                          <h3 
                            className="font-semibold mb-2"
                            style={{ color: '#171717', fontSize: '16px' }}
                          >
                            {milestone.title}
                          </h3>
                          <p 
                            className="leading-relaxed"
                            style={{ color: '#6B6B6B', fontSize: '14px' }}
                          >
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Year Badge - Center */}
                      <div className="flex justify-center">
                        <div 
                          className="w-14 h-14 rounded-full flex items-center justify-center z-10"
                          style={{ 
                            backgroundColor: '#C5B299',
                            border: '2px solid #FFFFFF',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                          }}
                        >
                          <span 
                            className="font-semibold text-sm"
                            style={{ color: '#FFFFFF' }}
                          >
                            {milestone.year}
                          </span>
                        </div>
                      </div>
                      
                      {/* Empty right */}
                      <div className="pl-6" />
                    </>
                  ) : (
                    <>
                      {/* Empty left */}
                      <div className="pr-6" />
                      
                      {/* Year Badge - Center */}
                      <div className="flex justify-center">
                        <div 
                          className="w-14 h-14 rounded-full flex items-center justify-center z-10"
                          style={{ 
                            backgroundColor: '#C5B299',
                            border: '2px solid #FFFFFF',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                          }}
                        >
                          <span 
                            className="font-semibold text-sm"
                            style={{ color: '#FFFFFF' }}
                          >
                            {milestone.year}
                          </span>
                        </div>
                      </div>
                      
                      <div className="pl-6">
                        <div 
                          className="p-6"
                          style={{ 
                            backgroundColor: '#FAFAFA',
                            border: '1px solid #E8E4DD',
                            borderRadius: '20px',
                            borderTopRightRadius: '30px',
                            borderBottomRightRadius: '30px',
                          }}
                        >
                          <h3 
                            className="font-semibold mb-2"
                            style={{ color: '#171717', fontSize: '16px' }}
                          >
                            {milestone.title}
                          </h3>
                          <p 
                            className="leading-relaxed"
                            style={{ color: '#6B6B6B', fontSize: '14px' }}
                          >
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 6 - CTA Banner */}
        <div className="mt-24">
          <div 
            className="text-center py-16 px-8 md:px-16"
            style={{ 
              backgroundColor: '#917B5F',
              borderRadius: '40px',
            }}
          >
            {/* Heading */}
            <h2 
              className="font-playfair mb-5"
              style={{
                fontWeight: 400,
                fontSize: '48px',
                lineHeight: '48px',
                color: '#FFFFFF'
              }}
            >
              Experience the Art of Fine Fragrance
            </h2>

            {/* Description */}
            <p 
              className="max-w-xl mx-auto mb-8 leading-relaxed"
              style={{ 
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: '16px',
                lineHeight: '26px'
              }}
            >
              Discover our curated collection of luxury perfumes, each one 
              crafted to perfection. Let us help you find your signature scent.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:opacity-90"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  fontSize: '15px'
                }}
              >
                Shop Collection
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:bg-white/10"
                style={{ 
                  border: '1.5px solid rgba(255, 255, 255, 0.5)',
                  color: '#FFFFFF',
                  fontSize: '15px'
                }}
              >
                Visit Our Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
