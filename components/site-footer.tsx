import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter(){return <footer className="footer">
  <div className="footer-lead"><p>CONNECTING PEOPLE, IDEAS AND OPPORTUNITY.</p><h2>Let’s turn a good idea into practical progress.</h2><Link href="/contact">Talk to our team <ArrowUpRight/></Link></div>
  <div className="footer-grid"><div><img src="/assets/android-chrome-512x512.png" alt="WorldWaysOne"/><p>A Kenyan organization connecting people, technology, ideas and institutions with opportunities worldwide since 2015.</p></div><div><h3>Explore</h3><Link href="/about">About us</Link><Link href="/youth">Youth empowerment</Link><Link href="/itineraries">Official itineraries</Link><Link href="/services/consultation">Consultation</Link><Link href="/services/delegations">Delegations</Link><Link href="/services/legal-services">Legal services</Link><Link href="/stories">Activities & gallery</Link></div><div><h3>Contact</h3><a href="tel:+254723565739"><Phone/> +254 723 565 739</a><a href="mailto:info@worldwaysone.co.ke"><Mail/> info@worldwaysone.co.ke</a><p><MapPin/> Jamii Healthcare Plaza, Uthiru, off Waiyaki Way / Naivasha Road, Nairobi</p></div></div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} WorldWaysOne Ventures Limited. All rights reserved.</span><span>Developed by WorldWays Web-Developers.</span></div>
</footer>}
