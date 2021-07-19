// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.yearmonthfromfields
description: Temporal.Calendar.prototype.yearMonthFromFields will throw TypeError with incorrect input data type.
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

// Check throw for first arg
assert.throws(TypeError, () => cal.yearMonthFromFields(),
    "Temporal.Calendar.prototype.yearMonthFromFields called on non-object");
[undefined, true, false, 123, 456n, Symbol(), "string"].forEach(
    function(fields) {
      assert.throws(TypeError, () => cal.yearMonthFromFields(fields),
          "Temporal.Calendar.prototype.yearMonthFromFields called on non-object");
      assert.throws(TypeError, () => cal.yearMonthFromFields(fields, undefined),
          "Temporal.Calendar.prototype.yearMonthFromFields called on non-object");
      assert.throws(TypeError, () => cal.yearMonthFromFields(fields, {overflow: "constrain"}),
          "Temporal.Calendar.prototype.yearMonthFromFields called on non-object");
      assert.throws(TypeError, () => cal.yearMonthFromFields(fields, {overflow: "reject"}),
          "Temporal.Calendar.prototype.yearMonthFromFields called on non-object");
    });

assert.throws(TypeError, () => cal.yearMonthFromFields({month: 1}),
    "invalid_argument");
assert.throws(TypeError, () => cal.yearMonthFromFields({year: 2021}),
    "invalid_argument");
