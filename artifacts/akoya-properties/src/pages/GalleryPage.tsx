import { motion } from "framer-motion";
import buildingRenderPath from "@assets/image_1775731985715.png";
import greenBuildingPath from "@assets/image_1775731999150.png";
import constructionPath from "@assets/image_1775731995635.png";
import logoPath from "@assets/image_1775731967346.png";

const images = [
  {
    src: buildingRenderPath,
    alt: "Akoya Properties Sarbet Site — Exterior Render",
    title: "Exterior Render",
    description: "Aerial CGI render of the completed Sarbet Site tower",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: greenBuildingPath,
    alt: "Akoya Properties — Green Facade Design",
    title: "Green Facade",
    description: "Vertical garden facade with European-standard balconies",
    span: "",
  },
  {
    src: constructionPath,
    alt: "Akoya Properties — Live Construction Progress",
    title: "Construction Progress",
    description: "Aerial drone shot of active construction at Sarbet",
    span: "",
  },
  {
    src: logoPath,
    alt: "Akoya Properties Logo",
    title: "Brand Identity",
    description: "Akoya Properties — Redefining Ethiopian luxury real estate",
    span: "",
    isLogo: true,
  },
];

export default function GalleryPage() {
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
            Project Gallery
          </motion.h1>
        </div>
      </section>

      {/* Main grid gallery */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[350px]">
            {images.map((img, i) => (
              <motion.figure
                key={img.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className={`relative overflow-hidden group cursor-pointer ${img.span}`}
                data-testid={`gallery-item-${i}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full h-full transition-transform duration-1000 group-hover:scale-105 ${img.isLogo ? "object-contain bg-black p-8" : "object-cover"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary text-xs uppercase tracking-widest font-bold mb-1">{img.title}</p>
                  <p className="text-white text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{img.description}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width construction banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img src={constructionPath} alt="Construction progress" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 h-full flex items-center container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="max-w-2xl"
          >
            <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">Currently Under Construction</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Rising from the Ground Up</h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Construction is actively underway at the Sarbet Site. Secure your unit now during the early phase and benefit from the best available pricing before completion.
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

      {/* Green facade close-up */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="overflow-hidden"
            >
              <img
                src={greenBuildingPath}
                alt="Green facade design"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 min-h-[400px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="flex flex-col justify-center p-4 lg:p-12"
            >
              <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">Design Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Green, Modern, Timeless</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Akoya Sarbet Site facade features lush vertical gardens integrated into the architecture — a living, breathing exterior that brings nature to every floor.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                European-standard double-glazed soundproof windows ensure silence and thermal comfort, while the wave-form structure creates a dramatic silhouette on the Addis Ababa skyline.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
