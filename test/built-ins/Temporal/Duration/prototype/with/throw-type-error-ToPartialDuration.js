// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.duration.prototype.with
description: Temporal.Duration.prototype.with throws TypeError on
  ToPartialDuration if temporalDurationLike is not valid object.
info: |
  2. Perform ? RequireInternalSlot(duration, [[InitializedTemporalDuration]]).
features: [Temporal]
---*/
let dur = new Temporal.Duration(1,2,3,4,5);

["string", {}, true, false, NaN, Infinity, undefined, NaN,
    123, Symbol(), 456n, [],
    // object with only singular key
    {year: 1}, {month: 2}, {week: 3}, {day: 4},
    {hour: 5}, {minute: 6}, {second: 7}, {millisecond: 8},
    {microsecond: 9}, {nanosecond: 10}
].forEach(
        function(durationLike) {
  assert.throws(TypeError, () => dur.with(durationLike),
      "Throw TypeError if temporalDurationLike is not valid");
    });
