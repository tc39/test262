// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.2_A6.1;
 * @section: 11.9.2, 11.9.3;
 * @assertion: If Type(x) as well as Type(y) is Undefined or Null, return true;
 * @description: Checking all combinations;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.2_A6.1",

path: "11_Expressions\11.9_Equality_Operators\11.9.2_The_Does_not_equals_Operator\S11.9.2_A6.1.js",

assertion: "If Type(x) as well as Type(y) is Undefined or Null, return true",

description: "Checking all combinations",

test: function testcase() {
   //CHECK#1
if ((undefined != undefined) !== false) {
  $ERROR('#1: (undefined != undefined) === false');
}

//CHECK#2
if ((void 0 != undefined) !== false) {
  $ERROR('#2: (void 0 != undefined) === false');
}

//CHECK#3
if ((undefined != eval("var x")) !== false) {
  $ERROR('#3: (undefined != eval("var x")) === false');
}

//CHECK#4
if ((undefined != null) !== false) {
  $ERROR('#4: (undefined != null) === false');
}

//CHECK#5
if ((null != void 0) !== false) {
  $ERROR('#5: (null != void 0) === false');
}

//CHECK#6
if ((null != null) !== false) {
  $ERROR('#6: (null != null) === false');
}

 }
});

