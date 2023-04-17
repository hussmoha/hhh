const express = require('express');
const router = express.Router();

const {
  getMeasurements,
  getMeasurementByPartId,
  createMeasurement,
  updateMeasurement,
  deleteMeasurement,
} = require('../controllers/measureController');

router.get('/measurements', getMeasurements);
//router.get('/measurements/:partId', getMeasurementByPartId);
router.post('/measurements/create', createMeasurement);
router.put('/measurements/:partId', updateMeasurement);
router.delete('/measurements/:partId', deleteMeasurement);

module.exports = router;
