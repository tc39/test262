// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.round
description: >
    When consulting calendar.dateUntil() to calculate the number of months in a
    year, the months property is not accessed on the result Duration
includes: [compareArray.js, temporalHelpers.js]
features: [Temporal]
---*/

const actual = [];

class CalendarDateUntilObservable extends Temporal.Calendar {
  dateUntil(...args) {
    actual.push("call dateUntil");
    const returnValue = super.dateUntil(...args);
    TemporalHelpers.observeProperty(actual, returnValue, "months", Infinity);
    return returnValue;
  }
}

const calendar = new CalendarDateUntilObservable("iso8601");
const relativeTo = new Temporal.PlainDate(2018, 10, 12, calendar);

// One path, through UnbalanceDateDurationRelative, calls dateUntil()

const expected1 = [
  "call dateUntil",
];

const years = new Temporal.Duration(2);
const result1 = years.round({ largestUnit: "months", relativeTo });
TemporalHelpers.assertDuration(result1, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, "result");
assert.compareArray(actual, expected1, "operations");

// There is a second path, through BalanceDurationRelative, that calls
// dateUntil() in a loop for each year in the duration plus one extra time

actual.splice(0); // reset calls for next test
const expected2 = [
  "call dateUntil",
  "call dateUntil",
  "call dateUntil",
];

const months = new Temporal.Duration(0, 24);
const result2 = months.round({ largestUnit: "years", relativeTo });
TemporalHelpers.assertDuration(result2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, "result");
assert.compareArray(actual, expected2, "operations");
