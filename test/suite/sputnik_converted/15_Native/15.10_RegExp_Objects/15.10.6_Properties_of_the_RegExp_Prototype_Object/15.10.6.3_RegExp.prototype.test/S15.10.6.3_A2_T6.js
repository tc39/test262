// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.3_A2_T6;
* @section: 15.10.6.3;
* @assertion: A TypeError exception is thrown if the this value is not an object for which the value of the internal [[Class]] property is "RegExp";
* @description: The tested object is new Number(1.0);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.3_A2_T6",

path: "15_Native\15.10_RegExp_Objects\15.10.6_Properties_of_the_RegExp_Prototype_Object\15.10.6.3_RegExp.prototype.test\S15.10.6.3_A2_T6.js",

assertion: "A TypeError exception is thrown if the this value is not an object for which the value of the internal [[Class]] property is \"RegExp\"",

description: "The tested object is new Number(1.0)",

test: function testcase() {
   __instance = new Number(1.0);

__instance.test = RegExp.prototype.test;

//CHECK#1
try {
  $ERROR('#1.1: __instance = new Number(1.0); __instance.test = RegExp.prototype.test; __instance["test"]("message to investigate"). Actual: ' + (__instance["test"]("message to investigate")));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: __instance = new Number(1.0); __instance.test = RegExp.prototype.test; __instance["test"]("message to investigate"). Actual: ' + (e));
  }
}


 }
});

