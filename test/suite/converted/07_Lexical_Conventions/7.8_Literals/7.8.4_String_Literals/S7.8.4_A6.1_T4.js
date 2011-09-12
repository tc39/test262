// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * EscapeSequence :: HexEscapeSequence :: x HexDigit HexDigit
 *
 * @section 7.8.4
 * @path 07_Lexical_Conventions/7.8_Literals/7.8.4_String_Literals/S7.8.4_A6.1_T4.js
 * @description HexEscapeSequence :: x0G is incorrect
 * @negative
 */

//CHECK#
"\x0G"

