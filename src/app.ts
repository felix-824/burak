import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

/** 1-ENTRANCE **/
const app = express();
console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));  //form data ni o‘qish traditional apIga xizmat
app.use(express.json());  /// REST api ga xizmat Midlweri
app.use(morgan(MORGAN_FORMAT)); // Logging standard


/** 2-SESSIONS **/

/** 3-views **/                        //BACKEND da frontentni qurish
app.set("views", path.join(__dirname, "views"));  //EJS filelarni qayerdan qidirishni ko'rsatadi
app.set("view engine", "ejs"); //HTML sahifani qaysi formatda o‘qishni aytyapti

/** 4-ROUTERS **/
app.use("/admin", routerAdmin); // BSSR: EJS
app.use("/", router); //SPA: REACT            //Middleware Desigin Pattern

export default app; 