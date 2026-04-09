import logoPath from "@assets/image_1775731967346.png";
import { Link } from "wouter";

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
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Defining the future of luxury real estate in Ethiopia. Building landmarks that stand the test of time, designed for those who accept nothing but the exceptional.
            </p>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Pages</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/profile" className="hover:text-primary transition-colors">Residences</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Sarbet, Near Canada Embassy</li>
              <li>Addis Ababa, Ethiopia</li>
              <li>
                <a href="tel:+251998885529" className="hover:text-primary transition-colors block mt-4">
                  0998885529
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/251998885529"
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

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Akoya Properties. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Sarbet Site — Addis Ababa, Ethiopia</p>
        </div>
      </div>
    </footer>
  );
}
