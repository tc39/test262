// Copyright (C) 2026 dmvjs. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.tospliced
description: >
  Return abrupt from ToLength(Get(O, "length")).
info: |
  Array.prototype.toSpliced ( start, deleteCount, ...items )

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
  Array.prototype.toSpliced.call(o1);
});

var o2 = {
  length: {
    valueOf: function() {
      throw new Test262Error();
    }
  }
};

assert.throws(Test262Error, function() {
  Array.prototype.toSpliced.call(o2);
});
