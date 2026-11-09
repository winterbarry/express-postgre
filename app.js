const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// ?
app.get("/", (req, res) => {
  console.log("usernames will be logged here - wip");

  res.send("Welcome to the Username App!");
});

// display the username form
app.get("/new", (req, res) => {
  res.render("new");
});

// receive and log the username
app.post("/new", (req, res) => {
  console.log("username to be saved: ", req.body.username);

  res.send("Username received successfully!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
