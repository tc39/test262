// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.11.4_A1;
 * @section: 15.11.4, 16;
 * @assertion: The value of the internal [[Prototype]] property of the Error prototype object is the Object prototype 
 * object(15.2.3.1);
 * @description: Get Error.prototype and compare with Object.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.11.4_A1",

path: "15_Native\15.11_Error_Objects\15.11.4_Properties_of_the_Error_Prototype_Object\S15.11.4_A1.js",

assertion: "The value of the internal [[Prototype]] property of the Error prototype object is the Object prototype",

description: "Get Error.prototype and compare with Object.prototype",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (!Object.prototype.isPrototypeOf(Error.prototype)) {
	$ERROR('#1: Object.prototype.isPrototypeOf(Error.prototype) return true. Actual: '+Object.prototype.isPrototypeOf(Error.prototype));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

