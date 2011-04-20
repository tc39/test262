// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.7_A7;
* @section: 8.7;
* @assertion: Passing arguments by reference do change values of reference to be passed;
* @description: Add new property to original variable inside function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.7_A7",

path: "08_Types\8.7_The_Reference_Type\S8.7_A7.js",

assertion: "Passing arguments by reference do change values of reference to be passed",

description: "Add new property to original variable inside function",

test: function testcase() {
   var n = {};
var m = n;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof m !== "object") {
  $ERROR('#1: var n = {}; var m = n; typeof m === "object". Actual: ' + (typeof m));
}
//
//////////////////////////////////////////////////////////////////////////////

function populateAge(person){person.age = 50;}

populateAge(m);

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (n.age !== 50) {
  $ERROR('#2: var n = {}; var m = n; function populateAge(person){person.age = 50;} populateAge(m); n.age === 50. Actual: ' + (n.age));
}

//
//////////////////////////////////////////////////////////////////////////////


 }
});

