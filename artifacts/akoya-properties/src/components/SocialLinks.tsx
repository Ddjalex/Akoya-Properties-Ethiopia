// =====================================================================
// SOCIAL LINKS COMPONENT
// Edit the actual links/icons in: src/data/contact.ts
// =====================================================================

import { SOCIAL_LINKS } from "@/data/contact";

type Props = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const SIZES = {
  sm: { btn: "w-9 h-9", icon: "w-4 h-4" },
  md: { btn: "w-11 h-11", icon: "w-5 h-5" },
  lg: { btn: "w-12 h-12", icon: "w-5 h-5" },
};

export function SocialLinks({ size = "md", className = "" }: Props) {
  const s = SIZES[size];
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.filter((l) => l.href).map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            title={link.name}
            data-testid={`social-${link.name.toLowerCase()}`}
            className={`${s.btn} flex items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-primary ${link.brandClass}`}
          >
            <Icon className={s.icon} />
          </a>
        );
      })}
    </div>
  );
}
