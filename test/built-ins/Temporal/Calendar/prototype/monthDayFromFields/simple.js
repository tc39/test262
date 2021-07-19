// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.monthdayfromfields
description: Temporal.Calendar.prototype.monthDayFromFields will return correctly with valid data.
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

assert.sameValue("07-15", cal.monthDayFromFields({year: 2021, month: 7, day: 15}).toJSON());
assert.sameValue("07-03", cal.monthDayFromFields({year: 2021, month: 7, day: 3}).toJSON());
assert.sameValue("12-31", cal.monthDayFromFields({year: 2021, month: 12, day: 31}).toJSON());

// with monthCode, year 2021 is not used duration regulation, but use 1972
assert.sameValue("07-15", cal.monthDayFromFields({year: 2021, monthCode: "M07", day: 15}).toJSON());
assert.sameValue("07-03", cal.monthDayFromFields({year: 2021, monthCode: "M07", day: 3}).toJSON());
assert.sameValue("12-31", cal.monthDayFromFields({year: 2021, monthCode: "M12", day: 31}).toJSON());
// monthDay will use 1972 which is a leap year if monthCode is defined even if
// we pass in 2021 as reference year.
assert.sameValue("02-29", cal.monthDayFromFields({year: 2021, monthCode: "M02", day: 29}).toJSON());

["constrain", "reject"].forEach(function(overflow) {
  let opt = {overflow};
  assert.sameValue("07-15", cal.monthDayFromFields({year: 2021, month: 7, day: 15}, opt).toJSON());
  assert.sameValue("07-03", cal.monthDayFromFields({year: 2021, month: 7, day: 3}, opt).toJSON());
  assert.sameValue("12-31", cal.monthDayFromFields({year: 2021, month: 12, day: 31}, opt).toJSON());

  // with monthCode, year 2021 is not used duration regulation, but use 1972
  assert.sameValue("07-15", cal.monthDayFromFields({year: 2021, monthCode: "M07", day: 15}, opt).toJSON());
  assert.sameValue("07-03", cal.monthDayFromFields({year: 2021, monthCode: "M07", day: 3}, opt).toJSON());
  assert.sameValue("12-31", cal.monthDayFromFields({year: 2021, monthCode: "M12", day: 31}, opt).toJSON());
  // monthDay will use 1972 which is a leap year if monthCode is defined even if
  // we pass in 2021 as reference year.
  assert.sameValue("02-29", cal.monthDayFromFields({year: 2021, monthCode: "M02", day: 29}, opt).toJSON());
});
