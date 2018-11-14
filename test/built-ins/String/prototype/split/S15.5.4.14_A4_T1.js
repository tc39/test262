// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    String.prototype.split (separator, limit) returns an Array object into which substrings of the result of converting this object to a string have
    been stored. If separator is a regular expression then
    inside of SplitMatch helper the [[Match]] method of R is called giving it the arguments corresponding
es5id: 15.5.4.14_A4_T1
description: Argument is regexp /l/, and instance is String("hello")
---*/

var __string = new String("hello");

var __re = /l/;

var __split = __string.split(__re);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__split.constructor !== Array) {
  $ERROR('#1: var __string = new String("hello"); var __re = /l/; __split = __string.split(__re); __split.constructor === Array. Actual: ' + __split.constructor);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.length !== 3) {
  $ERROR('#2: var __string = new String("hello"); var __re = /l/; __split = __string.split(__re); __split.length === 3. Actual: ' + __split.length);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__split[0] !== "he") {
  $ERROR('#3: var __string = new String("hello"); var __re = /l/; __split = __string.split(__re); __split[0] === "he". Actual: ' + __split[0]);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__split[1] !== "") {
  $ERROR('#4: var __string = new String("hello"); var __re = /l/; __split = __string.split(__re); __split[1] === "". Actual: ' + __split[1]);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (__split[2] !== "o") {
  $ERROR('#5: var __string = new String("hello"); var __re = /l/; __split = __string.split(__re); __split[2] === "o". Actual: ' + __split[2]);
}
//
//////////////////////////////////////////////////////////////////////////////
