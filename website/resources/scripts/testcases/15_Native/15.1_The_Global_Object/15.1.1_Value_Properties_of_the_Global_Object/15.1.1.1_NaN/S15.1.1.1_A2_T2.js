// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.1.1_A2_T2;
 * @section: 15.1.1.1, 11.4.3;
 * @assertion: The NaN is not ReadOnly;
 * @description: Checking typeof Operator; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.1.1_A2_T2",

path: "15.1.1.1, 11.4.3",

description: "Checking typeof Operator",

test: function testcase() {
   // CHECK#1
NaN = true;
if (typeof(NaN) !== "boolean") {
	$ERROR('#1: NaN = true; typeof(NaN) === "boolean". Actual: ' + (typeof(NaN))); 
}

 }
});

