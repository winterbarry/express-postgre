const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "vboxuser",
  database: "top_users",
  password: "davidavid",
  port: 5432, // The default port
});
