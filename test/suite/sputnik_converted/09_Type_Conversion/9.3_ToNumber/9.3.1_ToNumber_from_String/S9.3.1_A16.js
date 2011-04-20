// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.3.1_A16;
 * @section: 9.3.1, 15.7.1;
 * @assertion: The MV of DecimalDigit ::: 0 or of HexDigit ::: 0 is 0;
 * @description: Compare Number('0x0') and Number('0X0') with 0;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.3.1_A16",

path: "09_Type_Conversion\9.3_ToNumber\9.3.1_ToNumber_from_String\S9.3.1_A16.js",

assertion: "The MV of DecimalDigit ::: 0 or of HexDigit ::: 0 is 0",

description: "Compare Number(\'0x0\') and Number(\'0X0\') with 0",

test: function testcase() {
   // CHECK#1
if (Number("0") !== 0) {
  $ERROR('#1: Number("0") === 0. Actual: ' + (Number("0")));
}

// CHECK#2
if (+("0x0") !== 0) {
  $ERROR('#2: +("0x0") === 0. Actual: ' + (+("0x0")));
}

// CHECK#3
if (Number("0X0") !== 0) {
  $ERROR('#3: Number("0X0") === 0. Actual: ' + (Number("0X0")));
}

 }
});

