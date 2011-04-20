// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.3_A7;
* @section: 15.2.4.3, 13.2;
* @assertion: Object.prototype.toLocaleString can't be used as a constructor;
* @description: Checking if creating "new Object.prototype.toLocaleString" fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.3_A7",

path: "15_Native\15.2_Object_Objects\15.2.4_Properties_of_the_Object_Prototype_Object\15.2.4.3_Object.prototype.toLocaleString\S15.2.4.3_A7.js",

assertion: "Object.prototype.toLocaleString can\'t be used as a constructor",

description: "Checking if creating \"new Object.prototype.toLocaleString\" fails",

test: function testcase() {
   var FACTORY = Object.prototype.toLocaleString;

try {
  instance = new FACTORY;
  $FAIL('#1: Object.prototype.toLocaleString can\'t be used as a constructor');
} catch (e) {
  $PRINT(e);

}

 }
});

