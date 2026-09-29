import type { Project } from "@/data/projects";

export default function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`project-visual ${compact ? "project-visual--compact" : ""}`} style={{ "--project-a": project.palette[0], "--project-b": project.palette[1], "--project-c": project.palette[2] } as React.CSSProperties} aria-label={`Abstract spatial study for ${project.title}`} role="img">
      <div className="project-visual__grid" />
      <div className="project-visual__volume project-visual__volume--one" />
      <div className="project-visual__volume project-visual__volume--two" />
      <div className="project-visual__line" />
      <span className="project-visual__label">PROJECT VISUAL / {project.slug.toUpperCase()}</span>
      <span className="project-visual__north">N</span>
    </div>
  );
}
