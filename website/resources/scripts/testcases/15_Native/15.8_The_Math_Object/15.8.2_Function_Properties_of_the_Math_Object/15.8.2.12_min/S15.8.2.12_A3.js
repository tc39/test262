// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.12_A3;
 * @section: 15.8.2.12;
 * @assertion: +0 is considered to be larger than -0;
 * @description: Checking if Math.max(-0,+0) and Math.max(+0,-0) equals to -0;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.12_A3",

path: "15.8.2.12",

description: "Checking if Math.max(-0,+0) and Math.max(+0,-0) equals to -0",

test: function testcase() {
   // CHECK#1
if (Math.max(-0, +0) !== -0)
{
	$ERROR("#1: 'Math.max(-0, +0) !== -0'");
}

// CHECK#1
if (Math.max(+0, -0) !== -0)
{
	$ERROR("#2: 'Math.max(+0, -0) !== -0'");
}

 }
});

