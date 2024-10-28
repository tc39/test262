// Copyright (C) 2018 Bloomberg LP. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.round
description: Test that round() counts the correct number of days when rounding relative to a date.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const days = new Temporal.Duration(0, 0, 0, 45, 0, 0, 0, 0, 0, 0);
const yearAndHalf = new Temporal.Duration(0, 0, 0, 547, 12, 0, 0, 0, 0, 0);

TemporalHelpers.assertDuration(days.round({
    relativeTo: "2019-01-01",
    smallestUnit: "months"}), 0, 2, 0, 0, 0, 0, 0, 0, 0, 0);

TemporalHelpers.assertDuration(days.negated().round({
    relativeTo: "2019-02-15",
    smallestUnit: "months"}), 0, -1, 0, 0, 0, 0, 0, 0, 0, 0);

TemporalHelpers.assertDuration(yearAndHalf.round({
    relativeTo: "2018-01-01",
    smallestUnit: "years"}), 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);

TemporalHelpers.assertDuration(yearAndHalf.round({
    relativeTo: "2018-07-01",
    smallestUnit: "years"}), 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);

TemporalHelpers.assertDuration(yearAndHalf.round({
    relativeTo: "2019-01-01",
    smallestUnit: "years"}), 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);

TemporalHelpers.assertDuration(yearAndHalf.round({
    relativeTo: "2020-01-01",
    smallestUnit: "years"}), 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);

TemporalHelpers.assertDuration(yearAndHalf.round({
    relativeTo: "2020-07-01",
    smallestUnit: "years"}), 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
