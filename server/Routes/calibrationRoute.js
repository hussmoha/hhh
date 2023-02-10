import { createCalibration, getCalibrations } from '../controllers/calibrationController.js';


import express from 'express';



const router = express.Router();
router.get("/", getCalibrations);
router.post('/',  createCalibration);
//router.delete("/:id", deletePost);
//router.patch('/:id', updatePost);

export default router;