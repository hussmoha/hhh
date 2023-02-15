const pool = require("path/to/pool");

const getMeasurements = (request, response) => {
  pool.query("SELECT * FROM Measurement ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getMeasurementById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM Measurement WHERE id = $1",
    [id],
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
    partName,
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
    "INSERT INTO Measurement (partName, partId, creator, date, approved, Fz1, Hxy2, Fy3, Fx4, Fx5) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
    [partName, partId, creator, date, approved, Fz1, Hxy2, Fy3, Fx4, Fx5],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send(`Measurement added with ID: ${results.insertId}`);
    }
  );
};

const updateMeasurement = (request, response) => {
  const id = parseInt(request.params.id);
  const { partName, partId, creator, date, approved, Fz1, Hxy2, Fy3, Fx4, Fx5 } = request.body;

  pool.query(
    "UPDATE Measurement SET partName = $1, partId = $2, creator = $3, date = $4, approved = $5, Fz1 = $6, Hxy2 = $7, Fy3 = $8, Fx4 = $9, Fx5 = $10 WHERE id = $11",
    [partName, partId, creator, date, approved, Fz1, Hxy2, Fy3, Fx4, Fx5, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Measurement modified with ID: ${id}`);
    }
  );
};

const deleteMeasurement = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "DELETE FROM Measurement WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Measurement deleted with ID: ${id}`);
    }
  );
};

module.exports = {
  getMeasurements,
  getMeasurementById,
  createMeasurement,
  updateMeasurement,
  deleteMeasurement,
};
