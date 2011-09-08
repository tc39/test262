// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x >>> y uses GetValue
 *
 * @section: 11.7.3;
 * @path: 11_Expressions/11.7_Bitwise_Shift_Operators/11.7.3_The_Unsigned_Right_Shift_Operator/S11.7.3_A2.1_T2.js;
 * @description: If GetBase(x) is null, throw ReferenceError;
 */

//CHECK#1
try {
  x >>> 1;
  $ERROR('#1.1: x >>> 1 throw ReferenceError. Actual: ' + (x >>> 1));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x >>> 1 throw ReferenceError. Actual: ' + (e));  
  }
}


