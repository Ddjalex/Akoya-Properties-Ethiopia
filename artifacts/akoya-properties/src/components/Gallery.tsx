import { motion } from "framer-motion";
import buildingRenderPath from "@assets/image_1775731985715.png";
import greenBuildingPath from "@assets/image_1775731999150.png";
import constructionPath from "@assets/image_1775731995635.png";

export function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-black">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary uppercase tracking-widest text-sm font-bold mb-4">Vision & Reality</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Project Gallery</h3>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative aspect-[4/3] overflow-hidden group"
        >
          <img
            src={buildingRenderPath}
            alt="Akoya Properties Exterior Render"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
            <span className="text-white text-sm uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">Exterior Render</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative aspect-[4/3] overflow-hidden group"
        >
          <img
            src={greenBuildingPath}
            alt="Akoya Properties Green Facade"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
            <span className="text-white text-sm uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">Green Facade Design</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative aspect-[21/9] md:col-span-2 overflow-hidden group"
        >
          <img
            src={constructionPath}
            alt="Akoya Properties Live Construction Progress"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
            <div>
              <span className="text-primary uppercase tracking-widest text-xs font-bold block mb-2">Under Construction</span>
              <span className="text-white text-sm uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">Live Construction Progress — Sarbet, Addis Ababa</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
