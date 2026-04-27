// =====================================================================
// PROPERTY GALLERY PAGE
// =====================================================================
// Edit gallery images in the `galleryImages` array below.
// Each image has:
//   - src         : the image file (replace with your own asset)
//   - title       : short label that appears on hover
//   - description : longer description that appears on hover
//   - category    : used for the filter buttons (Exterior / Interior / Construction / Amenities)
//   - span        : optional Tailwind grid-span classes for featured images
// To add new images:
//   1. Drop the file in attached_assets/
//   2. Import it at the top of this file
//   3. Add it to the array
// =====================================================================

import { motion } from "framer-motion";
import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import buildingRenderPath from "@assets/image_1775731985715.png";
import greenBuildingPath from "@assets/image_1775731999150.png";
import constructionPath from "@assets/image_1775731995635.png";
import logoPath from "@assets/image_1775731967346.png";

// Filter categories — edit / add as needed
const CATEGORIES = ["All", "Exterior", "Interior", "Construction", "Amenities"] as const;
type Category = (typeof CATEGORIES)[number];

// =====================================================================
// GALLERY IMAGES — REPLACE THESE WITH YOUR REAL PHOTOS
// =====================================================================
const galleryImages: Array<{
  src: string;
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  span?: string;
  isLogo?: boolean;
}> = [
  // ---------- Exterior ----------
  {
    src: buildingRenderPath,
    title: "Exterior Render",
    description: "Aerial CGI render of the completed Sarbet Site tower.",
    category: "Exterior",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: greenBuildingPath,
    title: "Green Facade",
    description: "Vertical garden facade with European-standard balconies.",
    category: "Exterior",
  },
  {
    src: buildingRenderPath,
    title: "Skyline View",
    description: "Tower against the Addis Ababa skyline.",
    category: "Exterior",
  },
  // ---------- Construction ----------
  {
    src: constructionPath,
    title: "Construction Progress",
    description: "Aerial drone shot of active construction at Sarbet.",
    category: "Construction",
  },
  {
    src: constructionPath,
    title: "On-site Build",
    description: "Daily construction milestone updates.",
    category: "Construction",
  },
  // ---------- Interior ----------
  {
    src: greenBuildingPath,
    title: "Apartment Interior",
    description: "REPLACE: Interior photo of finished apartment.",
    category: "Interior",
  },
  {
    src: buildingRenderPath,
    title: "Living Room",
    description: "REPLACE: Living room render or photo.",
    category: "Interior",
  },
  // ---------- Amenities ----------
  {
    src: greenBuildingPath,
    title: "Pool & Spa",
    description: "REPLACE: Photo of indoor / outdoor pool area.",
    category: "Amenities",
  },
  {
    src: buildingRenderPath,
    title: "Gymnasium",
    description: "REPLACE: Photo of the city's largest gymnasium.",
    category: "Amenities",
  },
  // ---------- Brand ----------
  {
    src: logoPath,
    title: "Brand Identity",
    description: "Akoya Properties — Redefining Ethiopian luxury real estate.",
    category: "Exterior",
    isLogo: true,
  },
];

export default function GalleryPage() {
  useSEO({
    title: "Gallery | Akoya Properties Sarbet Site — Addis Ababa",
    description:
      "View architectural renders, construction progress, interiors and amenity photos of Akoya Properties Sarbet Site. 3B+G+28 hotel-standard luxury tower in Addis Ababa, Ethiopia.",
    keywords:
      "Akoya Properties gallery, Sarbet site photos, luxury apartments Ethiopia images, Addis Ababa real estate photos, Akoya Properties renders, construction progress Ethiopia",
    canonical: "https://akoyaproperties.com/gallery",
  });

  const [active, setActive] = useState<Category>("All");
  const filtered =
    active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active);

  return (
    <>
      {/* Page header */}
      <section className="relative h-[40vh] min-h-[320px] flex items-end pb-16 overflow-hidden bg-black pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img src={buildingRenderPath} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary uppercase tracking-widest text-xs font-bold mb-3"
          >
            Vision & Reality
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            Property Gallery
          </motion.h1>
        </div>
      </section>

      {/* ============================================================
          Filter buttons + responsive image grid
         ============================================================ */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-10 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 md:px-6 py-2.5 text-[11px] md:text-xs uppercase tracking-widest font-bold border transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-white/15 text-white/70 hover:border-primary hover:text-primary"
                }`}
                data-testid={`gallery-filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Responsive grid: 1 → 2 → 3 columns, taller on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 auto-rows-[260px] md:auto-rows-[320px]">
            {filtered.map((img, i) => (
              <motion.figure
                key={`${img.title}-${i}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                className={`relative overflow-hidden group cursor-pointer ${img.span ?? ""}`}
                data-testid={`gallery-item-${i + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                    img.isLogo ? "object-contain bg-black p-8" : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-black/70 border border-white/10 text-primary text-[10px] uppercase tracking-widest font-bold px-2.5 py-1">
                  {img.category}
                </span>
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary text-xs uppercase tracking-widest font-bold mb-1">
                    {img.title}
                  </p>
                  <p className="text-white text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {img.description}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-12">
              No images in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Full-width construction banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={constructionPath}
            alt="Construction progress"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 h-full flex items-center container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="max-w-2xl"
          >
            <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">
              Currently Under Construction
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Rising from the Ground Up
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Construction is actively underway at the Sarbet Site. Secure your unit now during
              the early phase and benefit from the best available pricing before completion.
            </p>
            <a
              href="/contact"
              className="px-10 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-colors inline-block"
              data-testid="btn-gallery-contact"
            >
              Secure Your Unit
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
