import express from "express";

export const router = express.Router();

router.get('/', (req, res) => {
    res.send("<h1>Products</h1>");
})

router.get('/mobiles', (req, res) => {
    res.send("<h1>Mobiles</h1>")
})


router.get('/TV', (req, res) => {
    res.send("<h1>TV</h1>")
})



