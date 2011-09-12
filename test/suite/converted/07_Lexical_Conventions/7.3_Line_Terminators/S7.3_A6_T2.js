// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Line Terminator cannot be expressed as a Unicode escape sequence consisting of six characters, namely \u plus four hexadecimal digits
 *
 * @section 7.3
 * @path 07_Lexical_Conventions/7.3_Line_Terminators/S7.3_A6_T2.js
 * @description Insert CARRIAGE RETURN (U+000D) in var x
 * @negative
 */

var\u000Dx;

