// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Multi line comments cannot nest
 *
 * @path 07_Lexical_Conventions/7.4_Comments/S7.4_A3.js
 * @description Try use nested comments
 * @negative
 */

/*CHECK#1*/

/* 
var

/* x */
= 1;
*/

