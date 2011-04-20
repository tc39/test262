// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.3.1_A4;
* @section: 15.4.3.1;
* @assertion: The Array.prototype property has the attribute ReadOnly;
* @description: Checking if varying the Array.prototype property fails;
* @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.3.1_A4",

path: "15_Native\15.4_Array_Objects\15.4.3_Properties_of_the_Array_Constructor\15.4.3.1_Array_prototype\S15.4.3.1_A4.js",

assertion: "The Array.prototype property has the attribute ReadOnly",

description: "Checking if varying the Array.prototype property fails",

test: function testcase() {
   //CHECK#1
var x = Array.prototype;
Array.prototype = 1;
if (Array.prototype !== x) {
	$ERROR('#1: x = Array.prototype; Array.prototype = 1; Array.prototype === x. Actual: ' + (Array.prototype));
}


 }
});

