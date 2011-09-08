// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Assignment to string literal calls String constructor
 *
 * @section: 8.4, 7.8.4;
 * @path: 08_Types/8.4_The_String_Type/S8.4_A12.js;
 * @description: Check constructor of simple assigned variable;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
var str = "rock'n'roll";
if (str.constructor !== String){
  $ERROR('#1: var str = "rock\'n\'roll"; str.constructor === String. Actual: ' + (str.constructor));
}
//
//////////////////////////////////////////////////////////////////////////////

