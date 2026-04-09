import { motion } from "framer-motion";
import { Phone, MessageSquare, MapPin, Clock, Building2 } from "lucide-react";
import buildingRenderPath from "@assets/image_1775731985715.png";

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative h-[40vh] min-h-[320px] flex items-end pb-16 overflow-hidden bg-black pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img src={buildingRenderPath} alt="Contact Akoya Properties" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary uppercase tracking-widest text-xs font-bold mb-3"
          >
            Reach Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">Get in Touch</p>
              <h2 className="text-4xl font-serif text-white mb-6">Let's Talk About Your Future Home</h2>
              <p className="text-muted-foreground leading-relaxed mb-12">
                Our dedicated property advisors are ready to walk you through floor plans, pricing, payment options, and availability. Whether you're ready to reserve or simply exploring, we're here to help you make the right decision.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-primary/40 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Phone / WhatsApp</p>
                    <a href="tel:+251998885529" className="text-white text-lg hover:text-primary transition-colors" data-testid="link-phone">
                      0998885529
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-primary/40 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Location</p>
                    <p className="text-white text-lg">Sarbet, Near Canada Embassy</p>
                    <p className="text-muted-foreground text-sm">Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-primary/40 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Office Hours</p>
                    <p className="text-white">Monday – Saturday</p>
                    <p className="text-muted-foreground text-sm">8:00 AM – 6:00 PM (EAT)</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-primary/40 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Project</p>
                    <p className="text-white">Akoya Properties — Sarbet Site</p>
                    <p className="text-muted-foreground text-sm">3B+G+28 Hotel-Standard Luxury Apartments</p>
                  </div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+251998885529"
                  className="flex items-center justify-center gap-3 px-8 py-5 bg-primary text-primary-foreground uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-colors"
                  data-testid="btn-call"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/251998885529"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-widest text-xs font-bold transition-colors"
                  data-testid="btn-whatsapp"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            {/* Right: info card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Quick facts */}
              <div className="border border-white/10 p-8">
                <h3 className="text-white text-sm uppercase tracking-widest font-bold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  {[
                    { label: "1 Bedroom", value: "101 m² — from 1,212,000 ETB down" },
                    { label: "2 Bedroom", value: "159 m² — from 1,908,000 ETB down" },
                    { label: "3 Bedroom", value: "176 m² — from 2,200,000 ETB down" },
                    { label: "Payment", value: "10% down, construction progress" },
                    { label: "Delivery", value: "3 Years from contract" },
                    { label: "Finish", value: "Semi-finished standard" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-3 border-b border-white/5 last:border-0">
                      <span className="text-muted-foreground text-xs uppercase tracking-widest">{item.label}</span>
                      <span className="text-white text-sm text-right max-w-[60%]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp banner */}
              <div className="bg-primary p-8 text-center">
                <MessageSquare className="w-8 h-8 text-black/70 mx-auto mb-4" />
                <h3 className="text-black text-lg font-serif mb-2">Chat with Us on WhatsApp</h3>
                <p className="text-black/70 text-sm mb-6">Get instant answers, floor plan PDFs, and availability updates directly on WhatsApp.</p>
                <a
                  href="https://wa.me/251998885529"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-black text-primary uppercase tracking-widest text-xs font-bold hover:bg-black/80 transition-colors"
                  data-testid="btn-whatsapp-banner"
                >
                  Open WhatsApp — 0998885529
                </a>
              </div>

              {/* Note */}
              <div className="border border-white/10 p-6 text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Limited units available per floor. Early reservation secures the best pricing and preferred floor selection.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-card border-t border-white/5">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Your Future Address Awaits</h2>
            <p className="text-muted-foreground mb-10">
              Don't miss the opportunity to own a residence at Addis Ababa's most anticipated luxury address. Contact us today and let our team guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+251998885529"
                className="px-10 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-colors"
                data-testid="btn-final-call"
              >
                Call 0998885529
              </a>
              <a
                href="https://wa.me/251998885529"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-white/20 text-white hover:border-primary hover:text-primary uppercase tracking-widest text-xs font-bold transition-colors"
                data-testid="btn-final-whatsapp"
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
