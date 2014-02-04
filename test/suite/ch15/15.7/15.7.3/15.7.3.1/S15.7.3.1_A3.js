// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.prototype value is not +0
es5id: 15.7.3.1_A3
description: Checking value of Number.prototype property
includes: [$FAIL.js]
---*/

//CHECK#1
try {
  (Number.prototype != 0);
  $FAIL('#1: "(Number.prototype != 0);" lead to throwing exception. Actual: '+(Number.prototype != 0));
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#1.1: "(Number.prototype != 0)" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}
