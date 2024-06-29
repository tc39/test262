// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/
/* 9. Let len be ? LengthOfArrayLike(arrayLike). */

var arrayLike = {};

Object.defineProperty(arrayLike, "length", {
  get: function() {
    throw new SyntaxError();
  }
});

assertThrowsInstanceOf(function() {
  Tuple.from(arrayLike);
}, SyntaxError, "items.length throws");

