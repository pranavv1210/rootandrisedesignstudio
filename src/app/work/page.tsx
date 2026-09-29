import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProjectVisual from "@/components/projects/ProjectVisual";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return <main className="work-index"><header className="work-index__header section-frame"><span className="section-index">Work / 01—06</span><h1>Spaces are<br /><em>lived stories.</em></h1><p>Four built-experience chapters. Two workplace futures. One continuing study of how people inhabit space.</p></header><section className="work-index__grid section-frame" aria-label="Projects">{projects.map((project, index) => <Link href={`/work/${project.slug}`} className={`project-entry project-entry--${index % 3}`} key={project.slug}><ProjectVisual project={project} compact /><div className="project-entry__meta"><span>0{index + 1}</span><span>{project.category}</span><span>{project.status}</span></div><h2>{project.title}</h2><p>{project.description}</p><span className="project-entry__link">Enter project <ArrowUpRight size={15} /></span></Link>)}</section></main>;
}
