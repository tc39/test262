// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    String.prototype.split(separator, limit):
    i) can be transferred to other kinds of objects for use as a method.
    separator and limit can be any kinds of object since:
    ii) if separator is not RegExp ToString(separator) performs and
    iii) ToInteger(limit) performs
es5id: 15.5.4.14_A1_T5
description: >
    Argument is null, and instance is function call that returned
    string
---*/

//since ToString(null) evaluates to "null" split(null) evaluates to split("null",0)
var __split = function() {
  return "gnulluna"
}().split(null);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __split !== "object") {
  $ERROR('#1: __split = function(){return "gnulluna"}().split(null); typeof __split === "object". Actual: ' + typeof __split);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.constructor !== Array) {
  $ERROR('#2: __split = function(){return "gnulluna"}().split(null); __split.constructor === Array. Actual: ' + __split.constructor);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__split.length !== 2) {
  $ERROR('#3: __split = function(){return "gnulluna"}().split(null); __split.length === 2. Actual: ' + __split.length);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__split[0] !== "g") {
  $ERROR('#4: __split = function(){return "gnulluna"}().split(null); __split[0] === "g". Actual: ' + __split[0]);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (__split[1] !== "una") {
  $ERROR('#5: __split = function(){return "gnulluna"}().split(null); __split[1] === "una". Actual: ' + __split[1]);
}
//
//////////////////////////////////////////////////////////////////////////////
