"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import MagneticButton from '@/components/ui/MagneticButton';

// Dynamically import 3D component with no SSR to prevent hydration errors and improve initial load
const Hero3D = dynamic(() => import('./Hero3D'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
    <div className="w-px h-24 bg-accent animate-pulse"></div>
  </div>
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-background">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>

      {/* Content overlay */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 h-full w-full flex flex-col justify-center px-6 md:px-12 container mx-auto pointer-events-none"
      >
        <div className="max-w-4xl mt-20 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-foreground text-balance mb-6">
              Designing beyond <br/><span className="text-accent italic">structures.</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mb-12">
              Spaces designed around people, purpose, and possibility.
              We design for Monday mornings.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton href="/work">
              Explore Our Work
            </MagneticButton>
            <MagneticButton href="/contact" className="!bg-transparent !text-foreground border border-foreground/20 hover:border-foreground">
              Start a Conversation
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-12 flex flex-col items-center space-y-2 z-10"
      >
        <span className="text-[10px] tracking-widest uppercase font-bold text-foreground/50 rotate-90 origin-left translate-x-3 mb-6">Scroll</span>
        <div className="w-px h-16 bg-foreground/20 overflow-hidden relative">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="absolute inset-0 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
