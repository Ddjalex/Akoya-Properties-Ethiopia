import { pgTable, serial, text, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const propertyVariantSchema = z.object({
  size: z.string(),
  totalPrice: z.string().optional(),
  advance: z.string().optional(),
  label: z.string().optional(),
});
export type PropertyVariant = z.infer<typeof propertyVariantSchema>;

export const propertiesTable = pgTable("properties", {
  id: serial("id").primaryKey(),
  number: integer("number").notNull(),
  image: text("image").notNull(),
  title: text("title").notNull(),
  location: text("location").notNull(),
  price: text("price").notNull(),
  type: text("type").notNull(),
  description: text("description").notNull(),
  bedrooms: text("bedrooms").notNull().default(""),
  bathrooms: text("bathrooms").notNull().default(""),
  area: text("area").notNull().default(""),
  ctaLabel: text("cta_label").notNull(),
  ctaHref: text("cta_href").notNull(),
  status: text("status"),
  deliveryTime: text("delivery_time"),
  advancePayment: text("advance_payment"),
  deliveryStatus: text("delivery_status"),
  pricePerSqm: text("price_per_sqm"),
  stock: text("stock"),
  variants: jsonb("variants").$type<PropertyVariant[]>(),
});

export const insertPropertySchema = createInsertSchema(propertiesTable).omit({
  id: true,
});
export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Property = typeof propertiesTable.$inferSelect;
