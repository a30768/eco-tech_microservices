// config/db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;

// O arquivo db.js foi atualizado para otimizar a conexão com o PostgreSQL, incluindo pooling de conexões e timeouts adequados. 
// Agora a configuração da base de dados está alinhada com a arquitetura de microservices.