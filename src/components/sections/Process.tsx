"use client";

import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'MEET', text: 'We listen.' },
  { id: '02', title: 'UNDERSTAND', text: 'We uncover requirements.' },
  { id: '03', title: 'EXPLORE', text: 'We challenge possibilities.' },
  { id: '04', title: 'DESIGN', text: 'We turn insight into space.' },
  { id: '05', title: 'REFINE', text: 'We review and improve.' },
  { id: '06', title: 'DELIVER', text: 'We bring the vision together.' },
];

export default function Process() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background w-full">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl text-foreground mb-24"
        >
          From conversation <br/>
          <span className="italic text-accent">to creation.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {steps.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-8 border-l border-surface"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-accent -translate-x-1/2 shadow-[0_0_0_4px_theme(colors.background)] rounded-full" />
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-foreground/40 mb-2 block">
                {step.id} {step.title}
              </span>
              <p className="font-display text-2xl md:text-3xl text-foreground">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
