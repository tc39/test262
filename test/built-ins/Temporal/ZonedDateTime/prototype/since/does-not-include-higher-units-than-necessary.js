// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: Can return subseconds.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

/*
const lastFeb20 = Temporal.ZonedDateTime.from("2020-02-29T00:00+01:00[+01:00]");
const lastFeb21 = Temporal.ZonedDateTime.from("2021-02-28T00:00+01:00[+01:00]");
*/
const lastFeb20 = new Temporal.ZonedDateTime(1582930800000000000n, "+01:00");
const lastFeb21 = new Temporal.ZonedDateTime(1614466800000000000n, "+01:00");

TemporalHelpers.assertDurationsEqual(lastFeb21.since(lastFeb20),
                                     new Temporal.Duration(0, 0, 0, 0, 8760, 0, 0, 0, 0, 0));
TemporalHelpers.assertDurationsEqual(lastFeb21.since(lastFeb20, { largestUnit: "months" }),
                                     new Temporal.Duration(0, 11, 0, 28, 0, 0, 0, 0, 0, 0));
TemporalHelpers.assertDurationsEqual(lastFeb21.since(lastFeb20, { largestUnit: "years" }),
                                     new Temporal.Duration(0, 11, 0, 28, 0, 0, 0, 0, 0, 0));
