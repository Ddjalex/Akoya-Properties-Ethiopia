// =====================================================================
// CONTACT & SOCIAL MEDIA  —  EDIT THIS ONE FILE TO UPDATE EVERYTHING
// =====================================================================
// Used on the Contact page and in the Footer.
// REPLACE the placeholder URLs / numbers / emails below with the real ones.
// =====================================================================

import {
  Facebook,
  Instagram,
  Send as TelegramIcon, // Telegram
  Music2 as TikTokIcon, // TikTok (Lucide does not ship a TikTok icon — Music2 is the closest)
  Youtube,
  Linkedin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ---------- PHONE / WHATSAPP ----------
// Use international format for `whatsappRaw` (digits only, no +)
export const PHONE = "0998885529";
export const PHONE_TEL = "+251998885529";       // tel: link
export const WHATSAPP_RAW = "251998885529";     // wa.me/<digits>
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_RAW}`;

// ---------- EMAIL ----------
// REPLACE with your real email
export const EMAIL = "info@akoyaproperties.com";

// ---------- OFFICE ADDRESS ----------
// REPLACE with your real office address
export const OFFICE_ADDRESS = {
  line1: "Sarbet, Near Canada Embassy",
  line2: "Addis Ababa, Ethiopia",
};

// ---------- OFFICE HOURS ----------
export const OFFICE_HOURS = {
  days: "Monday – Saturday",
  hours: "8:00 AM – 6:00 PM (EAT)",
};

// ---------- SOCIAL MEDIA LINKS ----------
// REPLACE the placeholder URLs (#) with your real social profile URLs.
// Set `href` to "" to hide an icon entirely.
export type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
  brandClass: string; // tailwind hover color
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1B6SGpdVif/",
    icon: Facebook,
    brandClass: "hover:text-[#1877F2]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mirafalemayehu99",
    icon: Instagram,
    brandClass: "hover:text-[#E1306C]",
  },
  {
    name: "Telegram",
    href: "https://t.me/Realestateadvisorrr",
    icon: TelegramIcon,
    brandClass: "hover:text-[#26A5E4]",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@akoya.properties",
    icon: TikTokIcon,
    brandClass: "hover:text-white",
  },
  {
    name: "YouTube",
    href: "", // hidden until a YouTube channel is provided
    icon: Youtube,
    brandClass: "hover:text-[#FF0000]",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/miraf-alemayehu-35bb70323",
    icon: Linkedin,
    brandClass: "hover:text-[#0A66C2]",
  },
];
