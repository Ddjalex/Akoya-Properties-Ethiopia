import logoPath from "@assets/image_1775731967346.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/properties", label: "Properties" },
  { href: "/gallery", label: "Gallery" },
  { href: "/profile", label: "Residences" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${
        scrolled || menuOpen ? "bg-black/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" data-testid="link-logo">
          <img src={logoPath} alt="Akoya Properties" className="h-12 w-auto cursor-pointer" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`link-nav-${link.label.toLowerCase()}`}
              className={`transition-colors ${
                location === link.href
                  ? "text-primary"
                  : "text-white/70 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:block px-6 py-3 bg-primary text-primary-foreground uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-colors"
          data-testid="link-nav-contact-btn"
        >
          Inquire Now
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="btn-mobile-menu"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/98 border-t border-white/5 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
              className={`text-sm uppercase tracking-widest transition-colors ${
                location === link.href ? "text-primary" : "text-white/70 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 px-6 py-3 bg-primary text-primary-foreground uppercase tracking-widest text-xs font-bold text-center hover:bg-primary/90 transition-colors"
          >
            Inquire Now
          </Link>
        </div>
      )}
    </nav>
  );
}
