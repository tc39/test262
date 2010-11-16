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

path: "15.2.4.3, 13.2",

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

