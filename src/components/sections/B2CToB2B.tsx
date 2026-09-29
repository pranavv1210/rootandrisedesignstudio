"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function B2CToB2B() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background w-full">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl text-foreground mb-6"
          >
            From homes to workplaces.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/70"
          >
            Years of understanding people. A new chapter in workplace design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg text-foreground/80 leading-relaxed space-y-6"
          >
            <p>
              Our B2C experience taught us how people live with spaces. How they move. 
              How they personalize. How environments influence emotion. How functionality 
              and aesthetics need to coexist.
            </p>
            <p>
              Now we bring that understanding into the places where people work.
            </p>
            <p className="font-display text-2xl text-accent pt-4">
              The context changes. The understanding of people remains.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              ['Living Room', 'Collaboration Lounge'],
              ['Study', 'Focus Room'],
              ['Dining Table', 'Collaboration Table'],
              ['Gathering', 'Social Space']
            ].map(([home, work], i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center space-x-4 md:space-x-8 py-4 border-b border-surface"
              >
                <div className="w-1/3 text-right">
                  <span className="text-sm uppercase tracking-widest text-foreground/50 block mb-1">Home</span>
                  <span className="font-display text-xl md:text-2xl">{home}</span>
                </div>
                
                <div className="text-accent">
                  <ArrowRight />
                </div>
                
                <div className="w-1/2">
                  <span className="text-sm uppercase tracking-widest text-foreground/50 block mb-1">Workplace</span>
                  <span className="font-display text-xl md:text-2xl">{work}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
