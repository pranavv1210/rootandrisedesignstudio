"use client";

import Image from "next/image";
import { useState } from "react";

const portraitFiles: Record<string, string> = {
  "Naga Sri Vandanapu": "naga-sri-vandanapu.png",
  "Suhas R": "suhas.jpeg",
  "Pranav V": "pranav.png",
  "Dinesh Kumar": "dinesh.jpeg",
  "Santhiya C": "santhiya.jpeg",
  "Sai Srija": "sai-srija.png",
};

export default function TeamPortrait({ name }: { name: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");
  const file = portraitFiles[name];

  return (
    <div className="team-portrait" aria-label={`${name} portrait`}>
      <span>{initials}</span>
      {!failed && file && (
        <Image
          src={`/team/${file}`}
          alt={name}
          fill
          sizes="(max-width: 600px) 100vw, 33vw"
          unoptimized
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
