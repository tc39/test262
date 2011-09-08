// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator remove leading StrWhiteSpaceChar
 *
 * @section: 15.1.2.3;
 * @path: 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.3_parseFloat/S15.1.2.3_A2_T1.js;
 * @description: StrWhiteSpaceChar :: TAB (U+0009);
 */

//CHECK#1
if (parseFloat("\u00091.1") !== parseFloat("1.1")) {
  $ERROR('#1: parseFloat("\\u00091.1") === parseFloat("1.1"). Actual: ' + (parseFloat("\u00091.1")));
}

//CHECK#2
if (parseFloat("\u0009\u0009-1.1") !== parseFloat("-1.1")) {
  $ERROR('#2: parseFloat("\\u0009\\u0009-1.1") === parseFloat("-1.1"). Actual: ' + (parseFloat("\u0009\u0009-1.1")));
}

//CHECK#3
if (parseFloat("	1.1") !== parseFloat("1.1")) {
  $ERROR('#3: parseFloat("	1.1") === parseFloat("1.1"). Actual: ' + (parseFloat("	1.1")));
}

//CHECK#4
if (parseFloat("			1.1") !== parseFloat("1.1")) {
  $ERROR('#4: parseFloat("			1.1") === parseFloat("1.1"). Actual: ' + (parseFloat("			1.1")));
}

//CHECK#5
if (parseFloat("			\u0009			\u0009-1.1") !== parseFloat("-1.1")) {
  $ERROR('#5: parseFloat("			\\u0009			\\u0009-1.1") === parseFloat("-1.1"). Actual: ' + (parseFloat("			\u0009			\u0009-1.1")));
}

//CHECK#6
if (isNaN(parseFloat("\u0009")) !== true) {
  $ERROR('#6: parseFloat("\\u0009") === Not-a-Number. Actual: ' + (parseFloat("\u0009")));
}

