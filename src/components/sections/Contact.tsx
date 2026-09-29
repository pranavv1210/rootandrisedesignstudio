"use client";

import { FormEvent, useState } from 'react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-background w-full">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
            What could your space become?
          </h2>
          <p className="text-xl text-foreground/70 mb-12">
            Tell us about your space, your people, and where you're going.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-surface p-8 md:p-12 rounded-sm">
          {submitted ? (
            <div className="min-h-[24rem] flex flex-col items-center justify-center text-center">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-6">Message received</span>
              <h3 className="font-display text-4xl md:text-5xl text-foreground mb-4">Let&apos;s make room for what&apos;s next.</h3>
              <p className="max-w-md text-foreground/70">Thank you for sharing the first details. We&apos;ll review your brief and come back with a thoughtful next step.</p>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-8 text-sm uppercase tracking-widest border-b border-foreground/30 pb-1 hover:border-accent transition-colors">Send another message</button>
            </div>
          ) : (
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold tracking-widest uppercase text-foreground/60">Name</label>
                <input id="name" name="name" required type="text" autoComplete="name" className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-xs font-bold tracking-widest uppercase text-foreground/60">Company</label>
                <input id="company" name="company" required type="text" autoComplete="organization" className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-accent transition-colors" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold tracking-widest uppercase text-foreground/60">Email</label>
                <input id="email" name="email" required type="email" autoComplete="email" className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label htmlFor="project-type" className="text-xs font-bold tracking-widest uppercase text-foreground/60">Project Type</label>
                <select id="project-type" name="projectType" required className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-accent transition-colors appearance-none rounded-none">
                  <option value="workplace">Workplace Design</option>
                  <option value="strategy">Workplace Strategy</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-xs font-bold tracking-widest uppercase text-foreground/60">Project Description</label>
              <textarea id="description" name="description" required rows={4} className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
            </div>

            <div className="pt-8 flex justify-center">
              <MagneticButton>
                Send Message
              </MagneticButton>
            </div>
          </form>
          )}
        </div>
      </div>
    </section>
  );
}
