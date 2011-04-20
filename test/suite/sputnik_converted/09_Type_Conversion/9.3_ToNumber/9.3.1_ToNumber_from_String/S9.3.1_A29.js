// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.3.1_A29;
 * @section: 9.3.1, 15.7.1;
 * @assertion: The MV of HexDigit ::: d or of HexDigit ::: D is 13;
 * @description: Compare Number('0xD'), Number('0XD'), Number('0xd') and Number('0Xd') with 13;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.3.1_A29",

path: "09_Type_Conversion\9.3_ToNumber\9.3.1_ToNumber_from_String\S9.3.1_A29.js",

assertion: "The MV of HexDigit ::: d or of HexDigit ::: D is 13",

description: "Compare Number(\'0xD\'), Number(\'0XD\'), Number(\'0xd\') and Number(\'0Xd\') with 13",

test: function testcase() {
   // CHECK#1
if (+("0xd") !== 13)  {
  $ERROR('#1: +("0xd") === 13. Actual: ' + (+("0xd")));
}

// CHECK#2
if (Number("0xD") !== 13)  {
  $ERROR('#2: Number("0xD") === 13. Actual: ' + (Number("0xD")));
}

// CHECK#3
if (Number("0Xd") !== 13)  {
  $ERROR('#3: Number("0Xd") === 13. Actual: ' + (Number("0Xd")));
}

// CHECK#4
if (Number("0XD") !== 13)  {
  $ERROR('#4: Number("0XD") === 13. Actual: ' + (Number("0XD")));
}

 }
});

