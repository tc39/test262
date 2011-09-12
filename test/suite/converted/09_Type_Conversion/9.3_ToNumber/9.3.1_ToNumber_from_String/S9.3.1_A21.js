// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The MV of DecimalDigit ::: 5 or of HexDigit ::: 5 is 5
 *
 * @section 9.3.1, 15.7.1
 * @path 09_Type_Conversion/9.3_ToNumber/9.3.1_ToNumber_from_String/S9.3.1_A21.js
 * @description Compare Number('0x5') and Number('0X5') with 5
 */

// CHECK#1
if (+("5") !== 5)  {
  $ERROR('#1: +("5") === 5. Actual: ' + (+("5")));
}

// CHECK#2
if (Number("0x5") !== 5)  {
  $ERROR('#2: Number("0x5") === 5. Actual: ' + (Number("0x5")));
}

// CHECK#3
if (Number("0X5") !== 5)  {
  $ERROR('#3: Number("0X5") === 5. Actual: ' + (Number("0X5")));
}

