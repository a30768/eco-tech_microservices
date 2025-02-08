// users-service/index.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use('/users', userRoutes);

app.listen(3001, () => console.log('Users Service running on port 3001'));
