// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check Postfix Increment Operator for automatic semicolon insertion
 *
 * @id: S7.9_A5.1_T1;
 * @section: 7.9, 12.4, 11.13.1;
 * @description: Try use Variable \n ++ construction;
 * @negative;
 */

//CHECK#1
var x = 0;
x
++;
$ERROR('#1: Check Postfix Increment Operator for automatic semicolon insertion');

