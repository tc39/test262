// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.month
description: Temporal.Calendar.prototype.month throws TypeError on RequireInternalSlot if object has no internal slot.
info: |
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
features: [Temporal, arrow-function]
---*/
let cal = new Temporal.Calendar("iso8601");

let badCal = { month: cal.month }
assert.throws(TypeError, () => badCal.month("2021-03-04"),
    'badCal.month("2021-03-04") throws a TypeError exception');
