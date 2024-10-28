// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.since
description: since() can return subseconds..
features: [Temporal]
---*/

const feb20 = Temporal.Instant.from("2020-02-01T00:00Z");

const latersub = feb20.add({
  hours: 24,
  milliseconds: 250,
  microseconds: 250,
  nanoseconds: 250
});
const msDiff = latersub.since(feb20, { largestUnit: "milliseconds" });
assert.sameValue(msDiff.seconds, 0);
assert.sameValue(msDiff.milliseconds, 86400250);
assert.sameValue(msDiff.microseconds, 250);
assert.sameValue(msDiff.nanoseconds, 250);
const µsDiff = latersub.since(feb20, { largestUnit: "microseconds" });
assert.sameValue(µsDiff.milliseconds, 0);
assert.sameValue(µsDiff.microseconds, 86400250250);
assert.sameValue(µsDiff.nanoseconds, 250);
const nsDiff = latersub.since(feb20, { largestUnit: "nanoseconds" });
assert.sameValue(nsDiff.microseconds, 0);
assert.sameValue(nsDiff.nanoseconds, 86400250250250);
