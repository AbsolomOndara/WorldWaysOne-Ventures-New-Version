import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";

export const metadata: Metadata = { title:{default:"WorldWaysOne Ventures",template:"%s | WorldWaysOne"}, description:"Global travel, international delegations, youth empowerment, consultation and professional services from Nairobi, Kenya.", icons:{icon:"/favicon.svg"} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/>{children}<SiteFooter/><WhatsAppWidget/></body></html>}
