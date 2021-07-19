// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.yearmonthfromfields
description: Temporal.Calendar.prototype.yearMonthFromFields return correctly with valid data.
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


assert.sameValue("2021-07", cal.yearMonthFromFields({year: 2021, month: 7}).toJSON());
assert.sameValue("2021-12", cal.yearMonthFromFields({year: 2021, month: 12}).toJSON());
assert.sameValue("2021-07", cal.yearMonthFromFields({year: 2021, monthCode: "M07"}).toJSON());
assert.sameValue("2021-12", cal.yearMonthFromFields({year: 2021, monthCode: "M12"}).toJSON());

["constrain", "reject"].forEach(function(overflow) {
  let opt = {overflow};
  assert.sameValue("2021-07", cal.yearMonthFromFields({year: 2021, month: 7}, opt).toJSON());
  assert.sameValue("2021-12", cal.yearMonthFromFields({year: 2021, month: 12}, opt).toJSON());
  assert.sameValue("2021-07", cal.yearMonthFromFields({year: 2021, monthCode: "M07"}, opt).toJSON());
  assert.sameValue("2021-12", cal.yearMonthFromFields({year: 2021, monthCode: "M12"}, opt).toJSON());
})
