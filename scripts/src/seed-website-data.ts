import {
  db,
  pool,
  propertiesTable,
  contactInfoTable,
  socialLinksTable,
  type InsertProperty,
  type InsertContactInfo,
  type InsertSocialLink,
} from "@workspace/db";

const properties: InsertProperty[] = [
  {
    number: 1,
    image: "@assets/image_1777358948910.png",
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
    pricePerSqm: null,
    stock: null,
    variants: null,
  },
  {
    number: 2,
    image: "@assets/image_1777359394756.png",
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
  {
    number: 3,
    image: "@assets/image_1777359475501.png",
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
  {
    number: 4,
    image: "@assets/image_1777363911185.png",
    title: "Ameliyaz Project",
    location: "Sarbet, next to Canada Embassy",
    price: "From 12,120,000 ETB",
    type: "1, 2, 3, 4 Bed & Duplex",
    description:
      "New flagship Sarbet tower currently on excavation — choose 1, 2, 3, 4 bedroom or duplex layouts. Per-m² price varies by floor (higher floors priced higher).",
    bedrooms: "1 / 2 / 3 / 4 / Duplex",
    bathrooms: "",
    area: "101 – 176 m²",
    ctaLabel: "View Details",
    ctaHref: "/contact",
    status: "On Excavation",
    deliveryTime: "3 yrs (Semi) · 3.5 yrs (Fully)",
    advancePayment: "10%",
    deliveryStatus: "Semi Finished",
    pricePerSqm:
      "120,000 – 145,000 ETB / m² (Semi, varies by floor)",
    stock: "1, 2, 3, 4 Bedroom & Duplex Apartments",
    variants: [
      {
        label: "1 Bedroom",
        size: "101 m²",
        totalPrice: "From 12,120,000 ETB (Semi)",
        advance: "From 1,212,000 ETB",
      },
      {
        label: "2 Bedroom",
        size: "159 m²",
        totalPrice: "From 19,080,000 ETB (Semi)",
        advance: "From 1,908,000 ETB",
      },
      {
        label: "3 Bedroom",
        size: "176 m²",
        totalPrice: "From 21,120,000 ETB (Semi)",
        advance: "From 2,112,000 ETB",
      },
    ],
  },
];

const contactInfo: InsertContactInfo = {
  phone: "0998885529",
  phoneTel: "+251998885529",
  whatsappRaw: "251998885529",
  email: "info@akoyaproperties.com",
  addressLine1: "Sarbet, Near Canada Embassy",
  addressLine2: "Addis Ababa, Ethiopia",
  officeDays: "Monday – Saturday",
  officeHours: "8:00 AM – 6:00 PM (EAT)",
};

const socialLinks: InsertSocialLink[] = [
  {
    name: "Facebook",
    href: "https://facebook.com/",
    iconKey: "facebook",
    brandClass: "hover:text-[#1877F2]",
    sortOrder: 1,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    iconKey: "instagram",
    brandClass: "hover:text-[#E1306C]",
    sortOrder: 2,
  },
  {
    name: "Telegram",
    href: "https://t.me/",
    iconKey: "telegram",
    brandClass: "hover:text-[#26A5E4]",
    sortOrder: 3,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/",
    iconKey: "tiktok",
    brandClass: "hover:text-white",
    sortOrder: 4,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    iconKey: "youtube",
    brandClass: "hover:text-[#FF0000]",
    sortOrder: 5,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    iconKey: "linkedin",
    brandClass: "hover:text-[#0A66C2]",
    sortOrder: 6,
  },
];

async function main() {
  console.log("Seeding website data into Neon...");

  await db.delete(propertiesTable);
  await db.delete(contactInfoTable);
  await db.delete(socialLinksTable);

  const insertedProperties = await db
    .insert(propertiesTable)
    .values(properties)
    .returning({ id: propertiesTable.id, title: propertiesTable.title });
  console.log(`  inserted ${insertedProperties.length} properties:`);
  for (const p of insertedProperties) {
    console.log(`    #${p.id} — ${p.title}`);
  }

  const insertedContact = await db
    .insert(contactInfoTable)
    .values(contactInfo)
    .returning({ id: contactInfoTable.id });
  console.log(`  inserted contact_info row #${insertedContact[0]?.id}`);

  const insertedSocials = await db
    .insert(socialLinksTable)
    .values(socialLinks)
    .returning({ id: socialLinksTable.id, name: socialLinksTable.name });
  console.log(`  inserted ${insertedSocials.length} social links:`);
  for (const s of insertedSocials) {
    console.log(`    #${s.id} — ${s.name}`);
  }

  await pool.end();
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
