// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.1.2.4_A2.7;
* @section: 15.1.2.4, 11.2.2;
* @assertion: The isNaN property can't be used as constructor;
* @description: If property does not implement the internal [[Construct]] method, throw a TypeError exception;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.4_A2.7",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.4_isNaN\S15.1.2.4_A2.7.js",

assertion: "The isNaN property can\'t be used as constructor",

description: "If property does not implement the internal [[Construct]] method, throw a TypeError exception",

test: function testcase() {
   //CHECK#1

try {
  new isNaN();
  $ERROR('#1.1: new isNaN() throw TypeError. Actual: ' + (new isNaN()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: new isNaN() throw TypeError. Actual: ' + (e));
  }
}

 }
});

