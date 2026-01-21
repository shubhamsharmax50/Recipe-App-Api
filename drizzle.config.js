import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.js", // Path to your schema
  out: "./drizzle",             // Where migrations will go
  dialect: "postgresql",        // or "pg" depending on version
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});