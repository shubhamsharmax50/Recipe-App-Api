import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
import { dbConfig } from './env.js';

const { Pool } = pkg;

const pool = new Pool({
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

export const db = drizzle(pool);
