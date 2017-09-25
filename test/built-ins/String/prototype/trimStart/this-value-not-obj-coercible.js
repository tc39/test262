// Copyright (C) 2017 Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/

var trimStart = String.prototype.trimStart;

assert.sameValue(typeof trimStart, 'function');

assert.throws(TypeError, function() {
  trimStart.call(undefined);
}, 'undefined');

assert.throws(TypeError, function() {
  trimStart.call(null);
}, 'null');
