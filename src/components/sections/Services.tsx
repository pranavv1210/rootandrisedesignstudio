"use client";

import { motion } from 'framer-motion';

const services = [
  { title: "Workplace Strategy", desc: "Aligning space with business goals." },
  { title: "Space Planning", desc: "Optimizing flow and functionality." },
  { title: "Workplace Design", desc: "Creating the physical environment." },
  { title: "Collaboration Environments", desc: "Designing for connection." },
  { title: "Technology-Enabled Workplaces", desc: "Integrating digital and physical." },
  { title: "Brand & Experience", desc: "Translating identity into space." },
  { title: "Design Development", desc: "Refining every detail." },
  { title: "Workplace Transformation", desc: "Managing the shift." },
];

export default function Services() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background w-full">
      <div className="container mx-auto">
        
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl text-foreground mb-6"
          >
            Capabilities
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border-b border-surface pb-8 flex flex-col justify-between"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <div className="w-8 h-8 rounded-full border border-surface flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-accent">+</span>
                </div>
              </div>
              <p className="text-foreground/60 text-lg">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
