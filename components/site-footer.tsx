import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter(){return <footer className="footer">
  <div className="footer-lead"><p>COME, EXPLORE & CONNECT WORLDWIDE.</p><h2>Your next meaningful journey starts with a conversation.</h2><Link href="/contact">Talk to our team <ArrowUpRight/></Link></div>
  <div className="footer-grid"><div><img src="/assets/android-chrome-512x512.png" alt="WorldWaysOne"/><p>Connecting people, places and opportunities since 2015.</p></div><div><h3>Explore</h3><Link href="/itineraries">Itineraries</Link><Link href="/services/academic-tours">Academic tours</Link><Link href="/services/safari-tours">Safari tours</Link><Link href="/services/youth-empowerment">Youth empowerment</Link><Link href="/stories">Activities & stories</Link></div><div><h3>Contact</h3><a href="tel:+254723565739"><Phone/> +254 723 565 739</a><a href="mailto:info@worldwaysone.co.ke"><Mail/> info@worldwaysone.co.ke</a><p><MapPin/> Jamii Healthcare Plaza, Uthiru, Nairobi</p></div></div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} WorldWaysOne Ventures Limited. All rights reserved.</span><span>Developed by WorldWays Web-Developers.</span></div>
</footer>}
