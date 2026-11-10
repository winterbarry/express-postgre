const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

// GET / - Display available usernames
indexRouter.get("/", indexController);

module.exports = indexRouter;
