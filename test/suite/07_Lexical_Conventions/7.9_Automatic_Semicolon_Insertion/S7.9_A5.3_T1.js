// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check Postfix Decrement Operator for automatic semicolon insertion
 *
 * @path 07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A5.3_T1.js
 * @description Try use Variable \n -- construction
 * @negative
 */

//CHECK#1
var x = 1;
x
--;
$ERROR('#1: Check Postfix Decrement Operator for automatic semicolon insertion');

