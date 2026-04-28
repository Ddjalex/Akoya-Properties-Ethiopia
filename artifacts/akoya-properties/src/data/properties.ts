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
import noveltyProject from "@assets/image_1777359394756.png";
import ozoneProject from "@assets/image_1777359475501.png";

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
  deliveryTime?: string;    // e.g. "1 year" — supports newlines
  advancePayment?: string;  // e.g. "50%"
  deliveryStatus?: string;  // e.g. "Semi finished" — supports newlines
  // More optional project info
  pricePerSqm?: string;     // e.g. "100,000 ETB / m² (Semi)"
  stock?: string;           // e.g. "1 & 3 Bedroom Apartments"
  // Optional unit-size variants (rendered as a small table when provided)
  // totalPrice / advance can be omitted — the cell renders as "—"
  variants?: {
    size: string;        // e.g. "96 m²"
    totalPrice?: string; // e.g. "9,600,000 ETB (Semi)"
    advance?: string;    // e.g. "960,000 ETB"
    label?: string;      // optional row label, e.g. "1 Bedroom"
  }[];
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
    image: noveltyProject,
    title: "Novelty Project",
    location: "Piyassa, near Monark Hotel",
    price: "From 9,600,000 ETB",
    type: "1 & 3 Bedroom Apartments",
    description:
      "Premium high-rise tower currently on mat foundation — choose between Semi-Finished or Fully-Finished delivery in 96 m² or 143 m² layouts.",
    bedrooms: "1 / 3",
    bathrooms: "",
    area: "96 m² · 143 m²",
    ctaLabel: "View Details",
    ctaHref: "/contact",
    status: "On Mat Foundation",
    deliveryTime: "3 yrs (Semi) · 3.5 yrs (Fully)",
    advancePayment: "10%",
    deliveryStatus: "Semi Finished / Fully Finished",
    pricePerSqm: "100,000 ETB / m² (Semi)",
    stock: "1 & 3 Bedroom Apartments",
    variants: [
      {
        size: "96 m²",
        totalPrice: "9,600,000 ETB (Semi)",
        advance: "960,000 ETB",
      },
      {
        size: "143 m²",
        totalPrice: "14,300,000 ETB (Semi)",
        advance: "1,430,000 ETB",
      },
    ],
  },
  // ----------------------------- Property 3 -----------------------------
  {
    number: 3,
    image: ozoneProject,
    title: "Ozone Project",
    location: "Semen Mazegaja, near Sarem Hotel",
    price: "From 98,000 ETB / m²",
    type: "1, 2 & 3 Bedroom Apartments",
    description:
      "Mid-rise residential development under construction at 50% completion — choose between Semi-Finished or Fully-Finished delivery across 1, 2 and 3 bedroom layouts.",
    bedrooms: "1 / 2 / 3",
    bathrooms: "",
    area: "81 – 130 m²",
    ctaLabel: "View Details",
    ctaHref: "/contact",
    status: "50% Completed",
    deliveryTime: "2.5 yrs (Semi) · 3 yrs (Fully)",
    advancePayment: "10%",
    deliveryStatus: "Semi Finished / Fully Finished",
    pricePerSqm: "98,000 ETB / m² (Semi)",
    stock: "1, 2 & 3 Bedroom Apartments",
    variants: [
      { label: "1 Bedroom", size: "81 m²" },
      { label: "2 Bedroom", size: "110 m²" },
      { label: "2 Bedroom", size: "116 m²" },
      { label: "3 Bedroom", size: "130 m²" },
    ],
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
