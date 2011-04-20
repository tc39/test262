// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.9_A6;
 * @section: 15.8.2.9;
 * @assertion: If x is greater than 0 but less than 1, Math.floor(x) is +0;
 * @description: Checking if Math.floor(x) is +0, where x is greater than 0 but less than 1; 
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.9_A6",

path: "15_Native\15.8_The_Math_Object\15.8.2_Function_Properties_of_the_Math_Object\15.8.2.9_floor\S15.8.2.9_A6.js",

assertion: "If x is greater than 0 but less than 1, Math.floor(x) is +0",

description: "Checking if Math.floor(x) is +0, where x is greater than 0 but less than 1",

test: function testcase() {
   // CHECK#1
var x = 0.000000000000001;
if (Math.floor(x) !== +0)
{
	$ERROR("#1: 'var x = 0.000000000000001; Math.floor(x) !==  +0'");
}

// CHECK#2
var x = 0.999999999999999;
if (Math.floor(x) !== +0)
{
	$ERROR("#2: 'var x = 0.999999999999999; Math.ceil(x) !== +0'");
}

// CHECK#3
var x = 0.5;
if (Math.floor(x) !== +0)
{
	$ERROR("#3: 'var x = 0.5; Math.ceil(x) !== +0'");
}

 }
});

