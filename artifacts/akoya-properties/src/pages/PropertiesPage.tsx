// =====================================================================
// PROPERTIES PAGE  —  shows all 8 property cards
// =====================================================================
// Edit individual property details in: src/data/properties.ts
// =====================================================================

import { motion } from "framer-motion";
import { Link } from "wouter";
import buildingRenderPath from "@assets/image_1775731985715.png";
import { Properties } from "@/components/Properties";
import { useSEO } from "@/hooks/useSEO";

export default function PropertiesPage() {
  useSEO({
    title: "Properties | Akoya Properties Sarbet — 8 Featured Residences",
    description:
      "Browse 8 featured properties at Akoya Properties Sarbet Site, Addis Ababa — apartments, penthouses, studios, offices and retail units. Hotel-standard luxury from 8.4M ETB.",
    keywords:
      "Akoya properties listings, Sarbet apartments, Addis Ababa properties for sale, luxury apartments Ethiopia, penthouse Addis Ababa, studio apartment Sarbet, office space Addis Ababa",
    canonical: "https://akoyaproperties.com/properties",
  });

  return (
    <>
      {/* Page header */}
      <section className="relative h-[40vh] min-h-[320px] flex items-end pb-16 overflow-hidden bg-black pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img
            src={buildingRenderPath}
            alt="Akoya Properties listings"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary uppercase tracking-widest text-xs font-bold mb-3"
          >
            Featured Properties
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            Our 8 Featured Properties
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 mt-4 max-w-2xl text-sm md:text-base"
          >
            Each property below is numbered (Property 1 – Property 8) for easy reference.
            Edit details in <code className="text-primary">src/data/properties.ts</code>.
          </motion.p>
        </div>
      </section>

      {/* All 8 cards */}
      <Properties />

      {/* Closing CTA */}
      <section className="py-20 bg-card border-t border-white/5">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Found Something You Love?
            </h2>
            <p className="text-muted-foreground mb-10">
              Speak to an advisor about availability, floor plans and reservation terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-10 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-colors"
                data-testid="btn-properties-contact"
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/251998885529"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-white/20 text-white hover:border-primary hover:text-primary uppercase tracking-widest text-xs font-bold transition-colors"
                data-testid="btn-properties-whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
