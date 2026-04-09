import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function Location() {
  return (
    <section className="py-32 bg-card relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 text-primary">
              <MapPin className="w-8 h-8" />
            </div>
            <h2 className="text-primary uppercase tracking-widest text-sm font-bold mb-4">Prime Location</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Sarbet, Addis Ababa</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Situated in the highly coveted Sarbet neighborhood, directly adjacent to the Canada Embassy. This prestigious address offers unparalleled access to diplomatic missions, elite international schools, premium shopping, and fine dining. 
            </p>
            <div className="p-6 bg-black border border-white/5 inline-block">
              <p className="text-white font-medium mb-1">Akoya Properties</p>
              <p className="text-muted-foreground text-sm">Near Canada Embassy, Sarbet</p>
              <p className="text-muted-foreground text-sm">Addis Ababa, Ethiopia</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 bg-black aspect-square md:aspect-auto md:h-[600px] border border-white/10 relative overflow-hidden flex items-center justify-center p-8"
          >
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}></div>
            <div className="text-center relative z-10 p-8 bg-black/80 backdrop-blur border border-white/10 max-w-sm">
               <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
               <h4 className="text-xl font-serif text-white mb-2">Exclusive Enclave</h4>
               <p className="text-muted-foreground text-sm">A location defined by security, prestige, and convenience.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
