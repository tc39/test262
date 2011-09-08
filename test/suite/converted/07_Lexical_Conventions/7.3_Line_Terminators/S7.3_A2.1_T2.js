// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * LINE FEED (U+000A) within strings is not allowed
 *
 * @section: 7.3;
 * @path: 07_Lexical_Conventions/7.3_Line_Terminators/S7.3_A2.1_T2.js;
 * @description: Use real LINE FEED into string;
 * @negative;
 */

//CHECK#1
"
str
ing
";

