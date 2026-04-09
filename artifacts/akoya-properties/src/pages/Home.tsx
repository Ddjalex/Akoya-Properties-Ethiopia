import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { Amenities } from "@/components/Amenities";
import { Apartments } from "@/components/Apartments";
import { PaymentPlan } from "@/components/PaymentPlan";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Amenities />
        <Apartments />
        <PaymentPlan />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
