// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.8_A4;
 * @section: 15.8.2.8;
 * @assertion: If x is +Infinity, Math.exp(x) is +Ifinity;
 * @description: Checking if Math.exp(+Infinity) is +Ifinity
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.8_A4",

path: "15.8.2.8",

description: "Checking if Math.exp(+Infinity) is +Ifinity",

test: function testcase() {
   // CHECK#1
var x = +Infinity;
if (Math.exp(x) !== +Infinity)
{
	$ERROR("#1: 'var x = +Infinity; Math.exp(x) !== +Infinity'");
}

 }
});

