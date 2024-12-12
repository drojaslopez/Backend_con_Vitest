import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const { Pool } = pg;

const connectionString = process.env.DBNODE ;

export const pool = new Pool({
  connectionString,
  allowExitOnIdle: true,
});


