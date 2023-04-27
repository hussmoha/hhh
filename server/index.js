const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 3001;
const Pool = require("pg").Pool;
const net = require("net");
const axios = require("axios");

const HOST = "192.168.200.112";
const START_PORT = 2114;
const CMD_PORT = START_PORT + 1;
const TRIG_PORT = START_PORT + 1;

// TCP connection for commands

const cmdClient = net.createConnection({ host: HOST, port: CMD_PORT }, () => {
  console.log(`Connected to command server on port ${CMD_PORT}`);
});

// handle errors on the cmdClient
cmdClient.on("error", (err) => {
  console.log(`Error on command server connection: ${err}`);
});

// handle data received from the cmdClient
cmdClient.on("data", (data) => {
  console.log(`Data received from command server: ${data}`);
});

// handle the execute route
app.post("/execute", (req, res) => {
  cmdClient.write("TRIG");

  cmdClient.once("data", (data) => {
    const dataString = data.toString();
    cmdClient.write("gRES");

    cmdClient.once("data", (result) => {
      const resultString = result.toString();
      const measurements = resultString.split(";");

      const dataToSend = measurements.map((measurement) => {
        return { data: measurement };
      });

      axios
        .post("http://localhost:3001/measurement", dataToSend)
        .then(() => {
          res.send("Measurement created successfully");
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send("Error creating measurement");
        });
    });
  });
});

// handle the close route
app.post("/close", (req, res) => {
  cmdClient.end(() => {
    console.log("Command server connection closed");
    res.send("Command server connection closed");
  });
});

//console.log(data.toString())
// Send gRES command to get the result

/*
// TCP connection for image trigger
const trigClient = net.createConnection({ host: HOST, port: TRIG_PORT }, () => {
  console.log(`Connected to image trigger server on port ${TRIG_PORT}`);
});

// Trigger the camera
app.post("/trigger", (req, res) => {
  trigClient.write('TRIG');
  trigClient.write('gRES');
});

const client = net.createConnection({ host: HOST, port: START_PORT }, () => {
  console.log(`Connected to ethernet server on port ${START_PORT}`);
});

let responseData = [];

// Register a route handler for the "/measurements" route
app.get("/measurements", (req, res) => {
  // Send the current response data as the response
  res.json(responseData); 
});

// Listen for incoming data on the socket connection
client.on("data", (data) => {
  try {
    // Attempt to parse the incoming data as JSON
    const jsonData = JSON.parse(data.toString());

    // Update the response data with the new data
    responseData.push(jsonData);

    // Send the latest data to the client
    
  } catch (error) {
    console.error(`Error parsing JSON data: ${error}`);
  }
});
*/

// Handle errors on the command connection
cmdClient.on("error", (err) => {
  console.error("Error:", err);
});

// Handle errors on the trigger connection

const measurementRoutes = require("./Routes/measurementRoute");
app.use(cors());
app.use(express.json());
app.use("/", measurementRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
