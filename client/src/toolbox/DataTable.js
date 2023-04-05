import React from 'react'
import { Button, TableCell, TableRow, Tooltip } from "@mui/material";


export const DataTable = ({ rowName, value, nominalValue, upper, lower, deviation }) => {
    
  
    return (
      <TableRow>
        <TableCell>{rowName}</TableCell>
        <TableCell>{value != null && !isNaN(value) ? value.toFixed(4) : ''}</TableCell>
        <TableCell>{nominalValue != null && !isNaN(nominalValue) ? nominalValue.toFixed(4) : ''}</TableCell>
<TableCell>{upper != null && !isNaN(upper) ? upper.toFixed(4) : ''}</TableCell> 
<TableCell>{lower != null && !isNaN(lower) ? lower.toFixed(4) : ''}</TableCell>
<TableCell>{deviation != null && !isNaN(deviation) ? deviation.toFixed(4) : ''}</TableCell>

      </TableRow>
    );
  };
  

