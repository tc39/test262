// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check For Statement for automatic semicolon insertion
 *
 * @path 07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A6.1_T12.js
 * @description for (false \n semicolon false \n semicolon \n)
 */

//CHECK#1
for(false
    ;false
    ;
) {
  break;
}

