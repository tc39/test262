// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x = y uses GetValue and PutValue
description: If GetBase(AssigmentExpression) is null, throw ReferenceError
---*/

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
