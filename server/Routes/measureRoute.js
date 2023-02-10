import { createMeasurementsPost, getMeasurementsPosts } from '../controllers/measureController';

import express from 'express';



const router = express.Router();
router.get("/", getMeasurementsPosts);
router.post('/',  createMeasurementsPost);
//router.delete("/:id", deletePost);
//router.patch('/:id', updatePost);

export default router;