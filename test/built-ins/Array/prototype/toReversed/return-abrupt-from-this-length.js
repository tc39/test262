// Copyright (C) 2026 dmvjs. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toreversed
description: >
  Return abrupt from ToLength(Get(O, "length")).
info: |
  Array.prototype.toReversed ( )

  1. Let O be ? ToObject(this value).
  2. Let len be ? LengthOfArrayLike(O).
features: [change-array-by-copy]
---*/

var o1 = {};

Object.defineProperty(o1, 'length', {
  get: function() {
    throw new Test262Error();
  },
  configurable: true
});

assert.throws(Test262Error, function() {
  Array.prototype.toReversed.call(o1);
});

var o2 = {
  length: {
    valueOf: function() {
      throw new Test262Error();
    }
  }
};

assert.throws(Test262Error, function() {
  Array.prototype.toReversed.call(o2);
});
