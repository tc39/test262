// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.1_A1_T1;
* @section: 15.10.6.1;
* @assertion: The initial value of RegExp.prototype.constructor is the built-in RegExp constructor;
* @description: Compare RegExp.prototype.constructor with RegExp;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.1_A1_T1",

path: "15_Native\15.10_RegExp_Objects\15.10.6_Properties_of_the_RegExp_Prototype_Object\S15.10.6.1_A1_T1.js",

assertion: "The initial value of RegExp.prototype.constructor is the built-in RegExp constructor",

description: "Compare RegExp.prototype.constructor with RegExp",

test: function testcase() {
   //CHECK#1
if (RegExp.prototype.constructor !== RegExp) {
	$ERROR('#1: RegExp.prototype.constructor === RegExp. Actual: ' + (RegExp.prototype.constructor));
}


 }
});

