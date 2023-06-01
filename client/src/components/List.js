import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Data from "./Data";

function Row({ row }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.partId}
        </TableCell>
        <TableCell align="right">{row.created_time}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
  <Box sx={{ margin: 1 }}>
    <Data meas={row} /> 
  </Box>
</Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/measurements");
        console.log(response.data);
  
        const sortedMeasurements = response.data.sort((a, b) => {
          const aDate = parseDateString(a.created_time);
          const bDate = parseDateString(b.created_time);
  
          return bDate - aDate;
        });
  
        setMeasurements(sortedMeasurements);
      } catch (error) {
        console.error(error);
      }
    }; 

    console.log(measurements)
  
    const parseDateString = (dateString) => {
      // Split date and time components
      let [dateComponent, timeComponent] = dateString.split(',');
  
      // Swap day and month in date component
      dateComponent = dateComponent.split('/').reverse().join('/');
  
      // Replace '.' with ':' in time component
      timeComponent = timeComponent.trim().replace(/\./g, ':');
  
      return new Date(`${dateComponent} ${timeComponent}`);
    };
  
    fetchData();
  }, [measurements]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Measurement ID</TableCell>
            <TableCell align="right">Date & Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {measurements.map((measurement) => (
            <Row key={measurement.partId} row={measurement} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
