// api-gateway/index.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const helmet = require('helmet');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
require('dotenv').config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/users', createProxyMiddleware({ target: 'http://users-service:3001', changeOrigin: true }));
app.use('/requests', createProxyMiddleware({ target: 'http://request-service:3002', changeOrigin: true }));

const options = {
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem')
};