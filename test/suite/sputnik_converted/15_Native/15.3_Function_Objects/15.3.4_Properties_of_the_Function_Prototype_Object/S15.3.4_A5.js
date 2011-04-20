// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4_A5;
* @section: 15.3.4;
* @assertion: The Function prototype object is itself a Function object without [[create]] property;
* @description: Checking if creating "new Function.prototype object" fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4_A5",

path: "15_Native\15.3_Function_Objects\15.3.4_Properties_of_the_Function_Prototype_Object\S15.3.4_A5.js",

assertion: "The Function prototype object is itself a Function object without [[create]] property",

description: "Checking if creating \"new Function.prototype object\" fails",

test: function testcase() {
   //CHECK#
try {
  var obj = new Function.prototype;
  $FAIL('#1: The Function prototype object is itself a Function object without [[create]] property: '+e);
} catch (e) {
  $PRINT("#1.1: The Function prototype object is itself a Function object without [[create]] property "+e);

}

 }
});

