import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const socialLinksTable = pgTable("social_links", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  href: text("href").notNull(),
  iconKey: text("icon_key").notNull(),
  brandClass: text("brand_class").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const insertSocialLinkSchema = createInsertSchema(
  socialLinksTable,
).omit({ id: true });
export type InsertSocialLink = z.infer<typeof insertSocialLinkSchema>;
export type SocialLink = typeof socialLinksTable.$inferSelect;
