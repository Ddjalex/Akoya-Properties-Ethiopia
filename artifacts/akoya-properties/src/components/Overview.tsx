import { motion } from "framer-motion";

const stats = [
  { label: "Levels", value: "3B+G+28" },
  { label: "Built-up Area", value: "1,300 m²" },
  { label: "Apts per Floor", value: "6" },
  { label: "Standard", value: "Hotel Luxury" },
  { label: "Parking", value: "3 Basement Levels" },
  { label: "Delivery", value: "3 Years" },
];

export function Overview() {
  return (
    <section id="overview" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-primary uppercase tracking-widest text-sm font-bold mb-4">The Landmark</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                An Architectural Masterpiece
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Rising majestically in the prestigious Sarbet area, near the Canada Embassy, this 28-story tower introduces an unprecedented level of luxury to Addis Ababa. Featuring a striking wave-form glass facade and world-class amenities, it is not merely a residence—it is a statement of success.
              </p>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 gap-px bg-white/5 border border-white/5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black/80 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors"
              >
                <div className="text-primary text-2xl md:text-3xl font-serif mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
