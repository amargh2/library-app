var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('test')
  res.send('and i dont care about the things i have');
  next()
});

router.get('/cool', function(req, res, next) {
  res.send('You are very cool!')
  next()
})

module.exports = router;
