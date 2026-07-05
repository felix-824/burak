import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "session",
});


/** 1-ENTRANCE **/
const app = express();
console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({extended: true}));  //form data ni o‘qish traditional apIga xizmat
app.use(express.json());  /// REST api ga xizmat Midlweri
app.use(cookieParser());
app.use(morgan(MORGAN_FORMAT)); // Logging standard


/** 2-SESSIONS **/
//REQ.+SESSION > tamgani yaratdi + tamgani tasdiqladi
app.use(
    session({
        secret:  String(process.env.SESSION_SECRET),
        cookie: {
            maxAge: 1000 * 3600 * 6, //6h
        },
        store: store,
        resave: true,            //Har requestda sessionni qayta saqlaydi.
        saveUninitialized: true  //Hali login qilmagan odam uchun ham session yaratadi.
    })
);
app.use(function (req, res, next) {
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member;  //EJS ichida ishlatish uchun.
    next();
});

/** 3-views **/                        //BACKEND da frontentni qurish
app.set("views", path.join(__dirname, "views"));  //EJS filelarni qayerdan qidirishni ko'rsatadi
app.set("view engine", "ejs"); //HTML sahifani qaysi formatda o‘qishni aytyapti

/** 4-ROUTERS **/
app.use("/admin", routerAdmin); // SSR: EJS
app.use("/", router); //SPA: REACT            //Middleware Desigin Pattern

export default app; 

