"use client";
import { useState } from "react";
import Image from "next/image";
import PlanVisual from "./PlanVisual";
import type { Project } from "@/content/site";
import { mediaPath } from "@/content/media";

export default function ProjectMedia({ project, kind="hero", video=false, priority=false }: { project: Project; kind?: "hero"|"gallery-01"|"gallery-02"|"detail"|"floor-plan"|"poster"; video?: boolean; priority?: boolean }) {
  const [imageFailed,setImageFailed]=useState(false); const [videoFailed,setVideoFailed]=useState(false); const [candidate,setCandidate]=useState(0);
  const fallbackBases: Record<typeof kind,string[]>={hero:["hero","gallery-02","gallery-01"],"gallery-01":["gallery-01","hero"],"gallery-02":["gallery-02","detail","hero"],detail:["detail","gallery-02","gallery-01"],"floor-plan":["floor-plan"],poster:["video-poster","hero","gallery-02"]};
  const candidates=fallbackBases[kind].flatMap(base=>["webp","png","jpg"].map(ext=>mediaPath(project.slug,`${base}.${ext}`))); const poster=candidates[Math.min(candidate,candidates.length-1)];
  const tryNextImage=()=>{if(candidate<candidates.length-1)setCandidate(value=>value+1);else setImageFailed(true)};
  return <div className={`media-frame media-frame--${kind}`}>
    {!imageFailed && <Image src={poster} alt={`${project.title} — ${kind.replace("-"," ")}`} fill sizes={kind==="hero"?"(max-width: 960px) 100vw, 60vw":"(max-width: 960px) 100vw, 50vw"} priority={priority} onError={tryNextImage}/>}
    {imageFailed && <PlanVisual project={project}/>} 
    {video && !videoFailed && <video muted autoPlay loop playsInline preload="metadata" poster={mediaPath(project.slug,"video-poster.webp")} onError={()=>setVideoFailed(true)}><source src={mediaPath(project.slug,"film.webm")} type="video/webm"/><source src={mediaPath(project.slug,"film.mp4")} type="video/mp4"/></video>}
    <div className="media-frame__shade"/><span>{project.type} / {project.place}</span><b>{video && videoFailed ? "FILM PLACEHOLDER" : project.status}</b>
  </div>;
}
