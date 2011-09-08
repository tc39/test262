// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The MV of DecimalDigit ::: 1 or of HexDigit ::: 1 is 1
 *
 * @section: 9.3.1, 15.7.1;
 * @path: 09_Type_Conversion/9.3_ToNumber/9.3.1_ToNumber_from_String/S9.3.1_A17.js;
 * @description: Compare Number('0x1') and Number('0X1') with 1;
 */

// CHECK#1
if (Number("1") !== 1)  {
  $ERROR('#1: Number("1") === 1. Actual: ' + (Number("1")));
}

// CHECK#2
if (Number("0x1") !== 1)  {
  $ERROR('#2: Number("0x1") === 1. Actual: ' + (Number("0x1")));
}

// CHECK#3
if (+("0X1") !== 1)  {
  $ERROR('#3: +("0X1") === 1. Actual: ' + (+("0X1")));
}

