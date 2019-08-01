// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.every
description: Array.prototype.every - Array Object can be used as thisArg
---*/

var accessed = false;
var objArray = [];

function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objArray;
}



assert([11].every(callbackfn, objArray), '[11].every(callbackfn, objArray) !== true');
assert(accessed, 'accessed !== true');
