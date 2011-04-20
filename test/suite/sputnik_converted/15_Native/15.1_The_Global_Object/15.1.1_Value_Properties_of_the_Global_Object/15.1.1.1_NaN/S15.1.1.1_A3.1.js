// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.1.1_A3.1;
 * @section: 15.1.1.1, 11.4.1;
 * @assertion: The NaN is DontDelete;
 * @description: Use delete;
 * @strict_mode_negative
 * 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.1.1_A3.1",

path: "15_Native\15.1_The_Global_Object\15.1.1_Value_Properties_of_the_Global_Object\15.1.1.1_NaN\S15.1.1.1_A3.1.js",

assertion: "The NaN is DontDelete",

description: "Use delete",

test: function testcase() {
   // CHECK#1
if (delete NaN !== false) {
	$ERROR('#1: delete NaN === false. Actual: ' + (delete NaN)); 	
}

 }
});

