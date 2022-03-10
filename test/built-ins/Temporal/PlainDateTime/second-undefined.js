// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime
description: Second argument defaults to 0 if not given
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const args = [2000, 5, 2, 12, 34];

const explicit = new Temporal.PlainDateTime(...args, undefined);

TemporalHelpers.assertPlainDateTime(
  explicit,
  2000, 5, "M05", 2, 12, 34, 0, 0, 0, 0,
  "second default argument (argument present)"
);

const implicit = new Temporal.PlainDateTime(...args);

TemporalHelpers.assertPlainDateTimesEqual(explicit, implicit, "second default argument (argument missing)");
