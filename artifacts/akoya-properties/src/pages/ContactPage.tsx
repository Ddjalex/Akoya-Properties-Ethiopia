// =====================================================================
// CONTACT PAGE
// =====================================================================
// All contact info (phone, email, address, social media) lives in:
//    src/data/contact.ts   ← edit there to update everywhere
// =====================================================================

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, MessageSquare, MapPin, Clock, Building2, Mail, Send } from "lucide-react";
import buildingRenderPath from "@assets/image_1775731985715.png";
import { useSEO } from "@/hooks/useSEO";
import { SocialLinks } from "@/components/SocialLinks";
import {
  PHONE,
  PHONE_TEL,
  WHATSAPP_URL,
  EMAIL,
  OFFICE_ADDRESS,
  OFFICE_HOURS,
} from "@/data/contact";

export default function ContactPage() {
  useSEO({
    title: "Contact Akoya Properties | Call or WhatsApp 0998885529",
    description:
      "Contact Akoya Properties Ethiopia. Call or WhatsApp 0998885529. Visit our Sarbet site near Canada Embassy, Addis Ababa. Our property advisors are ready to help you reserve your luxury apartment.",
    keywords:
      "contact Akoya Properties, Akoya Properties phone number, Akoya Properties WhatsApp, buy apartment Addis Ababa contact, real estate Ethiopia contact, Sarbet site sales office",
    canonical: "https://akoyaproperties.com/contact",
  });

  // Local-only contact form state — opens user's mail app on submit.
  // Replace with a real backend submission whenever you wire one up.
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      {/* Page header */}
      <section className="relative h-[40vh] min-h-[320px] flex items-end pb-16 overflow-hidden bg-black pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img
            src={buildingRenderPath}
            alt="Contact Akoya Properties"
            className="w-full h-full object-cover"
          />
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
      <section className="py-24 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* ============================================================
                LEFT: contact info, options, social
               ============================================================ */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">
                Get in Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                Let's Talk About Your Future Home
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Our dedicated property advisors are ready to walk you through floor plans,
                pricing, payment options, and availability. Reach us through any of the channels
                below.
              </p>

              <div className="space-y-6 mb-10">
                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-primary/40 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Phone</p>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="text-white text-lg hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      {PHONE}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-primary/40 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                      WhatsApp
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-lg hover:text-primary transition-colors"
                      data-testid="link-whatsapp"
                    >
                      {PHONE}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-primary/40 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-white text-lg hover:text-primary transition-colors break-all"
                      data-testid="link-email"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* Office address */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-primary/40 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                      Office Address
                    </p>
                    <p className="text-white text-lg">{OFFICE_ADDRESS.line1}</p>
                    <p className="text-muted-foreground text-sm">{OFFICE_ADDRESS.line2}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-primary/40 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                      Office Hours
                    </p>
                    <p className="text-white">{OFFICE_HOURS.days}</p>
                    <p className="text-muted-foreground text-sm">{OFFICE_HOURS.hours}</p>
                  </div>
                </div>

                {/* Project */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-primary/40 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Project</p>
                    <p className="text-white">Akoya Properties — Sarbet Site</p>
                    <p className="text-muted-foreground text-sm">
                      3B+G+28 Hotel-Standard Luxury Apartments
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick action buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center justify-center gap-2 px-5 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-[11px] font-bold hover:bg-primary/90 transition-colors"
                  data-testid="btn-call"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-4 bg-[#25D366] text-white uppercase tracking-widest text-[11px] font-bold hover:bg-[#1ebe5a] transition-colors"
                  data-testid="btn-whatsapp"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center justify-center gap-2 px-5 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-widest text-[11px] font-bold transition-colors"
                  data-testid="btn-email"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>

              {/* Social media */}
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-4">
                  Follow Us
                </p>
                <SocialLinks size="md" />
                <p className="text-muted-foreground text-xs mt-3">
                  Replace placeholder links in <code className="text-primary">src/data/contact.ts</code>.
                </p>
              </div>
            </motion.div>

            {/* ============================================================
                RIGHT: contact form + WhatsApp banner
               ============================================================ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Contact form */}
              <form
                onSubmit={handleSubmit}
                className="border border-white/10 p-6 md:p-8 space-y-5 bg-card"
                data-testid="contact-form"
              >
                <h3 className="text-white text-sm uppercase tracking-widest font-bold mb-2">
                  Send Us a Message
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-white/50 text-[10px] uppercase tracking-widest mb-2 block">
                      Full Name
                    </span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-black border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-primary transition-colors"
                      data-testid="input-name"
                    />
                  </label>
                  <label className="block">
                    <span className="text-white/50 text-[10px] uppercase tracking-widest mb-2 block">
                      Email
                    </span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-black border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-primary transition-colors"
                      data-testid="input-email"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-white/50 text-[10px] uppercase tracking-widest mb-2 block">
                    Phone
                  </span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-black border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-primary transition-colors"
                    data-testid="input-phone"
                  />
                </label>

                <label className="block">
                  <span className="text-white/50 text-[10px] uppercase tracking-widest mb-2 block">
                    Message
                  </span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-black border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    data-testid="input-message"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-colors"
                  data-testid="btn-submit"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                {sent && (
                  <p className="text-primary text-xs text-center">
                    Opening your email app… If nothing happens, please email us directly at {EMAIL}.
                  </p>
                )}
              </form>

              {/* WhatsApp banner */}
              <div className="bg-primary p-8 text-center">
                <MessageSquare className="w-8 h-8 text-black/70 mx-auto mb-4" />
                <h3 className="text-black text-lg font-serif mb-2">Chat with Us on WhatsApp</h3>
                <p className="text-black/70 text-sm mb-6">
                  Get instant answers, floor plan PDFs, and availability updates directly on
                  WhatsApp.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-black text-primary uppercase tracking-widest text-xs font-bold hover:bg-black/80 transition-colors"
                  data-testid="btn-whatsapp-banner"
                >
                  Open WhatsApp — {PHONE}
                </a>
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
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Your Future Address Awaits
            </h2>
            <p className="text-muted-foreground mb-10">
              Don't miss the opportunity to own a residence at Addis Ababa's most anticipated
              luxury address. Contact us today and let our team guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_TEL}`}
                className="px-10 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-colors"
                data-testid="btn-final-call"
              >
                Call {PHONE}
              </a>
              <a
                href={WHATSAPP_URL}
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

      {/* ===========================================================
          Floating WhatsApp button (visible on every section of page)
         =========================================================== */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#1ebe5a] transition-colors"
        data-testid="btn-floating-whatsapp"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </>
  );
}
