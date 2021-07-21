// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.subtract
description: Temporal.Instant.prototype.subtract() throws RangeError while the result is too big or too small.
info: |
  1. Let instant be the this value.
  2. Perform ? RequireInternalSlot(instant, [[InitializedTemporalInstant]]).
  3. Let duration be ? ToLimitedTemporalDuration(temporalDurationLike, « "years", "months", "weeks", "days" »).
  4. Let ns be ? AddInstant(instant.[[EpochNanoseconds]], duration.[[Hours]], duration.[[Minutes]], duration.[[Seconds]], duration.[[Milliseconds]], duration.[[Microseconds]], duration.[[Nanoseconds]]).
  5. Return ! CreateTemporalInstant(ns).
features: [Temporal]
---*/
let i1 = new Temporal.Instant(-86400n * 99999999999999999n);
assert.throws(RangeError, () => i1.subtract(new Temporal.Duration(0, 0, 0, 0, 999999999)),
    "subtract show throw from AddInstant while the result is out of range");

let i2 = new Temporal.Instant(86400n * 99999999999999999n);
assert.throws(RangeError, () => i2.subtract(new Temporal.Duration(0, 0, 0, 0, -999999999)),
    "subtract show throw from AddInstant while the result is out of range");
