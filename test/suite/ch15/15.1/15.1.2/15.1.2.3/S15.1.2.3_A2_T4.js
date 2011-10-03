// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator remove leading StrWhiteSpaceChar
 *
 * @path 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.3_parseFloat/S15.1.2.3_A2_T4.js
 * @description StrWhiteSpaceChar :: FF (U+000C)
 */

//CHECK#1
if (parseFloat("\u000C1.1") !== parseFloat("1.1")) {
  $ERROR('#1: parseFloat("\\u000C1.1") === parseFloat("1.1"). Actual: ' + (parseFloat("\u000C1.1")));
}

//CHECK#2
if (parseFloat("\u000C\u000C-1.1") !== parseFloat("-1.1")) {
  $ERROR('#2: parseFloat("\\u000C\\u000C-1.1") === parseFloat("-1.1"). Actual: ' + (parseFloat("\u000C\u000C-1.1")));
}

//CHECK#3
if (isNaN(parseFloat("\u000C")) !== true) {
  $ERROR('#3: parseFloat("\\u000C") === Not-a-Number. Actual: ' + (parseFloat("\u000C")));
}

