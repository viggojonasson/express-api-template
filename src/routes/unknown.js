const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
    next();
});

router.get('/', function (req, res) {
    res.json({ success: false, message: 'That endpoint does not exist!' });
});

module.exports = router;
