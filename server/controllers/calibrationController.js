const Pool = require('pg').Pool 
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'SPC',
    password: 'qwerty',
    port: 5432,
  })

const getCalibrations = (request, response) => {
  pool.query("SELECT * FROM Measurement ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCalibrationById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM Calibration WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createCalibration = (request, response) => {
  const { creator, equipment, id, date, field5, field6, field7, field8 } =
    request.body;

  pool.query(
    "INSERT INTO Calibration (creator, equipment, id, date, field5, field6, field7, field8 ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [creator, equipment, id, date, field5, field6, field7, field8],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send(`Calibration added with ID: ${results.insertId}`);
    }
  );
};

const updateCalibration = (request, response) => {
  const Id = parseInt(request.params.id);
  const {
    creator,
        equipment,
        id,
        date,
        field5,
        field6,
        field7,
        field8 
  } = request.body;

  pool.query(
    "UPDATE Measurement SET creator = $1, id = $2, date = $3, field5 = $4, field6 = $5, field7 = $6, field8 = $7 WHERE id = $11",
    [creator,
        equipment,
        id,
        date,
        field5,
        field6,
        field7,
        field8 ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Calibration modified with ID: ${Id}`);
    }
  );
};

const deleteCalibration = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "DELETE FROM Calibration WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Calibration deleted with ID: ${id}`);
    }
  );
};

module.exports = {
  getCalibrations,
  getCalibrationById,
  createCalibration,
  updateCalibration,
  deleteCalibration,
};