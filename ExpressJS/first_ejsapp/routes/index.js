var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express First Project',
  message: "Welcom Pankaj to your first project"
});
});

module.exports = router;
