const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const router = require("./routes");
require('dotenv').config();

app.use(cors());

app.use(express.json());

app.use("/api/v1", router);

app.listen(port, () => console.log(`Server is running in port ${port}`));