// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.subtract
description: Temporal.Instant.prototype.subtract() throws RangeError while the duration has
  non zeros years, months, weeks or days.
info: |
  1. Let instant be the this value.
  3. Let duration be ? ToLimitedTemporalDuration(temporalDurationLike, « "years", "months", "weeks", "days" »).
features: [Temporal]
---*/
let i1 = new Temporal.Instant(500000n);
assert.throws(RangeError, () => i1.subtract(new Temporal.Duration(1)),
    "subtract throw RangeError while the duration has non zero years");
assert.throws(RangeError, () => i1.subtract(new Temporal.Duration(0, 2)),
    "subtract throw RangeError while the duration has non zero months");
assert.throws(RangeError, () => i1.subtract(new Temporal.Duration(0, 0, 3)),
    "subtract throw RangeError while the duration has non zero weeks");
assert.throws(RangeError, () => i1.subtract(new Temporal.Duration(0, 0, 0, 4)),
    "subtract throw RangeError while the duration has non zero days");
assert.throws(RangeError, () => i1.subtract(new Temporal.Duration(-1)),
    "subtract throw RangeError while the duration has non zero years");
assert.throws(RangeError, () => i1.subtract(new Temporal.Duration(0, -2)),
    "subtract throw RangeError while the duration has non zero months");
assert.throws(RangeError, () => i1.subtract(new Temporal.Duration(0, 0, -3)),
    "subtract throw RangeError while the duration has non zero weeks");
assert.throws(RangeError, () => i1.subtract(new Temporal.Duration(0, 0, 0, -4)),
    "subtract throw RangeError while the duration has non zero days");
