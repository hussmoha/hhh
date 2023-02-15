import express from 'express';
import {
  createCalibration,
  getCalibrationById,
  getCalibrations,
  updateCalibration,
  deleteCalibration
} from '../controllers/calibrationController';

const router = express.Router();

router.get('/', getCalibrations);
router.get('/:id', getCalibrationById);
router.post('/', createCalibration);
router.patch('/:id', updateCalibration);
router.delete('/:id', deleteCalibration);

export default router;
