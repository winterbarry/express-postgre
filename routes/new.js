const { Router } = require("express");

const newRouter = Router();

const {
  createUsernameGet,
  createUsernamePost,
} = require("../controllers/indexController");

newRouter.get("/", createUsernameGet);

newRouter.post("/", createUsernamePost);

module.exports = newRouter;
