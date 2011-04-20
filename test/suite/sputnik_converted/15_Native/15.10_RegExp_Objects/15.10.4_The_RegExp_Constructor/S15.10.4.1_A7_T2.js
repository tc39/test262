// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.4.1_A7_T2;
* @section: 15.10.4.1;
* @assertion: The [[Prototype]] property of the newly constructed object is set to the original RegExp prototype object, the one that is the initial value of RegExp.prototype;
* @description: Checking [[Prototype]] property of the newly constructed object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.4.1_A7_T2",

path: "15_Native\15.10_RegExp_Objects\15.10.4_The_RegExp_Constructor\S15.10.4.1_A7_T2.js",

assertion: "The [[Prototype]] property of the newly constructed object is set to the original RegExp prototype object, the one that is the initial value of RegExp.prototype",

description: "Checking [[Prototype]] property of the newly constructed object",

test: function testcase() {
   __re = new RegExp();

//CHECK#1
if (RegExp.prototype.isPrototypeOf(__re) !== true) {
	$ERROR('#1: __re = new RegExp(); RegExp.prototype.isPrototypeOf(__re) === true. Actual: ' + (RegExp.prototype.isPrototypeOf(__re)));
}


 }
});

