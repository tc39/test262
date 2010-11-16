// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.1_A7;
* @section: 12.6.1;
* @assertion: The "do-while" Statement is evaluted according to 12.6.1 and returns (normal, V, empty);
* @description: Using eval;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.1_A7",

path: "12.6.1",

description: "Using eval",

test: function testcase() {
   var __condition=0

__evaluated = eval("do eval(\"__condition++\"); while (__condition<5)");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__condition !== 5) {
	$ERROR('#1: The "do-while" statement is evaluted according to the Standard ');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__evaluated !== 4) {
	$ERROR('#2: The "do-while" statement returns (normal, V, empty)');
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

