
var app = require('../js/app.js');
describe("call sayHello method", function() {
  it("contains spec with an expectation", function() {
var result;
result = app.sayHello('Vasya');

    expect(result).toBe('Hello,Vasya');
  });
});

