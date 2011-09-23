// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * UnicodeEscapeSequence :: u HexDigit (one, two or three time) is incorrect
 *
 * @path 07_Lexical_Conventions/7.8_Literals/7.8.4_String_Literals/S7.8.4_A7.2_T4.js
 * @description :: HexDigit :: A
 * @negative
 */

//CHECK#1
"\uAA"

