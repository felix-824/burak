import express from "express";
const routerAdmin = express.Router();
import restauranController from "./controllers/restaurant.controller";

/** Restuarant */
routerAdmin.get("/", restauranController.goHome);
routerAdmin
.get("/login", restauranController.getLogin)
.post("/login", restauranController.processLogin);
routerAdmin
.get("/signup", restauranController.getSignup)   //CALL
.post("/signup", restauranController.processSignup); 
routerAdmin.get("/logout", restauranController.logout);
routerAdmin.get("/check-me", restauranController.checkAuthSession);

/** Product */
/** User */


export default routerAdmin;