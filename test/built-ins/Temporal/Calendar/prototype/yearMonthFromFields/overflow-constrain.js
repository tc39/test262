// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.yearmonthfromfields
description: Temporal.Calendar.prototype.yearMonthFromFields will return correctly with data and overflow set to 'constrain'.
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

let opt = {overflow: "constrain"};
// Test overflow: "constrain" work properly
assert.sameValue("2021-01", cal.yearMonthFromFields({year: 2021, month: 1}, opt).toJSON());
assert.sameValue("2021-02", cal.yearMonthFromFields({year: 2021, month: 2}, opt).toJSON());
assert.sameValue("2021-03", cal.yearMonthFromFields({year: 2021, month: 3}, opt).toJSON());
assert.sameValue("2021-04", cal.yearMonthFromFields({year: 2021, month: 4}, opt).toJSON());
assert.sameValue("2021-05", cal.yearMonthFromFields({year: 2021, month: 5}, opt).toJSON());
assert.sameValue("2021-06", cal.yearMonthFromFields({year: 2021, month: 6}, opt).toJSON());
assert.sameValue("2021-07", cal.yearMonthFromFields({year: 2021, month: 7}, opt).toJSON());
assert.sameValue("2021-08", cal.yearMonthFromFields({year: 2021, month: 8}, opt).toJSON());
assert.sameValue("2021-09", cal.yearMonthFromFields({year: 2021, month: 9}, opt).toJSON());
assert.sameValue("2021-10", cal.yearMonthFromFields({year: 2021, month: 10}, opt).toJSON());
assert.sameValue("2021-11", cal.yearMonthFromFields({year: 2021, month: 11}, opt).toJSON());
assert.sameValue("2021-12", cal.yearMonthFromFields({year: 2021, month: 12}, opt).toJSON());
assert.sameValue("2021-12", cal.yearMonthFromFields({year: 2021, month: 13}, opt).toJSON());
assert.sameValue("2021-12", cal.yearMonthFromFields({year: 2021, month: 999999}, opt).toJSON());
assert.sameValue("2021-01", cal.yearMonthFromFields({year: 2021, monthCode: "M01"}, opt).toJSON());
assert.sameValue("2021-02", cal.yearMonthFromFields({year: 2021, monthCode: "M02"}, opt).toJSON());
assert.sameValue("2021-03", cal.yearMonthFromFields({year: 2021, monthCode: "M03"}, opt).toJSON());
assert.sameValue("2021-04", cal.yearMonthFromFields({year: 2021, monthCode: "M04"}, opt).toJSON());
assert.sameValue("2021-05", cal.yearMonthFromFields({year: 2021, monthCode: "M05"}, opt).toJSON());
assert.sameValue("2021-06", cal.yearMonthFromFields({year: 2021, monthCode: "M06"}, opt).toJSON());
assert.sameValue("2021-07", cal.yearMonthFromFields({year: 2021, monthCode: "M07"}, opt).toJSON());
assert.sameValue("2021-08", cal.yearMonthFromFields({year: 2021, monthCode: "M08"}, opt).toJSON());
assert.sameValue("2021-09", cal.yearMonthFromFields({year: 2021, monthCode: "M09"}, opt).toJSON());
assert.sameValue("2021-10", cal.yearMonthFromFields({year: 2021, monthCode: "M10"}, opt).toJSON());
assert.sameValue("2021-11", cal.yearMonthFromFields({year: 2021, monthCode: "M11"}, opt).toJSON());
assert.sameValue("2021-12", cal.yearMonthFromFields({year: 2021, monthCode: "M12"}, opt).toJSON());
