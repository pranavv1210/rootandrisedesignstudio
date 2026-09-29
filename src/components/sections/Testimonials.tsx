"use client";

import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface w-full overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent mb-4 block">Client Perspectives</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Spaces that work for people.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto border-y border-foreground/15 py-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl leading-tight text-foreground/80 italic"
          >
            The next perspective belongs to the people who experience the work.
          </motion.p>
          <p className="mt-8 text-sm uppercase tracking-[0.18em] text-foreground/50">Client perspectives will appear here as they are approved.</p>
        </div>
      </div>
    </section>
  );
}
