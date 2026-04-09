import { motion } from "framer-motion";

export function PaymentPlan() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="flex flex-col items-center text-center pt-8 md:pt-0 px-4"
          >
            <div className="text-5xl font-serif mb-4">10%</div>
            <div className="text-sm uppercase tracking-widest font-bold">Down Payment</div>
            <p className="mt-4 text-primary-foreground/80 text-sm">Secure your residence with a minimal initial investment.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center pt-8 md:pt-0 px-4"
          >
            <div className="text-5xl font-serif mb-4">Flexible</div>
            <div className="text-sm uppercase tracking-widest font-bold">Installments</div>
            <p className="mt-4 text-primary-foreground/80 text-sm">Payments tied directly to construction progress.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center pt-8 md:pt-0 px-4"
          >
            <div className="text-5xl font-serif mb-4">3 Yrs</div>
            <div className="text-sm uppercase tracking-widest font-bold">Delivery</div>
            <p className="mt-4 text-primary-foreground/80 text-sm">Committed timeline for completion and handover.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center text-center pt-8 md:pt-0 px-4"
          >
            <div className="text-5xl font-serif mb-4">Semi</div>
            <div className="text-sm uppercase tracking-widest font-bold">Finished</div>
            <p className="mt-4 text-primary-foreground/80 text-sm">Customize your interior finishes to your exact taste.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
