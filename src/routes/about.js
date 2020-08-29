const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
    next();
});

router.get('/', function (req, res) {
    res.json({ success: true, message: 'API Created by x!' });
});

router.get('/test', function (req, res) {
    res.json({ success: true, message: 'This works!' });
});

module.exports = router;
