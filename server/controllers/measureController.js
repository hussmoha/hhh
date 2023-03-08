const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'SPC',
  password: 'qwerty',
  port: 5432,
});

const getMeasurements = (request, response) => {
  pool.query('SELECT * FROM spc_schema.measurement', (error, results) => {
    if (error) {
      throw error;
    }
    const measurements = results.rows;
    response.json(measurements);
  });
};



const getMeasurementByPartId = (request, response) => {
  const partId = request.params.partId;

  pool.query(
    'SELECT * FROM spc_schema.measurement WHERE part_Id = $1',
    [partId],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createMeasurement = async (request, response) => {
  try {
    const {
      batch_number,
      creator,
      approved,
      Date,
      sc1,
      sc2,
      sc3,
      sc4,
    } = request.body;
    const newMeasure = await pool.query(
      `INSERT INTO spc_schema.measurement ( creator, approved, date, batch_number, sc1, sc2, sc3, sc4) 
      VALUES ($1, $2, $3,$4, $5, $6, $7, $8)`, [
      creator,
      approved,
      Date, 
      batch_number,
      sc1,
      sc2,
      sc3,
      sc4,])
    response.json(newMeasure)
  } catch (err) {
    console.error(err.message)
  }

};

const updateMeasurement = (request, response) => {
  const partId = request.params.partId;
  const {
    batch_number,
    creator,
    approved,
    Date,
    sc1,
    sc2,
    sc3,
    sc4,
  } = request.body;

  pool.query(
    'UPDATE spc_schema.measurement SET Batch_number = $1, creator = $2, date = $3, approved = $4, sc1 = $5, sc2 = $6, sc3 = $7, sc4 = $8 WHERE part_Id = $10',
    [batch_number,
      partId,
      creator,
      approved,
      Date,
      sc1,
      sc2,
      sc3,
      sc4,],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Measurement modified with partId: ${partId}`);
    }
  );
};

const deleteMeasurement = (request, response) => {
  const partId = request.params.partId;

  pool.query(
    'DELETE FROM spc_schema.measurement WHERE part_Id = $1',
    [partId],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Measurement deleted with partId: ${partId}`);
    }
  );
};

module.exports = {
  getMeasurements,
  getMeasurementByPartId,
  createMeasurement,
  updateMeasurement,
  deleteMeasurement,
};

