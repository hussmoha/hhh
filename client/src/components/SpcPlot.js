import React, { useEffect, useState } from "react";
import axios from "axios";
import Plotly from "plotly.js-dist"; 
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'; 
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const SpcPlot = () => {
  const [measurements, setMeasurements] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/measurements")
      .then((response) => {
        setMeasurements(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    if (measurements.length > 0) {
      const endIndex = startIndex + 10;
      const latestMeasurements = measurements.slice(startIndex, endIndex);

      const xValues = latestMeasurements.map((item) => item.created_time);
      const yValues = latestMeasurements.map((item) => Number(item.sc2_distance));

      const data = [
        {
          type: "scatter",
          x: xValues,
          y: yValues,
          mode: "lines+markers",
          name: "SC2_Diameter12_4mm",
          line: { color: "blue", width: 2 },
          marker: { color: "blue", size: 8, symbol: "circle" },
        },
      ];

      const dataWithViolation = [
        ...data,
        {
          type: "scatter",
          x: xValues,
          y: Array(xValues.length).fill(12.3),
          mode: "lines",
          name: "Violation",
          line: { color: "red", width: 2 },
        }, 
        {
          type: "scatter",
          x: xValues,
          y: Array(xValues.length).fill(12.4),
          mode: "lines",
          name: "Nominal value",
          line: { color: "gray", width: 2, dash: "dash" },
        },
      ];

      const layout = {
        title: "SPC Chart",
        xaxis: { zeroline: false },
        yaxis: {
          zeroline: false,
          range: [12.0, 14.0],
          dtick: 0.1,
          title: "SC2_Diameter12_4mm",
        },
      };

      Plotly.newPlot("spc-chart", dataWithViolation, layout);
    }
  }, [measurements, startIndex]);

  const goToPrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const goToNext = () => {
    if (startIndex + 10 < measurements.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div>
      <div id="spc-chart" />
      <div >
        <NavigateBeforeIcon style={{ fontSize: "50px", padding: "10px", marginRight: "10px" }} onClick={goToPrevious} disabled={startIndex === 0}>
          Previous
        </NavigateBeforeIcon>
        <NavigateNextIcon style={{ fontSize: "50px", padding: "10px", marginRight: "10px" }} onClick={goToNext} disabled={startIndex + 10 >= measurements.length}>
          Next
        </NavigateNextIcon>
      </div>
    </div>
  );
};

export default SpcPlot;
