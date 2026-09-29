"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stages = [
  { id: '01', title: 'DISCOVER' },
  { id: '02', title: 'DEFINE' },
  { id: '03', title: 'IMAGINE' },
  { id: '04', title: 'DESIGN' },
  { id: '05', title: 'REFINE' },
  { id: '06', title: 'DELIVER' },
];

export default function DreamOffice() {
  const [activeStage, setActiveStage] = useState('04'); // currently highlighting design

  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-surface w-full">
      <div className="container mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="px-4 py-1 bg-surface text-foreground rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">
              IN DEVELOPMENT
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-6xl text-foreground"
            >
              Dream Office
            </motion.h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-sm">
            <p className="text-foreground/70 text-balance">
              Follow our process as we actively develop our signature workplace capability. 
              From blueprint to material reality.
            </p>
          </div>
        </div>

        {/* Progress System */}
        <div className="mb-12 overflow-x-auto hide-scrollbar pb-4">
          <div className="flex space-x-4 min-w-max">
            {stages.map((stage) => {
              const isActive = stage.id === activeStage;
              const isPast = parseInt(stage.id) < parseInt(activeStage);
              
              return (
                <div key={stage.id} className="flex flex-col items-center">
                  <div 
                    className={`w-32 h-1 mb-4 rounded-full transition-colors duration-500 ${
                      isActive ? 'bg-accent' : isPast ? 'bg-foreground/20' : 'bg-surface'
                    }`}
                  />
                  <span className={`text-xs tracking-widest uppercase transition-colors duration-500 ${
                    isActive ? 'text-accent font-bold' : 'text-foreground/40'
                  }`}>
                    {stage.id} {stage.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Evolution */}
        <div className="w-full aspect-[16/9] lg:aspect-[21/9] bg-surface relative overflow-hidden rounded-sm flex items-center justify-center">
          {/* Abstract representation of the design stage */}
          <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-foreground/5 to-transparent"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key="design-stage"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10 text-center"
            >
              <div className="w-64 h-64 md:w-96 md:h-96 border border-foreground/20 rounded-full flex items-center justify-center relative shadow-2xl bg-background">
                <div className="w-3/4 h-3/4 border-2 border-dashed border-accent/40 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="w-12 h-12 bg-accent/20"></div>
                    <div className="w-12 h-12 bg-terracotta/20"></div>
                    <div className="w-12 h-12 bg-foreground/10"></div>
                    <div className="w-12 h-12 bg-surface"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 right-6 text-xs text-foreground/40 tracking-widest uppercase font-mono">
            RR / WORKPLACE / 001
          </div>
        </div>

      </div>
    </section>
  );
}
