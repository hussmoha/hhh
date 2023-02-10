import React from "react";
import { Paper, TextField, Button, Grid } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";

function CalibrationForm() {
  const [calibrationFormData, setCalibrationFormData] = useState({
    creator: " ",
    equipment: "",
    id: "",
    date: "0",
    field5: "0",
    field6: "0",
    field7: "0",
    field8: "0",
  });

  const handleChange = (e) => {
    setCalibrationFormData({ ...calibrationFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/Calibrationposts", calibrationFormData);
      alert("Data added successfully!");
    } catch (error) {
      console.error(error);
      alert("Error adding data. Please try again later.");
    }
  };
  return (
    <Paper style={{ padding: "100px" }}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          xs={12}
          spacing={1}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Grid item xs={6}>
            <TextField
              label="Creator"
              type="string"
              value={calibrationFormData.creator}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Calibration equipment"
              type="string"
              value={calibrationFormData.equipment}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label=""
              type="date"
              value={calibrationFormData.field3}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Input 4"
              type="number"
              value={calibrationFormData.field4}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Input 5"
              type="number"
              value={calibrationFormData.field5}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Input 6"
              type="number"
              value={calibrationFormData.field6}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Input 7"
              type="number"
              value={calibrationFormData.field7}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Input 8"
              type="number"
              value={calibrationFormData.field8}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              midWidth
              size="big"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default CalibrationForm;
