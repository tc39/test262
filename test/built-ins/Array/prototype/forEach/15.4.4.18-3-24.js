// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - value of 'length' is a positive
    non-integer, ensure truncation occurs in the proper direction
---*/

var testResult = false;

function callbackfn(val, idx, obj) {
  testResult = (val > 10);
}

var obj = {
  1: 11,
  2: 9,
  length: 2.685
};

Array.prototype.forEach.call(obj, callbackfn);

assert(testResult, 'testResult !== true');
