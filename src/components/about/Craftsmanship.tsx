'use client';

import { motion } from 'framer-motion';
import { Flower2, FlaskConical, Award, Globe } from 'lucide-react';

const values = [
  {
    icon: Flower2,
    title: 'Natural Ingredients',
    description: 'We source the finest raw materials from ethical suppliers around the globe.',
  },
  {
    icon: FlaskConical,
    title: 'Master Perfumers',
    description: 'Our fragrances are crafted by world-renowned noses with decades of experience.',
  },
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description: 'Every bottle undergoes rigorous testing to ensure perfection.',
  },
  {
    icon: Globe,
    title: 'Sustainable Practices',
    description: 'We&apos;re committed to minimizing our environmental footprint.',
  },
];

export function Craftsmanship() {
  return (
    <section className="py-24 bg-noir-900/50">
      <div className="container-luxury">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Philosophy
          </span>
          <h2 className="font-display text-4xl text-white mb-4">
            Crafted with Purpose
          </h2>
          <p className="text-noir-400 max-w-2xl mx-auto">
            Every aspect of our process is guided by our commitment to 
            excellence and our respect for the art of perfumery.
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-noir-800 flex items-center justify-center">
                <value.icon className="text-gold-500" size={28} />
              </div>
              <h3 className="font-display text-lg text-white mb-2">{value.title}</h3>
              <p className="text-noir-400 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

