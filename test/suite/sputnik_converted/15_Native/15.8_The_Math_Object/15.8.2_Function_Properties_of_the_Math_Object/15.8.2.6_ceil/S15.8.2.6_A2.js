// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.6_A2;
 * @section: 15.8.2.6;
 * @assertion: If x is +0, Math.ceil(x) is +0;
 * @description: Checking if Math.ceil(x) is +0, where x is +0; 
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.6_A2",

path: "15_Native\15.8_The_Math_Object\15.8.2_Function_Properties_of_the_Math_Object\15.8.2.6_ceil\S15.8.2.6_A2.js",

assertion: "If x is +0, Math.ceil(x) is +0",

description: "Checking if Math.ceil(x) is +0, where x is +0",

test: function testcase() {
   // CHECK#1
var x = +0;
if (Math.ceil(x) !== +0)
{
	$ERROR("#1: 'var x = +0; Math.ceil(x) !== +0'");
}

 }
});

