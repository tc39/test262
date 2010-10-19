// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.10_A2;
 * @section: 15.8.2.10;
 * @assertion: If x is less than 0, Math.log(x) is NaN;
 * @description: Checking if Math.log(x) is NaN, where x is less than 0;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.10_A2",

path: "15.8.2.10",

description: "Checking if Math.log(x) is NaN, where x is less than 0",

test: function testcase() {
   // CHECK#1
var x = -0.000000000000001;
if (!isNaN(Math.log(x)))
{
	$ERROR("#1: 'var x=-0.000000000000001; isNaN(Math.log(x)) === false'");
}

// CHECK#2
x = -1;
if (!isNaN(Math.log(x)))
{
	$ERROR("#1: 'var x=-1; isNaN(Math.log(x)) === false'");
}

// CHECK#3
x = -Infinity;
if (!isNaN(Math.log(x)))
{
	$ERROR("#1: 'var x=-Infinity; isNaN(Math.log(x)) === false'");
}

 }
});

