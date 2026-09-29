"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const team = [
  { name: 'Divya', role: 'Account Manager', desc: 'Communication / relationship network', id: 'account' },
  { name: 'Suhas R', role: 'Business Analyst', desc: 'Requirements / structured diagram', id: 'business' },
  { name: 'Pranav V', role: 'Solutions Architect', desc: 'Spatial grid / architectural diagram', id: 'solution' },
  { name: 'Dinesh K', role: 'Design Specialist', desc: 'Material palette / visual composition', id: 'design' },
  { name: 'Santhiya C', role: 'Project Manager', desc: 'Timeline / project system', id: 'project' },
  { name: 'Srija', role: 'Quality Reviewer', desc: 'Precision grid / validation system', id: 'quality' },
];

export default function Team() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 md:px-12 bg-dark text-background w-full">
      <div className="container mx-auto">
        
        <div className="mb-24 flex flex-col lg:flex-row justify-between items-end">
          <div>
            <h2 className="font-display text-5xl md:text-7xl mb-4">The Studio</h2>
            <p className="text-xl text-background/60 max-w-lg text-balance">
              A collaborative team bringing diverse expertise to every project.
            </p>
          </div>
          
          {/* Interactive Workflow representation */}
          <div className="hidden lg:flex mt-12 lg:mt-0 space-x-2 text-xs uppercase tracking-widest font-mono text-background/40">
            {['Client', 'Account', 'Business', 'Solution', 'Design', 'Project', 'Quality', 'Delivery'].map((step, i) => (
              <div key={i} className="flex items-center">
                <span className={activeId && step.toLowerCase().includes(activeId) ? 'text-terracotta' : ''}>
                  {step}
                </span>
                {i < 7 && <span className="mx-2 text-background/20">→</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {team.map((member, i) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setActiveId(member.id)}
              onMouseLeave={() => setActiveId(null)}
              className="group cursor-default"
            >
              <div className="w-full aspect-[3/4] bg-background/5 rounded-sm mb-6 relative overflow-hidden flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent z-10" />
                
                {/* Abstract visual role system */}
                <div className="w-full h-full border border-background/20 relative z-0 flex items-center justify-center overflow-hidden">
                  <motion.div 
                    animate={activeId === member.id ? { scale: 1.05, opacity: 0.8 } : { scale: 1, opacity: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="w-3/4 h-3/4 bg-accent blur-3xl rounded-full"
                  />
                  <span className="absolute z-20 font-mono text-xs uppercase tracking-widest text-background/30 text-center text-balance px-4">
                    {member.desc}
                  </span>
                </div>
                
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="font-display text-3xl mb-1">{member.name}</h3>
                  <p className="text-accent text-sm tracking-widest uppercase">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
