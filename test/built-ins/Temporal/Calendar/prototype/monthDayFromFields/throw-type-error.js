// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.monthdayfromfields
description: Temporal.Calendar.prototype.monthDayFromFields will throw TypeError with data in wrong type.
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

// Check throw for first arg
assert.throws(TypeError, () => cal.monthDayFromFields(),
    "Temporal.Calendar.prototype.monthDayFromFields called on non-object");
[undefined, true, false, 123, 456n, Symbol(), "string"].forEach(
    function(fields) {
      assert.throws(TypeError, () => cal.monthDayFromFields(fields),
          "Temporal.Calendar.prototype.monthDayFromFields called on non-object");
      assert.throws(TypeError, () => cal.monthDayFromFields(fields, undefined),
          "Temporal.Calendar.prototype.monthDayFromFields called on non-object");
      assert.throws(TypeError, () => cal.monthDayFromFields(fields, {overflow: "constrain"}),
          "Temporal.Calendar.prototype.monthDayFromFields called on non-object");
      assert.throws(TypeError, () => cal.monthDayFromFields(fields, {overflow: "reject"}),
          "Temporal.Calendar.prototype.monthDayFromFields called on non-object");
    });

assert.throws(TypeError, () => cal.monthDayFromFields({month: 1, day: 17}),
    "invalid_argument");
assert.throws(TypeError, () => cal.monthDayFromFields({year: 2021, day: 17}),
    "invalid_argument");
assert.throws(TypeError, () => cal.monthDayFromFields({year: 2021, month: 12}),
    "invalid_argument");
