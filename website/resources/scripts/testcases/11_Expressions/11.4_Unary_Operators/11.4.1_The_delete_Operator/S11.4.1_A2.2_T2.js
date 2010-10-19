// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.1_A2.2_T2;
* @section: 11.4.1;
* @assertion: If GetBase(x) doesn't have a property GetPropertyName(x), return true;
* @description: Checking Object object and Function object cases;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.1_A2.2_T2",

path: "11.4.1",

description: "Checking Object object and Function object cases",

test: function testcase() {
   //CHECK#1
function MyFunction(){}
var MyObject = new MyFunction();
if (delete MyObject.prop !== true) {
  $ERROR('#1: function MyFunction(){}; var MyObject = new MyFunction(); delete MyObject.prop === true');
}

//CHECK#2
var MyObject = new Object();
if (delete MyObject.prop !== true) {
  $ERROR('#2: var MyObject = new Object(); delete MyObject.prop === true');
}

 }
});

