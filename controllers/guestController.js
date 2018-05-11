var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.render('guest/home');
});

router.get('/about', (req, res) => {
    res.render('guest/about');
});

router.get('/contact', (req, res) => {
    res.render('guest/contact');
});

module.exports = router;