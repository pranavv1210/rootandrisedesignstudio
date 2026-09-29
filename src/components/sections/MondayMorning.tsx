"use client";

import { motion } from 'framer-motion';

export default function MondayMorning() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-dark text-background py-32 px-6 md:px-12 overflow-hidden">
      
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Subtle grid pattern background */}
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent">The Signature Test</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight max-w-5xl"
        >
          Everyone designs for the opening day.
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-4xl md:text-6xl text-terracotta italic mb-16"
        >
          We design for Monday mornings.
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-xl md:text-2xl text-background/80 leading-relaxed text-balance">
            A workplace shouldn't only look impressive when the photographs are taken.
            It should work when the first person walks in on an ordinary Monday.
            It should support focus, collaboration, comfort, culture, and growth.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
