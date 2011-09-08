// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator ~x uses GetValue
 *
 * @section: 11.4.8;
 * @path: 11_Expressions/11.4_Unary_Operators/11.4.8_Bitwise_NOT_Operator/S11.4.8_A2.1_T2.js;
 * @description: If GetBase(x) is null, throw ReferenceError;
 */

//CHECK#1
try {
  ~x;
  $ERROR('#1.1: ~x throw ReferenceError. Actual: ' + (~x));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: ~x throw ReferenceError. Actual: ' + (e));  
  }
}


