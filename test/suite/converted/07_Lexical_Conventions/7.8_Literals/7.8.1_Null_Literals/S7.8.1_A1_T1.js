// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Literal :: NullLiteral
 *
 * @section 7.8.1
 * @path 07_Lexical_Conventions/7.8_Literals/7.8.1_Null_Literals/S7.8.1_A1_T1.js
 * @description Check null === null
 */

//CHECK#1
if (null !== null) {
  $ERROR('#1: null === null');
} 

