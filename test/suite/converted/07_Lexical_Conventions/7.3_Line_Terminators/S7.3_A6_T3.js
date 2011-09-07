// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Line Terminator cannot be expressed as a Unicode escape sequence consisting of six characters, namely \u plus four hexadecimal digits
 *
 * @id: S7.3_A6_T3;
 * @section: 7.3;
 * @description: Insert LINE SEPARATOR (U+2028) in var x;
 * @negative;
 */

var\u2028x;

