// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check For Statement for automatic semicolon insertion
 *
 * @section 7.9, 12.6.3
 * @path 07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A6.4_T1.js
 * @description Three semicolons. For header is (false semicolon false semicolon false semicolon)
 * @negative
 */

//CHECK#1
for(false;false;false;) {
  break;
}

