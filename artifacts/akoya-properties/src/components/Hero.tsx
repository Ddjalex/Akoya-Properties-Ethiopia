import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import slide1 from "@assets/image_1777359875028.png";
import slide2 from "@assets/image_1777359887441.png";
import slide3 from "@assets/image_1777359900992.png";
import slide4 from "@assets/image_1777359937463.png";

const slides = [
  { src: slide1, alt: "Akoya Properties — Shebamiles Platinum Partner event speaker" },
  { src: slide2, alt: "Akoya Group partnership ceremony cake cutting" },
  { src: slide3, alt: "Invest in the key to your future — Akoya Properties" },
  { src: slide4, alt: "Bacary Sagna with Akoya Group" },
];

const SLIDE_DURATION_MS = 5000;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={slides[index].src}
            alt={slides[index].alt}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ opacity: { duration: 1.2 }, scale: { duration: SLIDE_DURATION_MS / 1000, ease: "linear" } }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
      </div>

      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 uppercase tracking-[0.3em] text-primary font-semibold text-sm md:text-base"
        >
          Sarbet, Near Canada Embassy, Addis Ababa
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white max-w-5xl leading-tight mb-8"
        >
          Redefine Your Standard of Living
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="text-white/70 text-lg mb-10 max-w-2xl leading-relaxed"
        >
          3B+G+28 Hotel-Standard Luxury Apartments. A landmark of prestige rising in the heart of Addis Ababa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-widest uppercase px-12 py-6 rounded-none h-auto font-bold"
            asChild
          >
            <a href="#apartments" data-testid="link-hero-explore">Explore Residences</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 hover:border-white text-sm tracking-widest uppercase px-12 py-6 rounded-none h-auto font-bold bg-transparent"
            asChild
          >
            <a href="#contact" data-testid="link-hero-contact">Contact Us</a>
          </Button>
        </motion.div>
      </div>

      {/* Slide indicator dots */}
      <div className="absolute bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            data-testid={`hero-slide-dot-${i}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-10 bg-primary" : "w-4 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-primary absolute top-0"
            animate={{ top: ["-50%", "150%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
