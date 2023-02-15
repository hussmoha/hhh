import express from 'express';
import {
  createMeasurement,
  getMeasurementById,
  getMeasurements,
  updateMeasurement,
  deleteMeasurement
} from '../controllers/measureController';

const router = express.Router();

router.get('/', getMeasurements);
router.get('/:id', getMeasurementById);
router.post('/', createMeasurement);
router.patch('/:id', updateMeasurement);
router.delete('/:id', deleteMeasurement);

export default router;
