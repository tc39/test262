// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.3_A11;
* @section: 15.10.6.3;
* @assertion: The length property of the test method is 1;
* @description: Checking RegExp.prototype.test.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.3_A11",

path: "15_Native\15.10_RegExp_Objects\15.10.6_Properties_of_the_RegExp_Prototype_Object\15.10.6.3_RegExp.prototype.test\S15.10.6.3_A11.js",

assertion: "The length property of the test method is 1",

description: "Checking RegExp.prototype.test.length",

test: function testcase() {
   //CHECK#1
if (RegExp.prototype.test.hasOwnProperty("length") !== true) {
  $FAIL('#1: RegExp.prototype.test.hasOwnProperty(\'length\') === true');
}

//CHECK#2
if (RegExp.prototype.test.length !== 1) {
  $ERROR('#2: RegExp.prototype.test.length === 1. Actual: ' + (RegExp.prototype.test.length));
}


 }
});

