const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "SPC",
  password: "qwerty",
  port: 5432,
});

const getMeasurements = (request, response) => {
  pool.query("SELECT * FROM spc_schema.measurements", (error, results) => {
    if (error) {
      throw error;
    }
    const measurements = results.rows;
    response.json(measurements);
  });
};

/*
const getMeasurementByPartId = (request, response) => {
const partId = request.params.id;
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
*/

const createMeasurement = async (request, response) => {
  try {
    const {
      decision,
      score,
      scale,
      x,
      y,
      rotation,
      sc2_decision,
      sc2_valid,
      sc2_distance,
      sc3_decision,
      sc3_valid,
      sc3_distance,
      image_number,
    } = request.body;

    const newMeasure = await pool.query(
      `INSERT INTO spc_schema.measurements (decision, score, scale, x, y, rotation, sc2_decision, sc2_valid, sc2_distance, sc3_decision, sc3_valid, sc3_distance, image_number)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
      [
        decision,
        score,
        scale,
        x,
        y,
        rotation,
        sc2_decision,
        sc2_valid,
        sc2_distance,
        sc3_decision,
        sc3_valid,
        sc3_distance,
        image_number,
      ]
    );

    response.json(newMeasure);
  } catch (err) {
    console.error(err.message);
    response.status(500).json({ error: "Something went wrong" });
  }
};

const updateMeasurement = (request, response) => {
  const {
    score,
    scale,
    x,
    y,
    rotation,
    sc2_decision,
    sc2_valid,
    sc2_distance,
    sc3_decision,
    sc3_valid,
    sc3_distance,
  } = request.body;
  pool.query(
    "UPDATE spc_schema.measurements SET score = $1, scale = $2, x = $3, y = $4, rotation = $5, sc2_decision = $6, sc2_valid = $7, sc2_distance = $8, sc3_decision = $9, sc3_valid = $10, sc3_distance = $11 WHERE decision = $12",
    [
      score,
      scale,
      x,
      y,
      rotation,
      sc2_decision,
      sc2_valid,
      sc2_distance,
      sc3_decision,
      sc3_valid,
      sc3_distance,
      decision,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(200)
        .send(`Measurement modified with decision: ${decision}`);
    }
  );
};

const deleteMeasurement = (request, response) => {
  const partId = request.params.partId;

  pool.query(
    "DELETE FROM spc_schema.measurement WHERE part_Id = $1",
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
  //getMeasurementByPartId,
  createMeasurement,
  updateMeasurement,
  deleteMeasurement,
};
