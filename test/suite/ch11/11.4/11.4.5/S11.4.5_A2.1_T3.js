// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator --x uses GetValue and PutValue
description: If Type(x) is not Reference, throw ReferenceError (or SyntaxError)
flags: [negative]
---*/

//CHECK#1
try {
  --1;
  $ERROR('#1.1: --1 throw ReferenceError (or SyntaxError). Actual: ' + (--1));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: --1 throw ReferenceError (or SyntaxError). Actual: ' + (e));  
  } else {
    --1;
  }
}
