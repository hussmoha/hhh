import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTable } from "react-table"; 
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import '../MeasurementsTable.css';


const MeasurementsTable = () => {
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3001/api/measurements");
      setMeasurements(result.data);
    };

    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Creator",
        accessor: "creator",
      },
      {
        Header: "Approved",
        accessor: "approved",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Batch Number",
        accessor: "batch_number",
      },
      {
        Header: "SC1",
        accessor: "sc1",
      },
      {
        Header: "SC2",
        accessor: "sc2",
      },
      {
        Header: "SC3",
        accessor: "sc3",
      },
      {
        Header: "SC4",
        accessor: "sc4",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: measurements });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()} className="measurements-table"
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                );
              })} 
              <td>
              <Button variant="outlined" color="inherit" startIcon={<DeleteIcon />}>
        Delete
      </Button> 
      </td> 
     
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MeasurementsTable;
