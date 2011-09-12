// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator uses GetValue
 *
 * @section 11.13.2
 * @path 11_Expressions/11.13_Assignment_Operators/11.13.2_Compound_Assignment/S11.13.2_A2.1_T3.2.js
 * @description If GetBase(LeftHandSideExpression) is null, throw ReferenceError. Check operator is "x /= y"
 */

//CHECK#1
try {
  var z = (x /= 1);
  $ERROR('#1.1: x /= 1 throw ReferenceError. Actual: ' + (z));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x /= 1 throw ReferenceError. Actual: ' + (e));  
  }
}

