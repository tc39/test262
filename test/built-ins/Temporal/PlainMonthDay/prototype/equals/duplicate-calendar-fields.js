// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.plainmonthday.prototype.equals
description: If a calendar's fields() method returns duplicate field names, PrepareTemporalFields should throw a RangeError.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

for (const extra_fields of [['foo', 'foo'], ['day'], ['month'], ['monthCode'], ['year']]) {
    const calendar = TemporalHelpers.calendarWithExtraFields(extra_fields);
    const arg = { year: 2023, month: 5, monthCode: 'M05', day: 1, calendar: calendar };
    const instance = new Temporal.PlainMonthDay(5, 2, calendar);

    assert.throws(RangeError, () => instance.equals(arg));
}
