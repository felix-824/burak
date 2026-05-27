import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";

/** 1-ENTRANCE **/
const app = express();
console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));  //form data ni o‘qish
app.use(express.json());


/** 2-SESSIONS **/

/** 3-views **/
app.set("views", path.join(__dirname, "views"));  //EJS filelarni qayerdan qidirishni ko'rsatadi
app.set("view engine", "ejs"); //HTML sahifani qaysi formatda o‘qishni aytyapti

/** 4-ROUTERS **/
app.use("/admin", routerAdmin); // BSSR: EJS
app.use("/", router); //SPA: REACT            //Middleware Desigin Pattern

export default app; 