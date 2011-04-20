// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.3.1_A23;
 * @section: 9.3.1, 15.7.1;
 * @assertion: The MV of DecimalDigit ::: 7 or of HexDigit ::: 7 is 7;
 * @description: Compare Number('0x7') and Number('0X7') with 7;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.3.1_A23",

path: "09_Type_Conversion\9.3_ToNumber\9.3.1_ToNumber_from_String\S9.3.1_A23.js",

assertion: "The MV of DecimalDigit ::: 7 or of HexDigit ::: 7 is 7",

description: "Compare Number(\'0x7\') and Number(\'0X7\') with 7",

test: function testcase() {
   // CHECK#1
if (Number("7") !== 7)  {
  $ERROR('#1: Number("7") === 7. Actual: ' + (Number("7")));
}

// CHECK#2
if (Number("0x7") !== 7)  {
  $ERROR('#2: Number("0x7") === 7. Actual: ' + (Number("0x7")));
}

// CHECK#3
if (+("0X7") !== 7)  {
  $ERROR('#3: +("0X7") === 7. Actual: ' + (+("0X7")));
}

 }
});

