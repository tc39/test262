// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.compare
description: Out-of-range wall-clock time in a DST gap in an argument string
features: [Temporal]
---*/

// +275760-10-05 is past the last representable day, but the TZDB rules would
// put 02:30 in a DST gap
const arg = "+275760-10-05T02:30[Australia/Sydney]";
const instance = new Temporal.ZonedDateTime(0n, "UTC");

assert.throws(
  RangeError,
  () => Temporal.ZonedDateTime.compare(arg, instance),
  "argument string is outside the representable range (first argument)"
);

assert.throws(
  RangeError,
  () => Temporal.ZonedDateTime.compare(instance, arg),
  "argument string is outside the representable range (second argument)"
);
