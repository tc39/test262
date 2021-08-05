// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.monthCode
description: Temporal.Calendar.prototype.monthCode throws TypeError on RequireInternalSlot if object has no internal slot.
info: |
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

let badCal = { monthCode: cal.monthCode}
assert.throws(TypeError, () => badCal.monthCode("2021-03-04"),
    "Throw TypeError if there are no internal slot");
