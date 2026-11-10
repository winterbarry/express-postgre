const { Router } = require("express");
const newController = require("../controllers/newController");

const newRouter = Router();

newRouter.get("/", newController.getNewUsername);

newRouter.post("/", newController.postNewUsername);

module.exports = newRouter;
