var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: "One Task" });
});

router.post('/login', function(req, res, next) {
  res.json({ message: "Login Sucessfully" });
});

module.exports = router;
