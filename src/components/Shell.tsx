"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Expand,
  Menu,
  Pause,
  Play,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/content/site";
import ProjectMedia from "./ProjectMedia";

const nav = [
  ["Work", "/work"],
  ["Approach", "/approach"],
  ["Studio", "/studio"],
  ["Journal", "/journal"],
  ["Contact", "/contact"],
  ["3D Demo", "/demo"],
];
const deck = [
  {
    number: "01",
    label: "Introduction",
    title: "Root your vision.\nRise with purpose.",
    body: "Root & Rise creates workplaces that bring functionality, atmosphere, sustainability and employee well-being into one clear spatial experience.",
    points: [
      "Five years of design experience",
      "Focused on modern workplace environments",
      "Human-centred and research-driven",
      "Productivity, wellness and brand identity",
    ],
    project: 4,
  },
  {
    number: "02",
    label: "Our approach",
    title: "Designing your\ndream workplace.",
    body: "Every design decision aligns with the business objective and the employee experience it must support.",
    points: [
      "Discover — goals, expectations and culture",
      "Define — planning, function, budget and scale",
      "Design — concepts, layouts and future-ready systems",
      "Deliver — refined proposals, review and feedback",
    ],
    project: 1,
  },
  {
    number: "03",
    label: "Selected projects & experience",
    title: "Transforming workspaces\nacross industries.",
    body: "Three workplace directions show how our human-centred thinking adapts to different organisations and ways of working.",
    points: [
      "Innovation hub — agile work and exchange",
      "Headquarters — leadership, hybrid work and brand",
      "Co-working — flexibility and community",
      "Designed outcomes — experience, collaboration and adaptability",
    ],
    project: 4,
  },
  {
    number: "04",
    label: "Why Root & Rise",
    title: "We design for\nMonday mornings.",
    body: "A workplace should not only impress on opening day. It should help people focus, collaborate and feel part of something every ordinary week.",
    points: [
      "Employee-first design philosophy",
      "Research-led workplace planning",
      "Productivity and wellness integration",
      "Culture-led, sustainable and scalable spaces",
    ],
    project: 5,
  },
  {
    number: "05",
    label: "Selected work",
    title: "Six studies.\nOne human lens.",
    body: "Four experience chapters and two workplace futures.",
    points: [],
    project: 0,
  },
  {
    number: "06",
    label: "Workplace design",
    title: "People don’t experience\nfloor plans.",
    body: "They experience arrival, movement, conversation and pause.",
    points: [],
    project: 4,
  },
  {
    number: "07",
    label: "Our method",
    title: "Listen. Map.\nMake. Test.",
    body: "Human signals translated into spatial decisions.",
    points: [],
    project: 1,
  },
  {
    number: "08",
    label: "Design intelligence",
    title: "Evidence into\natmosphere.",
    body: "Behaviour and culture made visible through design.",
    points: [],
    project: 5,
  },
  {
    number: "09",
    label: "The team",
    title: "Different disciplines.\nShared curiosity.",
    body: "A collaborative practice shaped around the work.",
    points: [],
    project: 2,
  },
  {
    number: "10",
    label: "Our difference",
    title: "Design beyond\nthe photograph.",
    body: "Beauty gets attention. Experience earns memory.",
    points: [],
    project: 3,
  },
  {
    number: "11",
    label: "Vision",
    title: "Room for people, ideas\nand businesses to grow.",
    body: "To create workplaces that empower people, strengthen culture and elevate business success.",
    points: [],
    project: 4,
  },
  {
    number: "12",
    label: "Let’s design",
    title: "What could your\nspace become?",
    body: "Tell us about your space, your people and where you’re going.",
    points: [],
    project: 5,
  },
] as const;

