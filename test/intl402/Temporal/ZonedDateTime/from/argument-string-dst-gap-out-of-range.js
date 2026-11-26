// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.from
description: Out-of-range wall-clock time that falls in a DST gap
features: [Temporal]
---*/

// +275760-10-05 is past the last representable day, but the TZDB rules would
// put 02:30 in a DST gap

for (const disambiguation of ["compatible", "earlier", "later", "reject"]) {
  assert.throws(
    RangeError,
    () => Temporal.ZonedDateTime.from("+275760-10-05T02:30[Australia/Sydney]", { disambiguation }),
    `out-of-range wall-clock time in a DST gap should throw (disambiguation: ${disambiguation})`
  );
}

assert.throws(
  RangeError,
  () => Temporal.ZonedDateTime.from("+275760-10-05T02:30+10:00[Australia/Sydney]", { offset: "ignore" }),
  `out-of-range wall-clock time in DST gap with offset: "ignore" is outside the representable range`
);
