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
        <details><summary>Travel <ChevronDown size={14}/></summary><div className="mega-menu travel-mega"><div><p>World travels</p>{navTravel.slice(0,3).map(s=><Link href={`/services/${s.slug}`} key={s.slug}>{s.title}</Link>)}</div><div><p>Local travels</p>{navTravel.slice(3,7).map(s=><Link href={`/services/${s.slug}`} key={s.slug}>{s.title}</Link>)}</div><div><p>Religious travel</p>{navTravel.slice(7).map(s=><Link href={`/services/${s.slug}`} key={s.slug}>{s.title}</Link>)}</div><div><p>Requirements</p><Link href="/travel-info">Travel information</Link><Link href="/travel-info#faqs">Frequently asked questions</Link><Link href="/booking-terms">Booking terms</Link></div></div></details>
        <Link href="/itineraries">Itineraries</Link>
        <details><summary>What we do <ChevronDown size={14}/></summary><div className="mega-menu compact"><div>{navPrograms.map(s=><Link href={`/services/${s.slug}`} key={s.slug}>{s.title}</Link>)}<Link href="/stories">Activities & gallery</Link><Link href="/recent-uploads">Recent uploads</Link></div></div></details>
        <Link href="/recent-uploads">Updates</Link><Link href="/contact">Contact</Link>
      </nav>
      <SiteSearch/>
      <Link href="/contact" className="header-cta">Plan a journey</Link>
      <details className="mobile-menu"><summary aria-label="Open navigation"><Menu/></summary><nav><SiteSearch/><Link href="/about">About</Link><Link href="/youth">Youth empowerment</Link><Link href="/itineraries">Itineraries</Link><Link href="/travel-info">Travel information</Link><Link href="/travel-info#faqs">Travel FAQs</Link><Link href="/booking-terms">Booking terms</Link>{navTravel.map(s=><Link href={`/services/${s.slug}`} key={s.slug}>{s.title}</Link>)}{navPrograms.filter(s=>s.slug!=="youth-empowerment").map(s=><Link href={`/services/${s.slug}`} key={s.slug}>{s.title}</Link>)}<Link href="/stories">Activities & gallery</Link><Link href="/recent-uploads">Recent uploads</Link><Link href="/contact">Contact</Link></nav></details>
    </header>
  </>;
}
