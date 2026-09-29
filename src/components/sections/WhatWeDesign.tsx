"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const types = [
  { id: 'focus', label: 'Focus' },
  { id: 'collaboration', label: 'Collaboration' },
  { id: 'social', label: 'Social' },
  { id: 'meeting', label: 'Meeting' },
  { id: 'executive', label: 'Executive' },
  { id: 'hybrid', label: 'Hybrid' },
];

export default function WhatWeDesign() {
  const [active, setActive] = useState(types[0].id);

  return (
    <section className="py-32 px-6 md:px-12 bg-surface w-full">
      <div className="container mx-auto">
        
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl text-foreground mb-6 text-balance"
          >
            We don't just design rooms.<br/>
            <span className="italic text-accent">We design how spaces work.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-auto lg:h-[600px]">
          
          <div className="lg:col-span-4 flex flex-wrap lg:flex-col gap-4">
            {types.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`text-left text-xl md:text-2xl font-display px-6 py-4 transition-all duration-300 border-l-2 ${
                  active === t.id 
                    ? 'border-accent text-foreground bg-background/50' 
                    : 'border-transparent text-foreground/40 hover:text-foreground/70'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 h-[400px] lg:h-full relative rounded-sm overflow-hidden bg-background">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-12"
              >
                {/* Interactive spatial ecosystem */}
                <div className="w-full h-full border border-foreground/10 flex items-center justify-center relative">
                  <span className="text-sm tracking-widest uppercase text-foreground/50">{active} Environment</span>
                  
                  {/* Abstract spatial layout representation based on active state */}
                  <div className="absolute inset-0 p-8 flex items-center justify-center gap-4 opacity-30">
                    {active === 'focus' && (
                      <div className="grid grid-cols-3 gap-8 w-full max-w-md">
                        <div className="h-32 bg-foreground/80 rounded-sm"></div>
                        <div className="h-32 bg-foreground/80 rounded-sm"></div>
                        <div className="h-32 bg-foreground/80 rounded-sm"></div>
                      </div>
                    )}
                    {active === 'collaboration' && (
                      <div className="w-64 h-64 rounded-full border-4 border-terracotta flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-accent"></div>
                      </div>
                    )}
                    {active === 'social' && (
                      <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
                        <div className="w-3/4 h-16 bg-accent rounded-full"></div>
                        <div className="w-1/2 h-16 bg-terracotta rounded-full"></div>
                      </div>
                    )}
                    {['meeting', 'executive', 'hybrid'].includes(active) && (
                      <div className="w-full h-full border-2 border-dashed border-foreground/20 flex items-center justify-center">
                        <div className="w-1/2 h-1/2 bg-foreground/10"></div>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
