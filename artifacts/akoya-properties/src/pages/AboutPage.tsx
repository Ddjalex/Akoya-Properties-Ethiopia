import { motion } from "framer-motion";
import { Link } from "wouter";
import { Target, Eye, Award, Shield, Sparkles, Users } from "lucide-react";
import buildingRenderPath from "@assets/image_1775731985715.png";
import constructionPath from "@assets/image_1775731995635.png";
import greenBuildingPath from "@assets/image_1775731999150.png";
import logoPath from "@assets/image_1775731967346.png";
import { useSEO } from "@/hooks/useSEO";

// =====================================================================
// ABOUT PAGE — IMAGE GALLERY
// =====================================================================
// REPLACE THE IMAGES BELOW WITH YOUR OWN ABOUT-PAGE IMAGES.
// 1. Drop new files into  artifacts/akoya-properties/attached_assets/
//    (or anywhere reachable via the @assets / public alias)
// 2. Import them at the top of this file
// 3. Swap the `src` and `caption` values inside `aboutGalleryImages`
// =====================================================================
const aboutGalleryImages = [
  { src: buildingRenderPath, caption: "Replace: Office / Team Photo" },
  { src: greenBuildingPath, caption: "Replace: Building Detail" },
  { src: constructionPath, caption: "Replace: On-site Visit" },
  { src: logoPath, caption: "Replace: Brand / Award", isLogo: true },
  { src: buildingRenderPath, caption: "Replace: Lifestyle Shot" },
  { src: greenBuildingPath, caption: "Replace: Interior Render" },
];

// =====================================================================
// WHY CHOOSE US — feel free to edit titles / descriptions
// =====================================================================
const whyChooseUs = [
  {
    icon: Award,
    title: "Hotel-Standard Quality",
    desc: "European-standard finishes, soundproof double-glazed windows and hospital-grade lifts in every residence.",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    desc: "Round-the-clock CCTV monitoring, controlled access and on-site security across all floors and parking levels.",
  },
  {
    icon: Sparkles,
    title: "30+ World-Class Amenities",
    desc: "Indoor & outdoor pools, the city's largest gymnasium, VIP cinemas, spa, mall and fine-dining inside one tower.",
  },
  {
    icon: Users,
    title: "Trusted by Families",
    desc: "A community-first development with daycare, indoor playground and a family-safe environment by design.",
  },
];

const amenities = [
  { floor: "Basement", items: ["3-Level Car Parking", "EV Fast Charging Stations", "Modern Car Wash", "Valet Parking", "Garage Store per Apartment"] },
  { floor: "Ground Floor", items: ["Food Court", "Car Exhibition Hall", "Self Laundry"] },
  { floor: "1st Floor", items: ["Offices", "Mini Bank"] },
  { floor: "2nd–3rd Floor", items: ["International Brand Shops"] },
  { floor: "4th Floor", items: ["VIP Cinemas", "Daycare Center"] },
  { floor: "5th Floor", items: ["Indoor Playground"] },
  { floor: "6th Floor", items: ["Biggest Gymnasium in the City", "Spa (Steam, Sauna & More)", "Indoor Swimming Pool", "Outdoor Rooftop Pool", "Tennis & Basketball Courts"] },
  { floor: "All Floors", items: ["3 Hospital-Standard Lifts", "1 Wide Service Lift", "Escalators (Mall)", "2 × 24hr Standby Generators", "Ground Water Supply", "1,500L Water Reservoir / Apt", "24hr CCTV Security", "Soundproof Double-Glazed Windows", "Café & Fine Dining Restaurant"] },
];

