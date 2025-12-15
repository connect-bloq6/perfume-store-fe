'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqCategories = [
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'shipping', label: 'Shipping and Returns' },
  { id: 'fragrance', label: 'Fragrance Recommendations' },
  { id: 'account', label: 'Account & Orders' },
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
];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left side - Title and categories */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            {/* Title with Arial font as per specs: Arial, 48px, 400 weight */}
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: 'Arial, sans-serif',
                fontWeight: 400,
                fontSize: '48px',
                lineHeight: '1.2',
                letterSpacing: '0px',
                color: '#796040'
              }}
            >
              FAQs
            </h2>
            <p 
              className="mb-10 whitespace-nowrap"
              style={{
                fontFamily: 'Arial, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0px',
                color: '#525252'
              }}
            >
              Everything you need to know about fragrances, shipping, and customer support.
            </p>
            
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2.5">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="px-3 py-1.5 text-xs rounded-full transition-all duration-300 bg-transparent text-charcoal-700 hover:text-charcoal-800 whitespace-nowrap"
                  style={{
                    borderColor: '#C5B299',
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
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
            className="lg:col-span-6 lg:ml-[8%]"
          >
            <div className="space-y-3">
              {/* FAQ Items */}
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="overflow-hidden"
                  style={{
                    backgroundColor: '#F4ECDE',
                    borderRadius: '16px',
                    boxShadow: '0 1px 2px -1px rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex items-center justify-between w-full px-5 py-4 text-left transition-colors"
                  >
                    <span className="text-charcoal-800 font-medium text-sm pr-4">{faq.question}</span>
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-charcoal-600">
                      {openIndex === index ? (
                        <Minus size={18} strokeWidth={1.5} />
                      ) : (
                        <Plus size={18} strokeWidth={1.5} />
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 text-charcoal-600 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* Still have questions? - Special CTA card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="px-5 py-5 mt-4"
                style={{
                  backgroundColor: '#F4ECDE',
                  borderRadius: '16px',
                  boxShadow: '0 1px 2px -1px rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                }}
              >
                <h3 className="text-charcoal-800 font-medium text-base mb-1.5">
                  Still have questions?
                </h3>
                <p className="text-charcoal-600 text-sm mb-4 leading-relaxed">
                  Contact our support team and we will make sure everything is clear and intuitive for you!
                </p>
                <button className="px-5 py-2.5 bg-[#A8845E] text-cream-50 text-sm font-medium rounded-full transition-all duration-300 hover:bg-[#8D6D4A]">
                  Contact Support
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

