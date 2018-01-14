var express = require('express');
var router = express.Router();

var conversation = require('../../../src/conversation');

router.get('/', (req, res) => {
  res.send('test...');
});

var bookCar = conversation('/book-car')
  .step('pickup-location', () => {})
  .step('car-selection', () => {})
  .step('rent-date', () => {})
  .step('leaving-location', () => {})
  .step('accept', (req, res, conversation) => {
    req.session.bookings.push({
      car: conversation['car-selection'].car,
      pickup: conversation['pickup-location']['pickup-place'],
      from: conversation['rent-date'].from,
      to: conversation['rent-date'].to,
      leaving: conversation['leaving-location']['leaving-place']
    });
  });

bookCar.mount(router);

module.exports = router;
