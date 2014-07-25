// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String prototype object is itself not a String object
 *
 * @path ch15/15.5/15.5.4/S15.5.4_A2.js
 * @description Checking String.prototype
 */

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

