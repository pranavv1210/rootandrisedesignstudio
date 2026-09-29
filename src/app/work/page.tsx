import Link from "next/link";
import ProjectMedia from "@/components/ProjectMedia";
import { projects } from "@/content/site";
import { ArrowUpRight } from "lucide-react";
export default function Work() { return <main className="subpage work-page"><header className="page-head wrap"><span>Portfolio / 01—06</span><h1>Spaces, stories<br/><em>& futures.</em></h1><p>Four projects demonstrate our experience across residential and lifestyle design. Two conceptual workplace studies mark the direction we are rising toward.</p></header><section className="work-archive wrap">{projects.map((p,i) => <Link href={`/work/${p.slug}`} key={p.slug}><ProjectMedia project={p} kind="hero" priority={i<2}/><div><span>0{i+1}</span><small>{p.type} / {p.place}</small><b>{p.status}</b></div><h2>{p.title}</h2><p>{p.statement}</p><i>View case study <ArrowUpRight/></i></Link>)}</section></main>; }
