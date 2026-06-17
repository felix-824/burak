import express from "express";
const routerAdmin = express.Router();
import restauranController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader  from "./libs/utils/uploader";

/** Restuarant */
routerAdmin.get("/", restauranController.goHome);
routerAdmin
.get("/login", restauranController.getLogin)
.post("/login", restauranController.processLogin);
routerAdmin
.get("/signup", restauranController.getSignup)   //CALL
.post("/signup",  makeUploader("members").single("memberImage"),
 restauranController.processSignup
); 
routerAdmin.get("/logout", restauranController.logout);
routerAdmin.get("/check-me", restauranController.checkAuthSession);

/** Product */
routerAdmin.get("/product/all",
    restauranController.verifyRestaurant,
    productController.getAllProducts
); 

routerAdmin.post("/product/create",
     restauranController.verifyRestaurant,
     makeUploader("products").array("productImages"),
     productController.createNewProduct
    );

routerAdmin.post("/product/:id", 
    restauranController.verifyRestaurant,
    productController.updateChosenProduct
);


/** User */
routerAdmin.get("/user/all",
     restauranController.verifyRestaurant,
     restauranController.getUsers
    );

routerAdmin.post("/user/edit",
     restauranController.verifyRestaurant,
     restauranController.updateChosenUser
    );



export default routerAdmin;