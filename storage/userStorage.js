const usernames = [];

function getUsernames() {
  return usernames;
}

function addUsername(username) {
  usernames.push(username);
}

module.exports = {
  getUsernames,
  addUsername,
};
