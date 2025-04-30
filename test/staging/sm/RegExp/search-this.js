// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  RegExp.prototype[@@search] should check this value.
esid: pending
---*/

for (var v of [null, 1, true, undefined, "", Symbol.iterator]) {
  assert.throws(TypeError, () => RegExp.prototype[Symbol.search].call(v));
}
