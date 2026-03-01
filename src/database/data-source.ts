import { DataSource } from "typeorm";
import { configDotenv } from "dotenv";
configDotenv();

const dbport = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432;

export const appDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: dbport,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: true,
  entities: ["./src/entities/*.{ts,js}"],
  migrations: ["./src/database/migrations/*.{ts,js}"],
  ssl: {
    rejectUnauthorized: false,
  },
});
