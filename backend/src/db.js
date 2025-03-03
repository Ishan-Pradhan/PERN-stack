import pg from "pg";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const db = new pg.Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

db.connect();

db.on("error", (err) => {
  console.log("unexpected error oon idle client", err);
  process.exit(-1);
});

export const query = async (text, params) => {
  try {
    const res = await db.query(text, params);
    return res;
  } catch (err) {
    console.error("Error executing query", err);
    throw err;
  }
};
