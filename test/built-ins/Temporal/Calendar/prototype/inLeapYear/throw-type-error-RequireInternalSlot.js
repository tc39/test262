// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.calendar.prototype.inLeapYear
description: Temporal.Calendar.prototype.inLeapYear throws TypeError on
  RequireInternalSlot if object has no internal slot.
info: |
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

let badCal = { inLeapYear: cal.inLeapYear }
assert.throws(TypeError, () => badCal.inLeapYear("2021-03-04"),
    "Throw TypeError if there are no internal slot");
