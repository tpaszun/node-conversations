var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.bookings === undefined) {
    req.session.bookings = [];
  }

  res.render('index', {
    title: 'node-conversations',
    bookings: req.session.bookings,
    conversations: req.session.conversations || []
  });
});

module.exports = router;
