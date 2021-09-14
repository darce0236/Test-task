var Pool = require('pg').Pool;

var pool = new Pool({
  user: process.env.user,
  password: process.env.password,
  host: process.env.hostdb,
  port: process.env.portdb,
  database: process.env.database
});

module.exports = pool;
