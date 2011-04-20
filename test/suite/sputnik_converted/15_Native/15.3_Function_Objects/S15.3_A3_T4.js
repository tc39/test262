// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3_A3_T4;
* @section: 15.3, 10.2.3;
* @assertion: Since when call is used for Function constructor themself new function instance creates 
* and then first argument(thisArg) should be ignored;
* @description: First argument is this, and this have needed variable;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3_A3_T4",

path: "15_Native\15.3_Function_Objects\S15.3_A3_T4.js",

assertion: "Since when call is used for Function constructor themself new function instance creates",

description: "First argument is this, and this have needed variable",

test: function testcase() {
   var f=Function.call(this, "return planet;");

//CHECK#1
if (f() !== undefined) {
  $ERROR('#1: ');
}  

var planet="mars";

//CHECK#2
if (f() !== "mars") {
  $ERROR('#2: ');
}

 }
});

