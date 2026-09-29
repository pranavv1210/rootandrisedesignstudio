"use client";

import { motion } from 'framer-motion';

export default function Location() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background w-full overflow-hidden relative">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl text-foreground mb-4"
          >
            ROOTED IN MUMBAI. <br />
            <span className="text-accent italic">RISING IN BENGALURU.</span>
          </motion.h2>
        </div>

        <div className="h-[400px] w-full relative z-0 flex items-center justify-center">
          {/* Abstract Map Line */}
          <svg viewBox="0 0 800 400" className="w-full max-w-4xl opacity-40">
            {/* Mumbai */}
            <circle cx="200" cy="150" r="4" fill="currentColor" className="text-foreground" />
            <text x="180" y="140" className="text-xs font-mono uppercase tracking-widest fill-current" fill="currentColor">Mumbai</text>
            
            {/* Bengaluru */}
            <circle cx="600" cy="300" r="4" fill="currentColor" className="text-accent" />
            <text x="615" y="310" className="text-xs font-mono uppercase tracking-widest fill-current" fill="currentColor">Bengaluru</text>

            <motion.path 
              d="M 200 150 C 300 150, 500 300, 600 300" 
              fill="transparent" 
              stroke="currentColor" 
              strokeWidth="1"
              strokeDasharray="4 4"
              className="text-foreground"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Architectural overlay drawing */}
            <motion.path 
              d="M 150 150 L 250 150 L 250 250 L 150 250 Z" 
              fill="transparent" 
              stroke="currentColor" 
              strokeWidth="0.5"
              className="text-foreground/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            />
            <motion.path 
              d="M 550 250 L 650 250 L 650 350 L 550 350 Z" 
              fill="transparent" 
              stroke="currentColor" 
              strokeWidth="0.5"
              className="text-accent/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
