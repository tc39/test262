// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4_A1;
* @section: 15.3.4;
* @assertion: The Function prototype object is itself a Function object (its [[Class]] is "Function");
* @description: Object.prototype.toString returns [object+[[Class]]+];
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4_A1",

path: "TestCases/15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/S15.3.4_A1.js",

assertion: "The Function prototype object is itself a Function object (its [[Class]] is \"Function\")",

description: "Object.prototype.toString returns [object+[[Class]]+]",

test: function testcase() {
   if (Object.prototype.toString.call(Function.prototype) !== "[object Function]") {
  $ERROR('#2: The Function prototype object is itself a Function ' +
         'object (its [[Class]] is "Function") (15.3.4)');
}

 }
});