export default function AboutPage() {
  useSEO({
    title: "About Akoya Properties | Ethiopian Luxury Real Estate Developer",
    description: "Akoya Properties is a leading Ethiopian real estate developer with 16+ years of experience. Building hotel-standard luxury apartments in Addis Ababa. Sarbet site near Canada Embassy — 30+ world-class amenities.",
    keywords: "about Akoya Properties, Ethiopian real estate developer, luxury real estate developer Ethiopia, Akoya Properties history, Sarbet apartments Ethiopia, Addis Ababa property developer",
    canonical: "https://akoyaproperties.com/about",
  });

  return (
    <>
      {/* Page hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end pb-20 overflow-hidden bg-black pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/65 z-10" />
          <img src={buildingRenderPath} alt="Akoya Properties" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary uppercase tracking-widest text-xs font-bold mb-3"
          >
            The Project
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            About Akoya Properties
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">Who We Are</p>
              <h2 className="text-4xl font-serif text-white mb-6">A New Standard in Ethiopian Real Estate</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Akoya Properties is committed to transforming the Addis Ababa skyline with landmark developments that set a new benchmark for luxury living in Ethiopia. The Sarbet Site is our flagship project — a bold statement of ambition, craftsmanship, and vision.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Located near the Canada Embassy in the prestigious Sarbet district, the building rises 3B+G+28 floors above the city with hotel-standard interiors, European-quality finishes, and a comprehensive ecosystem of amenities that rival the world's finest residences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With 6 apartments per floor and a 1,300 m² built-up area, each residence is designed to deliver space, light, and dignity. Soundproof double-glazed windows, hospital-grade lifts, and 24-hour security ensure that life here is nothing short of extraordinary.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-[3/4] overflow-hidden row-span-2">
                <img src={greenBuildingPath} alt="Green facade" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="aspect-square overflow-hidden">
                <img src={buildingRenderPath} alt="Exterior render" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="aspect-square overflow-hidden">
                <img src={constructionPath} alt="Construction" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          MISSION & VISION
         ================================================================ */}
      <section className="py-24 bg-card border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="border border-white/10 p-10 hover:border-primary/40 transition-colors"
              data-testid="about-mission"
            >
              <div className="w-14 h-14 border border-primary/40 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <p className="text-primary uppercase tracking-widest text-xs font-bold mb-3">
                Our Mission
              </p>
              <h3 className="text-3xl font-serif text-white mb-5">
                {/* REPLACE: mission heading */}
                Building Homes Worth a Lifetime
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {/* REPLACE: mission paragraph */}
                To deliver world-class residences in Ethiopia by combining
                hotel-grade craftsmanship, transparent pricing, and a
                customer-first approach — so every Akoya owner feels at home
                from day one.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-white/10 p-10 hover:border-primary/40 transition-colors"
              data-testid="about-vision"
            >
              <div className="w-14 h-14 border border-primary/40 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <p className="text-primary uppercase tracking-widest text-xs font-bold mb-3">
                Our Vision
              </p>
              <h3 className="text-3xl font-serif text-white mb-5">
                {/* REPLACE: vision heading */}
                Reshaping the Addis Ababa Skyline
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {/* REPLACE: vision paragraph */}
                To become Ethiopia's most respected luxury real estate brand —
                creating landmark towers that elevate the standard of living
                and inspire the next generation of Ethiopian developers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          WHY CHOOSE US
         ================================================================ */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mb-14 text-center"
          >
            <p className="text-primary uppercase tracking-widest text-xs font-bold mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              {/* REPLACE: why-choose-us heading */}
              The Akoya Difference
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-white/10 p-8 hover:border-primary/40 hover:bg-card transition-colors"
                  data-testid={`why-choose-us-${i + 1}`}
                >
                  <div className="w-12 h-12 border border-primary/40 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-white font-serif text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          ABOUT IMAGE GALLERY
          REPLACE images via the `aboutGalleryImages` array at top of file
         ================================================================ */}
      <section className="py-24 bg-card border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mb-12 text-center"
          >
            <p className="text-primary uppercase tracking-widest text-xs font-bold mb-3">
              Moments at Akoya
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">A Glimpse Behind the Scenes</h2>
            <p className="text-muted-foreground text-sm mt-3">
              Replace these placeholder images with your own team, office and lifestyle photos.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {aboutGalleryImages.map((img, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.07 }}
                className="relative aspect-square overflow-hidden group"
                data-testid={`about-gallery-${i + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                    img.isLogo ? "object-contain bg-black p-8" : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-3 text-[10px] uppercase tracking-widest text-primary font-bold">
                  {img.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-card border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mb-12"
          >
            <p className="text-primary uppercase tracking-widest text-xs font-bold mb-3">By the Numbers</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Project Specifications</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Structure", value: "3 Basement + Ground + 28 Floors" },
              { label: "Built-up Area", value: "1,300 m²" },
              { label: "Apartments per Floor", value: "6 Units" },
              { label: "Standard", value: "Hotel-Standard Luxury" },
              { label: "Delivery Period", value: "3 Years from Contract" },
              { label: "Payment Type", value: "Construction Progress" },
              { label: "Finish Level", value: "Semi-Finished" },
              { label: "Price (1 & 2 BR)", value: "120,000 ETB / m²" },
              { label: "Price (3 BR)", value: "125,000 ETB / m²" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.07 }}
                className="border border-white/10 p-6 hover:border-primary/40 transition-colors"
                data-testid={`spec-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <p className="text-muted-foreground text-xs uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-white font-light text-lg">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities by floor */}
      <section className="py-28 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mb-16"
          >
            <p className="text-primary uppercase tracking-widest text-xs font-bold mb-3">What's Inside</p>
            <h2 className="text-4xl font-serif text-white">Amenities by Floor</h2>
          </motion.div>
          <div className="space-y-6">
            {amenities.map((section, i) => (
              <motion.div
                key={section.floor}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.06 }}
                className="grid grid-cols-1 md:grid-cols-4 border border-white/10 hover:border-primary/30 transition-colors"
              >
                <div className="bg-card px-6 py-5 flex items-center">
                  <span className="text-primary text-xs uppercase tracking-widest font-bold">{section.floor}</span>
                </div>
                <div className="md:col-span-3 px-6 py-5 flex flex-wrap gap-3">
                  {section.items.map((item) => (
                    <span key={item} className="text-white/70 text-sm border border-white/10 px-3 py-1">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-card border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">Location</p>
              <h2 className="text-4xl font-serif text-white mb-6">Sarbet, Addis Ababa</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Akoya Properties Sarbet Site occupies a prime corner in Sarbet — one of Addis Ababa's most sought-after residential and diplomatic districts.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Situated just steps from the Canada Embassy, residents benefit from excellent connectivity, proximity to international institutions, embassies, and the city's finest dining and retail.
              </p>
              <Link href="/contact" className="px-8 py-3 bg-primary text-primary-foreground uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-colors inline-block" data-testid="btn-about-contact">
                Get Directions
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="border border-white/10 p-8 space-y-4"
            >
              {[
                { label: "District", value: "Sarbet, Addis Ababa" },
                { label: "Landmark", value: "Near Canada Embassy" },
                { label: "City", value: "Addis Ababa, Ethiopia" },
                { label: "Contact", value: "0998885529" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between py-3 border-b border-white/5 last:border-0">
                  <span className="text-muted-foreground text-xs uppercase tracking-widest">{item.label}</span>
                  <span className="text-white text-sm">{item.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
