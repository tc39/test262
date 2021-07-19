// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.yearmonthfromfields
description: Temporal.Calendar.prototype.yearMonthFromFields will return correctly with default overflow which constrain date range.
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. If Type(fields) is not Object, throw a TypeError exception.
  5. Set options to ? GetOptionsObject(options).
  6. Let result be ? ISOYearMonthFromFields(fields, options).
  7. Return ? CreateTemporalYearMonth(result.[[Year]], result.[[Month]], calendar, result.[[ReferenceISODay]]).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601")

assert.sameValue("2021-01", cal.yearMonthFromFields({year: 2021, month: 1}).toJSON());
assert.sameValue("2021-02", cal.yearMonthFromFields({year: 2021, month: 2}).toJSON());
assert.sameValue("2021-03", cal.yearMonthFromFields({year: 2021, month: 3}).toJSON());
assert.sameValue("2021-04", cal.yearMonthFromFields({year: 2021, month: 4}).toJSON());
assert.sameValue("2021-05", cal.yearMonthFromFields({year: 2021, month: 5}).toJSON());
assert.sameValue("2021-06", cal.yearMonthFromFields({year: 2021, month: 6}).toJSON());
assert.sameValue("2021-07", cal.yearMonthFromFields({year: 2021, month: 7}).toJSON());
assert.sameValue("2021-08", cal.yearMonthFromFields({year: 2021, month: 8}).toJSON());
assert.sameValue("2021-09", cal.yearMonthFromFields({year: 2021, month: 9}).toJSON());
assert.sameValue("2021-10", cal.yearMonthFromFields({year: 2021, month: 10}).toJSON());
assert.sameValue("2021-11", cal.yearMonthFromFields({year: 2021, month: 11}).toJSON());
assert.sameValue("2021-12", cal.yearMonthFromFields({year: 2021, month: 12}).toJSON());
assert.sameValue("2021-12", cal.yearMonthFromFields({year: 2021, month: 13}).toJSON());
assert.sameValue("2021-12", cal.yearMonthFromFields({year: 2021, month: 999999}).toJSON());
assert.sameValue("2021-01", cal.yearMonthFromFields({year: 2021, monthCode: "M01"}).toJSON());
assert.sameValue("2021-02", cal.yearMonthFromFields({year: 2021, monthCode: "M02"}).toJSON());
assert.sameValue("2021-03", cal.yearMonthFromFields({year: 2021, monthCode: "M03"}).toJSON());
assert.sameValue("2021-04", cal.yearMonthFromFields({year: 2021, monthCode: "M04"}).toJSON());
assert.sameValue("2021-05", cal.yearMonthFromFields({year: 2021, monthCode: "M05"}).toJSON());
assert.sameValue("2021-06", cal.yearMonthFromFields({year: 2021, monthCode: "M06"}).toJSON());
assert.sameValue("2021-07", cal.yearMonthFromFields({year: 2021, monthCode: "M07"}).toJSON());
assert.sameValue("2021-08", cal.yearMonthFromFields({year: 2021, monthCode: "M08"}).toJSON());
assert.sameValue("2021-09", cal.yearMonthFromFields({year: 2021, monthCode: "M09"}).toJSON());
assert.sameValue("2021-10", cal.yearMonthFromFields({year: 2021, monthCode: "M10"}).toJSON());
assert.sameValue("2021-11", cal.yearMonthFromFields({year: 2021, monthCode: "M11"}).toJSON());
assert.sameValue("2021-12", cal.yearMonthFromFields({year: 2021, monthCode: "M12"}).toJSON());
