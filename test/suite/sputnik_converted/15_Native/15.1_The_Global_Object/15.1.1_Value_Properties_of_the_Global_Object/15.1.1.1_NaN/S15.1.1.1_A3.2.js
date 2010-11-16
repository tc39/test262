// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.1.1_A3.2;
 * @section: 15.1.1.1, 12.6.4;
 * @assertion: The NaN is DontEnum;
 * @description: Use for-in statement;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.1.1_A3.2",

path: "15.1.1.1, 12.6.4",

description: "Use for-in statement",

test: function testcase() {
   // CHECK#1
for (var prop in this) {
  if (prop === "NaN") {
	$ERROR('#1: The NaN is DontEnum');
  }	 	
}

 }
});

