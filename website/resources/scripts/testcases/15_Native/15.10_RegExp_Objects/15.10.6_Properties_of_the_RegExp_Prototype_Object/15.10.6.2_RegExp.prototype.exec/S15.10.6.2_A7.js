// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.2_A7;
* @section: 15.10.6.2, 13.2;
* @assertion: RegExp.prototype.exec can't be used as constructor;
* @description: Checking if creating the RegExp.prototype.exec object fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.2_A7",

path: "15.10.6.2, 13.2",

description: "Checking if creating the RegExp.prototype.exec object fails",

test: function testcase() {
   __FACTORY = RegExp.prototype.exec;

try {
  __instance = new __FACTORY;
  $ERROR('#1.1: __FACTORY = RegExp.prototype.exec throw TypeError. Actual: ' + (__instance));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: __FACTORY = RegExp.prototype.exec throw TypeError. Actual: ' + (e));
  }
}

 }
});

