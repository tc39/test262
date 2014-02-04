// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The initial value of Boolean.prototype is the Boolean
 * prototype object
 *
 * @path ch15/15.6/15.6.3/15.6.3.1/S15.6.3.1_A1.js
 * @description Checking Boolean.prototype property
 */

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

