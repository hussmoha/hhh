import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";

import DeleteIcon from "@mui/icons-material/Delete";
import PrintIcon from "@mui/icons-material/Print";
import { DataTable } from "../toolbox/DataTable";
import { useEffect, useState } from "react";

const Data = () => {
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/measurements");
        console.log(response.data);
        setMeasurements(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(measurements)

  return (
    <Paper>
      {measurements.map(meas => (
        <Paper
          key={meas.partId}
          variant="outlined"
          style={{ margin: "20px", border: "5px double grey" }}
          direction="column"
        >
          <Typography variant="h3">Measurement Report</Typography>
          <Grid
            item
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-end"
            style={{ paddingRight: "5vh" }}
            sx={{
              "@media print": {
                display: "none",
              },
            }}
          >
            <Button
              variant="contained"
              size="15vh"
              color="inherit"
              style={{ marginBottom: "1vh" }}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              size="large"
              color="inherit"
              startIcon={<PrintIcon />}
              onClick={() => window.print()}
            >
              Print
            </Button>
          </Grid> 
          

          <Grid item>
            <Grid
              container
              style={{ margin: "10px 0 15px 15px" }}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography variant="h5">Part ID: {meas.partId}</Typography>
              </Grid> 
              <Grid item>
                <Typography variant="h5">Drawing number: </Typography>
              </Grid>

              <Grid item>
                <Typography variant="h5">Variant: 07</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5">Department: Quality</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">Order number: </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">Gage equipment: ECLIPSE </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">Operator:</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">Date & Time: {meas.created_time} </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead
                  style={{ border: "2px solid black", backgroundColor: "#D3D3D3" }}
                >
                  <TableRow>
                    <TableCell style={{ fontSize: "1.45rem", fontWeight: "600" }}>
                      Name
                    </TableCell>
                    <TableCell style={{ fontSize: "1.45rem", fontWeight: "600" }}>
                      Value
                    </TableCell>
                    <TableCell style={{ fontSize: "1.45rem", fontWeight: "600" }}>
                      Nominal Value
                    </TableCell>
                    <TableCell style={{ fontSize: "1.45rem", fontWeight: "600" }}>
                      Upper Allowance
                    </TableCell>
                    <TableCell style={{ fontSize: "1.45rem", fontWeight: "600" }}>
                      Lower Allowance
                    </TableCell>
                    <TableCell style={{ fontSize: "1.45rem", fontWeight: "600" }}>
                      Deviation
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <DataTable
                    rowName="1. 2 point Diameter D12.4^Max"
                    value={meas.sc2_distance}
                    nominalValue={12.4}
                    upper={0.0}
                    lower={-0.1}
                    deviation={meas.sc2_distance-12.4}
                  />
                  <DataTable
                    rowName="1. 2 point Diameter D12.4^Min"

                    nominalValue={12.4}
                    upper={0.0}
                    lower={-0.1}
                  />
                  <DataTable
                    rowName="2. Distance 1. Wing Width_X"
                    nominalValue={3.7}
                    upper={0.1}
                    lower={-0.1}
                  />
                  <DataTable
                    rowName="3. Distance 2. Wing Width_X"
                    nominalValue={2.7}
                    upper={0.1}
                    lower={-0.1}
                  />
                  <DataTable
                    rowName="4. Distance 1. Wing From The Center_Y"
                    nominalValue={12.3}
                    upper={0.0}
                    lower={-0.1}
                  />
                  <DataTable
                    rowName="5. Distance 2. Wing From The Center_Y"
                    nominalValue={10.8}
                    upper={0.0}
                    lower={-0.1}
                  />
                  <DataTable
                    rowName="6. Diameter D18.4"
                    nominalValue={18.4}
                    upper={0.0}
                    lower={-0.1}
                  />
                  <DataTable
                    rowName="7. Straightness 1.Wing"
                    nominalValue={0.0}
                    upper={0.1}
                    lower={-0.1}
                  />
                  <DataTable
                    rowName="8. Concentricity D12.4_D18.4"
                    nominalValue={0.0}
                    upper={0.1}
                    lower={-0.1}
                  />
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Paper>
      )
      )
      }
    </Paper>
  );
};

export default Data;
