// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "AssignmentExpression : LeftHandSideExpression = AssignmentExpression"
description: Syntax check if "x = x" throws ReferenceError
---*/

//CHECK#1
try {
  x = x;
  $ERROR('#1.1: x = x throw ReferenceError. Actual: ' + (x = x));
} catch(e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x = x throw ReferenceError. Actual: ' + (e));  
  }
}
