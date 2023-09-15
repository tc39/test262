// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.plainyearmonth.prototype.toplaindate
description: If a calendar's fields() method returns duplicate field names, PrepareTemporalFields should throw a RangeError.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

for (const extra_fields of [['foo', 'foo'], ['monthCode'], ['year'], ['day']]) {
    const calendar = TemporalHelpers.calendarWithExtraFields(extra_fields);
    const ym = new Temporal.PlainYearMonth(2023, 5, calendar);

    assert.throws(RangeError, () => ym.toPlainDate({day: 1}));
}
