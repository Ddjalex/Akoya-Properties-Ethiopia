import logoPath from "@assets/image_1775731967346.png";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" data-testid="link-logo">
          <img src={logoPath} alt="Akoya Properties" className="h-12 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-white/70">
          <a href="#overview" className="hover:text-primary transition-colors" data-testid="link-nav-overview">Overview</a>
          <a href="#amenities" className="hover:text-primary transition-colors" data-testid="link-nav-amenities">Amenities</a>
          <a href="#apartments" className="hover:text-primary transition-colors" data-testid="link-nav-residences">Residences</a>
          <a href="#gallery" className="hover:text-primary transition-colors" data-testid="link-nav-gallery">Gallery</a>
        </div>
        <a
          href="#contact"
          className="px-6 py-3 bg-primary text-primary-foreground uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-colors"
          data-testid="link-nav-contact"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}
