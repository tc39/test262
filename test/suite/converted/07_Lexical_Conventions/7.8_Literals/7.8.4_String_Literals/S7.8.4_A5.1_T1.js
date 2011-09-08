// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * EscapeSequence :: 0
 *
 * @section: 7.8.4;
 * @path: 07_Lexical_Conventions/7.8_Literals/7.8.4_String_Literals/S7.8.4_A5.1_T1.js;
 * @description: String.fromCharCode(0x0000);
 */

//CHECK#1
if (String.fromCharCode(0x0000) !== "\0") {
  $ERROR('#1: String.fromCharCode(0x0000) === "\\0"');
}

