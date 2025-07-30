var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: "Hello from Node backend on 3000!" });
});

module.exports = router;
