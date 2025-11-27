// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.with
description: Check various basic calculations involving leap years (indian calendar)
features: [Temporal, Intl.Era-monthcode]
includes: [temporalHelpers.js]
---*/

const calendar = "indian";
const options = { overflow: "reject" };

const leapDay = Temporal.PlainDate.from({ year: 1946, monthCode: "M01", day: 31, calendar }, options);

TemporalHelpers.assertPlainDate(
  leapDay.with({ year: 1947 }),
  1947, 1, "M01", 30, "Changing year to a common year on leap day constrains to 30 Chaitra",
  "shaka", 1947);
assert.throws(RangeError, function () {
  leapDay.with({ year: 1947 }, options);
}, "Changing year to a common year on leap day rejects");

TemporalHelpers.assertPlainDate(
  leapDay.with({ year: 1942 }, options),
  1942, 1, "M01", 31, "Changing year to another leap year on leap day does not reject",
  "shaka", 1942);
