// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String instance has not [[construct]] property
description: Checking if creating "new String" fails
includes: [$FAIL.js]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  new new String;
  $FAIL('#1: "new new String" lead to throwing exception');
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#1.1: Exception is instance of TypeError. Actual: exception is '+e);
  }
}
//
//////////////////////////////////////////////////////////////////////////////
