// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check Function Expression for automatic semicolon insertion
 *
 * @section 7.9, 12.4, 11.2.5
 * @path 07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A5.5_T1.js
 * @description Try use 1 + function_name\n(2 + 3) construction
 */

//CHECK#1
function f(t) {
  return t;
}
var x = 1 + f
(2 + 3)
if (x !== 6) {
  $ERROR('#1: Check Function Expression for automatic semicolon insertion');
} 

