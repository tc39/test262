// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.plainmonthday.prototype.equals
description: If a calendar's fields() method returns a field named 'constructor', PrepareTemporalFields should throw a RangeError.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const calendar = TemporalHelpers.calendarWithExtraFields(['constructor']);
const arg = {year: 2023, month: 5, monthCode: 'M05', day: 1, calendar: calendar};
const instance = new Temporal.PlainMonthDay(5, 2, calendar);

assert.throws(RangeError, () => instance.equals(arg));
