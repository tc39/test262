// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.datefromfields
description: Temporal.Calendar.prototype.dateFromFields
info: |
  1. Let calendar be the this value.
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
  3. Assert: calendar.[[Identifier]] is "iso8601".
  4. If Type(fields) is not Object, throw a TypeError exception.
  5. Set options to ? GetOptionsObject(options).
  6. Let result be ? ISODateFromFields(fields, options).
  7. Return ? CreateTemporalDate(result.[[Year]], result.[[Month]], result.[[Day]], calendar).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601")

assert.sameValue("2021-07-15", cal.dateFromFields({year: 2021, month: 7, day: 15}).toJSON());
assert.sameValue("2021-07-03", cal.dateFromFields({year: 2021, month: 7, day: 3}).toJSON());
assert.sameValue("2021-12-31", cal.dateFromFields({year: 2021, month: 12, day: 31}).toJSON());
assert.sameValue("2021-07-15", cal.dateFromFields({year: 2021, monthCode: "M07", day: 15}).toJSON());
assert.sameValue("2021-07-03", cal.dateFromFields({year: 2021, monthCode: "M07", day: 3}).toJSON());
assert.sameValue("2021-12-31", cal.dateFromFields({year: 2021, monthCode: "M12", day: 31}).toJSON());

assert.sameValue("2021-01-31", cal.dateFromFields({year: 2021, month: 1, day: 133}).toJSON());
assert.sameValue("2021-02-28", cal.dateFromFields({year: 2021, month: 2, day: 133}).toJSON());
assert.sameValue("2021-03-31", cal.dateFromFields({year: 2021, month: 3, day: 9033}).toJSON());
assert.sameValue("2021-04-30", cal.dateFromFields({year: 2021, month: 4, day: 50}).toJSON());
assert.sameValue("2021-05-31", cal.dateFromFields({year: 2021, month: 5, day: 77}).toJSON());
assert.sameValue("2021-06-30", cal.dateFromFields({year: 2021, month: 6, day: 33}).toJSON());
assert.sameValue("2021-07-31", cal.dateFromFields({year: 2021, month: 7, day: 33}).toJSON());
assert.sameValue("2021-08-31", cal.dateFromFields({year: 2021, month: 8, day: 300}).toJSON());
assert.sameValue("2021-09-30", cal.dateFromFields({year: 2021, month: 9, day: 400}).toJSON());
assert.sameValue("2021-10-31", cal.dateFromFields({year: 2021, month: 10, day: 400}).toJSON());
assert.sameValue("2021-11-30", cal.dateFromFields({year: 2021, month: 11, day: 400}).toJSON());
assert.sameValue("2021-12-31", cal.dateFromFields({year: 2021, month: 12, day: 500}).toJSON());
assert.sameValue("2021-12-31", cal.dateFromFields({year: 2021, month: 13, day: 500}).toJSON());
assert.sameValue("2021-12-31", cal.dateFromFields({year: 2021, month: 999999, day: 500}).toJSON());
assert.sameValue("2021-01-31", cal.dateFromFields({year: 2021, monthCode: "M01", day: 133}).toJSON());
assert.sameValue("2021-02-28", cal.dateFromFields({year: 2021, monthCode: "M02", day: 133}).toJSON());
assert.sameValue("2021-03-31", cal.dateFromFields({year: 2021, monthCode: "M03", day: 9033}).toJSON());
assert.sameValue("2021-04-30", cal.dateFromFields({year: 2021, monthCode: "M04", day: 50}).toJSON());
assert.sameValue("2021-05-31", cal.dateFromFields({year: 2021, monthCode: "M05", day: 77}).toJSON());
assert.sameValue("2021-06-30", cal.dateFromFields({year: 2021, monthCode: "M06", day: 33}).toJSON());
assert.sameValue("2021-07-31", cal.dateFromFields({year: 2021, monthCode: "M07", day: 33}).toJSON());
assert.sameValue("2021-08-31", cal.dateFromFields({year: 2021, monthCode: "M08", day: 300}).toJSON());
assert.sameValue("2021-09-30", cal.dateFromFields({year: 2021, monthCode: "M09", day: 400}).toJSON());
assert.sameValue("2021-10-31", cal.dateFromFields({year: 2021, monthCode: "M10", day: 400}).toJSON());
assert.sameValue("2021-11-30", cal.dateFromFields({year: 2021, monthCode: "M11", day: 400}).toJSON());
assert.sameValue("2021-12-31", cal.dateFromFields({year: 2021, monthCode: "M12", day: 500}).toJSON());
