var Ind = require('../index.js');
var assert = require("assert"); 

describe("Meansible", function(){
	describe("The module Index", function(){
		it("should have a method start", function(){
			assert.equal(typeof Ind, "object");
			assert.equal(typeof Ind.start, "function");
		});
		it("start('something') should pretty print", function(){
			assert.equal(true, Ind.start("something"));
		});
	})
});
