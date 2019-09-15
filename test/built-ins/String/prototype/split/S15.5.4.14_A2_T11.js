// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    String.prototype.split (separator, limit) returns an Array object into which substrings of the result of converting this object to a string have
    been stored. The substrings are determined by searching from left to right for occurrences of
    separator; these occurrences are not part of any substring in the returned array, but serve to divide up
    the string value. The value of separator may be a string of any length or it may be a RegExp object
es5id: 15.5.4.14_A2_T11
description: "Call split(\":\"), instance is String(\"one-1,two-2,four-4\")"
---*/

var __string = new String("one-1,two-2,four-4");

var __split = __string.split(":");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__split.constructor !== Array) {
  throw new Test262Error('#1: var __string = new String("one-1,two-2,four-4"); __split = __string.split(":"); __split.constructor === Array. Actual: ' + __split.constructor);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.length !== 1) {
  throw new Test262Error('#2: var __string = new String("one-1,two-2,four-4"); __split = __string.split(":"); __split.length === 1. Actual: ' + __split.length);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__split[0] !== "one-1,two-2,four-4") {
  throw new Test262Error('#3: var __string = new String("one-1,two-2,four-4"); __split = __string.split(":"); __split[0] === "one-1,two-2,four-4". Actual: ' + __split[0]);
}
//
//////////////////////////////////////////////////////////////////////////////
