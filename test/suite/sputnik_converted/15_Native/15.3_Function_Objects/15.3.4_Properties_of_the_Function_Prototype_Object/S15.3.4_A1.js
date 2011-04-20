// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4_A1;
* @section: 15.3.4;
* @assertion: The Function prototype object is itself a Function object (its [[Class]] is "Function");
* @description: first we delete Function.prototype.toString cause it overrides Object prototype toString. 
* Object.prototype.toString returns [object+[[class]]+];
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4_A1",

path: "15_Native\15.3_Function_Objects\15.3.4_Properties_of_the_Function_Prototype_Object\S15.3.4_A1.js",

assertion: "The Function prototype object is itself a Function object (its [[Class]] is \"Function\")",

description: "first we delete Function.prototype.toString cause it overrides Object prototype toString.",

test: function testcase() {
   delete Function.prototype.toString;

//CHECK#1
if (Function.prototype.toString() !== "[object "+"Function"+"]") {
  $ERROR('#1: The Function prototype object is itself a Function object (its [[Class]] is "Function")');
}

 }
});

