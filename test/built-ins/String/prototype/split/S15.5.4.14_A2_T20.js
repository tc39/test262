// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    String.prototype.split (separator, limit) returns an Array object into which substrings of the result of converting this object to a string have
    been stored. The substrings are determined by searching from left to right for occurrences of
    separator; these occurrences are not part of any substring in the returned array, but serve to divide up
    the string value. The value of separator may be a string of any length or it may be a RegExp object
es5id: 15.5.4.14_A2_T20
description: Call split(new RegExp)
---*/

var __string = new String("one-1 two-2 three-3");

var __split = __string.split(new RegExp);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__split.constructor !== Array) {
  $ERROR('#1: var __string = new String("one-1 two-2 three-3"); __split = __string.split(new RegExp); __split.constructor === Array. Actual: ' + __split.constructor);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.length !== __string.length) {
  $ERROR('#2: var __string = new String("one-1 two-2 three-3"); __split = __string.split(new RegExp); __split.length === __string.length. Actual: ' + __split.length);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
for (var i = 0; i < __string.length; i++) {
  if (__string.charAt(i) !== __split[i]) {
    $ERROR('#3.' + i + ': var __string = new String("one-1 two-2 three-3"); __split = __string.split(new RegExp); __string.charAt(' + i + ')===__split[' + i + ']. Actual: ' + __string.charAt(i));
  }
}
//
//////////////////////////////////////////////////////////////////////////////
