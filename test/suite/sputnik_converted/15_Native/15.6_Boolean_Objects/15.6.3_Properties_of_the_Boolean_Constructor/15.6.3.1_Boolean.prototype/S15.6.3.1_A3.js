// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.6.3.1_A3;
 * @section: 15.6.3.1;
 * @assertion: Boolean.prototype has the attribute DontDelete;
 * @description: Checking if deleting the Boolean.prototype property fails;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.6.3.1_A3",

path: "15_Native\15.6_Boolean_Objects\15.6.3_Properties_of_the_Boolean_Constructor\15.6.3.1_Boolean.prototype\S15.6.3.1_A3.js",

assertion: "Boolean.prototype has the attribute DontDelete",

description: "Checking if deleting the Boolean.prototype property fails",

test: function testcase() {
   // CHECK#1
if (delete Boolean.prototype !== false) {
  $ERROR('#1: Boolean.prototype has the attribute DontDelete');
}

 }
});

