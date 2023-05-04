import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const calibrationData = [
  {
    equipment: 'ECLIPSE',
    calibrationDate: '2023-04-01',
    nextCalibrationDate: '2024-04-01',
    calibrationCertificate: 'Pass'
  }, 
  {
    equipment: 'Kamera',
    calibrationDate: '2023-04-01',
    nextCalibrationDate: '2024-04-01',
    calibrationCertificate: 'Fail'
  }, 
  {
    equipment: 'Viivoitin',
    calibrationDate: '2023-04-01',
    nextCalibrationDate: '2024-04-01',
    calibrationCertificate: 'Fail'
  }, 
  {
    equipment: 'Ruuvi',
    calibrationDate: '2023-04-01',
    nextCalibrationDate: '2024-04-01',
    calibrationCertificate: 'Pass'
  }, 
];

const CalibrationTable = () => {
  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table aria-label="calibration table">
          <TableHead>
            <TableRow>
              <TableCell>Equipment</TableCell>
              <TableCell>Calibration Date</TableCell>
              <TableCell>Next Calibration Date</TableCell>
              <TableCell>Calibration Pass/Fail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {calibrationData.map((row) => (
              <TableRow key={row.equipment}>
                <TableCell>{row.equipment}</TableCell>
                <TableCell>{row.calibrationDate}</TableCell>
                <TableCell>{row.nextCalibrationDate}</TableCell>
                <TableCell>{row.calibrationCertificate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CalibrationTable;
