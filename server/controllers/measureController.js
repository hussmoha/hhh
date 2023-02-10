import Measurements from "../models/measurements.js";

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
    factoryName,
    address,
    start_date,
    end_date,
  } = request.body;

  pool.query(
    "INSERT INTO Measurement (partName, partId, creator, factoryName, address, start_date, end_date) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [partName, partId, creator, factoryName, address, start_date, end_date],
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
  const {
    partName,
    partId,
    creator,
    factoryName,
    address,
    start_date,
    end_date,
  } = request.body;

  pool.query(
    "UPDATE Measurement SET partName = $1, partId = $2, creator = $3, factoryName = $4, address = $5, start_date = $6, end_date = $7 WHERE id = $8",
    [partName, partId, creator, factoryName, address, start_date, end_date, id],
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
