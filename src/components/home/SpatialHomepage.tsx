"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";

const disciplines = [
  { number: "01", title: "Listen", body: "People before plans. We find the patterns beneath the brief." },
  { number: "02", title: "Map", body: "Movement, culture, focus, friction. Every workplace has a rhythm." },
  { number: "03", title: "Make", body: "A clear spatial response, built to be lived in and improved over time." },
];

const workModes = ["FOCUS", "COLLABORATE", "GATHER", "RESET"];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Blueprint() {
  return (
    <div className="blueprint" aria-label="Animated abstract workplace blueprint">
      <div className="blueprint__cross blueprint__cross--one" />
      <div className="blueprint__cross blueprint__cross--two" />
      <div className="blueprint__room blueprint__room--one"><span>01 / ENTRY</span></div>
      <div className="blueprint__room blueprint__room--two"><span>02 / FOCUS</span></div>
      <div className="blueprint__room blueprint__room--three"><span>03 / SOCIAL</span></div>
      <div className="blueprint__table" />
      <div className="blueprint__beam" />
      <div className="blueprint__caption">RR / SPATIAL STUDY / 001</div>
      <div className="blueprint__axis">N</div>
    </div>
  );
}

export default function SpatialHomepage() {
  const [activeMode, setActiveMode] = useState("FOCUS");

  return (
    <div className="spatial-home">
      <section className="spatial-hero" id="top">
        <div className="spatial-hero__grid" />
        <div className="spatial-hero__topline"><span>RR / 001</span><span>WORKPLACE DESIGN STUDIO</span><span>MUMBAI — BENGALURU</span></div>
        <div className="spatial-hero__copy">
          <Reveal><p className="eyebrow eyebrow--light">Root &amp; Rise Design Studio</p></Reveal>
          <Reveal delay={0.08}><h1>Places<br /><em>for</em> people.</h1></Reveal>
          <Reveal delay={0.16}><p className="hero-deck">We design the spaces between purpose and possibility. Workplaces with a point of view, made for the ordinary days that matter most.</p></Reveal>
          <Reveal delay={0.24} className="hero-actions">
            <Link href="#work" className="line-button line-button--light">Explore the work <ArrowDownRight size={17} /></Link>
            <Link href="/contact" className="text-link text-link--light">Start a conversation <ArrowUpRight size={15} /></Link>
          </Reveal>
        </div>
        <div className="spatial-hero__visual"><Blueprint /></div>
        <div className="spatial-hero__footer"><span>DESIGNING BEYOND STRUCTURES.</span><span className="scroll-mark"><i /> Scroll to enter</span></div>
      </section>

      <section className="statement-band">
        <div className="section-frame statement-band__frame"><span className="section-index">01 / WHY</span><Reveal><p className="statement">A workplace is not a backdrop.<br /><em>It is a daily instrument.</em></p></Reveal><Reveal delay={0.15}><p className="statement-band__body">We design for the first arrival, the unplanned conversation, the quiet hour, and the long view. Because the best spaces do more than look ready. They make people ready.</p></Reveal></div>
      </section>

      <section className="principle-section section-frame">
        <div className="section-heading"><span className="section-index">02 / HOW WE THINK</span><h2>Start with the<br /><em>human signal.</em></h2></div>
        <div className="principle-list">
          {disciplines.map((item, index) => <Reveal key={item.number} delay={index * 0.08} className="principle-row"><span className="principle-number">{item.number}</span><h3>{item.title}</h3><p>{item.body}</p><ArrowUpRight className="principle-arrow" size={18} /></Reveal>)}
        </div>
      </section>

      <section className="mode-section">
        <div className="section-frame mode-section__inner"><div className="section-heading section-heading--light"><span className="section-index">03 / THE WORKPLACE, IN MOTION</span><h2>One floor.<br /><em>Many states.</em></h2></div><div className="mode-stage"><div className={`mode-stage__drawing mode-stage__drawing--${activeMode.toLowerCase()}`}><div className="mode-stage__wall mode-stage__wall--a" /><div className="mode-stage__wall mode-stage__wall--b" /><div className="mode-stage__object" /><div className="mode-stage__trace" /><span className="mode-stage__tag">{activeMode} / 09:15</span></div><div className="mode-controls">{workModes.map((mode) => <button type="button" key={mode} onClick={() => setActiveMode(mode)} className={activeMode === mode ? "is-active" : ""}>{mode}<Plus size={14} /></button>)}</div></div></div>
      </section>

      <section className="work-section section-frame" id="work"><div className="section-heading"><span className="section-index">04 / SELECTED WORK</span><h2>Thoughtful spaces<br /><em>in progress.</em></h2><Link href="/work" className="text-link">View all work <ArrowUpRight size={15} /></Link></div><Reveal className="work-feature"><div className="work-feature__drawing"><div className="work-feature__plan"><span className="plan-label plan-label--one">COLLABORATION</span><span className="plan-label plan-label--two">FOCUS</span><span className="plan-label plan-label--three">SOCIAL CORE</span><div className="plan-block plan-block--one" /><div className="plan-block plan-block--two" /><div className="plan-line" /></div><span className="work-feature__meta">WORKPLACE STUDY / BENGALURU / IN DEVELOPMENT</span></div><div className="work-feature__info"><span>01</span><h3>The<br /><em>Collaborative</em><br />HQ</h3><p>A workplace concept shaped around the way teams actually move, gather, and make decisions.</p><Link href="/work" className="line-button">View project <ArrowUpRight size={17} /></Link></div></Reveal></section>

      <section className="transition-section"><div className="transition-section__line" /><Reveal><p className="transition-quote">From homes to workplaces.<br /><em>The context changes.<br />The understanding remains.</em></p></Reveal></section>

      <section className="process-section section-frame"><div className="section-heading"><span className="section-index">05 / THE METHOD</span><h2>Make the invisible<br /><em>legible.</em></h2></div><div className="process-map"><div className="process-map__rail" />{["Observe", "Distil", "Shape", "Test"].map((step, index) => <Reveal key={step} delay={index * 0.08} className="process-step"><span>0{index + 1}</span><h3>{step}</h3><p>{["Read the room before drawing it.", "Turn complexity into a clear brief.", "Give ideas a spatial language.", "Ask whether it works on Monday."][index]}</p></Reveal>)}</div></section>

      <section className="contact-band" id="contact"><div className="section-frame contact-band__inner"><span className="section-index section-index--light">06 / NEXT</span><Reveal><h2>What could your<br /><em>space become?</em></h2></Reveal><Reveal delay={0.1}><p>Tell us about your people, your place, and where you are going.</p></Reveal><Reveal delay={0.2}><Link href="/contact" className="line-button line-button--light">Start a conversation <ArrowUpRight size={17} /></Link></Reveal><div className="contact-band__coordinates">19.0760° N / MUMBAI<br />12.9716° N / BENGALURU</div></div></section>
    </div>
  );
}
