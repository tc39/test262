// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.duration.prototype.abs
description: Temporal.Duration.prototype.abs throws TypeError on
  RequireInternalSlot if object has no internal slot.
info: |
  2. Perform ? RequireInternalSlot(duration, [[InitializedTemporalDuration]]).
features: [Temporal]
---*/
let dur = new Temporal.Duration(1,2,3,4,5);

let badDur = { abs: dur.abs }
assert.throws(TypeError, () => badDur.abs(),
    "Throw TypeError if there are no internal slot");
