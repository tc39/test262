// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x = y uses GetValue and PutValue
es5id: 11.13.1_A2.1_T3
description: >
    If Type(LeftHandSideExpression) is not Reference, throw
    ReferenceError
negative: ReferenceError
---*/

//CHECK#1
try {
  1 = 1;
  $ERROR('#1.1: 1 = 1 throw ReferenceError. Actual: ' + (1 = 1));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: 1 = 1 throw ReferenceError. Actual: ' + (e));  
  } else {
    1 = 1;
  }
}
