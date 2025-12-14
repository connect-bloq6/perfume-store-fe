'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function OurStory() {
  return (
    <section className="py-24">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              Since 1985
            </span>
            <h2 className="font-display text-4xl text-white mb-6">
              A Legacy of Excellence
            </h2>
            <div className="space-y-4 text-noir-300">
              <p>
                What began as a small atelier in the heart of Paris has blossomed 
                into an internationally celebrated perfume house. Our founder&apos;s 
                vision was simple yet profound: to create fragrances that tell stories.
              </p>
              <p>
                Today, we continue that legacy with the same passion and dedication, 
                sourcing the finest ingredients from around the world and working 
                with master perfumers who share our commitment to excellence.
              </p>
              <p>
                Each Essence fragrance is a testament to our belief that perfume 
                is more than a luxury—it&apos;s an art form that has the power to 
                evoke memories, inspire emotions, and define moments.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5]"
          >
            <Image
              src="/images/about/story.jpg"
              alt="Our story"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

