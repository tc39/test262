// Copyright (C) 2025 Luca Casonato. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.replace
description: >
  If a separator is a string primitive, its Symbol.replace property is not accessed.
info: |
  String.prototype.replace ( searchValue, replaceValue )

  [...]
  2. If separator is not Object, then
    [...]
  [...]

features: [Symbol.replace]
---*/

Object.defineProperty(String.prototype, Symbol.replace, {
  get: function() {
    throw new Test262Error("should not be called");
  },
});

var searchValue = ",";

const replaced = "a,b,c".replace(searchValue, "X");
assert.sameValue(replaced, "aXb,c");
