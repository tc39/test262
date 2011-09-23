// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check Do-While Statement for automatic semicolon insertion
 *
 * @path 07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A9_T8.js
 * @description Execute do {}; \n while(false)
 * @negative
 */

//CHECK#1
do {}; 
while (false) 

