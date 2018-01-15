var conversation = require('../src/conversation');

let expect = require('chai').expect;

describe('New Conversation', () => {
  var conv = conversation('/book-car')
    .step('first', () => {})
    .step('second', () => {})
    .step('third', () => {})
    .step('fourth', () => {});

  it('should have 4 steps', () => {
    expect(conv._steps).to.have.lengthOf(4);
  });
});
