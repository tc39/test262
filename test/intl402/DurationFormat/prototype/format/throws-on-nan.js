// Copyright 2023 Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DurationFormat.prototype.format
description: Check that format throws on non-integral values
info: |
    1.1.2 ToIntegerWithoutRounding ( argument )
      1. Let number be ? ToNumber(argument).
      2. If IsIntegralNumber(number) is false, throw a RangeError exception.
      3. Return ℝ(number).
features: [Intl.DurationFormat]
---*/

var invalidValues = [NaN, Infinity, -Infinity];

var format = new Intl.DateTimeFormat();

invalidValues.forEach(function (value) {
    assert.throws(RangeError, function() {
        var result = format.format(value);
    }, "Invalid value " + value + " was not rejected.");
});
