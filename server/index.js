const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const Pool = require('pg').Pool 
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'SPC',
  password: 'qwerty',
  port: 5432,
});



//const measurementRoutes = require("./Routes/measurementRoute")

app.use(cors());
app.use(express.json()); 

app.post("/measurements", async (req, res) => {
  try {
    const {
      batchNumber,
      partId,
      creator,
      date,
      approved,
      Fz1,
      Hxy2,
      Fy3,
      Fx4,
      Fx5,
     } = req.body;
    const newMeasurement = await pool.query(
      'INSERT INTO spc_schema.measurement (part_Id, creator, approved, date, Batch_number, "1Fz", "2Hxy", "3Fy", "4Fx", "5Fx") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [partId, creator, approved, date, batchNumber, Fz1, Hxy2, Fy3, Fx4, Fx5]);
    res.json(newMeasurement);
  } catch (err) {
    console.error(err.message);
  }
});

//app.use("/measurements", measurementRoutes); 

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
