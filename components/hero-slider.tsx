"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides=[
  {kind:"image",src:"/assets/about-1i.jpg",label:"WorldWaysOne Ventures",title:"Connecting people to opportunity.",text:"Youth empowerment, professional advisory, delegations and carefully planned journeys—delivered from Nairobi with a global outlook."},
  {kind:"image",src:"/assets/youth1.jpg",label:"Youth empowerment",title:"Potential needs a practical pathway.",text:"Skills, mentorship, wellbeing and enterprise programs designed to help young people move from ideas to sustainable work."},
  {kind:"video",src:"/assets/worldwaysone-travel-film.mp4",poster:"/assets/Banner-Kenya.webp",label:"Travel & tours",title:"Travel with purpose and confidence.",text:"Educational tours, private journeys, safaris, pilgrimages and professional delegations coordinated from the first conversation to the return home."}
];

export function HeroSlider(){
  const [active,setActive]=useState(0); const [playing,setPlaying]=useState(true);
  useEffect(()=>{if(!playing)return;const id=setInterval(()=>setActive(v=>(v+1)%slides.length),6500);return()=>clearInterval(id)},[playing]);
  const move=(d:number)=>setActive(v=>(v+d+slides.length)%slides.length);
  return <section className="home-hero hero-slider" aria-roledescription="carousel">
    {slides.map((s,i)=><div className={`hero-slide ${i===active?"active":""}`} aria-hidden={i!==active} key={s.title}>
      {s.kind==="video"?<video autoPlay muted loop playsInline poster={s.poster}><source src={s.src} type="video/mp4"/></video>:<img src={s.src} alt=""/>}<div className="hero-shade"/>
      <div className="hero-content"><p className="kicker light">{s.label}</p><h1>{s.title}</h1><p>{s.text}</p><div className="hero-actions"><Link href={i===1?"/youth":"/about"} className="button light-button">Discover our work <ArrowRight/></Link><Link href="/contact" className="text-link light">Start a conversation</Link></div></div>
    </div>)}
    <div className="slider-controls"><button onClick={()=>move(-1)} aria-label="Previous slide"><ChevronLeft/></button><span>{String(active+1).padStart(2,"0")} / 03</span><button onClick={()=>setPlaying(v=>!v)} aria-label={playing?"Pause slideshow":"Play slideshow"}>{playing?<Pause/>:<Play/>}</button><button onClick={()=>move(1)} aria-label="Next slide"><ChevronRight/></button></div>
  </section>
}
