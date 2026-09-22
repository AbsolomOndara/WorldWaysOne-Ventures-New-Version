import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter(){return <footer className="footer">
  <div className="footer-lead"><p>CONNECTING PEOPLE, IDEAS AND OPPORTUNITY.</p><h2>Let’s turn a good idea into practical progress.</h2><Link href="/contact">Talk to our team <ArrowUpRight/></Link></div>
  <div className="footer-grid"><div><img src="/assets/android-chrome-512x512.png" alt="WorldWaysOne"/><p>A Kenyan organization connecting people, technology, ideas and institutions with opportunities worldwide since 2015.</p></div><div><h3>Explore</h3><Link href="/about">About us</Link><Link href="/youth">Youth empowerment</Link><Link href="/itineraries">Official itineraries</Link><Link href="/recent-uploads">Recent uploads</Link><Link href="/travel-info#faqs">Travel FAQs</Link><Link href="/booking-terms">Booking terms</Link></div><div><h3>Contact</h3><a href="tel:+254715216790"><Phone/> 0715 216790</a><a href="mailto:info@worldwaysone.co.ke"><Mail/> info@worldwaysone.co.ke</a><p><MapPin/> Solar House, Aga Khan Walk, Nairobi</p><p>Open Monday–Friday · Closes 5:00pm</p></div></div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} WorldWaysOne Ventures Limited. All rights reserved.</span><span>Developed by WorldWays Web-Developers.</span></div>
</footer>}
