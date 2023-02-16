import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import spc_logo from "../spc_logo.PNG";

const MeasureForm = () => {
  const [batchNumber, setBatchNumber] = useState("");
  const [partId, setPartId] = useState("");
  const [creator, setCreator] = useState("");
  const [approved, setApproved] = useState("");
  const [Date, setDate] = useState("");
  const [Fz1, setFz1] = useState("");
  const [Hxy2, setHxy2] = useState("");
  const [Fy3, setFy3] = useState("");
  const [Fx4, setFx4] = useState("");
  const [Fx5, setFx5] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const measurement = {
      batchNumber,
      partId,
      creator,
      approved,
      Date,
      Fz1,
      Hxy2,
      Fy3,
      Fx4,
      Fx5,
    };
  
    try {
      const response = await axios.post(
        "http://localhost:3001/measurements",
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
            value={batchNumber}
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
            label="Date"
            type="date"
            value={Date}
            required
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
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
            label=" RPS 1Fz"
            type={"number"}
            required
            value={Fz1}
            onChange={(e) => setFz1(e.target.value)}
            margin="normal"
          />
          <TextField
            variant="outlined"
            label=" RPS 2Hxy"
            type={"number"}
            required
            value={Hxy2}
            onChange={(e) => setHxy2(e.target.value)}
            margin="normal"
          />
          <TextField
            variant="outlined"
            label="RPS 3Fy"
            type={"number"}
            required
            value={Fy3}
            onChange={(e) => setFy3(e.target.value)}
            margin="normal"
          />
          <TextField
            variant="outlined"
            label=" RPS 4Fx"
            type={"number"}
            required
            value={Fx4}
            onChange={(e) => setFx4(e.target.value)}
            margin="normal"
          />
          <TextField
            variant="outlined"
            label="RPS 5Fx"
            type={"number"}
            required
            value={Fx5}
            onChange={(e) => setFx5(e.target.value)}
            margin="normal"
          />
        </Grid>

        <img
          width={"400px"}
        
          src={spc_logo}
          alt="spc logo"
          style={{ margin: "30px 0px 10px 100px", display: "flex" }}
        />

        <Button variant="contained" type="submit" fullWidth size="large">
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default MeasureForm;