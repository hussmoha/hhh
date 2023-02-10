import calibrationRoute from './Routes/calibrationRoute.js';

import express, { json } from 'express';
import { Client } from 'pg';

const app = express();


//middleware
 
app.use(json());

app.use("/Calibrationposts", calibrationRoute);

const client = new Client({
  user: "postgres",
  password: "admin1",
  host: "localhost",
  port: 5000,
  database: "SPC"
});

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected');
  }
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

