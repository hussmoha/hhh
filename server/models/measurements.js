import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  password: "admin1",
  host: "localhost",
  port: 5000,
  database: "SPC"
});

const measurementsSchema = `CREATE TABLE IF NOT EXISTS Measurement ( 
  id SERIAL PRIMARY KEY, 
  partName TEXT NOT NULL, 
  partId TEXT NOT NULL, 
  creator TEXT NOT NULL, 
  factoryName TEXT NOT NULL, 
  address TEXT NOT NULL, 
  start_date DATE NOT NULL, 
  end_date DATE NOT NULL
);`

pool.query(measurementsSchema, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Table Measurement created');
  }
});

module.exports = pool;
