import React from "react";
import { Paper, TextField, Button, Grid } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function CalibrationForm() {
    const [creator, setCreator] = useState("");
    const [equipment, setEquipment] = useState("");
    const [id, setId] = useState("");
    const [date, setDate] = useState("");
    const [field5, setField5] = useState("");
    const [field6, setField6] = useState();
    const [field7, setField7] = useState("");
    const [field8, setField8] = useState("");

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    const calibration = {
        creator,
        equipment,
        id,
        date,
        field5,
        field6,
        field7,
        field8 
    };
    try {
      await axios.post("http://localhost:3001/Calibrationposts", calibration);
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
              value={creator}
              onChange={(e) => setCreator(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
          <TextField
              label="Input 5"
              type="number"
              value={field5}
              onChange={(e) => setField5(e.target.value)}
              variant="outlined"
            /> 
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              variant="outlined"
            />
          </Grid>
         
          <Grid item xs={6}>
            <TextField
              label="Input 6"
              type="number"
              value={field6}
              onChange={(e) => setField6(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
           
            <TextField
              label="Calibration equipment"
              type="string"
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Input 7"
              type="number"
              value={field7}
              onChange={(e) => setField7(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
           
          </Grid>
          <Grid item xs={12}>
          <Button variant="contained" type="submit" midWidth size="large">
          Submit
        </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default CalibrationForm;