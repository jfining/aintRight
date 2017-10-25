const express = require('express');
const router = express.Router();

let list_of_truths = [];

router.get("/", (req, res) => {
    res.sendfile('static/main.html');
})

module.exports = router;