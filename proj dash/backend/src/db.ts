// src/db.ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL="postgresql://postgres.cmtlxttsnrldheohmlyn:[YOUR-PASSWORD]@aws-1-eu-central-1.pooler.supabase.com:6543/postgres"
});

export const db = drizzle(pool);