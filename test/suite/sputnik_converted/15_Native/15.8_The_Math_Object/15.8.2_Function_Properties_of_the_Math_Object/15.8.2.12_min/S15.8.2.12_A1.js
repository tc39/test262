// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.12_A1;
 * @section: 15.8.2.12;
 * @assertion: If no arguments are given, Math.min() is +Infinity;
 * @description: Checking if Math.min() equals to +Infinity;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.12_A1",

path: "15.8.2.12",

description: "Checking if Math.min() equals to +Infinity",

test: function testcase() {
   // CHECK#1
if (Math.min() != +Infinity)
{
	$ERROR("#1: 'Math.min() != +Infinity'");
}

 }
});

