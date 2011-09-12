// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator !x returns !ToBoolean(x)
 *
 * @section 11.4.9
 * @path 11_Expressions/11.4_Unary_Operators/11.4.9_Logical_NOT_Operator/S11.4.9_A3_T5.js
 * @description Type(x) is Object object or Function object
 */

//CHECK#1
if ((!{}) !== false) {
  $ERROR('#1: !({}) === false');
}

//CHECK#2  
if (!(function(){return 1}) !== false) {
  $ERROR('#2: !(function(){return 1}) === false');
}

