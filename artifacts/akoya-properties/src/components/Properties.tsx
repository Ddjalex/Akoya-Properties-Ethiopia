// =====================================================================
// PROPERTY CARDS COMPONENT
// =====================================================================
// Renders the 8 property cards. Card data lives in:
//   src/data/properties.ts   ← edit there to change titles, prices, etc.
// Each card displays its number (Property 1 - Property 8) so it is
// easy to identify and edit later.
// =====================================================================

import { motion } from "framer-motion";
import { Link } from "wouter";
import { BedDouble, Bath, Maximize2, MapPin } from "lucide-react";
import { properties } from "@/data/properties";

type PropertiesProps = {
  // If true, only show the first 4 cards (used on the homepage teaser).
  // If false / omitted, show all 8 cards.
  limit?: number;
  // Show the section heading (default true)
  showHeading?: boolean;
  // Optional id for anchor linking
  id?: string;
};

export function Properties({ limit, showHeading = true, id = "properties" }: PropertiesProps) {
  const items = typeof limit === "number" ? properties.slice(0, limit) : properties;

  return (
    <section id={id} className="py-24 md:py-28 bg-black">
      <div className="container mx-auto px-6">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="max-w-2xl">
              <p className="text-primary uppercase tracking-widest text-xs font-bold mb-3">
                Featured Properties
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight">
                {limit ? "Selected Residences" : "All 8 Featured Properties"}
              </h2>
            </div>
            {limit ? (
              <Link
                href="/properties"
                className="self-start px-6 py-3 border border-white/20 text-white hover:border-primary hover:text-primary uppercase tracking-widest text-xs font-bold transition-colors"
                data-testid="btn-view-all-properties"
              >
                View All 8 Properties
              </Link>
            ) : (
              <p className="text-muted-foreground text-sm uppercase tracking-widest max-w-sm">
                Curated selection across our flagship Sarbet site.
              </p>
            )}
          </motion.div>
        )}

        {/* Responsive grid: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((p, i) => (
            <motion.article
              key={p.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className="group bg-card border border-white/10 hover:border-primary/60 transition-colors duration-500 flex flex-col overflow-hidden"
              data-testid={`property-card-${p.number}`}
            >
              {/* === IMAGE === */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={`Property ${p.number} — ${p.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {/* Property number badge */}
                <span
                  className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5"
                  data-testid={`property-${p.number}-badge`}
                >
                  Property {p.number}
                </span>
                {/* Type badge */}
                <span className="absolute top-4 right-4 bg-black/70 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 border border-white/10">
                  {p.type}
                </span>
              </div>

              {/* === BODY === */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-serif text-white mb-2 leading-tight">{p.title}</h3>

                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-4">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>{p.location}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                  {p.description}
                </p>

                {/* Specs row — only show available specs */}
                {(p.bedrooms || p.bathrooms || p.area) && (
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/70 border-t border-white/5 pt-4 mb-5">
                    {p.bedrooms && (
                      <span className="flex items-center gap-1.5">
                        <BedDouble className="w-3.5 h-3.5 text-primary" />
                        {p.bedrooms}
                      </span>
                    )}
                    {p.bathrooms && (
                      <span className="flex items-center gap-1.5">
                        <Bath className="w-3.5 h-3.5 text-primary" />
                        {p.bathrooms}
                      </span>
                    )}
                    {p.area && (
                      <span className="flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-primary" />
                        {p.area}
                      </span>
                    )}
                  </div>
                )}

                {/* Price + CTA */}
                <div className="mt-auto">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                        Price
                      </p>
                      <p className="text-primary font-serif text-lg">{p.price}</p>
                    </div>
                  </div>
                  <Link
                    href={p.ctaHref}
                    className="block w-full text-center py-3 bg-primary text-primary-foreground uppercase tracking-widest text-[11px] font-bold hover:bg-primary/90 transition-colors"
                    data-testid={`property-${p.number}-cta`}
                  >
                    {p.ctaLabel}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
