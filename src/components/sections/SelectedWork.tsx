"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "The Collaborative HQ",
    category: "Workplace Study",
    location: "Bengaluru",
    status: "IN DEVELOPMENT",
    image: "bg-surface"
  },
  {
    title: "Modern Executive Suite",
    category: "Corporate Design",
    location: "Mumbai",
    status: "CONCEPT",
    image: "bg-surface"
  }
];

export default function SelectedWork() {
  return (
    <section className="py-32 px-6 md:px-12 bg-dark text-background w-full">
      <div className="container mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent mb-4 block">01 / 06</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-7xl mb-4"
            >
              Selected Work
            </motion.h2>
            <p className="text-xl text-background/60">Spaces, stories, and experiments.</p>
          </div>
          
          <Link href="/work" className="mt-8 md:mt-0 flex items-center space-x-2 border-b border-background/30 pb-1 hover:border-background transition-colors group">
            <span className="uppercase tracking-widest text-sm">View All</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="flex flex-col space-y-24">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className={`w-full aspect-[16/9] lg:aspect-[21/9] ${project.image} mb-8 relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(17,19,18,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(17,19,18,0.15)_1px,transparent_1px)] bg-[size:5rem_5rem] group-hover:scale-105 transition-transform duration-1000" />
                <div className="relative w-3/4 h-2/3 border border-foreground/30 group-hover:border-terracotta transition-colors duration-700">
                  <span className="absolute -top-6 left-0 text-[10px] uppercase tracking-[0.2em] text-foreground/50">Concept spatial study / 01</span>
                  <div className="absolute left-1/4 top-1/4 w-1/4 h-1/2 border border-accent/70" />
                  <div className="absolute right-1/4 top-1/3 w-1/5 h-1/3 bg-accent/30" />
                  <div className="absolute bottom-4 left-4 right-4 border-t border-foreground/30" />
                </div>
                <div className="absolute inset-0 border border-transparent group-hover:border-foreground/30 m-4 transition-all duration-700 pointer-events-none" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-8">
                  <h3 className="font-display text-3xl md:text-5xl group-hover:text-terracotta transition-colors">{project.title}</h3>
                </div>
                <div className="md:col-span-4 flex flex-col items-start md:items-end text-background/60 text-sm tracking-widest uppercase space-y-2">
                  <span>{project.category}</span>
                  <span>{project.location}</span>
                  <span className="px-3 py-1 bg-background/10 rounded-full text-xs mt-2 border border-background/20">
                    {project.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
