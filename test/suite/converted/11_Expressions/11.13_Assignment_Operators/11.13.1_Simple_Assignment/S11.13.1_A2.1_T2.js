// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x = y uses GetValue and PutValue
 *
 * @section 11.13.1
 * @path 11_Expressions/11.13_Assignment_Operators/11.13.1_Simple_Assignment/S11.13.1_A2.1_T2.js
 * @description If GetBase(AssigmentExpression) is null, throw ReferenceError
 */

//CHECK#1
try {
  x = y;
  $ERROR('#1.1: x = y throw ReferenceError. Actual: ' + (x = y));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x = y throw ReferenceError. Actual: ' + (e));  
  }
}

