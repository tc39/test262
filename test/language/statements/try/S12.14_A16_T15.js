// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    TryStatement: "try Block Catch" or "try Block Finally" or "try Block
    Catch Finally"
es5id: 12.14_A16_T15
description: >
    Finally: "finally Block". Checking if passing argument to "try"
    statement fails
negative:
  stage: early
  type: SyntaxError
---*/

// CHECK#1
try{	
}
finally(e){}
