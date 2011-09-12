// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check Return Statement for automatic semicolon insertion
 *
 * @section 7.9, 12.9
 * @path 07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A3.js
 * @description Try use return \n Expression construction
 */

//CHECK#1
function f1()
{
  return 1;
}
if (f1() !== 1) { 
  $ERROR('#1: Check return statement for automatic semicolon insertion');
}  

//CHECK#2
function f2()
{
  return 
  1;
}
if (f2() !== undefined) { 
  $ERROR('#2: Check return statement for automatic semicolon insertion');
}  

