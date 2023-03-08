import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import axios from "axios";

import spc_logo from "../spc_logo.PNG";

const MeasureForm = () => {
  const [batch_number, setBatchNumber] = useState("");
  const [partId, setPartId] = useState("");
  const [creator, setCreator] = useState("");
  const [approved, setApproved] = useState("");
  const [date, setDate] = useState(new Date());
  const [sc1, setSc1] = useState("");
  const [sc2, setSc2] = useState("");
  const [sc3, setSc3] = useState("");
  const [sc4, setSc4] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const measurement = {
      batch_number,
      partId,
      creator,
      approved,
      Date,
      sc1,
      sc2,
      sc3,
      sc4,

    };

    try {
      const response = await axios.post(
        "http://localhost:3001/api/measurements",
        measurement
      );
      console.log(response.data); 
      alert("Data added successfully!");
    } catch (error) {
      console.error(error);
      alert("Error adding data. Please try again later.");
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} sx={{ p: 15 }}>
        <Grid item xs={3}>
          <TextField
            variant="outlined"
            label="Batch number"
            type={"number"}
            required
            value={batch_number}
            onChange={(e) => setBatchNumber(e.target.value)}
            margin="normal"

          />

          <TextField
            variant="outlined"
            label="Part ID"
            type={"number"}
            required
            value={partId}
            onChange={(e) => setPartId(e.target.value)}
            margin="normal"
          />
          <TextField
        variant="outlined"
        label="Date and Time"
        type="datetime-local"
        value={date}
        required
        onChange={(e) => setDate(e.target.value)}
        margin="normal"
      />
          <TextField
            variant="outlined"
            label="Creator"
            value={creator}
            type={"text"}
            required
            onChange={(e) => setCreator(e.target.value)}
            margin="normal"
          />
          <TextField
            variant="outlined"
            label="Approved"
            value={approved}
            type={"text"}
            required
            onChange={(e) => setApproved(e.target.value)}
            margin="normal"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            variant="outlined"
            label=" SC1"
            type={"number"}
            step={0.01}
            required
            value={sc1}
            onChange={(e) => setSc1(e.target.value)}
            margin="normal"
          />
          <TextField
            variant="outlined"
            label=" SC2"
            type={"number"}
            step={0.01}
            required
            value={sc2}
            onChange={(e) => setSc2(e.target.value)}
            margin="normal"
          />
          <TextField
            variant="outlined"
            label=" SC3"
            type={"number"}
            step={0.01}
            required
            value={sc3}
            onChange={(e) => setSc3(e.target.value)}
            margin="normal"
          />
          <TextField
            variant="outlined"
            label=" SC4"
            type={"number"}
            step={0.01}
            required
            value={sc4}
            onChange={(e) => setSc4(e.target.value)}
            margin="normal"
          />

        </Grid>

       

        <Button variant="contained" type="submit" fullWidth size="large">
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default MeasureForm;