const { Pool } = require('pg');
const pool = new Pool({
  user:'antoine',
  host: 'localhost',
  database: 'samplenodeprojectdatabase',
  password: 'password',
  port: 5432
});

module.exports = pool;