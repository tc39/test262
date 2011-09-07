// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check For Statement for automatic semicolon insertion.
 * If automatic insertion semicolon would become one of the two semicolons in the header of a For Statement.
 * Don`t use semicolons
 *
 * @id: S7.9_A6.3_T4;
 * @section: 7.9, 12.6.3;
 * @description: For header is (\n false \n);
 * @negative;
 */

//CHECK#1
for(
    false
) {
  break;
}

