// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: Defaults to returning hours.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

/*
const feb20 = Temporal.ZonedDateTime.from("2020-02-01T00:00+01:00[+01:00]");
const feb21 = Temporal.ZonedDateTime.from("2021-02-01T00:00+01:00[+01:00]");
*/
const feb20 = new Temporal.ZonedDateTime(1580511600000000000n, "+01:00");
const feb21 = new Temporal.ZonedDateTime(1612134000000000000n, "+01:00");
// "2021-02-01T00:00:00.000000001+01:00[+01:00]"
const feb1_2021 = new Temporal.ZonedDateTime(1612134000000000001n, "+01:00");
// "2020-02-01T00:00:00.000000001+01:00[+01:00]"
const feb1_2020 = new Temporal.ZonedDateTime(1580511600000000001n, "+01:00");
const d1 = new Temporal.Duration(0, 0, 0, 0, 8784, 0, 0, 0, 0, 0);
const d2 = new Temporal.Duration(0, 0, 0, 0, 8784, 0, 0, 0, 0, 1);
const d3 = new Temporal.Duration(0, 0, 0, 0, 8783, 59, 59, 999, 999, 999);

TemporalHelpers.assertDurationsEqual(feb21.since(feb20), d1);
TemporalHelpers.assertDurationsEqual(feb21.since(feb20, { largestUnit: "auto" }), d1);
TemporalHelpers.assertDurationsEqual(feb21.since(feb20, { largestUnit: "hours" }), d1);
TemporalHelpers.assertDurationsEqual(feb1_2021.since(feb20), d2);
TemporalHelpers.assertDurationsEqual(feb21.since(feb1_2020), d3);
