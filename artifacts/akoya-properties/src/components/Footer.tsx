// =====================================================================
// FOOTER
// Contact info & social media live in: src/data/contact.ts
// =====================================================================

import logoPath from "@assets/image_1775731967346.png";
import { Link } from "wouter";
import { SocialLinks } from "@/components/SocialLinks";
import {
  PHONE,
  PHONE_TEL,
  WHATSAPP_URL,
  EMAIL,
  OFFICE_ADDRESS,
} from "@/data/contact";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/">
              <img
                src={logoPath}
                alt="Akoya Properties"
                className="h-16 w-auto mb-6 opacity-90 cursor-pointer"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
              Defining the future of luxury real estate in Ethiopia. Building landmarks that
              stand the test of time, designed for those who accept nothing but the exceptional.
            </p>

            {/* Social media */}
            <p className="text-white/40 text-[10px] uppercase tracking-widest mb-3">Follow Us</p>
            <SocialLinks size="sm" />
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Pages</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-primary transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-primary transition-colors">
                  Residences
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>{OFFICE_ADDRESS.line1}</li>
              <li>{OFFICE_ADDRESS.line2}</li>
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="hover:text-primary transition-colors block mt-3"
                >
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-primary transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground uppercase tracking-widest gap-4">
          <p>&copy; {new Date().getFullYear()} Akoya Properties. All rights reserved.</p>
          <p>Sarbet Site — Addis Ababa, Ethiopia</p>
        </div>
      </div>
    </footer>
  );
}
