// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.3.5
esid: sec-number.prototype.toprecision
description: >
  Return "NaN" if this is NaN
info: |
  Number.prototype.toPrecision ( precision )

  1. Let x be ? thisNumberValue(this value).
  [...]
  5. Let s be the empty String.
  6. If x < 0, then
    a. Let s be code unit 0x002D (HYPHEN-MINUS).
    b. Let x be -x.
  7. If x = +∞, then
    a. Return the String that is the concatenation of s and "Infinity".
  [...]
---*/

var p = {
  valueOf: function() {
    calls++;
    return 1;
  }
};

var calls = 0;
assert.sameValue((+Infinity).toPrecision(p), "Infinity", "Infinity value");
assert.sameValue(calls, 1, "Infinity is checked after ToInteger(precision)");

calls = 0;
var n = new Number(+Infinity);
assert.sameValue(n.toPrecision(p), "Infinity", "Number Infinity");
assert.sameValue(
  calls,
  1,
  "Number Infinity is checked after ToInteger(precision)"
);

calls = 0;
assert.sameValue((-Infinity).toPrecision(p), "-Infinity", "-Infinity value");
assert.sameValue(calls, 1, "-Infinity is checked after ToInteger(precision)");

calls = 0;
var n = new Number(-Infinity);
assert.sameValue(n.toPrecision(p), "-Infinity", "Number -Infinity");
assert.sameValue(
  calls,
  1,
  "Number -Infinity is checked after ToInteger(precision)"
);
