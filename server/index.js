const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 3001;

const net = require("net");
const axios = require("axios");

const HOST = "192.168.200.112";
const CMD_PORT = 2115;

// Import createMeasurement function from the controller module
const { createMeasurement } = require('./controllers/measureController');

// TCP connection for commands
const cmdClient = net.createConnection({ host: HOST, port: CMD_PORT }, () => {
  console.log(`Connected to command server on port ${CMD_PORT}`);
});

// handle errors on the cmdClient
cmdClient.on("error", (err) => {
  console.log(`Error on command server connection: ${err}`);
});

// handle data received from the cmdClient
let jsonData = "";

cmdClient.on("data",  (data) => {
  const dataString = data.toString(); 
  
  
  // Extract JSON data from the received string
  if (dataString.includes("{")) {
    jsonData += dataString.match(/\{.*\}/s)[0];
  }

  try {
    const parsedData = JSON.parse(jsonData);
    console.log(parsedData.MESSAGE);

    // mimic an Express.js request object
    const req = { body: parsedData };
    const res = {
      json: (data) => console.log(data),
      status: (statusCode) => ({
        json: (data) => console.log(data),
      }),
    };

    createMeasurement(req, res);

    // Reset jsonData after successfully parsing
    jsonData = "";
  } catch (e) {
    console.log(e);
  }
});

// handle the execute route
app.post("/execute", (req, res) => {
  cmdClient.write("TRIG");
  cmdClient.write("gRES");
});

const measurementRoutes = require("./Routes/measurementRoute");

app.use(express.json());
app.use("/", measurementRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
