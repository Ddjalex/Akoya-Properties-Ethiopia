import { motion } from "framer-motion";

const plans = [
  {
    type: "1 Bedroom",
    area: "101",
    total: "12,120,000",
    down: "1,212,000"
  },
  {
    type: "2 Bedroom",
    area: "159",
    total: "19,080,000",
    down: "1,908,000"
  },
  {
    type: "3 Bedroom",
    area: "176",
    total: "22,000,000",
    down: "2,200,000"
  }
];

export function Apartments() {
  return (
    <section id="apartments" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-primary uppercase tracking-widest text-sm font-bold mb-4">The Residences</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Elevated Living Spaces</h3>
          </div>
          <div className="text-muted-foreground text-sm uppercase tracking-widest max-w-sm">
            Prices based on semi-finished standard. <br/>
            <span className="text-primary">120,000 - 125,000 ETB / m²</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.type}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border border-white/10 p-8 hover:border-primary transition-all duration-500 flex flex-col h-full relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />
              
              <div className="text-muted-foreground uppercase tracking-widest text-xs mb-2">Residence Type</div>
              <h4 className="text-3xl font-serif text-white mb-8 pb-8 border-b border-white/10">{plan.type}</h4>
              
              <div className="space-y-6 flex-grow mb-12">
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Total Area</div>
                  <div className="text-2xl font-light text-white">{plan.area} <span className="text-sm text-primary">m²</span></div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Total Investment</div>
                  <div className="text-2xl font-light text-white">{plan.total} <span className="text-sm text-primary">ETB</span></div>
                </div>
                <div>
                  <div className="text-primary text-xs uppercase tracking-widest mb-1 font-bold">10% Down Payment</div>
                  <div className="text-3xl font-light text-white">{plan.down} <span className="text-sm text-primary">ETB</span></div>
                </div>
              </div>

              <a 
                href="#contact" 
                className="block w-full py-4 text-center border border-white/20 text-white hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs"
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
