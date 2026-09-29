"use client";

import { motion } from 'framer-motion';

const intelligenceSteps = [
  {
    title: "PROBLEM",
    text: "Teams need more collaboration."
  },
  {
    title: "INSIGHT",
    text: "Collaboration often happens informally."
  },
  {
    title: "DECISION",
    text: "Distributed collaboration zones."
  },
  {
    title: "EXPERIENCE",
    text: "People collaborate naturally without disrupting focus."
  }
];

export default function DesignIntelligence() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background w-full">
      <div className="container mx-auto max-w-5xl">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl text-foreground text-center mb-24"
        >
          We design the <span className="italic text-terracotta">why.</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-surface md:-translate-x-1/2" />

          <div className="space-y-16">
            {intelligenceSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row relative z-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 top-0 w-3 h-3 bg-accent rounded-full -translate-x-[5px] md:-translate-x-1/2 shadow-[0_0_0_4px_theme(colors.background)]" />

                <div className={`pl-20 md:pl-0 md:w-1/2 pt-0 md:-mt-2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/40 mb-2 block">
                    {step.title}
                  </span>
                  <p className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
