// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.monthdayfromfields
description: Temporal.Calendar.prototype.monthDayFromFields will return correctly with data and overflow set to 'constrain'.
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. If Type(fields) is not Object, throw a TypeError exception.
  5. Set options to ? GetOptionsObject(options).
  6. Let result be ? ISOMonthDayFromFields(fields, options).
  7. Return ? CreateTemporalMonthDay(result.[[Month]], result.[[Day]], calendar, result.[[ReferenceISOYear]]).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601")

let opt = {overflow: "constrain"};
// Test overflow: "constrain" work properly
assert.sameValue("01-31", cal.monthDayFromFields({year: 2021, month: 1, day: 133}, opt).toJSON());
assert.sameValue("02-28", cal.monthDayFromFields({year: 2021, month: 2, day: 133}, opt).toJSON());
assert.sameValue("03-31", cal.monthDayFromFields({year: 2021, month: 3, day: 9033}, opt).toJSON());
assert.sameValue("04-30", cal.monthDayFromFields({year: 2021, month: 4, day: 50}, opt).toJSON());
assert.sameValue("05-31", cal.monthDayFromFields({year: 2021, month: 5, day: 77}, opt).toJSON());
assert.sameValue("06-30", cal.monthDayFromFields({year: 2021, month: 6, day: 33}, opt).toJSON());
assert.sameValue("07-31", cal.monthDayFromFields({year: 2021, month: 7, day: 33}, opt).toJSON());
assert.sameValue("08-31", cal.monthDayFromFields({year: 2021, month: 8, day: 300}, opt).toJSON());
assert.sameValue("09-30", cal.monthDayFromFields({year: 2021, month: 9, day: 400}, opt).toJSON());
assert.sameValue("10-31", cal.monthDayFromFields({year: 2021, month: 10, day: 400}, opt).toJSON());
assert.sameValue("11-30", cal.monthDayFromFields({year: 2021, month: 11, day: 400}, opt).toJSON());
assert.sameValue("12-31", cal.monthDayFromFields({year: 2021, month: 12, day: 500}, opt).toJSON());
assert.sameValue("12-31", cal.monthDayFromFields({year: 2021, month: 13, day: 500}, opt).toJSON());
assert.sameValue("12-31", cal.monthDayFromFields({year: 2021, month: 999999, day: 500}, opt).toJSON());
assert.sameValue("01-31", cal.monthDayFromFields({year: 2021, monthCode: "M01", day: 133}, opt).toJSON());
assert.sameValue("02-29", cal.monthDayFromFields({year: 2021, monthCode: "M02", day: 133}, opt).toJSON());
assert.sameValue("03-31", cal.monthDayFromFields({year: 2021, monthCode: "M03", day: 9033}, opt).toJSON());
assert.sameValue("04-30", cal.monthDayFromFields({year: 2021, monthCode: "M04", day: 50}, opt).toJSON());
assert.sameValue("05-31", cal.monthDayFromFields({year: 2021, monthCode: "M05", day: 77}, opt).toJSON());
assert.sameValue("06-30", cal.monthDayFromFields({year: 2021, monthCode: "M06", day: 33}, opt).toJSON());
assert.sameValue("07-31", cal.monthDayFromFields({year: 2021, monthCode: "M07", day: 33}, opt).toJSON());
assert.sameValue("08-31", cal.monthDayFromFields({year: 2021, monthCode: "M08", day: 300}, opt).toJSON());
assert.sameValue("09-30", cal.monthDayFromFields({year: 2021, monthCode: "M09", day: 400}, opt).toJSON());
assert.sameValue("10-31", cal.monthDayFromFields({year: 2021, monthCode: "M10", day: 400}, opt).toJSON());
assert.sameValue("11-30", cal.monthDayFromFields({year: 2021, monthCode: "M11", day: 400}, opt).toJSON());
assert.sameValue("12-31", cal.monthDayFromFields({year: 2021, monthCode: "M12", day: 500}, opt).toJSON());
