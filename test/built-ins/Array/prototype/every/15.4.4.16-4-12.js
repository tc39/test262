// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.every
description: Array.prototype.every - 'callbackfn' is a function
---*/

function callbackfn(val, idx, obj) {
  return val > 10;
}

assert.sameValue([11, 9].every(callbackfn), false, '[11, 9].every(callbackfn)');
