
var am = require('../js/app.js');

describe("am", function() {
	it("pow", function() {
		var result;

		result = am.pow(2, 3);
		expect(result).toBe(8);
	 });

	it("pow", function() {
		var result;

		result = am.pow(5, 5);
		expect(result).toBe(3125);
	  });

	it("min", function() {
		var result;

		result = am.min(3, 4);
		expect(result).toBe(3);
	  });


	});
