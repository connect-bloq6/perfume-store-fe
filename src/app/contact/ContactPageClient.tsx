'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Headphones, MapPin, Phone, ChevronDown, ChevronRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Typing dots animation for chat - SLOWER
const TypingDots = () => (
  <div className="absolute -bottom-1 -right-1 flex gap-0.5">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: '#C4A77D' }}
        animate={{
          y: [0, -3, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.2,
          delay: i * 0.3,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

// Phone ring animation - SLOWER
const PhoneRing = () => (
  <>
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{ border: '2px solid #C4A77D' }}
      animate={{
        scale: [1, 1.3, 1.6],
        opacity: [0.5, 0.2, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 1,
        ease: "easeOut",
      }}
    />
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{ border: '2px solid #C4A77D' }}
      animate={{
        scale: [1, 1.3, 1.6],
        opacity: [0.5, 0.2, 0],
      }}
      transition={{
        duration: 2.5,
        delay: 1,
        repeat: Infinity,
        repeatDelay: 1,
        ease: "easeOut",
      }}
    />
  </>
);

// Headphone wave animation - SLOWER
const SoundWave = () => (
  <div className="absolute -right-1 top-1/2 -translate-y-1/2 flex gap-0.5">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-0.5 rounded-full"
        style={{ backgroundColor: '#C4A77D' }}
        animate={{
          height: [4, 10, 4],
        }}
        transition={{
          duration: 1.2,
          delay: i * 0.25,
          repeat: Infinity,
          repeatDelay: 0.5,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

// Location ping animation - SLOWER
const LocationPing = () => (
  <>
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{ backgroundColor: '#C4A77D' }}
      animate={{
        scale: [1, 1.8],
        opacity: [0.4, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 1,
        ease: "easeOut",
      }}
    />
  </>
);

// Logo sparkle/glitter blessing effect
const LogoSparkles = () => (
  <div className="absolute inset-0 pointer-events-none">
    {/* Continuous sparkles emanating from logo */}
    {[...Array(12)].map((_, i) => {
      const angle = (i * 30 * Math.PI) / 180;
      const distance = 40 + (i % 3) * 20;
      return (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2"
          style={{
            width: 4 + (i % 2) * 2,
            height: 4 + (i % 2) * 2,
          }}
          initial={{ 
            x: 0, 
            y: 0, 
            opacity: 0,
            scale: 0 
          }}
          animate={{
            x: [0, Math.cos(angle) * distance, Math.cos(angle) * (distance + 30)],
            y: [0, Math.sin(angle) * distance, Math.sin(angle) * (distance + 30)],
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <svg viewBox="0 0 24 24" fill="#FFD700" style={{ filter: 'drop-shadow(0 0 3px #FFD700)' }}>
            <path d="M12 0 L13 9 L22 12 L13 15 L12 24 L11 15 L2 12 L11 9 Z" />
          </svg>
        </motion.div>
      );
    })}
    
    {/* Extra glitter particles */}
    {[...Array(8)].map((_, i) => {
      const randomAngle = ((i * 45 + 22.5) * Math.PI) / 180;
      return (
        <motion.div
          key={`glitter-${i}`}
          className="absolute left-1/2 top-1/2 w-1 h-1 rounded-full"
          style={{ backgroundColor: '#FFFFFF', boxShadow: '0 0 4px #FFD700' }}
          animate={{
            x: [0, Math.cos(randomAngle) * 60],
            y: [0, Math.sin(randomAngle) * 60],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2.5,
            delay: 1.5 + i * 0.3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      );
    })}
  </div>
);

const contactOptions = [
  {
    icon: MessageCircle,
    title: 'Chat to sales',
    description: 'Speak to our friendly team.',
    action: 'Schedule a meeting',
    actionType: 'button',
  },
  {
    icon: Headphones,
    title: 'Chat to support',
    description: "We're here to help.",
    action: 'support@calraperfumes.com',
    actionType: 'email',
  },
  {
    icon: MapPin,
    title: 'Visit us',
    description: 'Visit our office HQ.',
    action: 'View on Google Maps',
    actionType: 'link',
    href: 'https://maps.google.com/?q=3500+Peachtree+Road+NE+Atlanta+GA',
  },
  {
    icon: Phone,
    title: 'Call us',
    description: 'Mon-Fri from 8am to 5pm.',
    action: '+1 (404) 555-8932',
    actionType: 'phone',
  },
];

const faqItems = [
  {
    question: 'Do you offer fragrance consultations?',
    answer: 'Yes, we offer complimentary 30-minute fragrance consultations with our expert perfumers. Book an appointment to discover your perfect scent.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to over 50 countries worldwide. International shipping times vary between 5-14 business days depending on your location.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for unopened products. If you\'re not satisfied with your purchase, contact our support team for assistance.',
  },
  {
    question: 'Can I request a sample before purchasing?',
    answer: 'Absolutely! We offer sample sets of our most popular fragrances. You can also request specific samples with any full-size purchase.',
  },
  {
    question: 'Can my fragrances be personalized?',
    answer: 'Yes, we offer personalization services including custom engraving on select bottles and bespoke fragrance creation for special occasions.',
  },
  {
    question: 'What sizes do your perfumes come in?',
    answer: 'Our perfumes are available in 30ml, 50ml, 100ml, and 150ml sizes. Some limited editions may have different size options.',
  },
  {
    question: 'Do you offer gift wrapping?',
    answer: 'Yes, complimentary gift wrapping is available for all orders. Simply select the gift wrap option at checkout.',
  },
  {
    question: 'How should I store my perfume?',
    answer: 'Store your perfume in a cool, dry place away from direct sunlight and heat. Keep the cap on when not in use to preserve the fragrance.',
  },
  {
    question: 'How does shipping work?',
    answer: 'We offer free standard shipping on orders over $100. Express and overnight options are available at checkout for an additional fee.',
  },
  {
    question: 'Do you have a loyalty program?',
    answer: 'Yes! Our Essence Rewards program lets you earn points on every purchase, which can be redeemed for discounts and exclusive products.',
  },
];

export default function ContactPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const displayedFaqs = showAllFaqs ? faqItems : faqItems.slice(0, 6);
  const leftFaqs = displayedFaqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = displayedFaqs.filter((_, i) => i % 2 === 1);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Section 1 - Get in Touch Card */}
      <section className="pt-32 pb-8">
        <div className="container-luxury">
          {/* Card with badge on top edge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Badge - positioned at top edge */}
            <div className="flex justify-center">
              <div 
                className="inline-block px-6 py-2 rounded-full relative z-10 -mb-5"
                style={{ backgroundColor: '#F5EBD9' }}
              >
                <span 
                  className="text-sm font-medium"
                  style={{ color: '#A8845E' }}
                >
                  Contact us
                </span>
              </div>
            </div>

            {/* Card */}
            <div 
              className="rounded-2xl pt-12 pb-16 px-8 text-center"
              style={{ backgroundColor: '#F5F4F1' }}
            >
              {/* Heading */}
              <h1 
                className="font-playfair mb-4"
                style={{
                  fontWeight: 400,
                  fontSize: '48px',
                  lineHeight: '56px',
                  color: '#171717'
                }}
              >
                Get in touch with our team
        </h1>

              {/* Description */}
              <p style={{ color: '#6B6B6B', fontSize: '16px' }}>
                We love to hear from you and help you find your perfect fragrance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - World Map */}
      <section className="py-8">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden" style={{ backgroundColor: '#F5F4F1' }}>
              {/* Map Image */}
              <div className="relative w-full h-[450px]">
                <Image
                  src="/images/map.png"
                  alt="CALRA Perfumes Atlanta Location - 3500 Peachtree Road NE"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>

            </div>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
          >
            {contactOptions.map((option, index) => (
              <motion.div 
                key={option.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Icon with animation */}
                <div className="relative w-12 h-12 mx-auto mb-4">
                  {/* Background circle */}
                  <motion.div 
                    className="absolute inset-0 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#F5EBD9' }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {/* Icon with subtle animation - SLOWER */}
                    <motion.div
                      animate={
                        option.icon === Phone 
                          ? { rotate: [0, -8, 8, -8, 0] }
                          : option.icon === Headphones
                          ? { scale: [1, 1.05, 1] }
                          : {}
                      }
                      transition={{
                        duration: option.icon === Phone ? 0.8 : 3,
                        repeat: Infinity,
                        repeatDelay: option.icon === Phone ? 3 : 2,
                      }}
                    >
                      <option.icon size={20} style={{ color: '#A8845E' }} />
                    </motion.div>
                  </motion.div>
                  
                  {/* Animated effects based on icon type */}
                  {option.icon === MessageCircle && <TypingDots />}
                  {option.icon === Phone && <PhoneRing />}
                  {option.icon === Headphones && <SoundWave />}
                  {option.icon === MapPin && <LocationPing />}
                </div>

                {/* Title */}
                <h3 className="font-medium mb-1" style={{ color: '#171717' }}>
                  {option.title}
                </h3>

                {/* Description */}
                <p className="text-sm mb-3" style={{ color: '#6B6B6B' }}>
                  {option.description}
                </p>

                {/* Action */}
                {option.actionType === 'button' ? (
                  <button
                    className="px-5 py-2 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#C4A77D', color: '#FFFFFF' }}
                  >
                    {option.action}
                  </button>
                ) : option.actionType === 'email' ? (
                  <a 
                    href={`mailto:${option.action}`}
                    className="text-sm hover:underline"
                    style={{ color: '#6B6B6B' }}
                  >
                    {option.action}
                  </a>
                ) : option.actionType === 'link' ? (
                  <a 
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: '#6B6B6B' }}
                  >
                    {option.action}
                  </a>
                ) : (
                  <a 
                    href={`tel:${option.action.replace(/[^0-9+]/g, '')}`}
                    className="text-sm font-medium"
                    style={{ color: '#171717' }}
                  >
                    {option.action}
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-luxury">
          <div 
            className="rounded-3xl p-8 md:p-12"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
          >
            {/* Header */}
            <div className="text-center mb-10">
              <div 
                className="inline-block px-4 py-1 rounded-full mb-4"
                style={{ backgroundColor: '#F5EBD9' }}
              >
                <span 
                  className="text-xs font-medium"
                  style={{ color: '#A8845E' }}
                >
                  FAQ
                </span>
              </div>

              <h2 
                className="font-playfair mb-3"
                style={{
                  fontWeight: 400,
                  fontSize: '32px',
                  lineHeight: '40px',
                  color: '#171717'
                }}
              >
                Frequently asked questions
              </h2>

              <p className="text-sm" style={{ color: '#6B6B6B' }}>
                Everything you need to know about our fragrances and services.
              </p>
            </div>

            {/* FAQ Grid */}
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              {/* Left Column */}
              <div>
                {leftFaqs.map((faq, index) => {
                  const actualIndex = index * 2;
                  return (
                    <div 
                      key={actualIndex}
                      className="border-b py-4"
                      style={{ borderColor: '#F0F0F0' }}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === actualIndex ? null : actualIndex)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <div className="flex items-center gap-3">
                          <HelpCircle size={16} style={{ color: '#C4A77D' }} />
                          <span 
                            className="text-sm font-medium"
                            style={{ color: '#171717' }}
                          >
                            {faq.question}
                          </span>
                        </div>
                        <ChevronDown 
                          size={16} 
                          style={{ color: '#6B6B6B' }}
                          className={`transition-transform ${openFaq === actualIndex ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {openFaq === actualIndex && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 pl-7"
                        >
                          <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Right Column */}
              <div>
                {rightFaqs.map((faq, index) => {
                  const actualIndex = index * 2 + 1;
                  return (
                    <div 
                      key={actualIndex}
                      className="border-b py-4"
                      style={{ borderColor: '#F0F0F0' }}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === actualIndex ? null : actualIndex)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <div className="flex items-center gap-3">
                          <HelpCircle size={16} style={{ color: '#C4A77D' }} />
                          <span 
                            className="text-sm font-medium"
                            style={{ color: '#171717' }}
                          >
                            {faq.question}
                          </span>
                        </div>
                        <ChevronDown 
                          size={16} 
                          style={{ color: '#6B6B6B' }}
                          className={`transition-transform ${openFaq === actualIndex ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {openFaq === actualIndex && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 pl-7"
                        >
                          <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Load More */}
            {!showAllFaqs && faqItems.length > 6 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllFaqs(true)}
                  className="text-sm font-medium hover:underline"
                  style={{ color: '#6B6B6B' }}
                >
                  Load more
                </button>
              </div>
            )}
          </div>

          {/* Still Have Questions Bar */}
          <div 
            className="mt-6 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #F0F0F0' }}
          >
            <div>
              <h4 className="font-medium mb-1" style={{ color: '#171717' }}>
                Still have questions?
              </h4>
              <p className="text-sm" style={{ color: '#6B6B6B' }}>
                Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="flex items-center gap-1 text-sm hover:underline"
                style={{ color: '#6B6B6B' }}
              >
                Documentation
                <ChevronRight size={14} />
              </Link>
              <button
                className="px-5 py-2 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#C4A77D', color: '#FFFFFF' }}
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-luxury">
          <div 
            className="text-center py-16 px-8 md:px-16 rounded-3xl"
            style={{ backgroundColor: '#917B5F' }}
          >
            {/* Brand Logo with sparkle blessing effect */}
            <div className="mb-6 relative">
              <div className="relative inline-block">
                <LogoSparkles />
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src="/images/Vector.png"
                    alt="CALRA Perfumes Logo"
                    width={60}
                    height={60}
                    className="mx-auto relative z-10"
                    style={{ opacity: 0.9, filter: 'brightness(0) invert(1)' }}
                  />
                </motion.div>
                
                {/* Glow effect behind logo */}
                <motion.div
                  className="absolute inset-0 -z-10"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>

            {/* Heading */}
            <h2 
              className="font-playfair mb-4"
              style={{
                fontWeight: 400,
                fontSize: '36px',
                lineHeight: '44px',
                color: '#FFFFFF'
              }}
            >
              We&apos;re ready when you are
            </h2>

            {/* Description */}
            <p 
              className="max-w-lg mx-auto mb-8"
              style={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '16px',
                lineHeight: '24px'
              }}
            >
              Join thousands of retailers who trust CALRA Perfumes Atlanta for their signature wholesale fragrances.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                Explore Collection
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  color: '#917B5F'
                }}
              >
                Book Consultation
              </Link>
            </div>
          </div>
      </div>
      </section>
    </div>
  );
}

