const express = require('express');
const router = express.Router();
const DbOperations=require("../database/DbOperation");

router.get("/searchresult", (req, res) => {
    res.render('resultSearch');
})
router.post("/searchresult", (req, res) => {
    const data = req.body
    DbOperations.result(data, res);
})

router.get("/result", (req, res) => {
    res.render('studentResult')
})

module.exports = router