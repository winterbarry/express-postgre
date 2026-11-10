const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: "vboxuser", // or wherever the db is hosted
  user: "<role_name>",
  database: "top_users",
  password: "davidavid",
  port: 5432, // The default port
});
