// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.timezone.prototype.getinstantfor
description: If a calendar's fields() method returns duplicate field names, PrepareTemporalFields should throw a RangeError.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

for (const extra_fields of [['foo', 'foo'], ['day'], ['hour'], ['microsecond'], ['millisecond'], ['minute'], ['month'], ['monthCode'], ['nanosecond'], ['second'], ['year']]) {
    const calendar = TemporalHelpers.calendarWithExtraFields(extra_fields);
    const arg = { year: 2023, month: 5, monthCode: 'M05', day: 1, calendar: calendar };
    const instance = new Temporal.TimeZone("UTC");

    assert.throws(RangeError, () => instance.getInstantFor(arg));
}
