// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: Can return subseconds.
features: [Temporal]
---*/

/*
const feb20 = Temporal.ZonedDateTime.from("2020-02-01T00:00+01:00[+01:00]");
*/
const feb20 = new Temporal.ZonedDateTime(1580511600000000000n, "+01:00");
const later = feb20.add({
  days: 1,
  milliseconds: 250,
  microseconds: 250,
  nanoseconds: 250
});

const msDiff = later.since(feb20, { largestUnit: "milliseconds" });
assert.sameValue(msDiff.seconds, 0);
assert.sameValue(msDiff.milliseconds, 86400250);
assert.sameValue(msDiff.microseconds, 250);
assert.sameValue(msDiff.nanoseconds, 250);
const µsDiff = later.since(feb20, { largestUnit: "microseconds" });
assert.sameValue(µsDiff.milliseconds, 0);
assert.sameValue(µsDiff.microseconds, 86400250250);
assert.sameValue(µsDiff.nanoseconds, 250);
const nsDiff = later.since(feb20, { largestUnit: "nanoseconds" });
assert.sameValue(nsDiff.microseconds, 0);
assert.sameValue(nsDiff.nanoseconds, 86400250250250);
