// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.1.2_A3.1;
 * @section: 15.1.1.2, 11.4.1;
 * @assertion: The Infinity is DontDelete;
 * @description: Use delete;
 * @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.1.2_A3.1",

path: "15_Native\15.1_The_Global_Object\15.1.1_Value_Properties_of_the_Global_Object\15.1.1.2_Infinity\S15.1.1.2_A3.1.js",

assertion: "The Infinity is DontDelete",

description: "Use delete",

test: function testcase() {
   // CHECK#1
if (delete Infinity !== false) {
	$ERROR('#1: delete Infinity === false. Actual: ' + (delete Infinity)); 
}

 }
});

