import express from "express";

import ejs from "ejs";


import userRouter from "./router/user.js"

import { router } from "./router/product.js"

const app = express();

app.set("view engine", "ejs");
app.set("views", "./view");




app.use("/user", userRouter);

app.use("/product", router);




app.get("/", (req, res) => {
    res.send("hey there")
})

app.listen(8000, () => {
    console.log(`Server successfully launched  `);
})