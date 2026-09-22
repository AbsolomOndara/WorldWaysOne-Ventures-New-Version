import Link from "next/link";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { navPrograms, navTravel } from "@/lib/site-data";
import { SiteSearch } from "@/components/site-search";

export function SiteHeader() {
  return <>
    <div className="topbar"><span>Youth empowerment · Advisory · Delegations · Travel</span><a href="tel:+254723565739"><Phone size={14}/> +254 723 565 739</a></div>
    <header className="header">
      <Link href="/" className="logo" aria-label="WorldWaysOne home"><img src="/assets/android-chrome-512x512.png" alt="WorldWaysOne"/></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/about">About</Link><Link href="/youth">Youth</Link>
        <details><summary>Travel <ChevronDown size={14}/></summary><div className="mega-menu"><div><p>World journeys</p>{navTravel.slice(0,4).map(s=><Link href={`/services/${s.slug}`} key={s.slug}>{s.title}</Link>)}</div><div><p>Local & faith journeys</p>{navTravel.slice(4).map(s=><Link href={`/services/${s.slug}`} key={s.slug}>{s.title}</Link>)}</div></div></details>
        <Link href="/itineraries">Itineraries</Link>
        <details><summary>What we do <ChevronDown size={14}/></summary><div className="mega-menu compact"><div>{navPrograms.map(s=><Link href={`/services/${s.slug}`} key={s.slug}>{s.title}</Link>)}<Link href="/stories">Activities & stories</Link></div></div></details>
        <Link href="/travel-info">Travel info</Link><Link href="/contact">Contact</Link>
      </nav>
      <SiteSearch/>
      <Link href="/contact" className="header-cta">Plan a journey</Link>
      <details className="mobile-menu"><summary aria-label="Open navigation"><Menu/></summary><nav><SiteSearch/><Link href="/about">About</Link><Link href="/youth">Youth empowerment</Link><Link href="/itineraries">Itineraries</Link><Link href="/travel-info">Travel info</Link>{navTravel.map(s=><Link href={`/services/${s.slug}`} key={s.slug}>{s.title}</Link>)}{navPrograms.filter(s=>s.slug!=="youth-empowerment").map(s=><Link href={`/services/${s.slug}`} key={s.slug}>{s.title}</Link>)}<Link href="/stories">Activities & gallery</Link><Link href="/contact">Contact</Link></nav></details>
    </header>
  </>;
}
