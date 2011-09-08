// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * UnicodeEscapeSequence \U HexDigit HexDigit HexDigit HexDigit is incorrect
 *
 * @section: 7.8.4;
 * @path: 07_Lexical_Conventions/7.8_Literals/7.8.4_String_Literals/S7.8.4_A7.4_T2.js;
 * @description: Checking if execution of "\U000A" passes;
 * @negative;
 */

//CHECK#1
"\U000A"

