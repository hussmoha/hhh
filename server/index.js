const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const Pool = require('pg').Pool
const net = require('net');

/*const HOST = '192.168.200.112';
const PORT = 2114;


const TRIGPORT = 2116;
const client2 = net.createConnection({ host: HOST, port: TRIGPORT }, () => {
  console.log('Trigged the camera');
  client2.write('TRIG');
});

const client = net.createConnection({ host: HOST, port: PORT }, () => {
  console.log('Connected to ethernet server!');


});



let responseData = [];

// Register a route handler for the "/measurement" route
app.get("/measurement", (req, res) => {
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
    sendDataToClient();
  } catch (error) {
    console.error(`Error parsing JSON data: ${error}`);
  }
});

// Set a fixed interval to send the latest data to the client
setInterval(sendDataToClient, 1000); // Change the interval as needed

// Function to send the latest data to the client
function sendDataToClient() {
  // Send the current response data as the response
  app.emit('send', "/measurement", responseData);
}


client.on('end', () => {
  console.log('Disconnected from server');
});

client.on('error', (err) => {
  console.error('Error:', err);
});

*/












const measurementRoutes = require("./Routes/measurementRoute")

app.use(cors());
app.use(express.json()); 



app.use("/api", measurementRoutes); 

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
