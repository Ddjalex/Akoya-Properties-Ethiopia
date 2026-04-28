// =====================================================================
// PROPERTY DETAIL PAGE
// =====================================================================
// Shown when a user clicks "View Details" on a property card.
// URL pattern: /properties/:number   (e.g. /properties/1)
// Pulls data from src/data/properties.ts and contact info from
// src/data/contact.ts.
// =====================================================================

import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import {
  ArrowLeft,
  BedDouble,
  Bath,
  Maximize2,
  MapPin,
  Activity,
  Clock,
  Hammer,
  Phone,
  MessageSquare,
  Mail,
  Send,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { properties } from "@/data/properties";
import {
  PHONE,
  PHONE_TEL,
  WHATSAPP_URL,
  EMAIL,
  OFFICE_ADDRESS,
  OFFICE_HOURS,
} from "@/data/contact";
import { useSEO } from "@/hooks/useSEO";
import NotFound from "@/pages/not-found";

export default function PropertyDetailPage() {
  const [, params] = useRoute("/properties/:number");
  const num = Number(params?.number);
  const property = properties.find((p) => p.number === num);

  // Hooks must be called unconditionally — keep these above the early return.
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  useSEO({
    title: property
      ? `${property.title} | Akoya Properties`
      : "Property | Akoya Properties",
    description: property
      ? `${property.title} in ${property.location}. ${property.description}`
      : "Property details — Akoya Properties Ethiopia.",
    canonical: property
      ? `https://akoyaproperties.com/properties/${property.number}`
      : "https://akoyaproperties.com/properties",
  });

  if (!property) return <NotFound />;

  const p = property;
  const hasProjectInfo =
    p.status || p.deliveryTime || p.deliveryStatus;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Inquiry — Property ${p.number}: ${p.title}`,
    );
    const body = encodeURIComponent(
      `Property: ${p.title} (${p.location})\nReference: Property ${p.number}\n\n` +
        `Name: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const waText = encodeURIComponent(
    `Hello Akoya Properties, I'm interested in Property ${p.number} — ${p.title} (${p.location}). Please share more details.`,
  );
  const waLink = `${WHATSAPP_URL}?text=${waText}`;

  // Variants table column logic mirrors the card
  const hasVariants = !!(p.variants && p.variants.length > 0);
  const hasLabel = hasVariants && p.variants!.some((v) => v.label);
  const colCount = 1 + (hasLabel ? 1 : 0);
  const gridCols = colCount === 2 ? "grid-cols-2" : "grid-cols-1";

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] flex items-end pb-16 overflow-hidden bg-black pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 z-10" />
          <img
            src={p.image}
            alt={`${p.title} — ${p.location}`}
            className="w-full h-full object-cover"
            data-testid="detail-hero-image"
          />
        </div>
        <div className="relative z-20 container mx-auto px-6">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-white/70 hover:text-primary text-xs uppercase tracking-widest mb-6 transition-colors"
            data-testid="btn-back-properties"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Properties
          </Link>
          <p className="text-primary uppercase tracking-widest text-xs font-bold mb-3">
            Property {p.number} · {p.type}
          </p>
          <h1
            className="text-4xl md:text-6xl font-serif text-white leading-tight max-w-3xl"
            data-testid="detail-title"
          >
            {p.title}
          </h1>
          <div className="flex items-center gap-2 text-white/70 mt-4 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{p.location}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-primary uppercase tracking-widest text-xs font-bold mb-3">
                  Overview
                </p>
                <h2 className="text-2xl md:text-3xl font-serif text-white mb-5">
                  About this Property
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {p.description}
                </p>
              </motion.div>

              {/* Specs grid */}
              {(p.bedrooms || p.bathrooms || p.area) && (
                <div className="grid grid-cols-3 gap-4" data-testid="detail-specs">
                  {p.bedrooms && (
                    <div className="border border-white/10 p-5 text-center">
                      <BedDouble className="w-5 h-5 text-primary mx-auto mb-2" />
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Bedrooms</p>
                      <p className="text-white font-light">{p.bedrooms}</p>
                    </div>
                  )}
                  {p.bathrooms && (
                    <div className="border border-white/10 p-5 text-center">
                      <Bath className="w-5 h-5 text-primary mx-auto mb-2" />
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Bathrooms</p>
                      <p className="text-white font-light">{p.bathrooms}</p>
                    </div>
                  )}
                  {p.area && (
                    <div className="border border-white/10 p-5 text-center">
                      <Maximize2 className="w-5 h-5 text-primary mx-auto mb-2" />
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Area</p>
                      <p className="text-white font-light">{p.area}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Project info */}
              {hasProjectInfo && (
                <div>
                  <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">
                    Project Information
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {p.status && (
                      <InfoRow icon={Activity} label="Status" value={p.status} />
                    )}
                    {p.deliveryTime && (
                      <InfoRow icon={Clock} label="Delivery" value={p.deliveryTime} />
                    )}
                    {p.deliveryStatus && (
                      <InfoRow icon={Hammer} label="Finish" value={p.deliveryStatus} />
                    )}
                  </div>
                </div>
              )}

              {/* Variants table */}
              {hasVariants && (
                <div>
                  <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">
                    Available Units
                  </p>
                  <div className="border border-white/10 overflow-hidden">
                    <div className={`grid ${gridCols} text-[10px] uppercase tracking-widest font-bold bg-white/5 text-white/60`}>
                      {hasLabel && <span className="px-4 py-3">Type</span>}
                      <span className="px-4 py-3">Size</span>
                    </div>
                    {p.variants!.map((v, idx) => (
                      <div
                        key={idx}
                        className={`grid ${gridCols} text-sm text-white/80 border-t border-white/5 hover:bg-white/[0.02] transition-colors`}
                        data-testid={`detail-variant-${idx}`}
                      >
                        {hasLabel && <span className="px-4 py-3 text-white/70">{v.label || "—"}</span>}
                        <span className="px-4 py-3 text-primary font-medium">{v.size}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky contact sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Contact card */}
                <div className="border border-primary/40 bg-card p-6">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                    Inquire
                  </p>
                  <p className="text-primary font-serif text-2xl mb-5" data-testid="detail-inquire-title">
                    Contact us for details
                  </p>

                  <div className="space-y-3">
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground uppercase tracking-widest text-[11px] font-bold hover:bg-primary/90 transition-colors"
                      data-testid="btn-call"
                    >
                      <Phone className="w-4 h-4" />
                      Call {PHONE}
                    </a>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 border border-primary/60 text-primary uppercase tracking-widest text-[11px] font-bold hover:bg-primary/10 transition-colors"
                      data-testid="btn-whatsapp"
                    >
                      <MessageSquare className="w-4 h-4" />
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Inquiry — ${p.title}`)}`}
                      className="flex items-center justify-center gap-2 w-full py-3 border border-white/15 text-white uppercase tracking-widest text-[11px] font-bold hover:border-primary hover:text-primary transition-colors"
                      data-testid="btn-email"
                    >
                      <Mail className="w-4 h-4" />
                      Email Us
                    </a>
                  </div>
                </div>

                {/* Office card */}
                <div className="border border-white/10 bg-card/60 p-6 text-sm space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Office</p>
                      <p className="text-white">{OFFICE_ADDRESS.line1}</p>
                      <p className="text-white/70 text-xs">{OFFICE_ADDRESS.line2}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Hours</p>
                      <p className="text-white">{OFFICE_HOURS.days}</p>
                      <p className="text-white/70 text-xs">{OFFICE_HOURS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="py-20 bg-card border-y border-white/5" data-testid="section-inquiry">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-primary uppercase tracking-widest text-xs font-bold mb-3">
                Send an Inquiry
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-white">
                Interested in {p.title}?
              </h2>
              <p className="text-muted-foreground text-sm mt-3">
                Leave your details and our property advisors will reach out within one business day.
              </p>
            </div>

            {sent ? (
              <div
                className="border border-primary/50 bg-black p-10 text-center"
                data-testid="inquiry-success"
              >
                <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-serif text-white mb-2">Thank You</h3>
                <p className="text-muted-foreground text-sm">
                  Your email app has opened with your inquiry. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-white/10 bg-black p-8 space-y-5"
                data-testid="inquiry-form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border border-white/15 px-4 py-3 text-white text-sm focus:border-primary focus:outline-none"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-transparent border border-white/15 px-4 py-3 text-white text-sm focus:border-primary focus:outline-none"
                      data-testid="input-phone"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={`I'd like more information about ${p.title}.`}
                    className="w-full bg-transparent border border-white/15 px-4 py-3 text-white text-sm focus:border-primary focus:outline-none resize-none"
                    data-testid="input-message"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-colors"
                  data-testid="btn-submit-inquiry"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>
                <p className="text-center text-muted-foreground text-xs">
                  Or call us directly at{" "}
                  <a href={`tel:${PHONE_TEL}`} className="text-primary hover:underline">
                    {PHONE}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 border border-white/10 p-4 hover:border-primary/40 transition-colors">
      <Icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
      <div>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
        <p className="text-white text-sm font-light">{value}</p>
      </div>
    </div>
  );
}
