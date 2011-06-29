// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4_A1.1_T2;
 * @section: 15.4.4;
 * @assertion:The Array prototype object is itself an array; its [[Class]] is "Array",
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4_A1.1_T2",

path: "TestCases/15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/S15.4.4_A1.1_T2.js",

assertion: "The Array prototype object is itself an array; its [[Class]] is \"Array\",",

description: "",

test: function testcase() {
   //CHECK#1
if (Object.prototype.toString.call(Array.prototype) !== "[object Array]") {
  $ERROR('The Array prototype object is itself an array; its' +
         '[[Class]] is "Array".');
}

 }
});

