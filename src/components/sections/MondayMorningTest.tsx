"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  "Can people find what they need?",
  "Can they collaborate naturally?",
  "Can they focus without distraction?",
  "Can they move efficiently?",
  "Can they feel comfortable?",
  "Can teams adapt the space?",
  "Can the workplace evolve?"
];

export default function MondayMorningTest() {
  const [activeQ, setActiveQ] = useState(0);

  return (
    <section className="py-32 px-6 md:px-12 bg-dark text-background w-full overflow-hidden">
      <div className="container mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-accent mb-4">
            The Monday Morning Test
          </h2>
          <p className="font-display text-3xl md:text-5xl text-background/90 text-balance max-w-3xl mx-auto">
            Would this space still work on an ordinary Monday?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            {questions.map((q, i) => (
              <button
                key={i}
                onClick={() => setActiveQ(i)}
                className={`block text-left w-full text-xl md:text-2xl font-display transition-all duration-300 ${
                  activeQ === i 
                    ? 'text-terracotta translate-x-4' 
                    : 'text-background/40 hover:text-background/70'
                }`}
              >
                {q}
              </button>
            ))}
          </div>

          <div className="h-[400px] lg:h-[600px] bg-background/5 rounded-sm relative overflow-hidden flex items-center justify-center p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeQ}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full relative"
              >
                {/* Abstract visualization of the diagnostic */}
                <div className="absolute inset-0 border border-background/10"></div>
                
                {/* Dynamic visual indicator based on the question */}
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div 
                    initial={{ rotate: 0 }}
                    animate={{ rotate: activeQ * 45 }}
                    transition={{ type: "spring" }}
                    className="w-48 h-48 border border-accent rounded-full relative"
                  >
                    <div className="absolute top-0 left-1/2 w-4 h-4 bg-terracotta rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  </motion.div>
                </div>
                
                <div className="absolute bottom-4 left-4 text-xs font-mono text-background/30 uppercase tracking-widest">
                  Diagnostic // {activeQ + 1}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
