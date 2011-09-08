// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * LINE FEED (U+000A) may occur between any two tokens
 *
 * @section: 7.3;
 * @path: 07_Lexical_Conventions/7.3_Line_Terminators/S7.3_A1.1_T2.js;
 * @description: Insert real LINE FEED between tokens of var x=1;
 */

//CHECK#1
var
x
=
1;
if (x !== 1) {
  $ERROR('#1: var\\nx\\n=\\n1\\n; x === 1. Actual: ' + (x));
}

