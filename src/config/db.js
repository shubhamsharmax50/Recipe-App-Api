import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
import { ENV } from "./env.js";
import * as schema from "../db/schema.js";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: ENV.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/recipe_app",
});

export const db = drizzle(pool, { schema });