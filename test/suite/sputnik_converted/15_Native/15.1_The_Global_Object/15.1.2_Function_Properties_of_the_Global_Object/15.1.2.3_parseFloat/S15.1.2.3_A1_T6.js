// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.3_A1_T6;
 * @section: 15.1.2.3, 9.8;
 * @assertion: Operator use ToString;
 * @description: Checking for String object;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.3_A1_T6",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.3_parseFloat\S15.1.2.3_A1_T6.js",

assertion: "Operator use ToString",

description: "Checking for String object",

test: function testcase() {
   //CHECK#1
if (parseFloat(new String("-1.1")) !== parseFloat("-1.1")) {
  $ERROR('#1: parseFloat(new String("-1.1")) === parseFloat("-1.1"). Actual: ' + (parseFloat(new String("-1.1"))));
}

//CHECK#2
if (parseFloat(new String("Infinity")) !== parseFloat("Infinity")) {
  $ERROR('#2: parseFloat(new String("Infinity")) === parseFloat("Infinity"). Actual: ' + (parseFloat(new String("Infinity"))));
}

//CHECK#3
if (String(parseFloat(new String("NaN"))) !== "NaN") {
  $ERROR('#3: String(parseFloat(new String("NaN"))) === "NaN". Actual: ' + (String(parseFloat(new String("NaN")))));
}

//CHECK#4
if (parseFloat(new String(".01e+2")) !== parseFloat(".01e+2")) {
  $ERROR('#4: parseFloat(new String(".01e+2")) === parseFloat(".01e+2"). Actual: ' + (parseFloat(new String(".01e+2"))));
}

//CHECK#5
if (String(parseFloat(new String("false"))) !== "NaN") {
  $ERROR('#5: String(parseFloat(new String("false"))) === "NaN". Actual: ' + (String(parseFloat(new String("false")))));
}

 }
});

