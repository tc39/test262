// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The MV of StrUnsignedDecimalLiteral:::. DecimalDigits is the
 * MV of DecimalDigits times 10<sup><small>-n</small></sup>, where n is the
 * number of characters in DecimalDigits
 *
 * @path 09_Type_Conversion/9.3_ToNumber/9.3.1_ToNumber_from_String/S9.3.1_A10.js
 * @description Compare Number('.12345') with +('12345')*1e-5
 */

// CHECK#1
if (Number(".12345") !== +("12345")*1e-5) {
  $ERROR('#1: Number(".12345") === +("12345")*1e-5');
}

