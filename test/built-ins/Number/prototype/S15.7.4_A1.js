// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Number prototype object is itself a not Number object
    (its [[Class]] is "Number") whose value is +0
es5id: 15.7.4_A1
description: Checking type and value of Number.prototype property
includes: [$FAIL.js]
---*/

//CHECK#1
if (typeof Number.prototype !== "object") {
  $ERROR('#1: typeof Number.prototype === "object"');
}

//CHECK#2
try {
  (Number.prototype != 0);
  $FAIL('#2: "(Number.prototype != 0);" lead to throwing exception. Actual: '+(Number.prototype != 0));
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#2.1: "(Number.prototype != 0)" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}

delete Number.prototype.toString;

if (Number.prototype.toString() !== "[object Object]") {
  $ERROR('#3: The [[Class]] property of the Number prototype object is set to "Object"');
}
