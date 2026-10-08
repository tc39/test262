// Copyright (C) 2026 MooGoong Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.tolocalestring
description: >
  Return abrupt from ToLength(Get(obj, "length")).
info: |
  Array.prototype.toLocaleString ( [ _reserved1_ [ , _reserved2_ ] ] )

  1. Let _array_ be ? ToObject(*this* value).
  2. Let _length_ be ? LengthOfArrayLike(_array_).
  [...]

  LengthOfArrayLike ( _obj_ )

  1. Return ℝ(? ToLength(? Get(_obj_, *"length"*))).
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
