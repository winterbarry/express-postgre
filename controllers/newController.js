const userStorage = require("../storage/userStorage");

// Display the form
function getNewUsername(req, res) {
  res.render("new");
}

// Process the submitted username
function postNewUsername(req, res) {
  const { username } = req.body;

  userStorage.addUsername(username);

  res.redirect("/");
}

module.exports = {
  getNewUsername,
  postNewUsername,
};
