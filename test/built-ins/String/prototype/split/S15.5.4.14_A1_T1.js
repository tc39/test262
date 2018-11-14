// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    String.prototype.split(separator, limit):
    i) can be transferred to other kinds of objects for use as a method.
    separator and limit can be any kinds of object since:
    ii) if separator is not RegExp ToString(separator) performs and
    iii) ToInteger(limit) performs
es5id: 15.5.4.14_A1_T1
description: Arguments are false and true, and instance is object
---*/

var __instance = new Object(true);

__instance.split = String.prototype.split;

var __split = __instance.split(true, false);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __split !== "object") {
  $ERROR('#1: __instance = new Object(true); __instance.split = String.prototype.split; __split = __instance.split(true, false); typeof __split === "object". Actual: ' + typeof __split);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.constructor !== Array) {
  $ERROR('#2: __instance = new Object(true); __instance.split = String.prototype.split; __split = __instance.split(true, false); __split.constructor === Array. Actual: ' + __split.constructor);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__split.length !== 0) {
  $ERROR('#3: __instance = new Object(true); __instance.split = String.prototype.split; __split = __instance.split(true, false); __split.length === 0. Actual: ' + __split.length);
}
//
//////////////////////////////////////////////////////////////////////////////
