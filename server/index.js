const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const Pool = require('pg').Pool 
const net = require('net');

const HOST = '192.168.200.112';
const PORT = 2114;

const client = net.createConnection({ host: HOST, port: PORT }, () => {
  console.log('Connected to ethernet server!');
  
 
}); 



client.on('data', (data) => {
  const jsonData = JSON.parse(data.toString());
  console.log('Received data from camera:', jsonData);
});


client.on('end', () => {
  console.log('Disconnected from server');
});

client.on('error', (err) => {
  console.error('Error:', err);
}); 


const HOST2 = '192.168.200.112';
const PORT2 = 2116;
const client2 = net.createConnection({ host: HOST2, port: PORT2 }, () => { 
  console.log('Trigged the camera');
  client2.write('TRIG');
}); 











/*const measurementRoutes = require("./Routes/measurementRoute")

app.use(cors());
app.use(express.json()); 


app.use("/measurement", (request, response) => {
  response.send('<h1>Phonebook</h1>')
})
app.use("/api", measurementRoutes); */

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
