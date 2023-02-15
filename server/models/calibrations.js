
const { Pool } = require('pg');

const pool = new Pool({
  user: "postgres",
  password: "admin1",
  host: "localhost",
  port: 5000,
  database: "SPC"
});

const calibrationsSchema = `CREATE TABLE IF NOT EXISTS Calibrations ( 
  id  PRIMARY KEY, 
  equipment TEXT NOT NULL,  
  creator TEXT NOT NULL,  
  date DATE NOT NULL
);`

pool.query(calibrationsSchema, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Table Calibrations created');
  }
});

module.exports = pool;
