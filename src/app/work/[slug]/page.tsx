import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectMedia from "@/components/ProjectMedia";
import { projectMediaPath, type ProjectMediaKind } from "@/content/media";
import { projects } from "@/content/site";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  return p ? { title: p.title, description: p.statement } : {};
}
export default function Project({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();
  const i = projects.indexOf(p);
  const next = projects[(i + 1) % projects.length];
  const galleryKinds = (
    ["gallery-01", "gallery-02", "detail"] as ProjectMediaKind[]
  ).filter((kind) => projectMediaPath(p.slug, kind));
  const hasFloorPlan = Boolean(projectMediaPath(p.slug, "floor-plan"));
  return (
    <main className="case">
      <header className="case-head wrap">
        <Link href="/work">
          <ArrowLeft /> All work
        </Link>
        <div>
          <span>
            {p.type} / {p.status}
          </span>
          <h1>{p.title}</h1>
          <p>{p.statement}</p>
        </div>
        <dl>
          <div>
            <dt>Place</dt>
            <dd>{p.place}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{p.year}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{p.status}</dd>
          </div>
        </dl>
      </header>
      <div className="wrap case-visual">
        <ProjectMedia project={p} kind="hero" priority />
      </div>
      {galleryKinds.length > 0 && (
        <section
          className={`case-gallery wrap case-gallery--${galleryKinds.length}`}
        >
          {galleryKinds.map((kind) => (
            <ProjectMedia key={kind} project={p} kind={kind} />
          ))}
        </section>
      )}
      <section className="case-story wrap">
        <div>
          <span>01 / Challenge</span>
          <h2>{p.challenge}</h2>
        </div>
        <div>
          <span>02 / Insight</span>
          <h2>{p.insight}</h2>
        </div>
        <div>
          <span>03 / Design response</span>
          <h2>{p.response}</h2>
        </div>
      </section>
      {hasFloorPlan && (
        <section className="level-explorer">
          <div className="wrap">
            <span>Spatial strategy / Level 02</span>
            <h2>
              A plan for different
              <br />
              kinds of experience.
            </h2>
            <div className="level-ui">
              <nav>
                {["GROUND", "01", "02", "03", "04", "ROOF"].map((x) => (
                  <button className={x === "02" ? "active" : ""} key={x}>
                    {x}
                  </button>
                ))}
              </nav>
              <ProjectMedia project={p} kind="floor-plan" />
              <aside>
                <span>Active level</span>
                <strong>02</strong>
                <p>{p.services.join(" / ")}</p>
              </aside>
            </div>
          </div>
        </section>
      )}
      <Link className="next-project wrap" href={`/work/${next.slug}`}>
        <span>Next project</span>
        <h2>{next.title}</h2>
        <ArrowRight />
      </Link>
    </main>
  );
}
