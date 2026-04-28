// =====================================================================
// PROPERTY CARDS DATA  —  EDIT THIS FILE TO UPDATE THE 8 PROPERTY CARDS
// =====================================================================
// Each property is clearly numbered (Property 1 → Property 8).
// To change a card, simply edit its fields below.
// To swap an image, drop a new file into `attached_assets/` and update
// the `image` field. The default 4 attached_assets images are reused
// to keep the existing branding/style.
// =====================================================================

import buildingRender from "@assets/image_1775731985715.png";
import greenBuilding from "@assets/image_1775731999150.png";
import construction from "@assets/image_1775731995635.png";
import logo from "@assets/image_1775731967346.png";
import twiinzProject from "@assets/image_1777358948910.png";

export type Property = {
  // Display number — keeps card identification clear (Property 1, 2, 3 ...)
  number: number;
  // Card image (use any image inside attached_assets/)
  image: string;
  // Card title — e.g. "Sky Penthouse", "Garden Suite"
  title: string;
  // Location line — e.g. "Sarbet, Addis Ababa"
  location: string;
  // Price — supports any currency string
  price: string;
  // Property type — e.g. "Apartment", "Penthouse", "Studio"
  type: string;
  // 2 short sentences for the card description
  description: string;
  // Optional specs — leave blank "" to hide
  bedrooms: string;
  bathrooms: string;
  area: string;
  // Button label and link (use "/contact" or any URL)
  ctaLabel: string;
  ctaHref: string;
  // Optional project info — leave undefined / "" to hide
  status?: string;          // e.g. "90% Completed"
  deliveryTime?: string;    // e.g. "1 year"
  advancePayment?: string;  // e.g. "50%"
  deliveryStatus?: string;  // e.g. "Semi finished"
};

export const properties: Property[] = [
  // ----------------------------- Property 1 -----------------------------
  {
    number: 1,
    image: twiinzProject,
    title: "Twiinz Project",
    location: "Piyassa, near Monark Hotel",
    price: "On Request",
    type: "Residential Tower",
    description:
      "Landmark twin-tower residential development in the heart of Piyassa — currently 90% completed and delivered semi-finished.",
    bedrooms: "",
    bathrooms: "",
    area: "323 m²",
    ctaLabel: "View Details",
    ctaHref: "/contact",
    status: "90% Completed",
    deliveryTime: "1 year",
    advancePayment: "50%",
    deliveryStatus: "Semi finished",
  },
  // ----------------------------- Property 2 -----------------------------
  {
    number: 2,
    image: greenBuilding,
    title: "Akoya Garden Residence",
    location: "Sarbet, Addis Ababa",
    price: "19,080,000 ETB",
    type: "2 Bedroom Apartment",
    description:
      "Spacious 2 bedroom unit overlooking the vertical garden facade — open plan living and a private balcony.",
    bedrooms: "2",
    bathrooms: "2",
    area: "159 m²",
    ctaLabel: "View Details",
    ctaHref: "/contact",
  },
  // ----------------------------- Property 3 -----------------------------
  {
    number: 3,
    image: construction,
    title: "Akoya Family Residence",
    location: "Sarbet, Addis Ababa",
    price: "22,000,000 ETB",
    type: "3 Bedroom Apartment",
    description:
      "Generously sized 3 bedroom apartment built for families — premium semi-finished standard with prime floor selection.",
    bedrooms: "3",
    bathrooms: "3",
    area: "176 m²",
    ctaLabel: "View Details",
    ctaHref: "/contact",
  },
  // ----------------------------- Property 4 -----------------------------
  {
    number: 4,
    image: buildingRender,
    title: "Akoya Sky Penthouse",
    location: "28th Floor, Sarbet",
    price: "On Request",
    type: "Penthouse",
    description:
      "Top-floor penthouse with panoramic Addis Ababa skyline views, private terrace and exclusive lift access.",
    bedrooms: "4",
    bathrooms: "4",
    area: "320 m²",
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
  },
  // ----------------------------- Property 5 -----------------------------
  {
    number: 5,
    image: greenBuilding,
    title: "Akoya Studio Loft",
    location: "Sarbet, Addis Ababa",
    price: "8,400,000 ETB",
    type: "Studio",
    description:
      "Modern open-plan studio for young professionals — fully secure building with 24hr concierge and gym access.",
    bedrooms: "Studio",
    bathrooms: "1",
    area: "70 m²",
    ctaLabel: "View Details",
    ctaHref: "/contact",
  },
  // ----------------------------- Property 6 -----------------------------
  {
    number: 6,
    image: construction,
    title: "Akoya Executive Office",
    location: "1st Floor, Akoya Tower",
    price: "Lease / Sale",
    type: "Office Space",
    description:
      "Premium 1st floor office space with mall access, meeting rooms and dedicated parking — ideal for headquarters.",
    bedrooms: "",
    bathrooms: "2",
    area: "210 m²",
    ctaLabel: "Inquire",
    ctaHref: "/contact",
  },
  // ----------------------------- Property 7 -----------------------------
  {
    number: 7,
    image: buildingRender,
    title: "Akoya Retail Unit",
    location: "Ground Floor, Akoya Tower",
    price: "Lease",
    type: "Commercial / Shop",
    description:
      "Prime ground-floor retail unit with high foot traffic — perfect for international brand showrooms or boutiques.",
    bedrooms: "",
    bathrooms: "1",
    area: "120 m²",
    ctaLabel: "Inquire",
    ctaHref: "/contact",
  },
  // ----------------------------- Property 8 -----------------------------
  {
    number: 8,
    image: greenBuilding,
    title: "Akoya Duplex Residence",
    location: "Upper Floors, Akoya Tower",
    price: "On Request",
    type: "Duplex Apartment",
    description:
      "Two-storey duplex apartment with double-height living room, internal staircase and a private rooftop deck.",
    bedrooms: "4",
    bathrooms: "4",
    area: "260 m²",
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
  },
];
