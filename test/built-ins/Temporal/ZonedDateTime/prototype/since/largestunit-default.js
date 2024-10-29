// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: Assumes a different default for largestUnit if smallestUnit is larger than days
includes: [temporalHelpers.js]
features: [Temporal]
---*/

/*
const earlier = Temporal.ZonedDateTime.from('2019-01-08T09:22:36.123456789+01:00[+01:00]');
const later = Temporal.ZonedDateTime.from('2021-09-07T13:39:40.987654321+01:00[+01:00]');
*/
const earlier = new Temporal.ZonedDateTime(1546935756123456789n, "+01:00");
const later = new Temporal.ZonedDateTime(1631018380987654321n, "+01:00");

TemporalHelpers.assertDurationsEqual(later.since(earlier, {
  smallestUnit: "years",
  roundingMode: "halfExpand"
}), new Temporal.Duration(3, 0, 0, 0, 0, 0, 0, 0, 0, 0));
TemporalHelpers.assertDurationsEqual(later.since(earlier, {
  smallestUnit: "months",
  roundingMode: "halfExpand"
}), new Temporal.Duration(0, 32, 0, 0, 0, 0, 0, 0, 0, 0));
TemporalHelpers.assertDurationsEqual(later.since(earlier, {
  smallestUnit: "weeks",
  roundingMode: "halfExpand"
}), new Temporal.Duration(0, 0, 139, 0, 0, 0, 0, 0, 0, 0));


