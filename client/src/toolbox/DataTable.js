import React from "react";
import { TableCell, TableRow } from "@mui/material";

export const DataTable = ({
  rowName,
  value,
  nominalValue,
  upper,
  lower,
  deviation,
}) => {
  return (
    <TableRow>
      <TableCell>{rowName}</TableCell>
      <TableCell>
        {value}
      </TableCell>
      <TableCell>
        {nominalValue != null && !isNaN(nominalValue)
          ? nominalValue.toFixed(4)
          : ""}
      </TableCell>
      <TableCell>
        {upper != null && !isNaN(upper) ? upper.toFixed(4) : ""}
      </TableCell>
      <TableCell>
        {lower != null && !isNaN(lower) ? lower.toFixed(4) : ""}
      </TableCell>
      <TableCell>
        {deviation != null && !isNaN(deviation) ? deviation.toFixed(4) : ""}
      </TableCell>
    </TableRow>
  );
};
