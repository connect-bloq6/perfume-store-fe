'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqCategories = [
  { id: 'ordering', label: 'Order a Product' },
  { id: 'shipping', label: 'Shipping and Returns' },
  { id: 'fragrance', label: 'Fragrance Recommendations' },
  { id: 'warranty', label: 'Warranty & Returns' },
  { id: 'gift', label: 'Gift Services' },
];

const faqs = [
  {
    question: 'How do I find my signature scent?',
    answer: 'We recommend starting with our fragrance quiz or visiting our Atlanta store for a personalized consultation. Our experts will guide you through different scent families to find your perfect match.',
  },
  {
    question: "Can I return a perfume if I don't like it?",
    answer: 'Yes! We offer a 30-day satisfaction guarantee. If you\'re not completely happy with your purchase, return the unused portion for a full refund or exchange.',
  },
  {
    question: 'Do you offer gift wrapping services?',
    answer: 'Absolutely! We provide complimentary luxury gift wrapping with a personalized message card. Premium gift boxes are also available for an additional fee.',
  },
  {
    question: 'How long do perfumes typically last?',
    answer: 'Our Eau de Parfum formulations typically last 6-8 hours, while our Parfum concentrations can last 8-12 hours. Oud-based fragrances often have even longer lasting power.',
  },
  {
    question: 'Still have questions?',
    answer: 'Contact our customer service team at hello@calra.com or visit our Atlanta store. We\'re here to help you find the perfect fragrance.',
    isSpecial: true,
  },
];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState('ordering');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-cream-100">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left side - Title and categories */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <h2 className="font-display text-4xl sm:text-5xl text-charcoal-800 mb-4">
              FAQs
            </h2>
            <p className="text-charcoal-500 text-sm mb-8">
              Everything you need to know about ingredients, shipping, and customer support.
            </p>
            
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 text-sm rounded-full transition-all ${
                    activeCategory === category.id
                      ? 'bg-charcoal-800 text-cream-50'
                      : 'bg-sand-200 text-charcoal-600 hover:bg-sand-300'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right side - FAQ accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="bg-cream-50 rounded-3xl p-6 sm:p-8">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${index === faqs.length - 1 ? 'border-b-0' : ''}`}>
                  {faq.isSpecial ? (
                    // Special CTA item
                    <div className="py-6">
                      <h3 className="font-display text-xl text-charcoal-800 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-charcoal-500 text-sm mb-4">
                        Contact our friendly customer service team and find out more about everything on a single place in the most.
                      </p>
                      <button className="btn-outline text-sm">
                        Contact Support
                      </button>
                    </div>
                  ) : (
                    // Regular FAQ item
                    <>
                      <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="faq-trigger"
                      >
                        <span className="pr-8">{faq.question}</span>
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sand-200 flex items-center justify-center">
                          {openIndex === index ? (
                            <Minus size={16} className="text-charcoal-600" />
                          ) : (
                            <Plus size={16} className="text-charcoal-600" />
                          )}
                        </span>
                      </button>
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="faq-content"
                          >
                            <p className="pb-5 text-charcoal-500 text-sm leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

