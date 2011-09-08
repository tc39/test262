// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * HORIZONTAL TAB (U+0009) may occur within strings
 *
 * @section: 7.2, 7.8.4;
 * @path: 07_Lexical_Conventions/7.2_White_Space/S7.2_A2.1_T1.js;
 * @description: Use HORIZONTAL TAB(\u0009 and \t);
 */

// CHECK#1
if (eval("'\u0009str\u0009ing\u0009'") !== "\u0009str\u0009ing\u0009") {
  $ERROR('#1: eval("\'\\u0009str\\u0009ing\\u0009\'") === "\\u0009str\\u0009ing\\u0009"');
}

//CHECK#2
if (eval("'\tstr\ting\t'") !== "\tstr\ting\t") {
  $ERROR('#2: eval("\'\\tstr\\ting\\t\'") === "\\tstr\\ting\\t"');
}

