import express from 'express';
import { json } from 'body-parser';
import measureRoute from './routes/measureRoute'; 
import calibrationRoute from './routes/calibrationRoute';

const app = express();

// middleware
app.use(json());

// routes
app.use('/measurements', measureRoute); 
app.use('calibrations',calibrationRoute)

// start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
