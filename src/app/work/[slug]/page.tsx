import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import ProjectVisual from "@/components/projects/ProjectVisual";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  return project ? { title: `${project.title} | Root & Rise`, description: project.description } : {};
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  return (
    <article className="project-page">
      <header className="project-page__hero section-frame">
        <Link href="/work" className="text-link"><ArrowLeft size={15} /> All work</Link>
        <div className="project-page__title">
          <span className="section-index">{project.kind} / {project.status}</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        <dl className="project-page__meta"><div><dt>Place</dt><dd>{project.location}</dd></div><div><dt>Year</dt><dd>{project.year}</dd></div><div><dt>Status</dt><dd>{project.status}</dd></div></dl>
      </header>
      <div className="section-frame"><ProjectVisual project={project} /></div>
      <section className="project-page__story section-frame">
        <div><span className="section-index">The premise</span><h2>{project.concept}</h2></div>
        <div className="project-page__notes"><div><span>Challenge</span><p>{project.challenge}</p></div><div><span>Insight</span><p>{project.insight}</p></div><div><span>Design response</span><p>{project.designResponse}</p></div></div>
      </section>
      <section className="project-page__levels"><div className="section-frame"><span className="section-index section-index--light">Spatial strategy</span><h2>A plan for<br />different kinds of work.</h2><div className="level-plan"><span>GROUND</span><span>01</span><span>02</span><span>03</span><span>ROOF</span><i /><b>ACTIVE / 02</b></div></div></section>
      <footer className="project-page__next section-frame"><p>Every project starts with listening.</p><Link href="/contact" className="line-button">Start a conversation <ArrowUpRight size={17} /></Link></footer>
    </article>
  );
}
