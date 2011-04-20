// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.7_A5;
 * @section: 15.8.2.7;
 * @assertion: If x is -Infinity, Math.cos(x) is NaN;
 * @description: Checking if Math.cos(-Infinity) is NaN;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.7_A5",

path: "15_Native\15.8_The_Math_Object\15.8.2_Function_Properties_of_the_Math_Object\15.8.2.7_cos\S15.8.2.7_A5.js",

assertion: "If x is -Infinity, Math.cos(x) is NaN",

description: "Checking if Math.cos(-Infinity) is NaN",

test: function testcase() {
   // CHECK#1
var x = -Infinity;
if (!isNaN(Math.cos(x)))
{
	$ERROR("#1: 'var x = -Infinity; isNaN(Math.cos(x)) === false'");
}

 }
});

