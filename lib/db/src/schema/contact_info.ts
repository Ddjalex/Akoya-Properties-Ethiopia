import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const contactInfoTable = pgTable("contact_info", {
  id: serial("id").primaryKey(),
  phone: text("phone").notNull(),
  phoneTel: text("phone_tel").notNull(),
  whatsappRaw: text("whatsapp_raw").notNull(),
  email: text("email").notNull(),
  addressLine1: text("address_line1").notNull(),
  addressLine2: text("address_line2").notNull(),
  officeDays: text("office_days").notNull(),
  officeHours: text("office_hours").notNull(),
});

export const insertContactInfoSchema = createInsertSchema(
  contactInfoTable,
).omit({ id: true });
export type InsertContactInfo = z.infer<typeof insertContactInfoSchema>;
export type ContactInfo = typeof contactInfoTable.$inferSelect;
