// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.1.6_A2;
* @section: 11.1.6;
* @assertion: "This" operator doesn't use GetValue. The operators "delete" and "typeof" can be applied to parenthesised expressions;
* @description: Applying "delete" and "typeof" operators to an undefined variable and a property of an object; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.1.6_A2",

path: "11.1.6",

description: "Applying \"delete\" and \"typeof\" operators to an undefined variable and a property of an object",

test: function testcase() {
   //CHECK#1
if (delete (x) !== true) {
  $ERROR('#1: delete (x) === true');
}

//CHECK#2
if (typeof (x) !== "undefined") {
  $ERROR('#2: typeof (x) === "undefined". Actual: ' + (typeof (x)));
}

var object = {};
//CHECK#3
if (delete (object.prop) !== true) {
  $ERROR('#3: var object = {}; delete (object.prop) === true');
}

//CHECK#4
if (typeof (object.prop) !== "undefined") {
  $ERROR('#4: var object = {}; typeof (object.prop) === "undefined". Actual: ' + (typeof (object.prop)));
}

 }
});

