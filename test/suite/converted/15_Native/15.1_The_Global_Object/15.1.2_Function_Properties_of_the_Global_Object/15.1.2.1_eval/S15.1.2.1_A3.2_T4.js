// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Result(3).type is normal and its completion value is empty,
 * then return the value undefined
 *
 * @section 15.1.2.1, 12.5
 * @path 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.1_eval/S15.1.2.1_A3.2_T4.js
 * @description If statement
 */

//CHECK#1
if (eval("if (false) ;") !== undefined) {
  $ERROR('#1: eval("if (false) ;") === undefined. Actual: ' + eval("if (false) ;"));
}    

