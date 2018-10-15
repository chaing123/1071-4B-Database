var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { id: '404412362', name: '江孟哲' });
});

module.exports = router;