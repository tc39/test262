// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4_A3_T1;
* @section: 15.3.4;
* @assertion: The value of the internal [[Prototype]] property of the Function prototype object is the Object prototype object (15.3.4);
* @description: Checking prototype of Function.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4_A3_T1",

path: "TestCases/15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/S15.3.4_A3_T1.js",

assertion: "The value of the internal [[Prototype]] property of the Function prototype object is the Object prototype object (15.3.4)",

description: "Checking prototype of Function.prototype",

test: function testcase() {
   if (Object.getPrototypeOf(Function.prototype) !== Object.prototype) {
  $ERROR('#1: The value of the internal [[Prototype]] property of ' +
         'the Function prototype object is the Object prototype ' +
         'object (15.3.4)');
}

 }
});

