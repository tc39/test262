// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
 Operator x-- uses GetValue and PutValue
 ES6, 12.4.1 and 12.5.1 specify ReferenceError
es5id: 11.3.2_A2.1_T3
description: If Type(x) is not Reference, throw ReferenceError
negative: ReferenceError
---*/

//CHECK#1
try {
  1--;
  $ERROR('#1.1: 1-- throw ReferenceError. Actual: ' + (1--));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: 1-- throw ReferenceError. Actual: ' + (e));  
  } else {
    1--;
  }
}
