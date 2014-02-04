// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The String prototype object is itself not a String object
es5id: 15.5.4_A2
description: Checking String.prototype
includes: [$FAIL.js]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  (String.prototype !="");
  $FAIL('#1: "(String.prototype !="");" lead to throwing exception. Actual: '+(String.prototype !=""));
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#1.1: "(String.prototype !="")" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}

//
//////////////////////////////////////////////////////////////////////////////
