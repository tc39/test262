// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.yearmonthfromfields
description: Temporal.Calendar.prototype.yearMonthFromFields will throw RangeError while the input data value is out of range.
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

assert.throws(RangeError, () => cal.yearMonthFromFields({year: 2021, monthCode: "m1"}),
     "monthCode value is out of range.");
assert.throws(RangeError, () => cal.yearMonthFromFields({year: 2021, monthCode: "M1"}),
     "monthCode value is out of range.");
assert.throws(RangeError, () => cal.yearMonthFromFields({year: 2021, monthCode: "m01"}),
     "monthCode value is out of range.");

assert.throws(RangeError, () => cal.yearMonthFromFields({year: 2021, month: 12, monthCode: "M11"}),
     "monthCode value is out of range.");
assert.throws(RangeError, () => cal.yearMonthFromFields({year: 2021, monthCode: "M00"}),
     "monthCode value is out of range.");
assert.throws(RangeError, () => cal.yearMonthFromFields({year: 2021, monthCode: "M19"}),
     "monthCode value is out of range.");
assert.throws(RangeError, () => cal.yearMonthFromFields({year: 2021, monthCode: "M99"}),
     "monthCode value is out of range.");
assert.throws(RangeError, () => cal.yearMonthFromFields({year: 2021, monthCode: "M13"}),
     "monthCode value is out of range.");

assert.throws(RangeError, () => cal.yearMonthFromFields({year: 2021, month: -1}),
     "Invalid time value");
assert.throws(RangeError, () => cal.yearMonthFromFields({year: 2021, month: -Infinity}),
     "Invalid time value");

assert.throws(RangeError, () => cal.yearMonthFromFields({year: 2021, month: 0, day: 5}, {overflow: "reject"}),
     "Invalid time value");
assert.throws(RangeError, () => cal.yearMonthFromFields({year: 2021, month: 13, day: 5}, {overflow: "reject"}),
     "Invalid time value");

assert.throws(RangeError, () => cal.yearMonthFromFields(
    {year: 2021, monthCode: "M00"}, {overflow: "reject"}),
     "monthCode value is out of range.");
assert.throws(RangeError, () => cal.yearMonthFromFields(
    {year: 2021, monthCode: "M13"}, {overflow: "reject"}),
     "monthCode value is out of range.");

assert.throws(RangeError, () => cal.yearMonthFromFields(
    {year: 2021, month: 0}),  "Invalid time value");

// Check throw for the second arg
assert.throws(RangeError, () => cal.yearMonthFromFields(
    {year: 2021, month: 7}, {overflow: "invalid"}),
    "Value invalid out of range for Temporal.Calendar.prototype.yearMonthFromFields options property overflow");

assert.throws(RangeError, () => cal.yearMonthFromFields(
    {year: 2021, month: 13}, {overflow: "reject"}),  "Invalid time value");
assert.throws(RangeError, () => cal.yearMonthFromFields(
    {year: 2021, month: 9995}, {overflow: "reject"}),  "Invalid time value");
