// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.11.1_A4_T3;
* @section: 11.11.1;
* @assertion: If ToBoolean(x) is true, return y;
* @description: Type(x) and Type(y) vary between primitive string and String object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.11.1_A4_T3",

path: "11_Expressions\11.11_Binary_Logical_Operators\11.11.1_Logical_AND_Operator\S11.11.1_A4_T3.js",

assertion: "If ToBoolean(x) is true, return y",

description: "Type(x) and Type(y) vary between primitive string and String object",

test: function testcase() {
   //CHECK#1
if (("0" && "-1") !== "-1") {
  $ERROR('#-1: ("0" && "-1") === "-1"');
}

//CHECK#2
if (("-1" && "x") !== "x") {
  $ERROR('#2: ("-1" && "x") === "x"');
}

//CHECK#3
var y = new String(-1);
if ((new String("-1") && y) !== y) {
  $ERROR('#3: (var y = new String(-1); (new String("-1") && y) === y');
}

//CHECK#4
var y = new String(NaN);
if ((new String("0") && y) !== y) {
  $ERROR('#4: (var y = new String(NaN); (new String("0") && y) === y');
}

//CHECK#5
var y = new String("-x");
if ((new String("x") && y) !== y) {
  $ERROR('#5: (var y = new String("-x"); (new String("x") && y) === y');
}

//CHECK#6
var y = new String(-1);
if ((new String(NaN) && y) !== y) {
  $ERROR('#6: (var y = new String(-1); (new String(NaN) && y) === y');
}

 }
});

