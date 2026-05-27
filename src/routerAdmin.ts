import express from "express";
const routerAdmin = express.Router();
import restauranController from "./controllers/restaurant.controller";

routerAdmin.get("/", restauranController.goHome);

routerAdmin.get("/login", restauranController.getLogin);

routerAdmin.get("/signup", restauranController.getSignup);

export default routerAdmin;