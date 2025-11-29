// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.dayofyear
description: dayOfYear property in the islamic-umalqura calendar
includes: [temporalHelpers.js]
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "islamic-umalqura";
const options = { overflow: "reject" };

// 1390 = ISO year 1970
const year = 1390;

var date = Temporal.PlainDate.from({
    year,
    month: 1,
    day: 1,
    calendar
});

var expectedDay = 1;
const days1 = new Temporal.Duration(0, 0, 0, 1);

while (date.year == year) {
    assert.sameValue(date.dayOfYear, expectedDay);
    date = date.add(days1);
    expectedDay++;
}
