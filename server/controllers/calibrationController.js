import Calibrations from "../models/calibrations.js";

export const getCalibrations = async (req, res) => {
  try {
    const calibrations = await Calibrations.find();
    res.status(200).json(calibrations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCalibration = async (req, res) => {
  const calibration = req.body;
  const newCalibration = new Calibrations(calibration);

  try {
    await newCalibration.save();
    res.status(201).json(newCalibration);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCalibration = async (req, res) => {
  const { id } = req.params;
  const calibration = req.body;

  try {
    await Calibrations.findByIdAndUpdate(id, calibration);
    res.status(200).json({ message: "Updated" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCalibration = async (req, res) => {
  const { id } = req.params;

  try {
    await Calibrations.findByIdAndRemove(id);
    res.status(200).json({ message: "Calibration is removed" });
  } catch (error) {
    res.status(404).json("Failed");
  }
};
