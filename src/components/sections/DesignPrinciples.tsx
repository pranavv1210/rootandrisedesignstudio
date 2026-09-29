"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const principles = [
  { id: '01', title: 'HUMAN', text: 'Designed around people.' },
  { id: '02', title: 'PURPOSEFUL', text: 'Every decision has a reason.' },
  { id: '03', title: 'ADAPTABLE', text: 'Spaces evolve.' },
  { id: '04', title: 'DISTINCTIVE', text: 'Every organization has an identity.' },
  { id: '05', title: 'ENDURING', text: 'Beyond temporary trends.' },
];

export default function DesignPrinciples() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 md:px-12 bg-surface w-full">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          <div className="lg:w-1/2 relative z-10">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent mb-12 block">
              Design Principles
            </span>
            
            <div className="space-y-4">
              {principles.map((p) => (
                <div 
                  key={p.id}
                  className="border-b border-background/50 pb-4 group"
                  onMouseEnter={() => setHovered(p.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <motion.div 
                    className="flex flex-col md:flex-row md:items-baseline justify-between cursor-pointer"
                  >
                    <h3 className={`font-display text-4xl md:text-6xl transition-colors duration-500 ${hovered === p.id ? 'text-foreground' : 'text-foreground/40'}`}>
                      {p.title}
                    </h3>
                    <span className="text-foreground/60 text-lg md:text-xl mt-2 md:mt-0 font-medium">
                      {p.text}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 h-[400px] lg:h-[600px] lg:sticky lg:top-32 bg-background rounded-sm overflow-hidden flex items-center justify-center">
            {/* Visual representation of principles */}
            <div className="text-foreground/20 font-display text-4xl p-12 text-center text-balance">
              {hovered ? principles.find(x => x.id === hovered)?.title : 'PRINCIPLES'} Visual representation
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
