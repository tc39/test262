// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Boolean prototype object is itself not a Boolean object
    (its [[Class]] is "Object")
es5id: 15.6.4_A1
description: Checking type and value of Boolean.prototype
includes: [$FAIL.js]
---*/

//CHECK#1
if (typeof Boolean.prototype !== "object") {
  $ERROR('#1: typeof Boolean.prototype === "object"');
}

//CHECK#2
try {
  (Boolean.prototype != false);
  $FAIL('#2: "(Boolean.prototype != false);" lead to throwing exception. Actual: '+(Boolean.prototype != false));
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#2.1: "(Boolean.prototype != false)" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}

delete Boolean.prototype.toString;

if (Boolean.prototype.toString() !== "[object Object]") {
  $ERROR('#3: The [[Class]] property of the Boolean prototype object is set to "Object"');
}
