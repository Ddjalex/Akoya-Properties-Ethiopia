import { motion } from "framer-motion";
import { Link } from "wouter";
import buildingRenderPath from "@assets/image_1775731985715.png";
import greenBuildingPath from "@assets/image_1775731999150.png";
import { useSEO } from "@/hooks/useSEO";
import { Properties } from "@/components/Properties";

const stats = [
  { label: "Floors", value: "3B+G+28" },
  { label: "Built-up Area", value: "1,300 m²" },
  { label: "Apartments / Floor", value: "6 Units" },
  { label: "Delivery", value: "3 Years" },
  { label: "Basement Parking", value: "3 Levels" },
  { label: "Starting Down Payment", value: "10%" },
];

export default function HomePage() {
  useSEO({
    title: "Akoya Properties Ethiopia | Luxury Apartments Sarbet Addis Ababa",
    description: "Akoya Properties — Ethiopia's premier luxury real estate. Hotel-standard 3B+G+28 apartments in Sarbet, near Canada Embassy. 1BR from 12.1M ETB. Only 10% down payment. Call 0998885529.",
    keywords: "Akoya Properties Ethiopia, luxury apartments Addis Ababa, Sarbet apartments, real estate Ethiopia, hotel standard apartments Addis Ababa, buy apartment Ethiopia, Akoya Properties Sarbet site",
    canonical: "https://akoyaproperties.com/",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src={buildingRenderPath}
            alt="Akoya Properties Sarbet Site"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center pt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 uppercase tracking-[0.3em] text-primary font-semibold text-sm"
          >
            Sarbet Site — Addis Ababa, Ethiopia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white max-w-5xl leading-tight mb-6"
          >
            Redefine Your Standard of Living
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/60 text-lg mb-10 max-w-2xl leading-relaxed"
          >
            3B+G+28 Hotel-Standard Luxury Apartments near the Canada Embassy. A landmark of prestige rising in the heart of Addis Ababa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/profile"
              className="px-10 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-colors"
              data-testid="btn-hero-explore"
            >
              Explore Residences
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border border-white/40 text-white hover:border-primary hover:text-primary uppercase tracking-widest text-xs font-bold transition-colors"
              data-testid="btn-hero-contact"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
            <motion.div
              className="w-full h-1/2 bg-primary absolute top-0"
              animate={{ top: ["-50%", "150%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-card border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <p className="text-primary uppercase tracking-widest text-xs font-bold mb-3">Project Specifications</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Built to Impress</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="text-2xl md:text-3xl font-serif text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured properties teaser — shows first 4 of 8 cards */}
      <Properties limit={4} id="featured-properties" />

      {/* Feature teaser */}
      <section className="py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">Why Akoya</p>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                Addis Ababa's Most Anticipated Address
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Perched in the prestigious Sarbet district near the Canada Embassy, Akoya Properties Sarbet Site redefines urban luxury. Every detail — from the soundproof double-glazed windows to the European-standard interiors — has been crafted for those who demand the very best.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                With over 30 world-class amenities including an indoor/outdoor swimming pool, the city's largest gymnasium, VIP cinema, spa, and international brand shops — this is more than a home. It is a lifestyle.
              </p>
              <div className="flex gap-4">
                <Link href="/about" className="px-8 py-3 bg-primary text-primary-foreground uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-colors" data-testid="btn-home-about">
                  Learn More
                </Link>
                <Link href="/gallery" className="px-8 py-3 border border-white/20 text-white hover:border-primary hover:text-primary uppercase tracking-widest text-xs font-bold transition-colors" data-testid="btn-home-gallery">
                  View Gallery
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={greenBuildingPath}
                  alt="Akoya Green Facade"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-white/10 p-6">
                <div className="text-3xl font-serif text-primary mb-1">30+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">World-class Amenities</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">Starting from 1,212,000 ETB Down Payment</h2>
            <p className="text-black/70 mb-8 uppercase tracking-widest text-sm">10% Down · Construction Progress Payments · 3-Year Delivery</p>
            <Link href="/contact" className="px-10 py-4 bg-black text-primary uppercase tracking-widest text-xs font-bold hover:bg-black/80 transition-colors inline-block" data-testid="btn-cta-contact">
              Reserve Your Residence
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
