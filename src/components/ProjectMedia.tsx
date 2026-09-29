"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import PlanVisual from "./PlanVisual";
import type { Project } from "@/content/site";
import { mediaPath, projectMediaPath, type ProjectMediaKind } from "@/content/media";

type ProjectMediaProps = {
  project: Project;
  kind?: ProjectMediaKind;
  video?: boolean;
  priority?: boolean;
};

export default function ProjectMedia({ project, kind = "hero", video = false, priority = false }: ProjectMediaProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-28, 28]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [1, 1, 1] : [1.07, 1, 1.07]);
  const poster = projectMediaPath(project.slug, kind);
  const [imageFailed, setImageFailed] = useState(!poster);
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <motion.div ref={frameRef} className={`media-frame media-frame--${kind}`}>
      {!imageFailed && poster && (
        <motion.div className="media-frame__motion" style={{ y: imageY, scale: imageScale }}>
          <Image
            src={poster}
            alt={`${project.title} — ${kind.replace("-", " ")}`}
            fill
            sizes={kind === "hero" ? "(max-width: 960px) 100vw, 60vw" : "(max-width: 960px) 100vw, 50vw"}
            priority={priority}
            unoptimized
            onError={() => setImageFailed(true)}
          />
        </motion.div>
      )}
      {imageFailed && <PlanVisual project={project} />}
      {video && !videoFailed && (
        <video className={videoReady ? "is-ready" : ""} muted autoPlay loop playsInline preload="metadata" poster={poster ?? undefined} onCanPlay={() => setVideoReady(true)} onError={() => setVideoFailed(true)}>
          <source src={mediaPath(project.slug, "film.webm")} type="video/webm" />
          <source src={mediaPath(project.slug, "film.mp4")} type="video/mp4" />
        </video>
      )}
      <div className="media-frame__shade" />
      <span>{project.type} / {project.place}</span>
      <b>{video && videoFailed ? "FILM PLACEHOLDER" : project.status}</b>
    </motion.div>
  );
}
