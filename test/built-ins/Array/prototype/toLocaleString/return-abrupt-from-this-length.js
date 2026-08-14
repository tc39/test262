// Copyright (C) 2026 MooGoong Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.tolocalestring
description: >
  Return abrupt from ToLength(Get(obj, "length")).
info: |
  Array.prototype.toLocaleString ( [ reserved1 [ , reserved2 ] ] )

  1. Let array be ? ToObject(this value).
  2. Let length be ? LengthOfArrayLike(array).
  [...]

  LengthOfArrayLike ( obj )

  1. Return ℝ(? ToLength(? Get(obj, "length"))).
---*/

var o1 = {
  get length() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  Array.prototype.toLocaleString.call(o1);
});

var o2 = {
  length: {
    valueOf: function() {
      throw new Test262Error();
    }
  }
};

assert.throws(Test262Error, function() {
  Array.prototype.toLocaleString.call(o2);
});
