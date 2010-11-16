// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.11.1_A3_T3;
* @section: 11.11.1;
* @assertion: If ToBoolean(x) is false, return x;
* @description: Type(x) and Type(y) vary between primitive string and String object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.11.1_A3_T3",

path: "11.11.1",

description: "Type(x) and Type(y) vary between primitive string and String object",

test: function testcase() {
   //CHECK#1
if (("" && "1") !== "") {
  $ERROR('#1: ("" && "1") === ""');
}

//CHECK#2
if (("" && new String("1")) !== "") {
  $ERROR('#2: ("" && new String("1")) === ""');
}

 }
});

