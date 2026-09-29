"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Expand, Pause, Play, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  ["Who we are", "Rooted in experience.\nRising into workplace design.", "Root & Rise Design Studio / Mumbai + Bengaluru"],
  ["Our philosophy", "Designing beyond\nstructures.", "Spaces designed around people, purpose and possibility."],
  ["What we design", "We design how\nspaces work.", "Focus / collaboration / culture / comfort / growth"],
  ["Our experience", "From homes\nto workplaces.", "The context changes. The understanding of people remains."],
  ["Selected work", "Six studies.\nOne human lens.", "Residential / lifestyle / workplace"],
  ["Workplace design", "People don’t\nexperience floor plans.", "They experience arrival, movement, conversation and pause."],
  ["Our approach", "Listen. Map.\nMake. Test.", "A clear spatial response, built for real behaviour."],
  ["Design intelligence", "Evidence into\natmosphere.", "Behaviour and culture translated into spatial decisions."],
  ["The team", "Different disciplines.\nShared curiosity.", "A collaborative practice shaped around the work."],
  ["Why Root & Rise", "Design beyond\nthe photograph.", "Beauty gets attention. Experience earns memory."],
  ["Vision", "Room for people, ideas\nand businesses to grow.", "A lasting impression, built into the everyday."],
  ["Let’s design", "What could your\nspace become?", "Tell us about your space, your people and where you’re going."],
] as const;

export default function PresentationMode() {
  const [open, setOpen] = useState(false); const [index, setIndex] = useState(0); const [paused, setPaused] = useState(false); const wheelLock = useRef(false);
  const move = useCallback((amount: number) => setIndex((value) => Math.min(slides.length - 1, Math.max(0, value + amount))), []);
  useEffect(() => { const key = (event: KeyboardEvent) => { if (!open && event.key.toLowerCase() === "p" && !["INPUT", "TEXTAREA", "SELECT"].includes((event.target as HTMLElement).tagName)) { setOpen(true); return; } if (!open) return; if (event.key === "Escape") setOpen(false); if (event.key === "ArrowRight") move(1); if (event.key === "ArrowLeft") move(-1); if (event.key === " ") { event.preventDefault(); setPaused((value) => !value); } if (/^[1-9]$/.test(event.key)) setIndex(Math.min(slides.length - 1, Number(event.key) - 1)); }; window.addEventListener("keydown", key); return () => window.removeEventListener("keydown", key); }, [move, open]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const onWheel = (event: React.WheelEvent) => { if (wheelLock.current || Math.abs(event.deltaY) < 18) return; wheelLock.current = true; move(event.deltaY > 0 ? 1 : -1); window.setTimeout(() => { wheelLock.current = false; }, 650); };
  return <><button className="present-trigger" type="button" onClick={() => setOpen(true)}><span>P</span> Present</button><AnimatePresence>{open && <motion.div className="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onWheel={onWheel}><div className="presentation__grid" /><header><span>ROOT &amp; RISE / GUIDED TOUR</span><button onClick={() => setOpen(false)} aria-label="Exit presentation"><X /></button></header><AnimatePresence mode="wait"><motion.section key={index} initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -80 }} transition={paused ? { duration: 0 } : { duration: .65, ease: [.16, 1, .3, 1] }}><span className="presentation__marker">{String(index + 1).padStart(2, "0")} / {slides[index][0]}</span><h2>{slides[index][1].split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p>{slides[index][2]}</p></motion.section></AnimatePresence><footer><div className="presentation__progress"><i style={{ width: `${((index + 1) / slides.length) * 100}%` }} /></div><span>{String(index + 1).padStart(2, "0")} / {slides.length}</span><div className="presentation__controls"><button onClick={() => move(-1)} disabled={index === 0} aria-label="Previous"><ArrowLeft /></button><button onClick={() => setPaused((v) => !v)} aria-label={paused ? "Resume transitions" : "Pause transitions"}>{paused ? <Play /> : <Pause />}</button><button onClick={() => document.documentElement.requestFullscreen?.()} aria-label="Fullscreen"><Expand /></button><button onClick={() => move(1)} disabled={index === slides.length - 1} aria-label="Next"><ArrowRight /></button></div></footer></motion.div>}</AnimatePresence></>;
}