export default function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  const [present, setPresent] = useState(false);
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const lock = useRef(false);
  const touchX = useRef(0);
  const move = useCallback(
    (n: number) =>
      setSlide((s) => Math.max(0, Math.min(deck.length - 1, s + n))),
    [],
  );
  useEffect(() => {
    setMenu(false);
  }, [path]);
  useEffect(() => {
    document.body.style.overflow = menu || present ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu, present]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const editing = ["INPUT", "TEXTAREA", "SELECT"].includes(
        (e.target as HTMLElement).tagName,
      );
      if (!present && !editing && e.key.toLowerCase() === "p")
        return setPresent(true);
      if (!present) return;
      if (e.key === "Escape") setPresent(false);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === " ") {
        e.preventDefault();
        setPaused((v) => !v);
      }
      if (/^[1-9]$/.test(e.key))
        setSlide(Math.min(deck.length - 1, +e.key - 1));
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [move, present]);
  const wheel = (e: React.WheelEvent) => {
    if (lock.current || Math.abs(e.deltaY) < 20) return;
    lock.current = true;
    move(e.deltaY > 0 ? 1 : -1);
    setTimeout(() => {
      lock.current = false;
    }, 600);
  };
  const current = deck[slide];
  return (
    <>
      <header className={`nav ${path === "/" ? "nav--home" : ""}`}>
        <Link className="brand" href="/" aria-label="Root and Rise home">
          <i>
            <Image
              src="/brand/logo.png"
              width={34}
              height={34}
              alt=""
              priority
            />
          </i>
          <span>
            Root &amp; Rise<small>Design Studio</small>
          </span>
        </Link>
        <nav>
          {nav.map(([label, href]) => (
            <Link
              className={path === href ? "active" : ""}
              key={href}
              href={href}
            >
              {label}
            </Link>
          ))}
          <button onClick={() => setPresent(true)}>
            Present <kbd>P</kbd>
          </button>
          <Link className="nav-cta" href="/contact">
            Start a conversation
          </Link>
        </nav>
        <button
          className="menu-button"
          aria-label="Open menu"
          onClick={() => setMenu(true)}
        >
          <Menu />
        </button>
      </header>
      <AnimatePresence>
        {menu && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <button aria-label="Close menu" onClick={() => setMenu(false)}>
              <X />
            </button>
            <span>RR / Navigation</span>
            {nav.map(([label, href], i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12 + i * 0.06 }}
              >
                <Link href={href}>{label}</Link>
              </motion.div>
            ))}
            <button
              className="mobile-present"
              onClick={() => {
                setMenu(false);
                setPresent(true);
              }}
            >
              Enter presentation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        key={path}
        initial={{ opacity: 0, clipPath: "inset(0 0 5% 0)" }}
        animate={{ opacity: 1, clipPath: "inset(0)" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
      <footer className="footer">
        <div>
          <span>Root &amp; Rise</span>
          <h2>
            What could your
            <br />
            <em>space become?</em>
          </h2>
          <Link href="/contact">
            Start a conversation <ArrowRight />
          </Link>
        </div>
        <div className="footer-meta">
          <span>Mumbai / Bengaluru</span>
          <span>Designing beyond structures.</span>
          <span>© {new Date().getFullYear()} Root &amp; Rise</span>
        </div>
      </footer>
      <AnimatePresence>
        {present && (
          <motion.div
            className="deck"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onWheel={wheel}
            onTouchStart={(e) => {
              touchX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              const d = touchX.current - e.changedTouches[0].clientX;
              if (Math.abs(d) > 45) move(d > 0 ? 1 : -1);
            }}
          >
            <div className="deck-grid" />
            <header>
              <span>ROOT &amp; RISE / GUIDED TOUR</span>
              <button
                aria-label="Exit presentation"
                onClick={() => setPresent(false)}
              >
                <X />
              </button>
            </header>
            <AnimatePresence mode="wait">
              <motion.div
                className="deck-visual"
                key={`visual-${slide}`}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 0.72, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: paused ? 0 : 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <ProjectMedia project={projects[current.project]} kind="hero" />
              </motion.div>
            </AnimatePresence>
            <div className="deck-slice" />
            <AnimatePresence mode="wait">
              <motion.main
                className={current.points.length ? "deck-detailed" : ""}
                key={slide}
                initial={{ opacity: 0, x: 100, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, x: 0, clipPath: "inset(0)" }}
                exit={{ opacity: 0, x: -100 }}
                transition={
                  paused
                    ? { duration: 0 }
                    : { duration: 0.72, ease: [0.16, 1, 0.3, 1] }
                }
              >
                <span>
                  {current.number} / {current.label}
                </span>
                <h2>
                  {current.title.split("\n").map((line) => (
                    <i key={line}>{line}</i>
                  ))}
                </h2>
                <p>{current.body}</p>
                {current.points.length > 0 && (
                  <ul>
                    {current.points.map((point, i) => (
                      <li key={point}>
                        <b>0{i + 1}</b>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.main>
            </AnimatePresence>
            <footer>
              <div className="deck-progress">
                <i style={{ width: `${((slide + 1) / deck.length) * 100}%` }} />
              </div>
              <span>
                {String(slide + 1).padStart(2, "0")} /{" "}
                {String(deck.length).padStart(2, "0")}
              </span>
              <div>
                <button
                  disabled={slide === 0}
                  aria-label="Previous"
                  onClick={() => move(-1)}
                >
                  <ArrowLeft />
                </button>
                <button
                  aria-label={paused ? "Resume" : "Pause"}
                  onClick={() => setPaused((v) => !v)}
                >
                  {paused ? <Play /> : <Pause />}
                </button>
                <button
                  aria-label="Fullscreen"
                  onClick={() => document.documentElement.requestFullscreen?.()}
                >
                  <Expand />
                </button>
                <button
                  disabled={slide === deck.length - 1}
                  aria-label="Next"
                  onClick={() => move(1)}
                >
                  <ArrowRight />
                </button>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
