"use client";

import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display text-4xl md:text-5xl text-foreground mb-6">ROOT</h3>
              <ul className="space-y-4 text-lg md:text-xl text-foreground/70 font-medium">
                <li>People</li>
                <li>Purpose</li>
                <li>Culture</li>
                <li>Needs</li>
                <li>Context</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-px bg-accent/50 ml-6 hidden md:block"
            />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="font-display text-4xl md:text-5xl text-foreground mb-6">RISE</h3>
              <ul className="space-y-4 text-lg md:text-xl text-foreground/70 font-medium">
                <li>Space</li>
                <li>Experience</li>
                <li>Collaboration</li>
                <li>Identity</li>
                <li>Growth</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="h-[60vh] bg-surface rounded-sm relative overflow-hidden flex items-center justify-center"
          >
            {/* Architectural structural visual metaphor */}
            <div className="w-full h-full p-12 relative flex items-end justify-center group">
              <div className="absolute inset-0 border border-foreground/10 m-8 transition-all duration-1000 group-hover:scale-[0.98]"></div>
              
              <div className="flex items-end space-x-2 md:space-x-6 w-full max-w-sm">
                <motion.div 
                  initial={{ height: "10%" }}
                  whileInView={{ height: "40%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  className="w-full bg-accent/80" 
                />
                <motion.div 
                  initial={{ height: "10%" }}
                  whileInView={{ height: "70%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                  className="w-full bg-terracotta/90" 
                />
                <motion.div 
                  initial={{ height: "10%" }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  className="w-full bg-foreground/90" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
