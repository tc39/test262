// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.subtract
description: Temporal.Instant.prototype.subtract() throws TypeError while instant does
  not have [[InitializedTemporalInstant]].
info: |
  1. Let instant be the this value.
  2. Perform ? RequireInternalSlot(instant, [[InitializedTemporalInstant]]).
features: [Temporal]
---*/
let i1 = new Temporal.Instant(50000n);

// Test  RequireInternalSlot Throw TypeError
let badInstant = { subtract: i1.subtract };
assert.throws(TypeError, () => badInstant.subtract(new Temporal.Duration(0, 0, 0, 0, 5)),
    "Throw TypeError while instant does not have [[InitializedTemporalInstant]]");
