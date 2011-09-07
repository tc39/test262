// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * LINE FEED (U+000A) within strings is not allowed
 *
 * @id: S7.3_A2.1_T2;
 * @section: 7.3;
 * @description: Use real LINE FEED into string;
 * @negative;
 */

//CHECK#1
"
str
ing
";

