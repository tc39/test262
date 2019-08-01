// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.every
description: Array.prototype.every - the Arguments object can be used as thisArg
---*/

var accessed = false;
var arg;

function callbackfn(val, idx, obj) {
  accessed = true;
  return this === arg;
}

(function fun() {
  arg = arguments;
}(1, 2, 3));

assert([11].every(callbackfn, arg), '[11].every(callbackfn, arg) !== true');
assert(accessed, 'accessed !== true');
