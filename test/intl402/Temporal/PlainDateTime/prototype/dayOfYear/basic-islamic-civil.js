// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.dayofyear
description: dayOfYear property in the islamic-civil calendar
includes: [temporalHelpers.js]
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "islamic-civil";
const options = { overflow: "reject" };

// 1390 = ISO year 1970
const year = 1390;

var date = Temporal.PlainDateTime.from({
    year,
    month: 1,
    day: 1,
    calendar, hour: 12, minute: 34
});

var expectedDay = 1;
const days1 = new Temporal.Duration(0, 0, 0, 1);

while (date.year == year) {
    assert.sameValue(date.dayOfYear, expectedDay);
    date = date.add(days1);
    expectedDay++;
}
