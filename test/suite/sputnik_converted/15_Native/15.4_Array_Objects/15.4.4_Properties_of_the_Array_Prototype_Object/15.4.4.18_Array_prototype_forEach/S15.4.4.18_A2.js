// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.18_A2;
 * @section: 15.4.4.18;
 * @assertion: array.forEach can be frozen while in progress
 * @description: Freezes array.forEach during a forEach to see if it works
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.18_A2",

path: "TestCases/15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.18_Array_prototype_forEach/S15.4.4.18_A2.js",

assertion: "array.forEach can be frozen while in progress",

description: "Freezes array.forEach during a forEach to see if it works",

test: function testcase() {
   function foo() {
  ['z'].forEach(function(){ Object.freeze(Array.prototype.forEach); });
}
foo();

 }
});

