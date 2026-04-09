import { motion } from "framer-motion";
import { Link } from "wouter";
import greenBuildingPath from "@assets/image_1775731999150.png";
import { useSEO } from "@/hooks/useSEO";

const apartments = [
  {
    type: "1 Bedroom",
    area: "101 m²",
    pricePerM2: "120,000 ETB / m²",
    total: "12,120,000 ETB",
    down: "1,212,000 ETB",
    note: "Semi-finished standard",
    tag: "Popular",
  },
  {
    type: "2 Bedroom",
    area: "159 m²",
    pricePerM2: "120,000 ETB / m²",
    total: "19,080,000 ETB",
    down: "1,908,000 ETB",
    note: "Semi-finished standard",
    tag: "Most Spacious",
  },
  {
    type: "3 Bedroom",
    area: "176 m²",
    pricePerM2: "125,000 ETB / m²",
    total: "22,000,000 ETB",
    down: "2,200,000 ETB",
    note: "Semi-finished standard — premium rate",
    tag: "Flagship",
  },
];

const paymentSteps = [
  { step: "01", title: "10% Down Payment", desc: "Reserve your unit with an initial 10% down payment upon signing the contract." },
  { step: "02", title: "Construction Progress Payments", desc: "The remaining balance is paid in stages tied to verified construction milestones." },
  { step: "03", title: "Handover in 3 Years", desc: "Take possession of your semi-finished apartment within the agreed 3-year delivery window." },
];

export default function ProfilePage() {
  useSEO({
    title: "Apartment Pricing | Akoya Properties Sarbet — 1BR, 2BR, 3BR Ethiopia",
    description: "1 Bedroom 101m² from 12,120,000 ETB. 2 Bedroom 159m² from 19,080,000 ETB. 3 Bedroom 176m² from 22,000,000 ETB. Only 10% down payment. Construction progress payments. 3-year delivery.",
    keywords: "Akoya Properties pricing, apartments for sale Addis Ababa, 1 bedroom apartment Ethiopia, 2 bedroom apartment Sarbet, 3 bedroom luxury apartment Addis Ababa, apartment prices Ethiopia ETB, buy apartment near Canada Embassy Addis Ababa",
    canonical: "https://akoyaproperties.com/profile",
  });

  return (
    <>
      {/* Page header */}
      <section className="relative h-[40vh] min-h-[320px] flex items-end pb-16 overflow-hidden bg-black pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img src={greenBuildingPath} alt="Residences" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary uppercase tracking-widest text-xs font-bold mb-3"
          >
            The Residences
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            Apartments & Pricing
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center"
          >
            <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">Pricing Guide</p>
            <h2 className="text-4xl font-serif text-white mb-6">Choose Your Residence</h2>
            <p className="text-muted-foreground leading-relaxed">
              All apartments are sold semi-finished, giving residents the freedom to personalize their interiors to their exact taste. Prices are per square meter and reflect the European-standard specifications of the Sarbet Site.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Apartment cards */}
      <section className="pb-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {apartments.map((apt, i) => (
              <motion.div
                key={apt.type}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-card border border-white/10 hover:border-primary transition-all duration-500 overflow-hidden flex flex-col"
                data-testid={`apt-card-${i}`}
              >
                {/* Tag */}
                <div className="bg-primary px-5 py-2 flex justify-between items-center">
                  <span className="text-black text-xs uppercase tracking-widest font-bold">{apt.tag}</span>
                  <span className="text-black/70 text-xs uppercase tracking-widest">{apt.type}</span>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="text-5xl font-serif text-white mb-1">{apt.area}</div>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest mb-8">{apt.pricePerM2}</p>

                  <div className="space-y-5 flex-1 mb-8">
                    <div className="border-b border-white/8 pb-5">
                      <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Total Investment</p>
                      <p className="text-white text-2xl font-light">{apt.total}</p>
                    </div>
                    <div>
                      <p className="text-primary text-xs uppercase tracking-widest font-bold mb-1">10% Down Payment</p>
                      <p className="text-white text-3xl font-light">{apt.down}</p>
                    </div>
                    <p className="text-muted-foreground text-xs italic">{apt.note}</p>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full py-4 text-center bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-widest text-xs font-bold"
                    data-testid={`btn-inquire-apt-${i}`}
                  >
                    Inquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment plan */}
      <section className="py-28 bg-card border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mb-16 text-center"
          >
            <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">How to Buy</p>
            <h2 className="text-4xl font-serif text-white">Flexible Payment Plan</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {paymentSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-8 border border-white/10 hover:border-primary/40 transition-colors"
                data-testid={`payment-step-${i}`}
              >
                <div className="text-primary text-5xl font-serif mb-6">{s.step}</div>
                <h3 className="text-white font-semibold uppercase tracking-widest text-sm mb-4">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground text-sm mb-6">Prices are for semi-finished apartments. Final finishing options available upon request.</p>
            <Link href="/contact" className="px-10 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-colors inline-block" data-testid="btn-profile-contact">
              Start Your Reservation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Building highlights */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mb-12"
          >
            <p className="text-primary uppercase tracking-widest text-xs font-bold mb-3">Included in Every Residence</p>
            <h2 className="text-3xl font-serif text-white">Building-Wide Features</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "3 Hospital-Standard Lifts",
              "1 Wide Service Lift",
              "2 × 24hr Standby Generators",
              "Ground Water Supply",
              "1,500L Water Reservoir per Apartment",
              "24hr CCTV Security",
              "Soundproof Double-Glazed Windows",
              "Garage Store per Apartment",
              "European Standard Room Design",
              "Convenient Room Areas",
              "Valet Parking Service",
              "EV Fast Charging Stations",
            ].map((feat, i) => (
              <motion.div
                key={feat}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 border border-white/8 hover:border-primary/30 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-white/80 text-sm">{feat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
