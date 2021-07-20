// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.yearmonthfromfields
description: Temporal.Calendar.prototype.yearMonthFromFields will throw TypeError from RequireInternalSlot if there are
  no [[InitializedTemporalCalendar]] in calendar.
info: |
  2. Perform ? RequireInternalSlot(calendar, [[InitializedTemporalCalendar]]).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601")

let badCal = {yearMonthFromFields: cal.yearMonthFromFields};
// Check throw for first arg
assert.throws(TypeError, () => badCal.yearMonthFromFields({year: 2021, month: 1),
    "calendar does not have [[InitializedTemporalCalendar]]");
