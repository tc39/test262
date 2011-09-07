// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * EscapeSequence :: 0
 *
 * @id: S7.8.4_A5.1_T2;
 * @section: 7.8.4;
 * @description: "\u0000";
 */

//CHECK#1
if ("\u0000" !== "\0") {
  $ERROR('#1: "\\u0000" === "\\0"');
}

