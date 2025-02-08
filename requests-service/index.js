// request-service/index.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const requestRoutes = require('../routes/requestRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use('/requests', requestRoutes);

app.listen(3002, () => console.log('Request Service running on port 3002'));
