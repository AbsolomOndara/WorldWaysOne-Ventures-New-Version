import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { serviceBySlug, services } from "@/lib/site-data";

export function generateStaticParams(){return services.map(({slug})=>({slug}))}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const service=serviceBySlug[slug];if(!service)notFound();return <main>
  <section className="inner-hero"><img src={service.image} alt=""/><div className="hero-shade"/><div><p className="kicker light">{service.eyebrow}</p><h1>{service.title}</h1><p>{service.summary}</p></div></section>
  <section className="section-pad service-intro"><p className="kicker">THE EXPERIENCE</p><div><h2>{service.intro}</h2><Link href="/contact" className="button dark-button">Enquire now <ArrowRight/></Link></div></section>
  <section className="service-detail"><div><p className="kicker light">WHAT TO EXPECT</p><h2>Designed around your purpose.</h2></div><div className="feature-list">{service.features.map(x=><p key={x}><Check/> {x}</p>)}</div></section>
  <section className="section-pad detail-grid"><div><p className="kicker">THOUGHTFUL DETAILS</p><h2>From first idea to the final day.</h2></div><ul>{service.details.map(x=><li key={x}>{x}</li>)}</ul></section>
</main>}
