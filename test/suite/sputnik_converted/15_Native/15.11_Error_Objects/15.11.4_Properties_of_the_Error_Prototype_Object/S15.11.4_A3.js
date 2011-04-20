// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.11.4_A3;
* @section: 15.11.4, 16;
* @assertion: Since Error prototype object is not function it has not [[call]] method;
* @description: Checking if call of Error prototype as a function fails;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.11.4_A3",

path: "15_Native\15.11_Error_Objects\15.11.4_Properties_of_the_Error_Prototype_Object\S15.11.4_A3.js",

assertion: "Since Error prototype object is not function it has not [[call]] method",

description: "Checking if call of Error prototype as a function fails",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	Error.prototype();
	$FAIL('#1: "Error.prototype()" lead to throwing exception');
} catch (e) {}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

