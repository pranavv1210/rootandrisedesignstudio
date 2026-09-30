"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { teamProfiles } from "@/content/site";
import TeamPortrait from "./TeamPortrait";

type TeamProfile = (typeof teamProfiles)[number];

export default function TeamGrid() {
  const [active, setActive] = useState<TeamProfile | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); };
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", closeOnEscape); };
  }, [active]);

  return (
    <>
      {teamProfiles.map((person) => (
        <article key={person.name}>
          <button className="team-card-button" type="button" onClick={() => setActive(person)} aria-label={`View ${person.name}, ${person.role}`}>
            <TeamPortrait name={person.name} />
            <span className="team-card-meta">View profile</span>
            <h3>{person.name}</h3>
            <p>{person.role}</p>
          </button>
        </article>
      ))}
      {active && createPortal(
        <div className="team-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="team-modal-title">
            <button ref={closeButton} className="team-modal__close" type="button" onClick={() => setActive(null)} aria-label="Close team profile"><X /></button>
            <div className="team-modal__portrait"><TeamPortrait name={active.name} /></div>
            <div className="team-modal__content">
              <span>Root &amp; Rise / Team</span>
              <h2 id="team-modal-title">{active.name}</h2>
              <strong>{active.role}</strong>
              <p>{active.name} helps turn project intent into coordinated, dependable action across the studio and client relationship.</p>
              <ul>{active.responsibilities.map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ul>
            </div>
          </section>
        </div>,
        document.body,
      )}
    </>
  );
}
