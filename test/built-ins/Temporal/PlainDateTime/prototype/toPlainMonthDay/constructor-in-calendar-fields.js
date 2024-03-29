// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.plaindatetime.prototype.toplainmonthday
description: If a calendar's fields() method returns a field named 'constructor', PrepareTemporalFields should throw a RangeError.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const calendar = TemporalHelpers.calendarWithExtraFields(['constructor']);
const datetime = new Temporal.PlainDateTime(2023, 5, 1, 0, 0, 0, 0, 0, 0, calendar);

assert.throws(RangeError, () => datetime.toPlainMonthDay());
