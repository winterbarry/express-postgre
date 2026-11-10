const userStorage = require("../storage/userStorage");

function indexController(req, res) {
  const usernames = userStorage.getUsernames();

  res.render("index", { usernames });
}

module.exports = indexController;
