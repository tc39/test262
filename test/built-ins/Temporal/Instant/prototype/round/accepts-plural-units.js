// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.round
description: round() accepts plural units.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const inst = Temporal.Instant.from("1976-11-18T14:23:30.123456789Z");

[
  "hour",
  "minute",
  "second",
  "millisecond",
  "microsecond",
  "nanosecond"
].forEach(smallestUnit => {
    TemporalHelpers.assertInstantsEqual(inst.round({ smallestUnit }),
                                        inst.round({ smallestUnit: `${ smallestUnit }s` }));
});
