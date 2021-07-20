// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.weekofyear
description: Temporal.Calendar.prototype.weekofyear should throw from RequireInternalSlot if calendar
  does not have [[InitializedTemporalCalendar]].
info: |
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

let badCal = {weekOfYear: cal.weekOfYear};
assert.throws(TypeError, () => badCal.weekOfYear("2021-07-20"),
    "calendar does not have [[InitializedTemporalCalendar]]");

