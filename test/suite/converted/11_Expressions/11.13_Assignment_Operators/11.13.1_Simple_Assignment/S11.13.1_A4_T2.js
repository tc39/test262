// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * AssignmentExpression : LeftHandSideExpression = AssignmentExpression
 *
 * @section 11.13.1
 * @path 11_Expressions/11.13_Assignment_Operators/11.13.1_Simple_Assignment/S11.13.1_A4_T2.js
 * @description Syntax check if "x = x" throws ReferenceError
 */

//CHECK#1
try {
  x = x;
  $ERROR('#1.1: x = x throw ReferenceError. Actual: ' + (x = x));
} catch(e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x = x throw ReferenceError. Actual: ' + (e));  
  }
}



