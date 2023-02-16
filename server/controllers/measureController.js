const Pool = require('pg').Pool 
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'SPC',
  password: 'qwerty',
  port: 5432,
});

const getMeasurements = (request, response) => {
  pool.query('SELECT * FROM Measurement ORDER BY part_Id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getMeasurementByPartId = (request, response) => {
  const partId = request.params.partId;

  pool.query(
    'SELECT * FROM Measurement WHERE part_Id = $1',
    [partId],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createMeasurement = (request, response) => {
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
  } = request.body;

  pool.query(
    'INSERT INTO Measurement (BatchNumber, part_Id, creator, date, approved, 1Fz, 2Hxy, 3Fy, 4Fx, 5Fx) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
    [batchNumber, partId, creator, date, approved, Fz1, Hxy2, Fy3, Fx4, Fx5],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send(`Measurement added with partId: ${partId}`);
    }
  );
};

const updateMeasurement = (request, response) => {
  const partId = request.params.partId;
  const {
    batchNumber,
    creator,
    date,
    approved,
    Fz1,
    Hxy2,
    Fy3,
    Fx4,
    Fx5,
  } = request.body;

  pool.query(
    'UPDATE Measurement SET BatchNumber = $1, creator = $2, date = $3, approved = $4, 1Fz = $5, 2Hxy = $6, 3Fy = $7, 4Fx = $8, 5Fx = $9 WHERE part_Id = $10',
    [batchNumber, creator, date, approved, Fz1, Hxy2, Fy3, Fx4, Fx5, partId],
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
    'DELETE FROM Measurement WHERE part_Id = $1',
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