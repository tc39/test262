// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.2_A12;
* @section: 15.3.4.2;
* @assertion: The Function.prototype.toString function is not generic; it throws a TypeError exception if its this value is not a Function object.
* @negative TypeError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.2_A12",

path: "15_Native\15.3_Function_Objects\15.3.4_Properties_of_the_Function_Prototype_Object\15.3.4.2_Function.prototype.toString\S15.3.4.2_A12.js",

assertion: "The Function.prototype.toString function is not generic; it throws a TypeError exception if its this value is not a Function object.",

description: "",

test: function testcase() {
   Function.prototype.toString.call(undefined);

 }
});

