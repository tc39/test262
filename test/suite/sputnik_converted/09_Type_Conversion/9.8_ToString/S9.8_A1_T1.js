// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.8_A1_T1;
 * @section: 9.8;
 * @assertion: Result of ToString conversion from undefined value is "undefined";
 * @description: Undefined values is undefined, void 0 and eval("var x"). Use explicit transformation; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.8_A1_T1",

path: "09_Type_Conversion\9.8_ToString\S9.8_A1_T1.js",

assertion: "Result of ToString conversion from undefined value is \"undefined\"",

description: "Undefined values is undefined, void 0 and eval(\"var x\"). Use explicit transformation",

test: function testcase() {
   // CHECK#1
if (String(undefined) !== "undefined") {
  $ERROR('#1: String(undefined) === "undefined". Actual: ' + (String(undefined)));
}

// CHECK#2
if (String(void 0) !== "undefined") {
  $ERROR('#2: String(void 0) === "undefined". Actual: ' + (String(void 0)));
}

// CHECK#3
if (String(eval("var x")) !== "undefined") {
  $ERROR('#3: String(eval("var x")) === "undefined" . Actual: ' + (String(eval("var x"))));
}

 }
});

