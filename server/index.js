const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

const measurementRoutes = require("./Routes/measurementRoute");

app.use(cors());
app.use(express.json());

app.use("/measurements", measurementRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
