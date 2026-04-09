import { motion } from "framer-motion";
import { Check } from "lucide-react";

const amenities = [
  "Gymnasium (biggest in the city) — 6th floor",
  "Spa (steam, sauna) — 6th floor",
  "2 Swimming pools (indoor + outdoor terrace) — 6th floor",
  "3 Basement Car Parking, EV Charging, Car Wash, Valet",
  "Tennis & Basketball Courts",
  "Cafe & Fine Dining Restaurant",
  "Food Court — ground floor",
  "Indoor Playground — 5th floor",
  "Daycare — 4th floor",
  "VIP Cinemas — 4th floor",
  "International Brand Shops — 2nd & 3rd floor",
  "Offices — 1st floor",
  "Car Exhibition — ground floor",
  "Mini Bank — 1st floor",
  "Garage Store per apartment, Self Laundry",
  "3 Hospital-standard lifts + 1 service lift",
  "2 x 24hr standby generators",
  "Ground water + 1,500L reservoir per apartment",
  "24hr CCTV cameras & Mall Escalators",
  "Soundproof tempered double-glazed windows",
  "European standard room design"
];

export function Amenities() {
  return (
    <section id="amenities" className="py-32 bg-card relative overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-primary uppercase tracking-widest text-sm font-bold mb-4">World-Class Facilities</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">A City Within A Tower</h3>
          <p className="text-muted-foreground text-lg">
            Experience uncompromised luxury with amenities designed to cater to every aspect of your distinguished lifestyle, from the grand lobby to the exclusive rooftop.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-4 p-6 bg-background/50 border border-white/5 hover:border-primary/30 transition-colors group"
            >
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <Check className="w-3 h-3 text-primary group-hover:text-primary-foreground" />
              </div>
              <span className="text-foreground/90 font-light">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
