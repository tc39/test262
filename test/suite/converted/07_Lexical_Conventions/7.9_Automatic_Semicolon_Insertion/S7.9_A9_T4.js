// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check Do-While Statement for automatic semicolon insertion
 *
 * @section: 7.9, 12.6.1;
 * @path: 07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A9_T4.js;
 * @description: Execute do ; while \n (false) true;
 */

//CHECK#1
do ; while 
(false) true

