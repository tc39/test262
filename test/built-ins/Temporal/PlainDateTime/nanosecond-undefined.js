// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime
description: Nanosecond argument defaults to 0 if not given
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const args = [2000, 5, 2, 12, 34, 56, 123, 456];

const explicit = new Temporal.PlainDateTime(...args, undefined);

TemporalHelpers.assertPlainTimesEqual(
  explicit,
  2000, 5, "M05", 2, 12, 34, 56, 123, 456, 0,
  "nanosecond default argument (argument present)"
);

const implicit = new Temporal.PlainDateTime(...args);

TemporalHelpers.assertPlainDateTimesEqual(explicit, implicit, "nanosecond default argument (argument missing)");
