// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * White space cannot be expressed as a Unicode escape sequence consisting of six characters, namely \u plus four hexadecimal digits
 *
 * @section: 7.2;
 * @path: 07_Lexical_Conventions/7.2_White_Space/S7.2_A5_T3.js;
 * @description: Use FORM FEED (U+000C);
 * @negative;
 */

var\u000Cx;

