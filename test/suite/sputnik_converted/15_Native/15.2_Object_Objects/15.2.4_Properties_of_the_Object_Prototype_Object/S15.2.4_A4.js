// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4_A4;
* @section: 15.2.4;
* @assertion: Since the Object prototype object is not a function, it has not [[create]] method;
* @description: Checking if creating "new Object.prototype" fails;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4_A4",

path: "15_Native\15.2_Object_Objects\15.2.4_Properties_of_the_Object_Prototype_Object\S15.2.4_A4.js",

assertion: "Since the Object prototype object is not a function, it has not [[create]] method",

description: "Checking if creating \"new Object.prototype\" fails",

test: function testcase() {
   //CHECK#1
try {
  instance = new Object.prototype;
  $FAIL('#1: Since Object prototype object is not function it has not [[create]] method');
} catch (e) {
  $PRINT(e);
}

 }
});

