// src/schema.ts
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const dashboardCards = pgTable("dashboard_cards", {
  id: serial("id").primaryKey(),
  title: text("title"),
  value: text("value"),
});