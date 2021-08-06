// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.monthsinyear
description: Temporal.Calendar.prototype.monthsInYear throws TypeError on
  RequireInternalSlot if object has no internal slot.
info: |
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

let badCal = { monthsInYear: cal.monthsInYear }
assert.throws(TypeError, () => badCal.monthsInYear("2021-03-04"),
    "Throw TypeError if there are no internal slot");
