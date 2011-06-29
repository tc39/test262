// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.2_A15;
* @section: 15.2.4.2;
* @assertion: Let O be the result of calling ToObject passing the this value as the argument.
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.2_A15",

path: "TestCases/15_Native/15.2_Object_Objects/15.2.4_Properties_of_the_Object_Prototype_Object/15.2.4.2_Object.prototype.toString/S15.2.4.2_A15.js",

assertion: "Let O be the result of calling ToObject passing the this value as the argument.",

description: "",

test: function testcase() {
   if (Object.prototype.toString.call(true) !== "[object Boolean]") {
  $ERROR('Let O be the result of calling ToObject passing the this ' +
         'value as the argument.');
}

 }
});

