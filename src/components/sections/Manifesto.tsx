"use client";

import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    <section className="py-40 px-6 md:px-12 bg-surface w-full flex items-center justify-center">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto space-y-8"
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground text-balance">
            WE BELIEVE SPACES SHOULD DO MORE THAN LOOK GOOD. <br/><br/>
            THEY SHOULD MAKE PEOPLE FEEL SOMETHING. <br/>
            THEY SHOULD MAKE WORK EASIER. <br/>
            CONVERSATIONS EASIER. <br/>
            COLLABORATION NATURAL. <br/>
            FOCUS POSSIBLE. <br/>
            AND MONDAY MORNING A LITTLE BETTER.
          </h2>
          <div className="pt-16">
            <h3 className="text-xl md:text-3xl font-display text-terracotta italic">
              That is why we design beyond structures.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
