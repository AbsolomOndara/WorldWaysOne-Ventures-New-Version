import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { itineraries } from "@/lib/site-data";
export const metadata={title:"Itineraries"};
export default function Itineraries(){return <main>
  <section className="page-heading"><p className="kicker">SAMPLE ITINERARIES</p><h1>A place to begin.<br/><em>A journey made yours.</em></h1><p>Use these plans as inspiration. Every WorldWaysOne itinerary can be adapted to your group, timing, interests and budget.</p></section>
  <section className="itinerary-list section-pad">{itineraries.map((item,i)=><article key={item.title}><div className="itinerary-image"><img src={item.image} alt=""/><span>0{i+1}</span></div><div className="itinerary-copy"><div className="meta"><span><MapPin/> {item.region}</span><span><CalendarDays/> {item.duration}</span></div><h2>{item.title}</h2><ol>{item.days.map((day,j)=><li key={day}><span>Day {j+1}</span>{day}</li>)}</ol><Link className="button dark-button" href="/contact">Customize this journey <ArrowRight/></Link></div></article>)}</section>
</main>}
