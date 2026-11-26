// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.equals
description: Out-of-range wall-clock time in a DST gap in an argument string
features: [Temporal]
---*/

// +275760-10-05 is past the last representable day, but the TZDB rules would
// put 02:30 in a DST gap
assert.throws(
  RangeError,
  () => new Temporal.ZonedDateTime(0n, "UTC").equals("+275760-10-05T02:30[Australia/Sydney]"),
  "argument string is outside the representable range"
);
