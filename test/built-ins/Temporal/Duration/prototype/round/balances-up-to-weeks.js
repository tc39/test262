// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.round
description: Rounds up to weeks correctly when years and months are present.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const oneMonthOneDay = new Temporal.Duration(0, 1, 0, 1, 0, 0, 0, 0, 0, 0);
const oneYearOneMonthOneDay = new Temporal.Duration(1, 1, 0, 1, 0, 0, 0, 0, 0, 0);

// largestUnit must be included
assert.throws(RangeError, () => oneMonthOneDay.round({
        relativeTo: '2024-01-01',
        smallestUnit: 'weeks',
        roundingIncrement: 99,
        roundingMode: 'ceil'
}));

TemporalHelpers.assertDuration(oneMonthOneDay.round({
    relativeTo: '2024-01-01',
    largestUnit: 'weeks',
    smallestUnit: 'weeks',
    roundingIncrement: 99,
    roundingMode: 'ceil'
}), 0, 0, 99, 0, 0, 0, 0, 0, 0, 0);

TemporalHelpers.assertDuration(oneMonthOneDay.round({
    relativeTo: '2024-01-01',
    largestUnit: 'weeks',
    smallestUnit: 'weeks',
    roundingIncrement: 6,
    roundingMode: 'ceil'
}), 0, 0, 6, 0, 0, 0, 0, 0, 0, 0);

TemporalHelpers.assertDuration(oneYearOneMonthOneDay.round({
    relativeTo: '2024-01-01',
    largestUnit: 'weeks',
    smallestUnit: 'weeks',
    roundingIncrement: 99,
    roundingMode: 'ceil'
}), 0, 0, 99, 0, 0, 0, 0, 0, 0, 0);

TemporalHelpers.assertDuration(oneYearOneMonthOneDay.round({
    relativeTo: '2024-01-01',
    largestUnit: 'weeks',
    smallestUnit: 'weeks',
    roundingIncrement: 57,
    roundingMode: 'ceil'
}), 0, 0, 57, 0, 0, 0, 0, 0, 0, 0);
