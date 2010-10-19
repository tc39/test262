// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.2_A4.2;
* @section: 15.4.4.2, 15.2.4.5, 11.4.1;
* @assertion: The length property of toString has the attribute DontDelete;
* @description: Checking use hasOwnProperty, delete;
* @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.2_A4.2",

path: "15.4.4.2, 15.2.4.5, 11.4.1",

description: "Checking use hasOwnProperty, delete",

test: function testcase() {
   //CHECK#1
if (Array.prototype.toString.hasOwnProperty('length') !== true) {
  $FAIL('#1: Array.prototype.toString.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.toString.hasOwnProperty('length')));
}

delete Array.prototype.toString.length;

//CHECK#2
if (Array.prototype.toString.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete Array.prototype.toString.length; Array.prototype.toString.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.toString.hasOwnProperty('length')));
}

//CHECK#3
if (Array.prototype.toString.length === undefined) {
  $ERROR('#3: delete Array.prototype.toString.length; Array.prototype.toString.length !== undefined');
}



 }
});

