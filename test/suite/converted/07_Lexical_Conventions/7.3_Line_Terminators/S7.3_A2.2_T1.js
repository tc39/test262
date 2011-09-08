// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * CARRIAGE RETURN (U+000D) within strings is not allowed
 *
 * @section: 7.3;
 * @path: 07_Lexical_Conventions/7.3_Line_Terminators/S7.3_A2.2_T1.js;
 * @description: Insert CARRIAGE RETURN (\u000D) into string;
 * @negative;
 */

// CHECK#1
if (eval("'\u000Dstr\u000Ding\u000D'") === "\u000Dstr\u000Ding\u000D") {
  $ERROR('#1: eval("\'\\u000Dstr\\u000Ding\\u000D\'") === "\\u000Dstr\\u000Ding\\u000D"');
}

