import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-black relative">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <h2 className="text-primary uppercase tracking-widest text-sm font-bold mb-4">Take The Next Step</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white mb-8">Secure Your Legacy</h3>
          <p className="text-muted-foreground text-lg md:text-xl mb-12">
            Speak with our dedicated luxury property advisors to discuss floor plans, availability, and secure your residence at Akoya.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-widest uppercase px-8 py-8 rounded-none h-auto font-bold w-full sm:w-auto flex items-center gap-3"
            >
              <a href="tel:+251998885529" data-testid="btn-call">
                <Phone className="w-5 h-5" />
                Call 0998885529
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm tracking-widest uppercase px-8 py-8 rounded-none h-auto font-bold w-full sm:w-auto flex items-center gap-3"
            >
              <a href="https://wa.me/251998885529" target="_blank" rel="noopener noreferrer" data-testid="btn-whatsapp">
                <MessageSquare className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
