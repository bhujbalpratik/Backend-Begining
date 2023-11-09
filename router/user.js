import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    return res.send("user router home page")
})

router.get('/login', (req, res) => {
    return res.render("login", {
        title: "LoginPage"
    })
})
export default router;